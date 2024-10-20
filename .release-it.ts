import type { Config } from 'release-it'

export default {
  git: {
    commitMessage: 'chore(release): v${version}',
    requireBranch: 'main',
    tagName: 'v${version}',
  },
  github: {
    release: true,
    releaseName: 'v${version}',
    web: true,
  },
  npm: {
    publish: true,
  },
  hooks: {
    'before:init': ['git pull', 'pnpm lint', 'pnpm docs:typecheck'],
    'after:bump': 'npm run build',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
      },
      infile: 'CHANGELOG.md',
      header: '# Changelog',
    },
  },
} satisfies Config
