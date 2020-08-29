$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "🌗" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "🌓" );
    }
});