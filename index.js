let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let boat6 = document.getElementById('boat6')
let mountains7 = document.getElementById('mountains7')
let omar = document.querySelector('.omar')
let river5 = document.getElementById('river5')
 

window.onscroll = ()=>{
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value * 4 + "px"
    mountains3.style.top = value * 2 + "px"
    mountains4.style.top = value * 1.5 + "px"
    river5.style.top = value+ "px"
    boat6.style.top = value + "px"
    boat6.style.left = value * 3 + "px" ;
    omar.style.fontSize = value + 'px';
    if(scrollY >= 87){
        omar.style.fontSize = 87 + 'px';
        omar.style.position = 'fixed';
        if(scrollY >= 560){
            omar.style.display ='none';
        }
        else{
            omar.style.display ='block';    
        }
    }
    if(scrollY>=140){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016 , #10001f)'
    }

}
