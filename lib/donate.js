exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
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
║ *Donasi Ke ${BotName}*
╠════════════════════
║├≽️⚜ *PULSA*: _0878-4811-5476_
║├≽️⚜ *PULSA*: _0878-4811-5476_
║├≽️⚜ *PULSA*: _0878-4811-5476_
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

