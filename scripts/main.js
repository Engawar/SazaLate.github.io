var myHTML = document.querySelector('h6');
myHTML.onclick = function(){
    alert('404 not found.')
};


// 以下、画像クリックすると画像が差し替わるプログラム
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_5604.JPG'){
        myImage.setAttribute('src','images/1.JPG');
    } else if(mySrc === 'images/1.JPG'){
        myImage.setAttribute('src','images/2.JPG');
    } else if(mySrc === 'images/2.JPG'){
        myImage.setAttribute('src','images/3.JPG');
    } else if(mySrc === 'images/3.JPG'){
        myImage.setAttribute('src','images/4.JPG');
    } else {
        myImage.setAttribute('src','images/IMG_5604.JPG');
    }
}


//　ここからボタンを作って自己紹介を改ざんするプログラム
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
