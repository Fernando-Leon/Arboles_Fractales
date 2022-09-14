function setup() { frameRate(1);  createCanvas(600, 600); }

const canva = document.getElementById("defaultCanvas0");
const containerCanva = document.getElementById("main-container");
containerCanva.appendChild(canva);

function draw() {
    background("#000000")
    console.log(height);
    dibujarArbol(width / 2, height, 0, 70);
}


function dibujarArbol(x, y, angulo, radio) {
    if (radio < 1) return;
    (radio < 5) ? stroke("#e830ce")://Color hojas 
    stroke("#FFFFFF"); //Color Tallo

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
*/