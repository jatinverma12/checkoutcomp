$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 1000,
    max: 4000,
    values: [ 1000, 4000 ],
    slide: function( event, ui ) {
      $( "#r1" ).val( ui.values[ 0 ]);
      $("#r2").val(ui.values[1]);
    }
  });
  $( "#r1" ).val( $( "#slider-range" ).slider( "values", 0 ));
  $( "#r2" ).val( $( "#slider-range" ).slider( "values", 1 ));
} );

var filter=document.getElementsByClassName('filters')[0];
var btn=document.getElementsByClassName('mobileview')[0];

btn.addEventListener('click',function(){
  if(filter.style.display=="none")
  filter.style.display="block";
  else
  filter.style.display="none";
})