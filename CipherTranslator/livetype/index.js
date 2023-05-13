const LETTER = "abcdefghijklmnopqrstuvwxyz"; //for getting correct letter position
const PUNCTUATION = " .,!?:;0123456789";

var base = 12;
var bswap = false;
var textlength = 0;



function decToHex(x) {
    var out = 0;
    var place = 1;

    while (x > 0) {
        out += (x % 16)*place;
        x = Math.floor(x/16);
        place *= 10;
    }
    return out;
}

function getBase(l) {
    while (l != 0 && $("#inBox").val().slice(l-1, l).charCodeAt() < 500) {
        l--;
    }
    if (l != 0) {
        var prevChar = decToHex($("#inBox").val().slice(l-1, l).charCodeAt());
        return Math.floor((prevChar-3401)/27);
    } else {
        return 12;
    }
}


$( document ).ready(function() {
    $('#inBox').bind('input propertychange', function() {
        var currentlength = $('#inBox').val().length;
        if (currentlength == 1 + textlength) {
            //------------------Single character added-------------------
            var loc = document.getElementById('inBox').selectionStart;
            var intxt = $('#inBox').val().toLowerCase().slice(loc-1, loc);
            //cycle through all the letters in the input text
            if (LETTER.indexOf(intxt) == -1) {
                if (PUNCTUATION.indexOf(intxt) != -1) {
                    $("#inBox").append(intxt);
                    //textlength += 1;
                } else {
                    $("#inBox").val($('#inBox').val().slice(0, loc-1)+$('#inBox').val().slice(loc));
                }
                if (intxt == "~") {
                    if (bswap) {
                        bswap = false;
                    } else {
                        bswap = true;
                    }
                    //remove the thing so that it is not included
                    $("#inBox").val($('#inBox').val().slice(0, loc-1)+$('#inBox').val().slice(loc));
                }

            }
            else {
                var unicode = 3400; 
                if (bswap) {
                    unicode += 27;
                    bswap = false;
                    unicode += LETTER.indexOf(intxt)*27;
                } else {
                    //find the correct base
                    /*var prevLoc = loc-1;
                    while (prevLoc != 0 && $("#inBox").val().slice(prevLoc-1, prevLoc).charCodeAt() < 500) {
                        prevLoc--;
                    }
                    if (prevLoc != 0) {
                        var prevChar = decToHex($("#inBox").val().slice(prevLoc-1, prevLoc).charCodeAt());
                        //console.log(prevChar);
                        base = Math.floor((prevChar-3401)/27);
                    } else {
                        base = 12;
                    }*/
                    base = getBase(loc-1);
                    unicode += LETTER.indexOf(intxt) + 1; //getting correct letter


                    //find the correct base
                    unicode += base * 27; //setting correct base
                console.log(base);
                }
                var unistring = "0x" + unicode;
                //console.log(unicode);
                $("#inBox").val($('#inBox').val().slice(0, loc-1)+String.fromCodePoint(unistring)+$('#inBox').val().slice(loc));
                //textlength += 1;
            }
            document.getElementById('inBox').setSelectionRange(loc, loc);
        }
        //$("#inBox").html(outtxt);

        //update the new textlength
        textlength = $('#inBox').val().length;
    });
});