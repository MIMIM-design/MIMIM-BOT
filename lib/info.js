exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *About ${BotName}*
╠════════════════════
║   *⚠️WARNING⚠️*
╠════════════════════
╠════════════════════
║ *بِسْــــــــــــــــــمِ ﷲِالرَّحْمَنِ الرَّحِيم*
║  *JANGAN TELFON!!!*
╠════════════════════
║├≽️⚜ *AUTHOR*: _MIMIM-design_
║├≽️⚜ *DESIGNER*: _MIMIM-design_
║├≽️⚜ *INSTAGRAM*: _${instagram}_
╠════════════════════
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *Facebook <Like>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${BotName}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY MIMIM-design*_
╚════════════════════`
}
