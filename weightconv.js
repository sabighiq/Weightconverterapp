document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;    //for grams
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046;     //for kilograms
  document.getElementById("ozOutput").innerHTML = lbs * 16;      //for ounces  
});
