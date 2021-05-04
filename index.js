
$('#myBtn').click(function(){
    $('.modal1').css("display","block");
});

$('#trackbtn').click(function () {
    $('.modal11').css("display","block");
})

$('#helpbtn').click(function () {
    $('.modal12').css("display","block");
})
$('.customercarebtn').click(function () {
    $('.modal12').css("display","none");
    $('.modal121').css("display","block");
})
$('#cancelbtn').click(function () {
    $('.modal13').css("display","block");
})

$('#returnbtn').click(function () {
    $('.modal14').css("display","block");
})

$('#exchangebtn').click(function () {
    $('.modal15').css("display","block");
})


$('#filterbtn').click(function () {
    $('.modal2').css("display","block");
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
    else if(event.target.className.split(' ')[0]=='modal2')
    $('.modal2').css("display","none");
  })


