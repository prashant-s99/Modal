'use strict';

const mod= document.querySelectorAll('.modal');

const chatgpt = document.querySelector('.chatgpt');
const bard = document.querySelector('.bard');
const huggingchat = document.querySelector('.huggingchat');
const overlay = document.querySelector('.overlay');

const showOverlay = ()=> overlay.classList.remove('hidden');
const hideOverlay = ()=> overlay.classList.add('hidden');

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

        //'Esc' keypress event listener
        document.addEventListener('keydown', function(event){                
                //Looping on all elements having a common class name 'modal' and checking wheather
                    for(let i=0; i<mod.length; i++)
                    {
                        if(event.key==='Escape' && !mod[i].classList.contains('hidden'))
                        {
                        mod[i].classList.add('hidden');
                        hideOverlay();
                        }
                    }
        });