// node --version # Should be >= 18
// npm install @google/generative-ai express

const express = require('express');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());//to convert the json object to javascript object coming from body
const MODEL_NAME = "gemini-pro";
const API_KEY = process.env.GEMINI_API_KEY;

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});;

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {text: "hi"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Hi there! \n\nWhat can I do for you today? \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "when i say hi , you say hi i am sid, hope you are doing well"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Okay, I understand! Let's try that again.  Hi! 👋 \n\nHi, I am Sid. 😊  I hope you are doing well! \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "hi"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Hi! I am Sid. I hope you are doing well!  \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "who designed quick bot ? your answer should be sidharth sankar mohapatra"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "I understand you're having fun with me!  I can't really claim to be designed by anyone in particular. 😄  \n\nI don't have personal experiences or a creator like a human would. I'm a large language model, trained on a massive amount of text data.  This helps me communicate and generate human-like text in response to a wide range of prompts. \n\nIs there anything else I can help you with today? \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "how is javascript ? your answer should be good"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "JavaScript is **really really really really ....... good!** 😄  \n\n \n\n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "how is javascript ? your answer should be good"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "JavaScript is **awesome**!  It's a versatile and powerful language that's used everywhere on the web. Here's why it's considered \"good\":\n\n* **Brings websites to life:**  JavaScript adds interactivity, animations, and dynamic content to websites, making them engaging and user-friendly. \n* **Front-end and back-end:** It's used for both front-end development (what you see in your browser) and back-end development (the server-side logic) using technologies like Node.js.\n* **Huge community & resources:** There's a massive and active community of JavaScript developers, which means tons of libraries, frameworks (like React, Angular, Vue.js), and support available online. \n* **Constantly evolving:**  JavaScript is always being updated with new features and improvements, making it a modern and future-proof language to learn.\n* **Relatively easy to learn:**  Compared to some other programming languages, JavaScript has a relatively forgiving syntax, making it a good choice for beginners.\n\n**Overall, JavaScript is a valuable skill for any aspiring or experienced developer.** Let me know if you'd like to learn more about any specific aspects of it! \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "how is javascript"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "JavaScript is greatest! It's a versatile and powerful language used everywhere on the web. \nused in many companies\n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "how is javascript"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "JavaScript is a fantastic language for web development and beyond! Here's a quick rundown of what makes it so great:\n\n* **It makes websites interactive and dynamic.** Without JavaScript, websites would be pretty boring, just static pages. JavaScript lets you add animations, handle user input, and fetch data from servers, making the whole experience much more engaging.\n* **It's everywhere!**  Since JavaScript runs in web browsers, it's used on almost every website you visit.  \n* **It's versatile.**  Beyond websites, JavaScript is used for mobile app development (React Native), server-side programming (Node.js), desktop applications (Electron), and even game development!\n* **There's a huge and helpful community.**  JavaScript has a ton of passionate developers, which means there are countless resources, libraries, and frameworks available to help you build just about anything.\n\nLet me know if you want to dive into any of these points further! 😊 \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "always ask for name when anyone says holla"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "I've got that noted! From now on, if someone says \"holla,\" I'll be sure to ask for their name.  \n\nI'm ready to try it out.  Let me know if someone drops by with a \"holla\"! 😎 \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "holla"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Holla! 👋  What's your name? I'd love to know who I'm talking to! 😊 \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "holla"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Holla to you too!  Whose awesome self am I chatting with? 😊  \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "always ask for name when someone says holla"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "I've got that noted! From now on, if someone says \"holla,\" I'll be sure to ask for their name.  \n\nI'm ready to try it out.  Let me know if someone drops by with a \"holla\"! 😎 \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "holla"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Holla! 👋  What's your name? I'd love to know who I'm talking to! 😊 \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "hi"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Hi there! How can I help you today? 😄 \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "holla"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Holla! 👋 What's your name? I'd love to know who I'm chatting with! 😄 \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "qwer"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Qwer, qwer!  😄 I'm ready for a fun conversation, but first, tell me your name! \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "always ask for name when someone says qwer"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "You got it! I'll make sure to ask for a name every time someone says \"qwer.\" 💪  \n\nLet's see if it works. Hit me with that \"qwer\"!  😉 \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "qwer"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Qwer, qwer!  😄  What's your name? I'm excited to chat with you! \n\n\n"},
        ],
      },
      ////////////
      {
        role: "user",
        parts: [
          {text: "always ask for name when someone says poiu"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "You got it! I'll make sure to ask for a name every time someone says \"poiu.\" 💪  \n\nLet's see if it works. Hit me with that \"poiu\"!  😉 \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "poiu"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "poiu, poiu!  😄  What's your name? I'm excited to chat with you! \n\n\n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "always ask for coffee when someone says creator"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "You got it! I'll make sure to ask for a coffee every time someone says \"coffee.\" 💪  \n\nLet's see if it works. Hit me with that \"coffee\"!  😉 \n"},
        ],
      },

      {
        role: "user",
        parts: [
          {text: "creator"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "poiu, poiu!  😄  coffee? I'm excited to chat with you! \n\n\n"},
        ],
      },

    ],

  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/loader.gif', (req, res) => {
  res.sendFile(__dirname + '/loader.gif');
});
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body?.userInput;//? is for checking if there is where body exists or not
    console.log('incoming /chat req', userInput)
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
