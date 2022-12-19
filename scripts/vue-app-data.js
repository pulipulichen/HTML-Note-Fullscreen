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
// console.log(color, id, id.hashCode())
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