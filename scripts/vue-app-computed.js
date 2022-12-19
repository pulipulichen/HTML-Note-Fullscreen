var appComputed = {
  siteID () {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id')
    if (!id) {
      id = '_'
    }

    return id
  }
}
