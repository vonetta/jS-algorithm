var array = [];

function palindrome(str) {
    for (var i = str.length -1; i >= 0; i--) {
        console.log(str[i ]);
        array.push(str[i])
    }
        console.log(array)
}

palindrome("max");

function isPalindrome(string) {
    string = string.toLowerCase();
    var array = string.split("");
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split("");
    var lettersArr = [];
    array.forEach(function character() {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    if (letterArr.join("") === lettersArr.reverse().join("")) return true;
    else return false;
}

isPalindrome("Madam I'm Adam");
