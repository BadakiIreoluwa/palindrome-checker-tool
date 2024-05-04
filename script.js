// Initialize buttons and inputs and isPalindrome boolean
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

// Recieve and clean string from #text-input, removing whitespace, punctuation and symbols. Convert uppercase letters to lowercase for comparison purposes
function cleanInputString(str) {
    const regex = /[\W_]/g
    return str.replace(regex, '').toLowerCase();
}

// Create a new string by reversing the cleaned string
function checkPalindrome(str) {
    let charArray = str.split('');
    let reverseStr = charArray.reverse().join('');
    // if a string is the same reversed then it is a palindrome
    return reverseStr === str ? true : false; 
}

// Display result of check in #result with original input
checkButton.addEventListener("click", () => {
    if (textInput.value == "") {
        alert("Please input a value");
    } else {
        const input = textInput.value;
        const isPalindrome = checkPalindrome(cleanInputString(input));
        if (isPalindrome) {
            resultDiv.classList.add("is-palindrome");
            resultDiv.innerHTML = `<strong>${input}</strong> is a palindrome`;
        } else {
            resultDiv.classList.remove("is-palindrome");
            resultDiv.innerHTML = `<strong>${input}</strong> is not a palindrome`;
        }
        resultDiv.classList.remove("hidden");
    }
})
