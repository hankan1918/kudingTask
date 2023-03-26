const modeChangeButton = document.querySelector('#mode');
const backgroundColorChange = document.querySelector("#modeC");
const body = document.querySelector('body').style;
const color = ["tomato", "#94bbe9", "#eeaeca", "#090979", "#020024", "#fd1d1d", "#fcb045"];
let cur = 0;
let i = 0;
function changeMode(){
    if(cur==0){
        body.backgroundColor = "black";
        body.color="white";
        cur++;
    }
    else if(cur==1){
        body.backgroundColor = "rgb(3, 107, 63)";
        body.color="white"
        cur++;
    }
    else{
        body.backgroundColor ="white";
        body.color="black";
        cur = 0;
    }
    
}
function backgroundColorHandler(){
    if(i==7) i=0;
    body.backgroundColor = color[i];
    i++;
}
modeChangeButton.addEventListener('click', changeMode);
backgroundColorChange.addEventListener('click', backgroundColorHandler);