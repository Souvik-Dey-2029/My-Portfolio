const chatIcon=document.getElementById('chat-icon');
const chatBox=document.getElementById('chat-box');
const chatHeader=document.getElementById("chat-header");
const chatBody=document.getElementById("chat-body");
const chatInput=document.getElementById("chat-input");

// Toggle chat on icon click
chatIcon.addEventListener('click',()=>{chatBox.style.display=chatBox.style.display==='flex'?'none':'flex';});
chatHeader.addEventListener("click",()=>{chatBox.style.display='none';});

chatInput.addEventListener("keypress",function(e){
  if(e.key==="Enter"){
    let msg=chatInput.value;
    if(msg.trim()==="") return;
    let userMsg=document.createElement("div"); userMsg.textContent="👤 "+msg; chatBody.appendChild(userMsg);
    let botMsg=document.createElement("div"); botMsg.textContent="🤖 "+getBotReply(msg); chatBody.appendChild(botMsg);
    chatInput.value=""; chatBody.scrollTop=chatBody.scrollHeight;
  }
});

function getBotReply(message){
  message=message.toLowerCase();
  if(message.includes("hello")) return "Hi Souvik! 👋";
  if(message.includes("who are you")) return "I'm your portfolio assistant 🤖";
  if(message.includes("project")) return "Check out the Projects section!";
  return "I'm not sure about that 😅";
}
