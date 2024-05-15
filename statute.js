function statuteLookup() {

  //BASIC VARIABLES
  var behavior = "popup";
  var noText = "";
  var text = document.statuteForm.statuteText.value;

  //ARRAY FOR STATUTES
  var statuteArray = new Array;
  statuteArray["Speed"] = "Operate vehicle at speed greater than reasonable and proper. // Speed limitation on motorcycles, motor-driven cycles, and motorized scooters. // Minimum speed regulation. // Properly operating speedometer.";
  statuteArray["Speed2"] = "47-11-806. Special speed limitations.";
  statuteArray["10-2"] = "Radio Check Loud and Clear";
  //CHECK IF INPUT IS BEING USED
  if (behavior == "popup")
    var trans = noText;
  else
    var trans = "";

  //CHECK IF TEXT FROM INPUT IS IN THE ARRAY
  if (text) {
    var thisChar = text;
    trans = trans + statuteArray[thisChar];
  }
  var html = '...'
  //IF TEXT IS OTHER THEN UNDEFINED, LOAD TO TEXTAREA OTHERWISE LOAD noText WHICH IS EMPTY
  if (trans !== "undefined") {
    document.getElementById('statuteoutput').innerHTML = trans;
  }
  if (trans == "undefined") {
    document.getElementById('statuteoutput').innerHTML = html;
  }
}
// CREATED BY Sasha Alexander | OKLRP //