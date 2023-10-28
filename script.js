console.log("test");

const score=document.querySelector(".score");
const campo=document.querySelector(".campo");
const endgame=document.querySelector(".endgame");
const botton=document.querySelector(".retry");

const maxbombe=16;
const totcelle=100;
const maxscore= totcelle - maxbombe;

let punti=0

let bomb=[];
while (bomb.length < maxbombe){
const num= Math.floor(Math.random()*totcelle) + 1

if(bomb.includes(num) === false){
    
    bomb.push(num)
} 

}
//          GRIGLIA

let vert= 1

for (let i=1; i<=100; i++){
const cell=document.createElement('div')
if (vert%2===1){

    if(i%2 !=0){
        
        cell.classList.add('cell')
        cell.classList.add('scuro')
    } else{
        cell.classList.add('cell') 
    }
    if(i%10===0){
        vert++
    }
} else {
    if(i%2 !=0){
        
        cell.classList.add('cell')
    } else{
        cell.classList.add('cell') 
        cell.classList.add('scuro')
    }
    if(i%10===0){
        vert++
    }
}
campo.appendChild(cell)

const celle=document.querySelectorAll(".cell")

cell.addEventListener('click', function(){
    if(bomb.includes(i)){
        cell.classList.add('aaa')
        fine()
    } else{
        if(cell.classList.contains('nobomba')){

        } else{

            cell.classList.add('nobomba')
            modpunti()
            if(bomb.includes(i-1)){
                celle[i-2].innerText= 1
            } 
            if(bomb.includes(i+1)){
                celle[i+2].innerText= 1
            }
            if(bomb.includes(i-10)){
                celle[i-11].innerText= 1
            } 
            if(bomb.includes(i+10)){
                celle[i+11].innerText= 1
            }
        }
    }
})
}

function modpunti(){


    punti++

score.innerText = String(punti).padStart(5,0)
console.log(punti)


}

function fine(){
endgame.classList.remove('endgame')

for(i=0;i<=celle.length;i++){
    if(bomb.includes(i)){
        celle[i-1].classList.add('aaa')
    }
}

}

botton.addEventListener('click',function (){
    window.location.reload()})