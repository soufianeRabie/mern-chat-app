

const emojis = [
  "👽",
  "❤️",
  "💨",
  "😂",
  "👋",
  "😊",
  "👌",
  "😘",
  "🤣",
  "😍",
  "😒",
  "🚕",
  "🧭",
  "🏠",
  "🚀",
  "🌓",
  "🌞",
  "⭐",
  "🌕",
  "🔥",
  "☀️",
  "🌝",
  "🛳️",
  "🛳",
]

export const RandomEmoji = ()=>
{
  return emojis[Math.floor(Math.random() * emojis.length)];
}
