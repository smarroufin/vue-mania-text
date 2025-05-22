ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine AS base

ENV NODE_ENV=development

WORKDIR /app

# Add curl for Coolify healthcheck
RUN apk --no-cache add curl

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Install dependencies
FROM base AS install-deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/
COPY docs/package.json /app/docs/package.json

RUN pnpm install --frozen-lockfile

# Build lib
FROM install-deps AS build-lib

COPY eslint.config.mjs tsconfig.* vite.config.ts /app/
COPY src /app/src

RUN pnpm run build

# Build docs
FROM build-lib AS build-docs

COPY docs/ /app/docs/
COPY --from=install-deps /app/docs/node_modules /app/docs/node_modules

RUN pnpm run docs:build

# Prod
FROM base AS prod

ENV NODE_ENV=production

COPY package.json /app/package.json
COPY --from=build-docs /app/docs/.output /app/docs/.output

ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["pnpm", "run", "docs:start"]
