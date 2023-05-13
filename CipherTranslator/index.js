const LETTER = "abcdefghijklmnopqrstuvwxyz"; //for getting correct letter position
const PUNCTUATION = " .,!?";


$( document ).ready(function() {
    $( "#submit" ).click(function() {
        $('#output').html("");
        var intxt = $('#inBox').val().toLowerCase();
        var outtxt = "";
        var base = "m";
        var bswap = false;
        //cycle through all the letters in the input text
        for (let i in intxt) {
            if (LETTER.indexOf(intxt[i]) == -1) {
                if (PUNCTUATION.indexOf(intxt[i]) != -1) {
                    $("#output").append(intxt[i]);
                }
                if (intxt[i] == "~") {
                    bswap = true;
                }

            }
            else {
                var unicode = 3400; 
                if (bswap) {
                    base = intxt[i];
                    unicode += 27;
                    bswap = false;
                } else {
                    unicode += LETTER.indexOf(intxt[i]) + 1; //getting correct letter
                }
                unicode += LETTER.indexOf(base) * 27; //setting correct base
                var unistring = "0x" + unicode;
                console.log(unistring);
                $("#output").append(String.fromCodePoint(unistring));
            }
        }
        //$("#inBox").html(outtxt);
    });
});