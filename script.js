const modeChangeButton = document.querySelector('#mode');
const body = document.querySelector('body');
let cur = 0;


function changeMode(){
    console.log("clicked!")
    if(cur==0){
        body.id = 'night';
        cur++;
    }
    else if(cur==1){
        body.id = 'konkuk';
        cur++;
    }
    else{
        body.id = 'day';
        cur = 0;
    }
    
}
modeChangeButton.addEventListener('click', changeMode);