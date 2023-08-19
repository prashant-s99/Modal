'use strict';

const chatgpt = document.querySelector('.chatgpt');
const bard = document.querySelector('.bard');
const huggingchat = document.querySelector('.huggingchat')

const overlay = document.querySelector('.overlay');

const closeChatGPT = document.querySelector('.chatgptcl');
const closeBard = document.querySelector('.bardcl');
const closeHuggingChat = document.querySelector('.huggingchatcl');

       document.querySelector('.btn-chatGPT').addEventListener('click',function(){
            chatgpt.classList.remove('hidden');
            overlay.classList.remove('hidden');
        });
        document.querySelector('.btn-bard').addEventListener('click',function(){
            bard.classList.remove('hidden');
            overlay.classList.remove('hidden');
        });
        document.querySelector('.btn-huggingchat').addEventListener('click',function(){
            huggingchat.classList.remove('hidden');
            overlay.classList.remove('hidden');
        });


        closeChatGPT.addEventListener('click',function(){
            document.querySelector('.chatgpt').classList.add('hidden');
            overlay.classList.add('hidden');
        });
        closeBard.addEventListener('click',function(){
            document.querySelector('.bard').classList.add('hidden');
            overlay.classList.add('hidden');
        });
        closeHuggingChat.addEventListener('click',function(){
            document.querySelector('.huggingchat').classList.add('hidden');
            overlay.classList.add('hidden');
        });