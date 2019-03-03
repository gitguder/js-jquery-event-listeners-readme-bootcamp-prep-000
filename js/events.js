//define functions here
function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
    return;
});
}

function frameIt() {
$('img').on("load", function(){
    return "https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg"
  });
  return 'tasty'
}

$(document).ready(function(){

// call functions here

});
