var image=document.querySelectorAll(".image img");

image.forEach(i => {
    i.addEventListener("click",function(evt){
        var id = this.parentNode.id;
        alert(id);
        var div =document.getElementById(`${id}`)
        var pappu=div.getElementsByClassName('.animation')[0];
        alert(pappu);
        pappu.style.display="block";
      //  anime.style.display="block";
    });
    
    // i.addEventListener("mouseout",()=>{
    //    // anime.style.display="none";
    // })
});
