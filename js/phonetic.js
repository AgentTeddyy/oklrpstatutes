//CHECK IF CHECKBOX IS CHECKED OR NOT (TESTING PURPOSES ONLY)
function validate() {
  if (document.getElementById('natocheck').checked) {
    console.log("Validate = checked");
  } else {
    console.log("Validate = unchecked")
  }
}
//RELOAD TEXT WITH NEW ARRAY WHEN CLICKING CHECKBOX
function eraseText() {
  //document.getElementById("outputtext").value = "";
  //document.getElementById("outputtexttwo").value = "";
  NatoPhon()
}

function NatoPhon() {
  //BASIC VARIABLES
  var behavior = "popup";
  var font_tag = "";
  var text = document.phonForm.phonText.value;
  var lctext = text.toLowerCase();
  //ARRAY FOR NATO
  var phonArrayOne = new Array;
  phonArrayOne["a"] = "Alpha";
  phonArrayOne["b"] = "Bravo";
  phonArrayOne["c"] = "Charlie";
  phonArrayOne["d"] = "Delta";
  phonArrayOne["e"] = "Echo";
  phonArrayOne["f"] = "Foxtrot";
  phonArrayOne["g"] = "Golf";
  phonArrayOne["h"] = "Hotel";
  phonArrayOne["i"] = "India";
  phonArrayOne["j"] = "Juliet";
  phonArrayOne["k"] = "Kilo)";
  phonArrayOne["l"] = "Lima";
  phonArrayOne["m"] = "Mike";
  phonArrayOne["n"] = "November";
  phonArrayOne["o"] = "Oscar";
  phonArrayOne["p"] = "Papa";
  phonArrayOne["q"] = "Quebec";
  phonArrayOne["r"] = "Romeo";
  phonArrayOne["s"] = "Sierra";
  phonArrayOne["t"] = "Tango";
  phonArrayOne["u"] = "Uniform";
  phonArrayOne["v"] = "Victor";
  phonArrayOne["w"] = "Whiskey";
  phonArrayOne["x"] = "X-ray";
  phonArrayOne["y"] = "Yankee";
  phonArrayOne["z"] = "Zulu";
  phonArrayOne["0"] = "Zero";
  phonArrayOne["1"] = "One";
  phonArrayOne["2"] = "Two";
  phonArrayOne["3"] = "Three";
  phonArrayOne["4"] = "Four";
  phonArrayOne["5"] = "Five";
  phonArrayOne["6"] = "Six";
  phonArrayOne["7"] = "Seven";
  phonArrayOne["8"] = "Eight";
  phonArrayOne["9"] = "Niner";
  phonArrayOne["/"] = "Slash";
  phonArrayOne["-"] = "Dash";
  phonArrayOne["."] = "Dot";
  phonArrayOne[" "] = '<strong style="color: red">//</strong>';
  //ARRAY FOR NORMAL
  var phonArrayTwo = new Array;
  phonArrayTwo["a"] = "Adam";
  phonArrayTwo["b"] = "Boy";
  phonArrayTwo["c"] = "Charlie";
  phonArrayTwo["d"] = "David";
  phonArrayTwo["e"] = "Edward";
  phonArrayTwo["f"] = "Frank";
  phonArrayTwo["g"] = "George";
  phonArrayTwo["h"] = "Henry";
  phonArrayTwo["i"] = "Ida";
  phonArrayTwo["j"] = "John";
  phonArrayTwo["k"] = "King";
  phonArrayTwo["l"] = "Lincoln";
  phonArrayTwo["m"] = "Mary";
  phonArrayTwo["n"] = "Nora";
  phonArrayTwo["o"] = "Ocean";
  phonArrayTwo["p"] = "Paul";
  phonArrayTwo["q"] = "Queen";
  phonArrayTwo["r"] = "Robert";
  phonArrayTwo["s"] = "Sam";
  phonArrayTwo["t"] = "Tom";
  phonArrayTwo["u"] = "Union";
  phonArrayTwo["v"] = "Victor";
  phonArrayTwo["w"] = "William";
  phonArrayTwo["x"] = "X-Ray";
  phonArrayTwo["y"] = "Young";
  phonArrayTwo["z"] = "Zebra";
  phonArrayTwo["0"] = "Zero";
  phonArrayTwo["1"] = "One";
  phonArrayTwo["2"] = "Two";
  phonArrayTwo["3"] = "Three";
  phonArrayTwo["4"] = "Four";
  phonArrayTwo["5"] = "Five";
  phonArrayTwo["6"] = "Six";
  phonArrayTwo["7"] = "Seven";
  phonArrayTwo["8"] = "Eight";
  phonArrayTwo["9"] = "Niner";
  phonArrayTwo["/"] = "Slash";
  phonArrayTwo["-"] = "Dash";
  phonArrayTwo["."] = "Dot";
  phonArrayTwo[" "] = '<strong style="color: red">//</strong>';

  //CHECK IF INPUT IS BEING USED
  if (behavior == "popup")
    var trans = font_tag;
  else
    var trans = "";
  //CHECK IF CHECKBOX IS CHECKED AND USE THE CORRECT ARRAY
  if (document.getElementById('natocheck').checked) {
    if (lctext.length > 0) {
      for (var i = 0; i < lctext.length; i++) {
        var thisChar = lctext.charAt(i);
        trans += phonArrayOne[thisChar] + " ";
      }
    }
  } else if (lctext.length > 0) {
    for (var i = 0; i < lctext.length; i++) {
      var thisChar = lctext.charAt(i);
      trans += phonArrayTwo[thisChar] + " ";
    }
  }
  //OUTPUT THE VALUE TO THE DIV
  document.getElementById('phonoutput').innerHTML = trans;

}

// CREATED BY TYLER M. DOJRP //