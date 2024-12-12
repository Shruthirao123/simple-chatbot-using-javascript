let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let userInput=document.getElementById('userInput');
let sendMsgBtn=document.getElementById('sendMsgBtn');
let chatContainer=document.getElementById('chatContainer');
sendMsgBtn.onclick=function(){
    let divEle1=document.createElement('div');
    divEle1.classList.add('msg-to-chatbot-container');
    chatContainer.appendChild(divEle1);
    let msgValue=userInput.value;
    let span=document.createElement('span');
    span.classList.add('msg-to-chatbot');
    span.textContent=msgValue;
    divEle1.appendChild(span);
    userInput.value="";
    chatBotRly();
}
function chatBotRly(){
    let length=chatbotMsgList.length;
    let divEle1=document.createElement('div');
    divEle1.classList.add('msg-from-chatbot-container');
    chatContainer.appendChild(divEle1);
    let msgValue=chatbotMsgList[Math.ceil(Math.random()*length)-1];
    let span=document.createElement('span');
    span.classList.add('msg-from-chatbot');
    span.textContent=msgValue;
    divEle1.appendChild(span);
    
}