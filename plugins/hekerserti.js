let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply(wait)
  let res = `http://rzky.net/docs/api/HekerSerti/img.php?nama=${response}`
  conn.sendFile(m.chat, res, 'HekerSerti.jpg', `Nih kak`, m, false)
}
handler.help = ['hekerserti'].map(v => v + ' <teks>')
handler.tags = ['sticker']

handler.command = /^(hekerserti)$/i

module.exports = handler

