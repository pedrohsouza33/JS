
let string = "ana"
let string2 = "joao"

function isPalindrome(str) {
    let left = 0;
    let right = str.length-1;

    while(left < right) {
        if (str[left] !== str[right]) {
            return false;

        } 
        left++;
        right--;
    }
    return true;
    }

console.log(isPalindrome(string));
console.log(isPalindrome(string2));