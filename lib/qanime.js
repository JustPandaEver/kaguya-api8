const fetch = require('node-fetch')

async function Random() {
    let c;
	let result = [
        {
          by: "Hachiman Hikigaya",
          quote: "*_Lebih baik dibenci karena menjadi dirimu sendiri, daripada dicintai karena menjadi orang lain._*"
        },
        {
          by: "*Roronoa Zoro*",
          quote: "*_Seperti itulah seorang kapten. Jika pemimpin terlalu lembek, kepada siapa lagi kita harus percaya?_*"
        },
        {
          by: "*Monkey D. Luffy*",
          quote: "*_Jika kau tidak mau mengambil risiko, kau tidak dapat menciptakan masa depan._*"
        },
        {
          by: "*Hatake Kakashi*",
          quote: "*_Pengalaman bukan jaminan untuk menang, karena tiap generasi akan selalu tumbuh lebih baik._*"
        },
        {
          by: "*Izuku Midoriya*",
          quote: "*_Jangan khawatirkan apa yang dipikirkan orang lain. Tegakkan kepalamu dan melangkahlah ke depan._*"
        },
        {
          by: "*Sora*",
          quote: "*_Hidup bukanlah permainan keberuntungan. Jika kau ingin menang, kau harus bekerja keras._*"
        },
        {
          by: "*Koro Sensei*",
          quote: "*_Ujian memberikan kesempatan yang bagus untuk mengetahui arti menang dan kalah atau kuat dan lemah. Raihlah kesuksesan dan kemunduran sebanyak yang kalian bisa, murid-muridku!_*"
        },
        {
          by: "*Yukino Yukinoshita*",
          quote: "*_Banyak orang gagal karena mereka tidak memahami usaha yang diperlukan untuk menjadi sukses._*"
        },
        {
          by: "*Killua*",
          quote: "*_Kalau kau terus berfikir dan tak melakukan apa-apa, kau akan tertinggal jauh._*"
        },  
        {
          by: "*Tanaka-Kun*",
          quote: "*_Kalau itu tidak bisa diselesaikan dengan usaha, jangan berusaha._*"
        },  
        {
          by: "*Kaori Miyazono*",
          quote: "*_Kita harus menjalani hidup kita sepenuhnya. Kamu tidak pernah tahu, kita mungkin sudah mati besok._*"
        },  
        {
          by: "*Naruto Uzumaki*",
          quote: "*_jika Kau tidak menyukai takdir Mu, jangan menerimanya. Sebaliknya, miliki keberanian untuk mengubahnya sesuai keinginan Mu._*"
        },  
        {
          by: "*Houtarou Oreki*",
          quote: "*_Aku tidak peduli jika tidak ada yang menyukaiku. Aku tidak diciptakan di dunia ini untuk menghibur semua orang._*"
        },  
        {
          by: "*Satoshi Fukube*",
          quote: "*_Aku tidak peduli jika tidak ada yang menyukaiku. Aku tidak diciptakan di dunia ini untuk menghibur semua orang._*"
        },  
        {
          by: "*Tanaka-Kun*",
          quote: "*_Gagal itu bukan masalah, kan? Karena kalau kau gagal hari ini, masih ada besok, atau hari setelahnya, kalau perlu mungkin bisa saja butuh setahun. Hidup ini panjang, jadi meski kau tak bisa berhasil sekarang, pasti pada akhirnya kau akan berhasil._*"
        },  
        {
          by: "*Kayaba Akihiko*",
          quote: "*_Kita harus mensyukuri apa yang kita punya saat ini, karena mungkin orang lain belum tentu mempunyainya._*"
        },  
        {
          by: "*Saitama*",
          quote: "*_Kekuatan sejati dari umat manusia adalah bahwa kita memiliki kuasa penuh untuk mengubah diri kita sendiri._*"
        }, 
        {
          by: "*Nobita*",
          quote: "*_Bukan nilai yang kuinginkan, melainkan ilmu! Ilmu pengetahuan yang lebih jauh. Aku masih harus berusaha._*"
        },  
        {
          by: "*Dekisuki*",
          quote: "*_Berbuat kesalahan adalah kekurangan manusia, namun belajar dari kesalahan adalah kelebihan manusia.*"
        },  
        {
          by: "*Doraemon*",
          quote: "*_Lebih baik jadi orang bodoh yang tidak mengerti apa-apa, dari pada menjadi orang terpelajar yang tidak tahu jalan._*"
        },
        {
          by: "*Tanaka-Kun*",
          quote: "*_Aku akan menjawab Aku tidak tahu semuanya, saat aku malas untuk berbicara._*"
        },
        {
          by: "*Hanako-Kun*",
          quote: "*_Manusia Itu Mudah Mati._*"
        },
        {
          by: "*Nobisuke Nobi (Ayah Nobita)*",
          quote: "*_Orang menjadi besar setelah melewati berbagai rintangan dan penderitaan._*"
        },
        {
          by: "*Kamado Tanjiro*",
          quote: "*_Karena manusia bertindak atas keinginan hatinya, Hatinya pun akan terus bertambah kuat_*"
        },
        {
          by: "*Tanaka-Kun*",
          quote: "*_Marah itu membuang banyak energi dan melelahkan, jadi aku memilih untuk meminta maaf meskipun aku bukanlah orang yang salah._*"
        },
        {
          by: "*Nami*",
          quote: "*_Hidup ini seperti pensil yang lama lama akan habis, tetapi akan meninggalkan tulisan yang indah dalam kehidupan._*"
        }
    ]

let a = result[Math.floor(Math.random() * result.length)]
return a;
}

const qotaku = () => new Promise((resolve, reject) => {
    Random().then(result => {
		resolve({
			result
		})
	}).catch(err => { reject(err) })
})

module.exports = qotaku;