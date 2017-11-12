function harmlessRansomNote(noteText, magazineText) {
    var noteArray = noteText.split(" ");
    var magazineArray = magazineText.split(" ");
    var magazineObj = {};

    magazineArray.forEach(function (word) {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    var noteIsPossible = true;
    noteArray.forEach(function (word) {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) {
                noteIsPossible = false;
            }
        }
        else {
            noteIsPossible = false;
        }
    });
   console.log( noteIsPossible);
}

harmlessRansomNote("this is a secret not for you from a secret admirer","this is all the magazine text in the magazine with a secret key word in here to see if it can read a detect all the words that it needs to show.")