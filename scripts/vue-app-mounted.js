/* global postMessageAPI, GameMaster */

var appMount = async function () {
  // console.log(this.localConfig)
  this.loadLocalConfig()
  this.inited = true

  await this.sleep(100)
  this.autoResize()

  // setTimeout(() => {
  //   // this.testFormatAuthor202210240012English()
  //   // this.testFormatAuthor202210240012Chinese()
  // }, 1000)
  
}