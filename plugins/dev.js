const { malvin } = require('../malvin');

const tinyCaps = (text) => {
  const map = {
    a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ',
    h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ',
    o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ',
    v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
  };
  return text.split('').map(c => map[c.toLowerCase()] || c).join('');
};

malvin({
  pattern: "dev",
  alias: ["developer", "owner"],
  desc: "Displays the developer info",
  category: "owner",
  react: "👨‍💻",
  filename: __filename
}, async (malvin, mek, m, { from, reply, pushname }) => {
  try {
    const name = pushname || "there";

    const caption = `
╭─⌈ ${tinyCaps("𝕧𝕠𝕣𝕥𝕖𝕩 𝕊2")} ⌋─
│ 👋 Hello, *${name}*!
│ 🤖 I'm 𝚖𝚡𝚐𝚊𝚖𝚎𝚌𝚘𝚍𝚎𝚛, the creator & maintainer
│    of this smart WhatsApp bot.
│ 👨‍💻 *OWNER INFO:*
│ ───────────────
│ 🧠 Name    : 𝚖𝚡𝚐𝚊𝚖𝚎𝚌𝚘𝚍𝚎𝚛
│ 🎂 Age     : 18
│ 📞 Contact : wa.me/+2347041699492
│ 📺 YouTube : 𝚖𝚡𝚐𝚊𝚖𝚎𝚌𝚘𝚍𝚎𝚛
│            https://youtube.com/@mxgamecoder
│
╰───────────────

> *Made by 𝚖𝚡𝚐𝚊𝚖𝚎𝚌𝚘𝚍𝚎𝚛 | Powered by 𝕧𝕠𝕣𝕥𝕖𝕩 𝕊2*
`.trim();

    await malvin.sendMessage(
      from,
      {
        image: { url: 'https://i.ibb.co/Q7Lv5JBk/zenitsu-agatsuma-3840x2160-24472.png' },
        caption,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '0029Vb7Ew0t8fewhGUdO1J0s@newsletter',
            newsletterName: 'ᴹˣᴳᴬᴹᴱᶜᴼᴰᴱᴿ',
            serverMessageId: 143
          },
          externalAdReply: {
            title: "ᴹˣᴳᴬᴹᴱᶜᴼᴰᴱᴿ",
            body: "𝚖𝚡𝚐𝚊𝚖𝚎𝚌𝚘𝚍𝚎𝚛",
            thumbnailUrl: 'https://i.ibb.co/Q7Lv5JBk/zenitsu-agatsuma-3840x2160-24472.png',
            mediaType: 1,
            renderSmallerThumbnail: true,
            showAdAttribution: true,
            mediaUrl: "https://youtube.com/@mxgamecoder",
            sourceUrl: "https://youtube.com/@mxgamecoder"
          }
        }
      },
      { quoted: mek }
    );
  } catch (e) {
    console.error("Error in .dev command:", e);
    return reply(`❌ Error: ${e.message || e}`);
  }
});
