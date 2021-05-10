
function randomImgSetter() {

    var randomImg = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
    var randomNumber1 = Math.floor(Math.random() * randomImg.length);
    var randomNumber2 = Math.floor(Math.random() * randomImg.length);

    // console.log(randomNumber1);
    // var randomImg = "dice" + randomNumber1 + ".png";
    // console.log(randomImg);
    // var n = randomImg.length;
    // console.log(n);

    if (randomNumber1 === randomNumber2) {
        document.querySelector("#heading").innerText = "Its a Draw !";
    }
    else if (randomNumber1 > randomNumber2) {

         document.querySelector("#heading").innerText = "player 1 wins !";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("#heading").innerText = "player 2 wins !";
    }

    document.querySelector(".img1").src = randomImg[randomNumber1];
    document.querySelector(".img2").src = randomImg[randomNumber2];

}

randomImgSetter();


/*

var randomNumber1 = (Math.floor(Math.round() * 6) + 1); // 1 to 6
var randomDieceImage = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png
var randomImageSource = "images/" + randomDieceImage; // images/diece1.png to images/diece6.png
var image1 = document.querySelectorAll("img")[0];
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

*/