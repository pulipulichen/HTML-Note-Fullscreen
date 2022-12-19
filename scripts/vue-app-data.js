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

var appData = {
  db: {
    config: CONFIG,
    localConfig: LOCAL_CONFIG,
    output: [],
    fontSize
  },

  cacheKey,
  inited: false
}

// console.log(LOCAL_CONFIG)