/* global postMessageAPI, XLSX, GameMaster, appMethodsUI, appMethodsIV, appMethodsInit, appMethodsQuery, appMethodsUtils, appMethodsSearch, domtoimage */

var appMethods = {
  saveLocalConfig () {
    if (this.inited === false) {
      return false
    }
    
    let data = {}
    data = JSON.stringify(this.db.localConfig)
    localStorage.setItem(this.cacheKey, data)
    // console.log(data)
  },
  loadLocalConfig: function () {
    
    let projectFileListData = localStorage.getItem(this.cacheKey)
    if (!projectFileListData) {
      return false
    }
    
    try {
      projectFileListData = JSON.parse(projectFileListData) 
    }
    catch (e) {
      console.error(e)
      return false
    }
      
    for (let key in projectFileListData) {
      this.db.localConfig[key] = projectFileListData[key]
    }
  },
  sleep: function (ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  autoResize: async function (event) {
    let element = this.$refs.textarea
    
    // console.log(element)
    if (event && event.target) {
      element = event.target
    }
    if (element.scrollHeight === 0) {
      return false
    }

    clearTimeout(this.autoResizeTimer)

    this.autoResizeTimer = setTimeout(async () => {
      let y = window.scrollY
      element.style.height = 'auto';
      element.style.height = element.scrollHeight + 'px';
      // console.log()
      // await this.sleep(1000)
      window.scrollTo(0, y)
    }, 300)
  },
  ...appMethodsTest
}