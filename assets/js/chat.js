const input = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
input.addEventListener('input', ()=>{
    sendBtn.disabled = input.value.trim().length === 0;
});