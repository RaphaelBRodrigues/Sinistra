$(document).ready(function(){
  var index=1;
function carrosel(){
  if (index>3) {
    index=1;
  }
  $(".fotos-foto").attr("src","Views/src/banda"+index+".jpg");
  index++;


}
// setInterval(function(){carrosel()},2500);
});
