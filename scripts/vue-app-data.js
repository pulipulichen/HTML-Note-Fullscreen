let cacheKey = 'HTML-Note-Fullscreen'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id')
if (id) {
  cacheKey = cacheKey + `_` + id
}
else if (window.location != window.parent.location) {
  let url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
  // console.log(url, window.location, window.parent.location, document.referrer, document.location.href)
  if (url) {
    cacheKey = cacheKey + '_' + url
  }
}

let fontSize = urlParams.get('fontSize')
if (!fontSize) {
  fontSize = '10rem'
}

let line = urlParams.get('line')
if (!line) {
  line = 'true'
}

String.prototype.hashCode = function() {
  var hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }

  hash = Math.abs(hash)
  return hash;
}

let colors = {
  'sticky': {
    font: '#000',
    background: '#feff9c',
    border: 'rgba(0,0,0,0.5)'
  },
  'white': {
    font: '#000',
    background: '#fff',
    border: 'rgba(0,0,0,0.5)'
  },
  'red': {
    font: '#db2828',
    background: '#ffe8e6',
    border: 'rgba(219, 40, 40, .5)'
  },
  'orange': {
    font: '#f2711c',
    background: '#ffedde',
    border: 'rgba(242, 113, 28, .5)'
  },
  'yellow': {
    font: '#b58105',
    background: '#fff8db',
    border: 'rgba(181, 129, 5, .5)'
  },
  'olive': {
    font: '#8abc1e',
    background: '#fbfdef',
    border: 'rgba(138, 188, 30, .5)'
  },
  'teal': {
    font: '#10a3a3',
    background: '#e1f7f7',
    border: 'rgba(16, 163, 163, .5)'
  },
  'blue': {
    font: '#2185d0',
    background: '#dff0ff',
    border: 'rgba(33, 133, 208, .5)'
  },
  'violet': {
    font: '#6435c9',
    background: '#eae7ff',
    border: 'rgba(100, 53, 201, .5)'
  },
  'purple': {
    font: '#a333c8',
    background: '#f6e7ff',
    border: 'rgba(163, 51, 200, .5)'
  },
  'pink': {
    font: '#e03997',
    background: '#ffe3fb',
    border: 'rgba(224, 57, 151, .5)'
  },
  'brown': {
    font: '#a5673f',
    background: '#f1e2d3',
    border: 'rgba(165, 103, 63, .5)'
  },
  'black': {
    font: 'rgba(255,255,255,.9)',
    background: '#1b1c1d',
    border: 'rgba(27, 28, 29, .5)'
  }
}

let color = urlParams.get('color')
if (!color) {
  if (id) {
    let idCode = id.hashCode()
    if (idCode < 0) {
      idCode = idCode * -1
    }
    let colorNames = Object.keys(colors)
    let colorIndex = idCode % colorNames.length
    color = colorNames[colorIndex]
  }
  else {
    color = 'sticky'
  }
}
console.log(color, id, id.hashCode())
// console.log(line)
var appData = {
  db: {
    config: CONFIG,
    localConfig: LOCAL_CONFIG,
    output: []
  },
  fontSize,
  line,
  autoResizeTimer: null,
  cacheKey,
  inited: false,
  color,
  colors
}

// console.log(LOCAL_CONFIG)