/*

I have used this script in a web page. The function itself takes a string called "input" as a parameter, and does all the 
operations based on that string. The radio boxes with the name "ordertype" return a value either as "a" for ascending and
"d" for descending order choice. The radio boxes with the name "wordsorlines" return a value which is either "w" for word 
by word ordering, or "l" for line by line ordering. At the and of the function, it returns an array of ordered words or
lines. A live example of this script can be seen on "alphabetizer.co".

*/

function sortAlphabetically(input){
    var order = document.querySelector('input[name="ordertype"]:checked').value;
    var wordsOrLines = document.querySelector('input[name="wordsorlines"]:checked').value;
    if(wordsOrLines == 'w'){
        var strArray = seperatorWords(input);
    }
    else{
        var strArray = seperatorLines(input);
    }
    strArray = strArray.sort(function (valueA, valueB) {
        var valueALowerCase = valueA.toLowerCase();
        var valueBLowerCase = valueB.toLowerCase();
    
        if (valueALowerCase < valueBLowerCase) {
            return -1;
        } else if (valueALowerCase > valueBLowerCase) {
            return 1;
        } else { //valueALowerCase === valueBLowerCase
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        }
    });
    if(order=='d'){
        strArray=strArray.reverse();
    }
    return strArray;
}
