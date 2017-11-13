function reverseWord(string) {
    var words = string.split(" ");
  
    for (var i = 0; i < words.length; i++) {
        for (var j = words[i].length - 1; j >= 0; j--) {
            console.log(words[i][j])
        }
    }
    return string
    
}

reverseWord("sam is great");

