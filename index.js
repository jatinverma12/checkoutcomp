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