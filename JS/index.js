function multipleFunc() {
  if( document.getElementById("mySelect").multiple == true ){
      document.getElementById("mySelect").multiple = false; 
      document.getElementById("mySelect").style.height = "40px"; 
      document.getElementById("select").value = "Select multiple options"; 
  }
  else{
      document.getElementById("mySelect").multiple = true; 
      document.getElementById("mySelect").style.height = "100px"; 
      document.getElementById("select").value = "Select single options"; 
  }
}
function myfunction() {
var mySelect = document.getElementById("mySelect").value;
if (mySelect == "other") {
  document.getElementById("other_input").style.display = "block";
}
else{
  document.getElementById("other_input").style.display = "none";
}
}
function refreshPage(){
  window.location.reload();
} 