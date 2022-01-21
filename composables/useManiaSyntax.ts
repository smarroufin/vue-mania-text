const commands = {
  color: {
    regex: new RegExp(/^\$[0-9a-f]{3}.*/i),
    style: (style: object, input: string) => ({ ...style, color: `#${input.substring(1, 4)}` }),
    length: 4
  },
  z: {
    // Reset all
    regex: new RegExp(/^\$z.*/i),
    style: (style: object, input: string) => ({}),
    length: 2
  },
  g: {
    // Reset color
    regex: new RegExp(/^\$g.*/i),
    style: (style: object, input: string) => ({ ...style, color: 'inherit' }),
    length: 2
  },
  o: {
    // Bold
    regex: new RegExp(/^\$o.*/i),
    style: (style: object, input: string) => ({ ...style, 'font-weight': '700' }),
    length: 2
  },
  i: {
    // Italic
    regex: new RegExp(/^\$i.*/i),
    style: (style: object, input: string) => ({ ...style, 'font-style': 'italic' }),
    length: 2
  },
  w: {
    // Wide spacing
    regex: new RegExp(/^\$w.*/i),
    style: (style: object, input: string) => ({ ...style, 'letter-spacing': '0.2rem' }),
    length: 2
  },
  n: {
    // Narrow spacing
    regex: new RegExp(/^\$n.*/i),
    style: (style: object, input: string) => ({ ...style, 'letter-spacing': '-0.1rem' }),
    length: 2
  },
  t: {
    // Capitals
    regex: new RegExp(/^\$t.*/i),
    style: (style: object, input: string) => ({ ...style, 'text-transform': 'uppercase' }),
    length: 2
  },
  s: {
    // Shadowed
  },
  h: {
    // Internal link / ManiaLink
  },
  l: {
    // External link
  },
  $: {
    // `$` character
    regex: new RegExp(/^\${2}.*/i),
    content: () => '$',
    length: 2
  },
}

function createSpan (content: string, style: object) {
  return `<span style="${Object.entries(style).map(([key, value]) => `${key}: ${value};`).join('')}">${content}</span>`
}

export default function () {
  function format (text: string) {
    let html: string = ''
    let content: string = ''
    let style: object = {}
    for (let i = 0; i < text.length;) {
      // `$` handling
      if (text[i] === '$') {
        // close opened span
        if (content.length) {
          html += createSpan(content, style)
          content = ''
        }
        // seek matching `$`
        let substring: string = text.substring(i)
        let handled: boolean = false
        for (const command of Object.values<any>(commands)) {
          if (command.regex && command.regex.test(substring)) {
            handled = true
            if (command.style) {
              style = command.style(style, substring)
            }
            if (command.content) {
              content += command.content()
            }
            i += command.length
          }
        }
        // no matching `$`, add raw text
        if (!handled) {
          content += substring
          i += substring.length
        }
      }
      // text handling
      else {
        content += text[i]
        i++
      }
    }
    // close opened span
    if (content.length) {
      html += createSpan(content, style)
      content = ''
    }
    return html
  }

  return {
    commands,
    format
  }
}
