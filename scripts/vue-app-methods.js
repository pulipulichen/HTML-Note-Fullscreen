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
  getLocalConfigItem: function (key) {
    if (typeof(key) !== 'string' || key === '') {
      return undefined
    }

    return this.localConfig.sites.filter((i) => {
      return (i.siteID === this.siteID && i.key === key)
    })
  },
  getLocalConfig: function (key, defaultValue) {
    if (typeof(key) !== 'string' || key === '') {
      return undefined
    }

    let items = this.getLocalConfigItem(key)

    if (items.length === 0) {

      if (defaultValue !== undefined) {
        this.localConfig.sites.push({
          siteID: this.siteID,
          key,
          value: defaultValue
        })
      }
        
      return defaultValue
    }
    else {
      return items[0].value
    }
  },
  setLocalConfig: function (key, value) {
    if (typeof(key) !== 'string' || key === '') {
      return undefined
    }

    let items = this.getLocalConfigItem(key)

    if (items.length === 0) {

      if (defaultValue !== undefined) {
        this.localConfig.sites.push({
          siteID: this.siteID,
          key,
          value: defaultValue
        })
      }
        
      return defaultValue
    }
    else if (items[0].value !== value) {
      this.localConfig.sites.$set()
    }
  },
  ...appMethodsTest
}