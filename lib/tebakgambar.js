const { default: Axios } = require('axios')
const cheerio = require('cheerio')

//0-2684
function tebakgambar() {
     return new Promise((resolve, reject) => {
          const url_floor = `https://jawabantebakgambar.net/id-${Math.floor(Math.random() * 2685)}.html`
          Axios.get(url_floor)
          .then(({ data }) => {
               const $ = cheerio.load(data)
               const img = `https://jawabantebakgambar.net${$('#images > li > a > img').attr('src')}`
               const jawaban = $('#images > li > a > img').attr('alt').replace('Jawaban ','')
               const result = {
                    status: true,
                    creator: 'Tanaka-Kun',
                    img: img,
                    jawaban: jawaban
               }
               resolve(result)
          })
          .catch(reject)
     })
}
module.exports = tebakgambar