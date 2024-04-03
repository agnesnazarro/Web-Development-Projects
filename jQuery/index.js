//$("h1").addClass("big-title margin-50"); //using class

//$("h1").hasClass("margin-50"); //to check if a class is there

//$("h1").text("Bye"); //to change text using jQuery

//$("button").html("<em>Hey</em>"); //.innerHTML

//$("img").attr("src"); // manipulate attribute

//$("a").attr("href", "https://www.yahoo.com");

//add event listener
/* $("button").click(function () {
    $("h1").css("color", "blue");
}); */

/* $("input").keydown(function (event) {
    console.log(event.key);
}); */

$(document).keydown(function (event) {
    $("h1").text(event.key);
});

//more flexible way of adding event listener
/* $(document).on("event", function(){

}); */

/* $("h1").before("<button>New</button>"); //before the opening tag
$("h1").after("<button>New</button>"); //after the tag
$("h1").prepend("<button>New</button>"); //add the new html element just after the opening tag and before the content
$("h1").append("<button>New</button>"); //add the new html element just before the closing tag and after the content
//.remove will remove all the selected element 
*/

//animation that will hide the selected element
/* $("button").on("click", function () {
    $("h1").hide();
}); */

//toggle the appearance
/* $("button").on("click", function () {
    $("h1").toggle();
}); */

//fade out - reduce the opacity then it will hide it
// fadeIn, fadeToggle
/* $("button").on("click", function () {
    $("h1").fadeOut();
}); */

//slide up and down - collapses the selected element
// slideToggle
/* $("button").on("click", function () {
    $("h1").slideUp();
}); */

//.animate {add only css rules w/ numeric values}
$("button").on("click", function () {
    $("h1").animate({ opacity: 0.5 });
});
