let banner_img=document.getElementById('banner-img');
let banner=1;
let music=new Audio('audio/bk_music.mp3');
let button=document.getElementById('btn');

function banner_change(){
         if(banner==1){
             banner_img.src='img/banner1.jpg';
         }
         else if(banner==2){
             banner_img.src='img/banner2.jpg';
         }
         else if(banner==3){
             banner_img.src='img/banner3.jpg';
         }
         else if(banner==4){
             banner_img.src='img/banner4.jpg';
         }
         else if(banner==5){
             banner_img.src='img/banner5.jpg';
         }
         else if(banner==6){
             banner_img.src='img/banner6.jpg';
         }
         else if(banner==7){
             banner_img.src='img/banner7.jpg';
         }
    

  
         if(banner<7){
             banner++;
         }
         else{
             banner=1;
         }
}

function flicker_effect(){
    let B=document.getElementById('B');
    let A=document.getElementById('A');
    let R=document.getElementById('R');
    let D=document.getElementById('D');
    let A=document.getElementById('A');
    let N=document.getElementById('N');
    // let D=document.getElementById('D');

    
    let number=Math.ceil(Math.random()*40);
    if(number==1){
        B.classList.add('light-effect1');
    }
    if(number==2){
        A.classList.add('light-effect1');
    }
    if(number==3){
        R.classList.add('light-effect1');
    }
    if(number==4){
        D.classList.add('light-effect1');
    }
    if(number==5){
        A.classList.add('light-effect1');
    }
    if(number==6){
        N.classList.add('light-effect1');
    }
    if(number==7){
        B.classList.add('light-effect1');
    }
    if(number==8){
        A.classList.add('light-effect1');
    }
    if(number==9){
        R.classList.add('light-effect2');
    }
    if(number==10){
        D.classList.add('light-effect2');
    }
    if(number==11){
        A.classList.add('light-effect2');
        
    }
    if(number==12){
        N.classList.add('light-effect2');
        
    }   
    if(number==13){
        B.classList.add('light-effect2');
        
    }
    if(number==14){
        A.classList.add('light-effect2');
        
    }
    if(number==15){
        R.classList.add('light-effect2');
        
    }
    if(number>=16 && number<=20){
        D.classList.add('light-effect1');
        T.classList.add('light-effect1');
        
    }
    if(number>=20 && number<=23){
        T.classList.add('light-effect1');
        A.classList.add('light-effect1');   
    }

    if(number>=23 && number <=25){
        H.classList.add('light-effect1');
        N.classList.add('light-effect1');

        
    }
    if(number>=25 && number <=28){
        N.classList.add('light-effect1');
        A.classList.add('light-effect1');

        
    }
    if(number>=29 && number <=32){
        B.classList.add('light-effect2');
        A.classList.add('light-effect2');
        R.classList.add('light-effect2');
        D.classList.add('light-effect2');
        A.classList.add('light-effect2');
        N.classList.add('light-effect2');
        // D.classList.add('light-effect2');


    }
    if(number>=33 && number <=36){
        B.classList.add('light-effect1');
        A.classList.add('light-effect1');
        R.classList.add('light-effect1');
        D.classList.add('light-effect1');
        A.classList.add('light-effect1');
        N.classList.add('light-effect1');
        // D.classList.add('light-effect1');
1
    }
    

    setTimeout(() => {
        B.classList.remove('light-effect1');
        A.classList.remove('light-effect1');
        R.classList.remove('light-effect1');
        D.classList.remove('light-effect1');
        A.classList.remove('light-effect1');
        N.classList.remove('light-effect1');
        // D.classList.remove('light-effect1');
        B.classList.remove('light-effect2');
        A.classList.remove('light-effect2');
        R.classList.remove('light-effect2');
        D.classList.remove('light-effect2');
        A.classList.remove('light-effect2');
        N.classList.remove('light-effect2');
        // D.classList.remove('light-effect2');

    }, 1000);
    
 

}


let flag=0;
let banner_switch_speed=7000;
button.onclick=function(){

   if(flag==1)
   return;
   
   flag=1;

    music.play();
    music.loop=true; 
    
    setInterval(() => {
        banner_change();
    }, banner_switch_speed);
    
    setInterval(() => {
        flicker_effect();
    }, 2000);

}


