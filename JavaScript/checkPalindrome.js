function checkPalindrome(inputString) {
    const revString = inputString.split('').reverse().join('');

    if (inputString === revString) {
        console.log(true);
        return true;
    }
    else {
        console.log(false);
        return false;
    }
}

checkPalindrome('bolton'); //expected output: false