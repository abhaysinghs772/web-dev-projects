
// console.log($("h1").css("color", "green"));

// for adding 1 class
// $("h1").addClass("big-heading"); 

// for adding more then 1 class
$("h1").addClass("big-heading margin-50");

$("h1").text("good bye");
$("h1").html("<em>good bye</em>");

// manipulating attributes
// console.log($("img").attr("src"));

console.log($("a").attr("href"));

$("a").attr("href", "https://yahoo.com"); // set atttribute

// print in console
$("h1").attr("class");

/*************************** ADDING EVENT LISTNERS **********************************************/

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

// setting event listner to multiple elements of having same class
// before jQuery

// for(var i= 0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="pink";
//     });
// }

// after jQuery
$("button").click(function(){
    $("h1").css("color", "red");
});

// listnig keystrokes 
// $("input").keydown(function(event){
//     console.log(event.key);
// });

$(document).keydown(function(event){
    // console.log(event.key);
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    // console.log(event.key);
    $("h1").css("color", "gold");
});