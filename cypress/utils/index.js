module.exports = {
  getRandomNumberStartingFromTwo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  getRandomEmail() {
    console.log('random email')
    return 'ninhthihoa' + Math.floor(Math.random() * 111111) + '@yopmail.com'
  },

  generateRandomText(length) {
    let result = ''
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      result += characters.charAt(randomIndex)
    }

    return result
  },

  getRandomSearchProductName() {
    let randomSearchProductNameList = [
      'Blue',
      'Top',
      'Dress',
      'T-Shirt',
      'Women',
      'Man',
      //this.generateRandomText(6),
    ]

    let randomIndex = Math.floor(
      Math.random() * randomSearchProductNameList.length
    )
    return randomSearchProductNameList[randomIndex]
  },
}
