var modal = document.getElementById("myModal");
var modal2=document.getElementById("myModal2");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var c1=document.getElementById("c1");
var c2=document.getElementById("c2");


var addbtn=document.getElementById("addbutton");
var submitbtn=document.getElementById("submitbutton");

addbtn.onclick=function(){
    modal.style.display="none";
    modal2.style.display="block";
}

submitbtn.onclick=function(){
    modal2.style.display="none";
}
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
c1.onclick = function() {
  modal.style.display = "none";
  document.getElementById("myForm1").submit();
}
c2.onclick=function(){
    modal2.style.display="none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("myForm1").submit();
  }
  else if(event.target == modal2){
      modal2.style.display = "none";
  }
}