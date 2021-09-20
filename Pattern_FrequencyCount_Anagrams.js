/*
Givent two strings, write a function, validAnagram, to determine if the 
second string is an anagram of the first. An anagram is a word, phrase,
or name formed by rearranging the letters of another, such as cinema,
formed from iceman.

Examples:
validAnagram('', '')// true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') true
validAnagram('rat', 'car') //false
validAnagram('awesome, 'awesom') //false
validAnagram('qwerty', 'qeywrt') //true
validAnagram('texttwisttime', 'timetwisttext')//true
*/

function validAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }

    const stringCounter = {};
    
    for(let val of str1) {
        stringCounter[val] ? (stringCounter[val] += 1) : (stringCounter[val] = 1);
    }

    console.log(stringCounter)

    for(let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if(!stringCounter[letter]) {
            return false;
        }

        stringCounter[letter] -= 1;
    }

    //console.log(stringCounter)

    return true
}

validAnagram('texttwisttime', 'timetwisttext')