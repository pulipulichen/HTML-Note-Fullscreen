var appComputed = {
  colorSchema () {
    let schema = this.colors[this.color.toLowerCase()]
    console.log(this.color, schema)
    if (schema) {
      return schema
    }
    else {
      return this.colors.white
    }
  },
  computedBackgroundPattern () {
    if (this.line !== 'true') {
      return undefined
    }
    return `repeating-linear-gradient(${this.colorSchema.background},${this.colorSchema.background} calc(${this.fontSize} * 1.15 - 3px),${this.colorSchema.border} calc(${this.fontSize} * 1.15))`
  }
}
