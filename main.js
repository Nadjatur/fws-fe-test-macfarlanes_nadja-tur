function myFunction() {
    var element = document.getElementById("searchwindow");
    const targetDiv = document.getElementById("searchwindow");
    if (targetDiv.style.display !== "none") {
     targetDiv.style.display = "none";
   } else {
     targetDiv.style.display = "block";
    //element.classList.add("bg-yellow");
   } 
 }