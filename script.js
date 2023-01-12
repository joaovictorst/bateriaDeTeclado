const keyq = document.getElementById('keyq');
const keyw = document.getElementById('keyw');
const keye = document.getElementById('keye');
const keya = document.getElementById('keya');
const keys = document.getElementById('keys');
const keyd = document.getElementById('keyd');
const keyz = document.getElementById('keyz');
const keyx = document.getElementById('keyx');
const keyc = document.getElementById('keyc');
// apertar teclas no teclado
document.body.addEventListener("keyup", (event) => {
    event.code;
    if(event.code == "KeyQ"){
        const audioq = document.getElementById('s_keyq');
        audioq.currentTime = 0;
        audioq.play();
    };
    if(event.code == "KeyW"){
        const audiow = document.getElementById('s_keyw');
    audiow.currentTime = 0;
    audiow.play();
    };
    if(event.code == "KeyE"){
        const audioe = document.getElementById('s_keye');
    audioe.currentTime = 0;
    audioe.play();
    };
    if(event.code == "KeyA"){
        const audioa = document.getElementById('s_keya');
    audioa.currentTime = 0;
    audioa.play();
    };
    if(event.code == "KeyS"){
        const audios = document.getElementById('s_keys');
    audios.currentTime = 0;
    audios.play();
    };
    if(event.code == "KeyD"){
        const audiod = document.getElementById('s_keyd');
    audiod.currentTime = 0;
    audiod.play();
    };
    if(event.code == "KeyZ"){
        const audioz = document.getElementById('s_keyz');
    audioz.currentTime = 0;
    audioz.play();
    };
    if(event.code == "KeyX"){
        const audiox = document.getElementById('s_keyx');
    audiox.currentTime = 0;
    audiox.play();
    };
    if(event.code == "KeyC"){
        const audioc = document.getElementById('s_keyc');
    audioc.currentTime = 0;
    audioc.play();
    };
    
    
});
// clicks na tela
keyq.addEventListener("click", function() {
    const audioq = document.getElementById('s_keyq');
    audioq.currentTime = 0;
    audioq.play();
});

keyw.addEventListener("click", function() {
    const audiow = document.getElementById('s_keyw');
    audiow.currentTime = 0;
    audiow.play();
});

keye.addEventListener("click", function() {
    const audioe = document.getElementById('s_keye');
    audioe.currentTime = 0;
    audioe.play();
});

keya.addEventListener("click", function() {
    const audioa = document.getElementById('s_keya');
    audioa.currentTime = 0;
    audioa.play();
});

keys.addEventListener("click", function() {
    const audios = document.getElementById('s_keys');
    audios.currentTime = 0;
    audios.play();
});

keyd.addEventListener("click", function() {
    const audiod = document.getElementById('s_keyd');
    audiod.currentTime = 0;
    audiod.play();
});

keyz.addEventListener("click", function() {
    const audioz = document.getElementById('s_keyz');
    audioz.currentTime = 0;
    audioz.play();
});

keyx.addEventListener("click", function() {
    const audiox = document.getElementById('s_keyx');
    audiox.currentTime = 0;
    audiox.play();
});

keyc.addEventListener("click", function() {
    const audioc = document.getElementById('s_keyc');
    audioc.currentTime = 0;
    audioc.play();
});
// escrita de composicao

const btn = document.querySelector("button")
// console.log(btn)
btn.addEventListener("click", function(e){
    
    e.preventDefault();
    const input = document.querySelector('#input');
    const valors = input.value.split('')

    let wait = 0

    for (const valor of valors) {
        setTimeout(() => {
            tocarescrita(valor);
        }, wait);

        wait += 250;
    }
    
});

function tocarescrita(i) { 
    const audio = document.getElementById(`s_key${i}`);
    audio.currentTime = 0;
    audio.play();
};
