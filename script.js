/*==================================================
                BOTÓN ENTRAR
==================================================*/

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";

    setTimeout(() => {
        intro.style.display = "none";
    }, 1000);

});

/*==================================================
                EFECTO MAQUINA DE ESCRIBIR
==================================================*/

const carta = `

Hola...

Antes de que sigas leyendo,
quiero pedirte algo.

Respira profundamente.

No importa cómo haya sido tu día.

No importa cuánto esté pesando tu corazón.

Aquí no necesitas fingir.

Puedes descansar.

Puedes llorar.

Puedes simplemente existir.

Quiero que este pequeño rincón
sea un lugar donde encuentres paz.

Porque mereces descansar.

Mereces sentirte querida.

Mereces volver a sonreír.

Y aunque yo no pueda resolver
todo aquello que duele...

Siempre voy a desear que la vida
te abrace tan bonito
como tú mereces.

Gracias por existir.

❤️

`;

const typing = document.getElementById("typing");

let index = 0;

function escribirCarta(){

    if(index < carta.length){

        typing.innerHTML += carta.charAt(index);

        index++;

        setTimeout(escribirCarta,45);

    }

}

setTimeout(escribirCarta,1800);

/*==================================================
                FRASES
==================================================*/

const frases = [

"Eres suficiente. ❤️",

"Todo estará bien, paso a paso.",

"Estoy orgulloso de ti.",

"No tienes que ser fuerte todo el tiempo.",

"Respira... aquí puedes descansar.",

"Gracias por seguir aquí.",

"Siempre habrá alguien creyendo en ti.",

"Nunca olvides lo valiosa que eres.",

"Espero que hoy encuentres un pequeño motivo para sonreír. 🌸",

"Este lugar siempre será tu refugio."

];

const phrase = document.getElementById("phrase");

let fraseActual = 0;

function cambiarFrase(){

    phrase.style.opacity = 0;

    setTimeout(()=>{

        phrase.textContent = frases[fraseActual];

        phrase.style.opacity = 1;

        fraseActual++;

        if(fraseActual >= frases.length){

            fraseActual = 0;

        }

    },500);

}

setInterval(cambiarFrase,5000);

/*==================================================
                BOTÓN MÚSICA
==================================================*/

const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click",()=>{

window.open(
"https://open.spotify.com/search/umi%20rojuu",
"_blank"
);

});

/*==================================================
                EFECTO SUAVE EN BOTONES
==================================================*/

const botones = document.querySelectorAll("button");

botones.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

/*==================================================
                MENSAJE EN CONSOLA
==================================================*/

console.log("%cGracias por visitar este lugar seguro 💜",
"color:#9d7bff;font-size:18px;font-weight:bold;");

/*==================================================
            APARICIÓN AL HACER SCROLL
==================================================*/

const elementos = document.querySelectorAll("section, .glass, .card");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {

    elemento.classList.add("hidden");
    observador.observe(elemento);

});


/*==================================================
            CORAZONES AL HACER CLICK
==================================================*/

document.addEventListener("click", function(e){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    heart.style.fontSize = (Math.random()*18+18)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },3000);

});


/*==================================================
            EFECTO PARALLAX
==================================================*/

document.addEventListener("mousemove",(e)=>{

    const moon=document.querySelector(".moon");
    const stars=document.querySelector(".stars");

    let x=(window.innerWidth/2-e.pageX)/45;
    let y=(window.innerHeight/2-e.pageY)/45;

    moon.style.transform=`translate(${x}px,${y}px)`;

    stars.style.transform=`translate(${x/3}px,${y/3}px)`;

});


/*==================================================
            EFECTO EN LAS TARJETAS
==================================================*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


/*==================================================
            GALERÍA
==================================================*/

const fotos=document.querySelectorAll(".gallery img");

fotos.forEach(foto=>{

foto.addEventListener("click",()=>{

if(foto.classList.contains("zoom")){

foto.classList.remove("zoom");

foto.style.position="";
foto.style.top="";
foto.style.left="";
foto.style.transform="";
foto.style.width="";
foto.style.height="";
foto.style.zIndex="";

}else{

foto.classList.add("zoom");

foto.style.position="fixed";
foto.style.top="50%";
foto.style.left="50%";
foto.style.transform="translate(-50%,-50%)";
foto.style.width="70%";
foto.style.height="auto";
foto.style.zIndex="99999";

}

});

});


/*==================================================
            BRILLO DE LA LUNA
==================================================*/

const moon=document.querySelector(".moon");

let glow=true;

setInterval(()=>{

if(glow){

moon.style.boxShadow="0 0 80px #ffffff,0 0 140px #8d72ff";

}else{

moon.style.boxShadow="0 0 40px #ffffff,0 0 80px #704cff";

}

glow=!glow;

},3000);


/*==================================================
            MENSAJES ALEATORIOS
==================================================*/

const mensajes=[

"Espero que hoy sonrías un poquito. 🌸",

"Respira... todo pasa.",

"No olvides cuánto vales.",

"Estoy muy orgulloso de ti. 💜",

"Aquí siempre tendrás un lugar seguro.",

"Gracias por existir.",

"Te mereces cosas bonitas."

];

setInterval(()=>{

const mensaje=

mensajes[Math.floor(Math.random()*mensajes.length)];

console.log(mensaje);

},10000);


/*==================================================
            EFECTO EN EL TÍTULO
==================================================*/

const titulo=document.querySelector("h1");

if(titulo){

setInterval(()=>{

titulo.style.opacity=".85";

setTimeout(()=>{

titulo.style.opacity="1";

},700);

},2500);

}


/*==================================================
            FIN
==================================================*/

console.log("✨ Lugar Seguro cargado correctamente.");