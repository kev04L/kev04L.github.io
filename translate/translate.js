const LETTER = "abcdefghijklmnopqrstuvwxy��z"; //for getting correct letter position

$(document).ready(function () {
  $("#submit").click(function () {
    $("#output").html("");
    var intxt = $("#inBox").text().toLowerCase();
    console.log(intxt);
    var base = "m";
    var bswap = false;
    var letterCode = 0;
    var letterPosition = 0;
    var baseCode = 12;
    var basePosition = 20;
    var Return = 0;
    for (let i in intxt) {
      if (LETTER.indexOf(intxt[i]) == -1) {
        if (intxt[i] == "~") {
          bswap = true;
        } else if (intxt[i] == "\n") {
          $("#output").append("<br>");
        } else {
          $("#output").append(intxt[i]);
        }
      } else {
        if (bswap) {
          base = intxt[i];
          baseCode = LETTER.indexOf(intxt[i]);
          basePosition = 40 - (9 * Math.floor(baseCode / 5) + (baseCode % 5));
          bswap = false;
          if (baseCode == 27) {
            Return = baseCode + 1398 - 2; //accounts for z base switch position within font
          } else {
            Return = baseCode + 1398; //adds base switch character
          }
          $("#output").append(String.fromCharCode(Return));
        } else {
          letterCode = LETTER.indexOf(intxt[i]); //getting correct letter
          letterPosition = 9 * Math.floor(letterCode / 5) + (letterCode % 5); //getting correct position inside each base
          if (baseCode >= 0 && baseCode <= 4 && letterCode == 27) {
            Return = basePosition + letterPosition + 1312 - 2;
          } else {
            Return = basePosition + letterPosition + 1312;
          }
          $("#output").append(String.fromCharCode(Return));
        }
        /*console.log("char html unicode: " + Return);
        console.log("baseCode: " + baseCode);
        console.log("basePosition: " + basePosition);
        console.log("letterCode: " + letterCode);
        console.log("letterPosition: " + letterPosition);*/
      }
    }
  });
});
