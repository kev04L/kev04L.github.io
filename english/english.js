const LETTER = "abcdefghijklmnopqrstuvwxy��z";

$(document).ready(function () {
  $("#submit").click(function () {
    $("#output").html("");
    var intxt = $("#inBox").text();
    var unicodeValue = 0;
    var letterCode = 0;
    var letterPosition = 0;
    var baseCode = 12;
    var basePosition = 20;
    for (let i in intxt) {
      unicodeValue = intxt.charCodeAt(i);
      if (unicodeValue > 1304 && unicodeValue < 1398) {
        if (unicodeValue > 1392) {
          letterPosition = unicodeValue - basePosition - 1312 + 2;
          //accounts for centering of letter z in bases a though e
        } else {
          letterPosition = unicodeValue - basePosition - 1312;
        }
        letterCode = 5 * Math.floor(letterPosition / 9) + (letterPosition % 9);
        //console.log("letterPosition " + letterPosition);
        //console.log("baseCode: " + baseCode);
        //console.log("unicodeValue: " + unicodeValue);
        //console.log("basePosition: " + basePosition);
        $("#output").append(LETTER[letterCode]);
      } else if (unicodeValue > 1397 && unicodeValue < 1424) {
        if (unicodeValue == 1423) {
          baseCode = unicodeValue - 1398 + 2; //accounts for the switch z being centered
        } else {
          baseCode = unicodeValue - 1398;
        }
        basePosition = 40 - (9 * Math.floor(baseCode / 5) + (baseCode % 5));
        //console.log("Base switch to: Base " + LETTER[baseCode]);
      } else {
        $("#output").append(intxt[i]);
      }
    }
  });
});
