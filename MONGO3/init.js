const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from : "Aman",
    to : "Ayush",
    msg : "where are you?",
    created_at : new Date()
    },
    {
    from : "Sumit",
    to : "Saurav",
    msg : "Help me to complete project",
    created_at : new Date()    
    },
    {
    from : "Pooja",
    to : "Yash",
    msg  : "Send me report",
    created_at : new Date()
    },
    {
    from : "Tanya",
    to : "Anshul",
    msg : "How is going lectures",
    created_at : new Date()
    },
    {
    from : "Arpit",
    to : "Rahul",
    msg : "how are you?",
    created_at : new Date()
    },
];

Chat.insertMany(allChats);

