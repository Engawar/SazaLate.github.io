/////////////////R_otonashi Portfolioをクリックすると404 not foundと出るプログラム//////////////
var myHTML = document.querySelector('h6');
myHTML.onclick = function(){
    alert('404 not found.')
};



/////////////////画像を3000ミリ秒で切り替えるプログラム/////////////////
var ChImage = new Array("images/IMG_5604.JPG","images/IMG_5605.JPG","images/IMG_5606.JPG","images/IMG_5607.JPG","images/IMG_5608.JPG");
var num = -1;

slideshow_timer();

function slideshow_timer(){
    if(num == 4){
        num = 0;
    } else {
        num ++;
    }
    document.getElementById("my_pic").src=ChImage[num];
    setTimeout("slideshow_timer()",3000);
}




/////////////////ここからボタンを作って自己紹介を改ざんするプログラム/////////////////
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h5');

// ここで関数を作る。setUserName()
function setUserName(){
    let myName = prompt('Please enter your message!');
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myHeading.textContent = myName + ' /by jon doe.';
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ' /by jon doe.';
}

myButton.onclick = function(){
    setUserName();
}
