module.exports = {
  getRandomNumberStartingFromTwo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  getRandomEmail() {
    return 'ninhthihoa' + Math.floor(Math.random() * 111111) + '@yopmail.com'
  },
}
