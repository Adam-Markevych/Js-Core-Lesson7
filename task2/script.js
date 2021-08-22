window.addEventListener('keydown',function(event){
    let p = document.querySelector('.vvid');
    console.log('Event', event)
    let key = event.key;
    let keyy = event.keyCode;
    let code = event.code;
    let location = event.location;
    if(key >= 0 && key <= 9 ) p.textContent+=key; 
    if(code >= "KeyA" && code <= "KeyZ"){
        p.textContent+=key;
        document.querySelector('.but2 .symbol[data="' + event.code + '"]').classList.add('but-color');
    }
    if(key === " ") p.textContent+=" ";
    if(key === "Control") p.textContent+="    ";
    if(key==='-'||key==='='||key==='['||key===']'||keyy===220|| key===";"||key==="'"||key===','||key==="."||key==="/"
    ||key==='`') p.textContent+=key;
    if(key === "Backspace") {
        let Backspace = p.innerHTML;
        Backspace = Backspace.substr(0, Backspace.length - 1);
        p.innerHTML = Backspace;
        document.querySelector('.backspace').classList.add('but-color');
    }
    if(key === "CapsLock"){
        document.querySelector('.capslock').classList.add('but-color');
    }
    if(code === "ShiftRight") document.querySelector('.shift2').classList.add('but-color');
    if(code === "ShiftLeft") document.querySelector('.shift1').classList.add('but-color');
    if(keyy === 220) document.querySelector('.slesh').classList.add('but-color');
    if(key == "Enter") p.innerHTML+="\n"
    if(key === "Control") document.querySelector('.TAB').classList.add('but-color');
}) 
document.onkeypress = function(event) {
    document.querySelector('.but2 .symbol[data="' + event.code + '"]').classList.add('but-color');
}
document.onkeyup = function(event) {
    document.querySelector('.but2 .symbol[data="' + event.code + '"]').classList.remove('but-color');
}
window.addEventListener('keyup',function(event){
    document.querySelector('.shift1').classList.remove('but-color');
    document.querySelector('.shift2').classList.remove('but-color');
    document.querySelector('.slesh').classList.remove('but-color');
    document.querySelector('.TAB').classList.remove('but-color');
})
