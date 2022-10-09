let grascount = 40;
let  ballcount= 8;
let player ={
    x:0,
    y:0,
};
let playerv= {
    x:0,
    y:0,
};
let playeer=document.querySelector(".player");
let playerStart={
    x:window.innerWidth/2,
    y:window.innerHeight/2,
}
let speed=1.8;
let sound= new Audio("./audio/coin.mp3");
function start(){
    garssrandom()
    ballrandom()
    player = playerStart;
};
function update(){

player.x += playerv.x;
player.y += playerv.y;
playeer.style.left = player.x +"px";
playeer.style.top = player.y +"px";
checkCollisions();
requestAnimationFrame(update);
};
// ###############
window.addEventListener("keydown",(e)=>{
if(e.key==="ArrowUp"){
playerv.y = -1 * speed;
playeer.style.backgroundImage="url('./img/player_front.png')";
}
if(e.key==="ArrowDown"){
    playerv.y = 1 * speed;
playeer.style.backgroundImage="url('./img/player_back.png')";
    }
    if(e.key==="ArrowLeft"){
        playerv.x = -1 * speed;
playeer.style.backgroundImage="url('./img/player_left.png')";
        }
        if(e.key==="ArrowRight"){
            playerv.x = 1 * speed;
playeer.style.backgroundImage="url('./img/player_right.png')";
}
  playeer.classList.add("run");

})
window.addEventListener("keyup",(e)=>{
playerv.x=0;
playerv.y=0;
playeer.classList.remove("run");
})
// #########
function garssrandom(){
    for (let i = 0; i < grascount; i++) {
        let newGras = document.createElement("div");
        newGras.classList.add("gras");
        newGras.style.left = Math.random() * 100 +"%"; 
        newGras.style.top = Math.random() * 100 +"%"; 
        document.body.appendChild(newGras);
    }
}
garssrandom()
function ballrandom(){
    for (let i = 0; i < ballcount; i++) {
        let newball = document.createElement("div");
        newball.classList.add("ball");
        newball.style.left = Math.random() * 100 +"%"; 
        newball.style.top = Math.random() * 100 +"%"; 
        document.body.appendChild(newball);
    }
}
ballrandom()
function checkCollisions() {
    balls = document.querySelectorAll(".ball");
    balls.forEach((ball) => {
      if (collision(ball, playeer)) {
        ball.style.left = Math.random() * 100 + "%";
        ball.style.top = Math.random() * 100 + "%";
        sound.play();
      }
    });
  }
function collision($div1, $div2) {
    var x1 = $div1.getBoundingClientRect().left;
    var y1 = $div1.getBoundingClientRect().top;
    var h1 = $div1.clientHeight;
    var w1 = $div1.clientWidth;
    var b1 = y1 + h1;
    var r1 = x1 + w1;
  
    var x2 = $div2.getBoundingClientRect().left;
    var y2 = $div2.getBoundingClientRect().top;
    var h2 = $div2.clientHeight;
    var w2 = $div2.clientWidth;
    var b2 = y2 + h2;
    var r2 = x2 + w2;
  
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }
// ##########
start();
update();

