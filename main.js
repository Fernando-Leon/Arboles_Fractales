function setup() { frameRate(1);  createCanvas(600, 600); }

const canva = document.getElementById("defaultCanvas0");
const containerCanva = document.getElementById("main-container");
containerCanva.appendChild(canva);

function draw() {
    background("#CCC")
    console.log(height);
    dibujarArbol(width / 2, height, 0, 70);
}


function dibujarArbol(x, y, angulo, radio) {
    if (radio < 1) return;
    (radio < 5) ? stroke("#2d572c")://Color hojas 
    stroke("#6f432b"); //Color Tallo

    let x2 = x + radio * cos(angulo - PI / 2)
    let y2 = y + radio * sin(angulo - PI / 2)
    strokeWeight(radio / 10)
    line(x, y, x2, y2)
    
    for (let i = 0; i < 3; i++) {
        dibujarArbol(x2,y2,angulo + random(-PI / 4, PI / 4),radio * random(0.2, 1));
    }

}


//Colors Dark  

/*Color dark neon

background: #000000
colorPrimary: #FFFFFF

colorsSeconday:

violet1: #666f88
green-blue: #2ef8a0
yellow: #etc500
pink: #f82d97
pink2: #e830ce

*/



/*Color ligth

background: #FFFFFF
colorPrimary: #A18262

colorsSeconday:

green1: #2d572c
green2: #00bb2
azul1: #0000ff
pink1: #ff0080
pink2: #E63244
violet: #830AC7


All about me
My first name is Fernando, my last name is León. I was born in Bomintzha, Tula. I am 18 years old.

I am a student, at UTTT, in the multiplatform software development career.

I like programming to solve problems.
I also like to listen to music.

The genres of music that I like the most are: pop in English, electronic music and melancholy in English.

Sometimes I like to exercise at least three times a week.

In free time I like to read and learn about new topics.
*/