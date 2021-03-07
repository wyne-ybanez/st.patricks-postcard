$('document').ready(function(){
    $('.burger').click(function (event){
        $('.burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
 

    $('body').toggleClass(localStorage.toggled);
    function paddyLight() {
 
  if (localStorage.toggled != 'paddy_green') {
    $('body, p, h2').toggleClass('paddy_green', true);
    localStorage.toggled = "paddy_green";
     
  } else {
    $('body, p, h2').toggleClass('paddy_green', false);
    localStorage.toggled = "";
  }
}
if ($('body').hasClass('paddy_green')) {
   $( '#checkBox' ).prop( "checked", true )
} else {
  $( '#checkBox' ).prop( "checked", false )
}




