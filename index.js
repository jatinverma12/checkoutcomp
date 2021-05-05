//FIRST TRACK ORDER MODALS JSS
$('.myBtn').click(function(){
    $('.modal1').css("display","block");
});

$('.trackbtn').click(function () {
    $('.modal11').css("display","block");
})

$('.helpbtn').click(function () {
    $('.modal12').css("display","block");
})
$('.customercarebtn').click(function () {
    $('.modal12').css("display","none");
    $('.modal121').css("display","block");
})
$('.cancelbtn').click(function () {
    $('.modal13').css("display","block");
})

$('.returnbtn').click(function () {
    $('.modal14').css("display","block");
})

$('.exchangebtn').click(function () {
    $('.modal15').css("display","block");
})

//filter button modal jss
$('#filterbtn').click(function () {
    $('.modal2').css("display","block");
})

//SECOND TRACK ORDER MODALS JSS
$('.myBtn2').click(function () {
    $('.modal3').css("display","block");
})


$('.trackbtn3').click(function () {
    $('.modal31').css("display","block");
})

$('.helpbtn3').click(function () {
    $('.modal32').css("display","block");
})
$('.customercarebtn3').click(function () {
    $('.modal32').css("display","none");
    $('.modal321').css("display","block");
})
$('.cancelbtn3').click(function () {
    $('.modal33').css("display","block");
})

$('.returnbtn3').click(function () {
    $('.modal34').css("display","block");
})

$('.exchangebtn3').click(function () {
    $('.modal35').css("display","block");
})












$(window).click(function(event) {
    if(event.target.className.split(' ')[0]=='modal1')
    $('.modal1').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal11')
    $('.modal11').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal12')
    $('.modal12').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal121')
    $('.modal121').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal13')
    $('.modal13').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal14')
    $('.modal14').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal15')
    $('.modal15').css("display","none");
    //filter modal js
    else if(event.target.className.split(' ')[0]=='modal2')
    $('.modal2').css("display","none");
    //second order modal js
    else if(event.target.className.split(' ')[0]=='modal3')
    $('.modal3').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal31')
    $('.modal31').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal32')
    $('.modal32').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal321')
    $('.modal321').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal33')
    $('.modal33').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal34')
    $('.modal34').css("display","none");
    else if(event.target.className.split(' ')[0]=='modal35')
    $('.modal35').css("display","none");
   
  })


