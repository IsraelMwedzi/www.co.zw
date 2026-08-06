/* ==========================================
   VELOXA CHATBOT SYSTEM
   chatbot.js
========================================== */


// Create Chatbot Button

const chatButton=document.createElement("button");

chatButton.id="veloxa-chat-button";

chatButton.innerHTML=
`
<i class="fa-solid fa-robot"></i>
`;

document.body.appendChild(chatButton);


// Create Chat Window

const chatWindow=document.createElement("div");

chatWindow.id="veloxa-chat-window";


chatWindow.innerHTML=
`

<div class="chat-header">

<div>

<i class="fa-solid fa-robot"></i>

VELOXA AI

</div>

<span id="close-chat">

×
</span>

</div>


<div class="chat-body" id="chat-body">

<div class="bot-message">

Hello 👋

I am VELOXA AI.
How can I assist you today?

</div>

</div>


<div class="chat-input">

<input 
id="chat-message"
placeholder="Ask VELOXA AI..."
>


<button id="send-message">

<i class="fa-solid fa-paper-plane"></i>

</button>

</div>

`;


document.body.appendChild(chatWindow);



// Open Chat

chatButton.onclick=()=>{

chatWindow.classList.add("active");

};



// Close Chat

document.getElementById("close-chat").onclick=()=>{

chatWindow.classList.remove("active");

};



// Chat Elements

const sendButton=
document.getElementById("send-message");


const messageInput=
document.getElementById("chat-message");


const chatBody=
document.getElementById("chat-body");




// Send Message

sendButton.onclick=sendMessage;


messageInput.addEventListener(
"keypress",
(e)=>{

if(e.key==="Enter"){

sendMessage();

}

});



// Message Function

function sendMessage(){


const message=
messageInput.value.trim();



if(message===""){

return;

}



// User Message

const userMessage=
document.createElement("div");


userMessage.className=
"user-message";


userMessage.innerText=
message;


chatBody.appendChild(
userMessage
);



messageInput.value="";



// Scroll

chatBody.scrollTop=
chatBody.scrollHeight;



// AI Typing

const typing=
document.createElement("div");


typing.className=
"bot-message";


typing.innerHTML=
`
<span class="typing">
● ● ●
</span>
`;


chatBody.appendChild(
typing
);



// AI Response Delay

setTimeout(()=>{


typing.remove();



const response=
document.createElement("div");


response.className=
"bot-message";


response.innerText=
getAIResponse(message);



chatBody.appendChild(
response
);


chatBody.scrollTop=
chatBody.scrollHeight;



},1200);



}



// Basic AI Logic

function getAIResponse(message){


message=
message.toLowerCase();



if(message.includes("hello")
||
message.includes("hi")){

return "Hello! Welcome to VELOXA. How can I help you?";

}



if(message.includes("ai")){

return "VELOXA AI provides intelligent automation, analytics, and smart solutions.";

}



if(message.includes("pay")){

return "VELOXA Pay enables secure digital payments and financial services.";

}



if(message.includes("book")){

return "VELOXA Books provides digital learning resources and eBooks.";

}



if(message.includes("chat")){

return "You are currently chatting with VELOXA ChatBot.";

}



return "I am learning continuously. Please tell me more about what you need.";

}
