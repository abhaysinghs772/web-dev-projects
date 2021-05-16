
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$('.btn').click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

$("document").keydown(function () {
    if (!started) {
        $("#level-title").text('level' + level);
        nextSequence();
        started = true;
    }
});


function nextSequence() {
    level++;
    $("#level-title").text('level' + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    $('#' + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

}

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    setTimeout(function () {
        $('#' + currentColour).removeClass('pressed');
    }, 100);
}

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}