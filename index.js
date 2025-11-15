const TelegramBot = require("node-telegram-bot-api")

const TOKEN = "8443492861:AAGRAPm9K4nZSXVpgx_R4fK09la0AFswnMQ"


const bot = new TelegramBot(TOKEN,{polling:true});



bot.on("message", (msg) =>{
    console.log(msg);
    
    const chatId = msg.chat.id;
    const text = msg.text;
    const firstName = msg.chat.first_name;


    if(text == "/start" || text == "Asosiy menyuga qaytish") {
        bot.sendMessage(
            chatId,
            `👋 Assalomu alaykum, ${firstName}!
            
 📚 100x o‘quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma’lumot olasiz  
• Kurslarga onlayn ro‘yxatdan o‘tishingiz mumkin  
• Jadval va to‘lovlar haqida ma’lumot olasiz  

Quyidagi menyudan kerakli bo‘limni tanlang 👇

    `,
    {
        reply_markup: {
          keyboard: [
            [{ text: "📚 Kurslar" }, { text: "✍️ Ro‘yxatdan o‘tish" }],
            [{ text: "ℹ️ Markaz haqida" }, { text: "💬 Fikr bildirish" }],
            [{ text: "❓ Yordam" }],
          ],
          resize_keyboard: true,
        },
      }
    );
  } else if (text == "📚 Kurslar") {
    bot.sendMessage(
      chatId,
      `🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:

1️⃣ Ingliz tili  
2️⃣ Rus tili  
3️⃣ Turk tili 
4️⃣ Dasturlash (Python, Web)  
5️⃣ Grafik dizayn  

👇 Quyidagi kurslardan birini tanlang va batafsil ma’lumot oling:
      `,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
            [{ text: "🇷🇺 Rus tili", callback_data: "course_rus" }],
            [{ text: "🇹🇷 Turk tili", callback_data: "course_turk" }],
            [{ text: "💻Dasturlash (Python, Web)", callback_data: "course_dasturlash" }],
            [{ text: "🎨Grafik dizayn", callback_data: "course_dizayn" }],
          ],
        },
      }
    );

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data === "course_english") {
    bot.sendMessage(
      chatId,
      `
🇺🇸 *Ingliz tili kursi*  
— Boshlang'ich, o‘rta va yuqori darajalar  
— Haftasiga: 3 ta dars  
— Dars davomiyligi: 1.5 soat  
— Oylik narx: *350 000 so‘m*

📆 Darslar jadvali:  
• Du — Cho — Pa  
• Sa — Ya

📲 Ro‘yxatdan o‘tish uchun: "✍️ Ro‘yxatdan o‘tish"
      `,
      { parse_mode: "Markdown" }
    );
  }

  else if (data === "course_rus") {
    bot.sendMessage(
      chatId,
      `
🇷🇺 *Rus tili kursi*  
— Grammatika + suhbat  
— Haftasiga: 3 ta dars  
— Dars davomiyligi: 1.5 soat  
— Oylik narx: *350 000 so‘m*

📆 Jadval:  
• Du — Cho — Pa  
• Sa — Ya
      `,
      { parse_mode: "Markdown" }
    );
  }

  else if (data === "course_turk") {
    bot.sendMessage(
      chatId,
      `
🇹🇷 *Turk tili kursi*  
— Ichida grammatika va amaliy mashg'ulotlar  
— Haftasiga 3 ta dars  
— 1.5 soatdan  
— Oylik narx: *350 000 so‘m*

📆 Jadval:  
• Du — Cho — Pa  
      `,
      { parse_mode: "Markdown" }
    );
  }

  else if (data === "course_dasturlash") {
    bot.sendMessage(
      chatId,
      `*💻 Dasturlash (Python, Web)*
      -Ichida Python, Web
      -Haftasiga 3 ta dars
      -2 soatdan
      -Oylik narx: *500 000*
      
📆 Jadval:  
• Du — Cho — Pa 
    `,
     { parse_mode: "Markdown" }
    );
  }
});
  } else if (text == "ℹ️ Markaz haqida") {
    bot.sendMessage(chatId, "📍 Bizning o‘quv markaz joylashuvi:");
    bot.sendLocation(chatId, 41.3867491, 60.3624115);
  } else {
    bot.sendMessage(
      chatId,
      `
    ⚠️ Kechirasiz, men sizning xabaringizni tushunmadim.

Iltimos, quyidagi tugmani bosing 👇
/start

    `,
      {
        reply_markup: {
          keyboard: [[{ text: `Asosiy menyuga qaytish` }]],
          resize_keyboard: true,
        },
      }
    );
  }
});

console.log("Bot ishga tushdi...");

  
console.log("Bot ishga tushdi");
