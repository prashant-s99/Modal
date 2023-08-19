'use strict';

const chatgpt = document.querySelector('.chatgpt');
const bard = document.querySelector('.bard');
const huggingchat = document.querySelector('.huggingchat')

const showOverlay = ()=> {
    document.querySelector('.overlay').classList.remove('hidden')
};
const hideOverlay = ()=> document.querySelector('.overlay').classList.add('hidden');

const closeChatGPT = document.querySelector('.chatgptcl');
const closeBard = document.querySelector('.bardcl');
const closeHuggingChat = document.querySelector('.huggingchatcl');

       document.querySelector('.btn-chatGPT').addEventListener('click',function(){
            chatgpt.classList.remove('hidden');
            showOverlay();
        });
        document.querySelector('.btn-bard').addEventListener('click',function(){
            bard.classList.remove('hidden');
            showOverlay();
        });
        document.querySelector('.btn-huggingchat').addEventListener('click',function(){
            huggingchat.classList.remove('hidden');
            showOverlay();
        });


        closeChatGPT.addEventListener('click',function(){
            chatgpt.classList.add('hidden');
            hideOverlay();
        });
        closeBard.addEventListener('click',function(){
            bard.classList.add('hidden');
            hideOverlay();
        });
        closeHuggingChat.addEventListener('click',function(){
            huggingchat.classList.add('hidden');
            hideOverlay();
        });