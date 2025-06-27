


// const hand=document.querySelector(".hand");
const hour=document.getElementById('hour');
const mint=document.getElementById('mint');
const second=document.getElementById('second');
// const tickSound=document.getElementById('tick-sound');
const tickSound=new Audio("clock-tick-76039.mp3")

function clockMove(){
    const date = new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

   // Rotation calculation
    let hrrotated=(hr%12)*30+min/2;
    let minrotated=min*6+sec*0.1;
    let secrotated=sec*6;
    
    // apply rotation
    hour.style.transform=`rotate(${hrrotated}deg)`;
    mint.style.transform=`rotate(${minrotated}deg)`;
    second.style.transform=`rotate(${secrotated}deg)`;

    // Tic Tic sound add
    tickSound.currentTime=0;
    tickSound.play();
}
setInterval(clockMove,1000);
clockMove();


const clock=document.getElementById('clock');
    for(let i=1;i<=12;i++){
         const number=document.createElement('div');
              number.className='number';
              number.innerText=i;
         
         const angle= (i*30-90)*(Math.PI/180);// convert degree to radian
              // distance from center
         const radius=20;   // adjust a/c to clock size
         // center x
         const x=23+radius*Math.cos(angle);
         // center y
          const y=23+radius*Math.sin(angle);
     
         // apply style on number
          number.style.left=`${x}vw`; 
          number.style.top=`${y}vw`;
     
          clock.appendChild(number);
          
     }


     // Toggle mode
     const togglemode=document.getElementById('togglemode');
     togglemode.addEventListener('click',()=>{
        document.body.classList.toggle('night');
     });
     

     





