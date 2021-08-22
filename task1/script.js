document.querySelector('.color').addEventListener('click',function(){
    display = document.querySelector(".colors").style.display;
    disp = document.querySelector(".images").style.display;
    if(display === 'none'){
        document.querySelector('.images').style.display = 'none';
        document.querySelector('.colors').style.display = 'flex';

    }
    else{
        document.querySelector('.colors').style.display='none';
    }
})
document.querySelector('.img').addEventListener('click',function(){
    display = document.querySelector('.colors').style.display;
    disp = document.querySelector('.images').style.display;
    if(disp === "none"){
        document.querySelector('.colors').style.display = 'none';
        document.querySelector('.images').style.display = 'flex';
    }
    else{
        document.querySelector('.images').style.display='none';
    }
})

document.querySelector('.color1').addEventListener('click',function(){
    document.body.classList.remove('color2','color3','color4','color5','color6','color7','color8','color9');
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('color1');
})

document.querySelector('.color2').addEventListener('click',function(){
    document.body.classList.remove('color1','color3','color4','color5','color6','color7','color8','color9');
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('color2');
    console.log(event);
})

document.querySelector('.color3').addEventListener('click',function(){
    document.body.classList.remove('color1','color2','color4','color5','color6','color7','color8','color9');
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('color3');
    console.log(event);
})

document.querySelector('.color4').addEventListener('click',function(){
    document.body.classList.remove('color1','color3','color2','color5','color6','color7','color8','color9');
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('color4');
    console.log(event);
})

document.querySelector('.color5').addEventListener('click',function(){
    document.body.classList.remove('color1','color3','color4','color2','color6','color7','color8','color9');
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('color5');
    console.log(event);
})

document.querySelector('.color6').addEventListener('click',function(){
    document.body.classList.remove('color1','color3','color4','color5','color2','color7','color8','color9');
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('color6');
    console.log(event);
})

document.querySelector('.color7').addEventListener('click',function(){
    document.body.classList.remove('color1','color3','color4','color5','color2','color2','color8','color9');
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('color7');
    console.log(event);
})

document.querySelector('.color8').addEventListener('click',function(){
    document.body.classList.remove('color1','color3','color4','color5','color2','color2','color2','color9');
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('color8');
    console.log(event);
})

document.querySelector('.color9').addEventListener('click',function(){
    document.body.classList.remove('color1','color3','color4','color5','color2','color2','color2','color2');
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('color9');
    console.log(event);
})
document.querySelector('.img1').addEventListener('click',function(){
   // document.body.classList.remove('color1','color2','color3','color4','color5','color6','color7','color8','color9');
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('img1');
})

document.querySelector('.img2').addEventListener('click',function(){
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('img2');
})

document.querySelector('.img3').addEventListener('click',function(){
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('img3');
})

document.querySelector('.img4').addEventListener('click',function(){
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('img4');
})

document.querySelector('.img5').addEventListener('click',function(){
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('img5');
})

document.querySelector('.img6').addEventListener('click',function(){
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('img6');
})

document.querySelector('.img7').addEventListener('click',function(){
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('img7');
})

document.querySelector('.img8').addEventListener('click',function(){
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('img8');
})

document.querySelector('.img9').addEventListener('click',function(){
    document.body.classList.remove('img1','img2','img3','img4','img5','img6','img7','img8','img9');
    document.body.classList.add('img9');
})

