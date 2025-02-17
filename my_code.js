let bildBreite=window.innerWidth-50;
let bildHohe=window.innerHeight-50;
let posX = 0;
let posY = 0;
let speed = 100;
let stepX = 5;
let stepY = 5;
let intevalID;
let bild= document.getElementById("bild");
/* anim function moving the dot object for call of setinterval (timer)
    after arrive the movement frame (the window size) changeing the movement direction
    with multipling the step variable with -1
*/
function anim() {
    bild= document.getElementById("bild");
    bild.style.left = posX + "px";
    bild.style.top = posY + "px";
    posX += stepX;
    posY += stepY;
    if (posX > bildBreite) {stepX = stepX * -1;}
    if (posX < 0) {stepX = stepX * -1;}
    if (posY > bildHohe) {stepY = stepY * -1;}
    if (posY < 0) {stepY = stepY * -1;}
}
/* function init starting by loding the HTML (onload)
    set the drag&drom funcions for mous down&up events
    initialise the object dot (is an a picture)
    starting the timed animation of the dot object with setinterval (timing)
*/
function init() {
    document.onmousedown = startdrag;
    document.onmouseup = stopdrag;
    let neuerknoten = document.createElement("img");
    neuerknoten.setAttribute("src","punkt-anim.gif");
    neuerknoten.setAttribute("alt","Punkt");
    neuerknoten.setAttribute("id","bild");
    document.getElementById("ergebnis").appendChild(neuerknoten);
    intevalID = setInterval("anim()", speed);
}
// function reinit adjusting the animation frame by window size chanching
function initRe(){
    bildBreite=window.innerWidth-50;
    bildHohe=window.innerHeight-50;
}
// function startdrag ist starting the drag action with mousemove event listener and go to grag function
function startdrag(evt) {
    if ( evt.target.id = "bild") {
        clearInterval(intevalID);
        document.addEventListener("mousemove",drag,true);
        return false;
    }
}
// drag function is moving the dot object with the mouse move
function drag(evt) {
    bild= document.getElementById("bild");
    posX =	parseInt(evt.clientX);
    posY = parseInt(evt.clientY);
    bild.style.left = posX + "px";
    bild.style.top = posY + "px";
    return false;
}
// stopdrag function stoping the movement of dot object and give over the controll for animation (function anim)
function stopdrag(evt) {
    if ( evt.target.id = "bild") {
        document.removeEventListener("mousemove",drag,true);
        intevalID = setInterval("anim()", speed);
        return false;
    }
}

// resize and onload listener starten both functions
window.onresize = initRe;
window.onload = init;
