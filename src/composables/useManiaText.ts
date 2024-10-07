type Style = Record<string, string>

const commands: {
  [key: string]: {
    regex: RegExp,
    style?: (style: Style, input: string) => Style,
    content?: () => string,
    length: number
  }
} = {
  color: {
    regex: new RegExp(/^\$[0-9a-f]{3}.*/i),
    style: (style: Style, input: string) => ({ ...style, color: `#${input.substring(1, 4)}` }),
    length: 4
  },
  z: {
    // Reset all
    regex: new RegExp(/^\$z.*/i),
    style: (_style: Style, _input: string) => ({}),
    length: 2
  },
  g: {
    // Reset color
    regex: new RegExp(/^\$g.*/i),
    style: (style: Style, _input: string) => ({ ...style, color: 'inherit' }),
    length: 2
  },
  o: {
    // Bold
    regex: new RegExp(/^\$o.*/i),
    style: (style: Style, _input: string) => ({ ...style, 'font-weight': '700' }),
    length: 2
  },
  i: {
    // Italic
    regex: new RegExp(/^\$i.*/i),
    style: (style: Style, _input: string) => ({ ...style, 'font-style': 'italic' }),
    length: 2
  },
  w: {
    // Wide spacing
    regex: new RegExp(/^\$w.*/i),
    style: (style: Style, _input: string) => ({ ...style, 'letter-spacing': '0.2em' }),
    length: 2
  },
  n: {
    // Narrow spacing
    regex: new RegExp(/^\$n.*/i),
    style: (style: Style, _input: string) => ({ ...style, 'letter-spacing': '-0.1em' }),
    length: 2
  },
  t: {
    // Capitals
    regex: new RegExp(/^\$t.*/i),
    style: (style: Style, _input: string) => ({ ...style, 'text-transform': 'uppercase' }),
    length: 2
  },
  s: {
    // Shadowed
    regex: new RegExp(/^\$s.*/i),
    // TODO
    style: (style: Style, _input: string) => ({ ...style, 'text-shadow': '0.0625em 0.0625em 0.0625em rgb(0 0 0 / 50%)' }),
    length: 2
  },
  h: {
    // Internal link / ManiaLink
    regex: new RegExp(/^\$h.*/i),
    // TODO
    style: (style: Style, _input: string) => (style),
    length: 2
  },
  l: {
    // External link
    regex: new RegExp(/^\$l.*/i),
    // TODO
    style: (style: Style, _input: string) => (style),
    length: 2
  },
  $: {
    // `$` character
    regex: new RegExp(/^\${2}.*/i),
    content: () => '$',
    length: 2
  },
}

function createSpan (content: string, style: Style) {
  return `<span style="${Object.entries(style).map(([key, value]) => `${key}: ${value};`).join('')}">${content}</span>`
}

export default function () {
  function format (text: string) {
    let html: string = ''
    let unformattedText: string = ''
    let content: string = ''
    let style: Style = {}
    for (let i = 0; i < text.length;) {
      // `$` handling
      if (text[i] === '$') {
        // close opened span
        if (content.length) {
          html += createSpan(content, style)
          content = ''
        }
        // seek matching `$`
        const substring: string = text.substring(i)
        let handled: boolean = false
        for (const command of Object.values(commands)) {
          if (command.regex && command.regex.test(substring)) {
            handled = true
            if (command.style) {
              style = command.style(style, substring)
            }
            if (command.content) {
              const commandContent = command.content()
              content += commandContent
              unformattedText += commandContent
            }
            i += command.length
            break
          }
        }
        // no matching `$`, add raw text
        if (!handled) {
          content += substring
          unformattedText += substring
          i += substring.length
        }
      }
      // text handling
      else {
        content += text[i]
        unformattedText += text[i]
        i++
      }
    }
    // close opened span
    if (content.length) {
      html += createSpan(content, style)
      content = ''
    }
    return { html, unformattedText }
  }

  return {
    commands,
    format
  }
}
