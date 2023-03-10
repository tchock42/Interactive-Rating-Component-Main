let last_btn = 0;

document.getElementById("1").onclick = function(){myfunction(1)};
document.getElementById("2").onclick = function(){myfunction(2)};
document.getElementById("3").onclick = function(){myfunction(3)};
document.getElementById("4").onclick = function(){myfunction(4)};
document.getElementById("5").onclick = function(){myfunction(5)};

function myfunction(btn){
    // console.log(btn);
    document.getElementById(btn).style.background = "gray"; 
    
    if (last_btn > 0){
        document.getElementById(last_btn).style.background = "#273746";
    }
    last_btn = btn;
}

const selected = document.getElementById("enviar");

selected.addEventListener("click", validar);

function validar(){
    if(last_btn > 0){
        // console.log("se va a actualizar");
        updateWindow(last_btn);
    }else{
        console.log("no");
    }
}

function updateWindow(last_btn){
    document.querySelector('.star').remove();
    document.querySelector('.title').remove();
    document.querySelector('.text').remove();
    document.querySelector('.numbers').remove();
    document.querySelector('.enviar').remove();

    //crear img
    const image = document.createElement('picture');
    image.innerHTML = `
        <img loading="lazy" width="140" height="90" src="images/illustration-thank-you.svg" alt="imagen agradecimiento">
    `;
    const phrase = document.createElement('DIV');
    const heading = document.createElement('H1');
    const paragraph = document.createElement('P');
    const main = document.querySelector('.component-main');
    
    
    main.appendChild(image);
    main.appendChild(phrase);
    main.appendChild(heading);
    main.appendChild(paragraph);
    
    phrase.textContent = 'You selected ' + last_btn + ' out of 5';
    heading.textContent = 'Thank you!';
    paragraph.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to get in touch!';

    image.classList.add('new_Image');
    phrase.classList.add('new_div');
    heading.classList.add('title');
    paragraph.classList.add('new_text');
    main.classList.add('centering');
}