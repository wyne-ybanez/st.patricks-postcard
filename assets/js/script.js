//Navigation

$('document').ready(function(){
    $('.burger').click(function (event){
        $('.burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
 
//Paddy mode

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

//Timer

let countDownDate = new Date('March 17, 2021').getTime();

let x = setInterval (function() {
    
  let today  = new Date().getTime();

  let result = countDownDate - today;

  let days = Math.floor(result / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML = days +' ' + "days ";

  if (result < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Happy Saint Patrick's Day!";
  }
}, 1000);


