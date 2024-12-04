// 1. Find the 10th character
function findTenthChar() {
    const array = prompt("Enter an array (comma-separated):").split(",");
    if (array.length >= 10) {
        alert(`The 10th character is: ${array[9]}`);
    } else {
        alert("Array has less than 10 elements!");
    }
}

// 2. Find the last element
function findLastElement() {
    const array = prompt("Enter an array (comma-separated):").split(",");
    if (array.length > 0) {
        alert(`The last element is: ${array[array.length - 1]}`);
    } else {
        alert("Array is empty!");
    }
}

// 3. Popup with 10-digit restriction
function popupWith10Digits() {
    const input = prompt("Enter up to 10 digits:");
    if (/^\d{1,10}$/.test(input)) {
        alert(`Valid input: ${input}`);
    } else {
        alert("Invalid input! Enter only up to 10 digits.");
    }
}

// 4. Find word and repeated characters
function findWordAndRepeatedChars() {
    const array = prompt("Enter an array (comma-separated):").split(",");
    const word = prompt("Enter the word to search:");
    if (array.includes(word)) {
        const charCount = [...word].reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {});
        alert(`Word "${word}" found. Repeated characters: ${JSON.stringify(charCount)}`);
    } else {
        alert(`Word "${word}" not found in array.`);
    }
}

// 5. Count vowels
function countVowels() {
    const array = prompt("Enter an array of characters (comma-separated):").split(",");
    const vowels = ["a", "e", "i", "o", "u"];
    const count = array.filter((char) => vowels.includes(char.toLowerCase())).length;
    alert(`Number of vowels: ${count}`);
}

// 6. Find the longest word
function findLongestWord() {
    const sentence = prompt("Enter a sentence:");
    const longestWord = sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
    alert(`The longest word is: ${longestWord}`);
}

// 7. Toggle case
function toggleCase() {
    const text = prompt("Enter a string:");
    const converted = [...text].map((char) =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join("");
    alert(`Converted string: ${converted}`);
}

// 8. Find word location
function findWordLocation() {
    const text = prompt("Enter a string:");
    const word = prompt("Enter the word to find:");
    const position = text.indexOf(word);
    if (position !== -1) {
        alert(`Word "${word}" found at position: ${position}`);
    } else {
        alert(`Word "${word}" not found.`);
    }
}

// 9. Use splice
function useSplice() {
    let array = prompt("Enter an array (comma-separated):").split(",");
    const action = prompt("Choose action: delete/insert/replace");
    const index = parseInt(prompt("Enter the index:"), 10);

    if (action === "delete") {
        array.splice(index, 1);
    } else if (action === "insert") {
        const newValue = prompt("Enter the value to insert:");
        array.splice(index, 0, newValue);
    } else if (action === "replace") {
        const newValue = prompt("Enter the new value:");
        array.splice(index, 1, newValue);
    }
    alert(`Updated array: ${array}`);
}

// 10. Analyze string
function analyzeString() {
    const text = prompt("Enter a string:");
    const words = text.trim().split(/\s+/).length;
    const characters = text.length;
    const spaces = text.split(" ").length - 1;
    const specialSymbols = text.replace(/[a-zA-Z0-9\s]/g, "").length;
    alert(`Words: ${words}, Characters: ${characters}, Spaces: ${spaces}, Special Symbols: ${specialSymbols}`);
}
