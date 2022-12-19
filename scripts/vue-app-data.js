let cacheKey = 'HTML-Note-Fullscreen'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get('id')
if (id) {
  cacheKey = cacheKey + `_` + id
}

var appData = {
  db: {
    config: CONFIG,
    localConfig: LOCAL_CONFIG,
    output: [],
  },

  cacheKey,
  inited: false
}

// console.log(LOCAL_CONFIG)