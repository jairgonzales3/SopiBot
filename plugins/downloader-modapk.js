let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
switch(command) {
case 'modapk': case 'apkmod':
if (!text) throw `*[β] πΈπ½πΆππ΄π΄ππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π»π° π°πΏπΊ πππ΄ πππΈπ΄ππ° π±πππ²π°π*`        
const data2 = await fetchJson('https://api.akuari.my.id/search/searchmod2?query=' + text)
global.fetchJson = fetchJson
const data = data2.respon
if (data.length < 1) return await  conn.sendMessage(m.chat, { text: '*[β] π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π΄π½π²πΎπ½πππ°π ππ΄πππ»ππ°π³πΎπ π³π΄ π»π° π°πΏπΊ*' }, { quoted: m } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({ title: data[i].title, description: '', rowId: prefix + 'dapk2 ' + data[i].link });}
const sections = [{title: 'ππ΄π»π΄π²π²πΈπΎπ½π° π΄π» πΌπΎπ³ π° π³π΄ππ²π°ππΆπ°π', rows: srh}]
const listMessage = {text: `ββββ[α΄α΄α΄α΄α΄α΄ ΚΚ α΄Κsα΄Ιͺα΄Κα΄α΄]\nβ\nβ- π ππ΄πππ»ππ°π³πΎπ π³π΄: ${text}\nβ\nβββββββββββββββββββ`, footer: wm, title: null, buttonText: "ππππππππππ ππππ", sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
break
case 'dapk2': 
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ π΄π» π»πΈπ½πΊ π³π΄ π°π»πΆππ½π° π°πΏπΊ, π΄πΉπ΄πΌπΏπ»πΎ: ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await fetchJson('https://api.akuari.my.id/downloader/dlmod2?link=' + text)
if ( data5.respon.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*[ β ] α΄Κ α΄Κα΄ΚΙͺα΄ α΄ α΄s α΄α΄α΄α΄sΙͺα΄α΄α΄ α΄α΄sα΄α΄α΄*' }, { quoted: m } )
if ( data5.respon.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*[ β ] α΄Κ α΄Κα΄ΚΙͺα΄ α΄ α΄s α΄α΄α΄α΄sΙͺα΄α΄α΄ α΄α΄sα΄α΄α΄*' }, { quoted: m } )
const apk5 = await conn.sendMessage(m.chat, { document: { url: data5.respon.download[0].url }, mimetype: 'application/vnd.android.package-archive', fileName: data5.respon.title + '.apk', caption: null }, { quoted: m })   
break        
}
} catch {
throw `*[β] π½πΎ ππ΄ π΄π½π²πΎπ½πππΎ π½πΈπ½πΆππ½ πΌπΎπ³ π°πΏπΊ π²πΎπ½ π΄ππ΄ π½πΎπΌπ±ππ΄ πΎ π»π° π°πΏπΈ (πΏπ°πΆπΈπ½π°) π΄πππ° π²π°πΈπ³π°*`
}}    
handler.command = /^(apkmod|modapk|dapk2)$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
