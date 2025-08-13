// 1. Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
}

function reverseStringManual(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
// 2. Check if String is Palindrome

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

function isPalindromeManual(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
// 3. Find First Non-Repeating Character

function firstNonRepeating(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) return char;
    }
    return null;
}
// 4. Check if Two Strings are Anagrams

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    return str1.toLowerCase().split('').sort().join('') === 
           str2.toLowerCase().split('').sort().join('');
}

function areAnagramsCount(str1, str2) {
    if (str1.length !== str2.length) return false;
    const count = {};
    for (let char of str1.toLowerCase()) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let char of str2.toLowerCase()) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}
// 5. Count Vowels and Consonants

function countVowelsConsonants(str) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    return { vowels: vowelCount, consonants: consonantCount };
}
// 6. Remove Duplicates from String

function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

function removeDuplicatesManual(str) {
    let result = '';
    let seen = {};
    for (let char of str) {
        if (!seen[char]) {
            result += char;
            seen[char] = true;
        }
    }
    return result;
}
// 7. Find Longest Substring Without Repeating Characters

function longestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    const charIndex = {};
    
    for (let end = 0; end < str.length; end++) {
        if (charIndex[str[end]] !== undefined && charIndex[str[end]] >= start) {
            start = charIndex[str[end]] + 1;
        }
        charIndex[str[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}
// 8. String Compression (Run Length Encoding)

function compressString(str) {
    if (str.length === 0) return '';
    let compressed = '';
    let count = 1;
    
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            compressed += str[i - 1] + count;
            count = 1;
        }
    }
    compressed += str[str.length - 1] + count;
    return compressed.length < str.length ? compressed : str;
}
// 9. Check if String Contains All Unique Characters

function hasUniqueChars(str) {
    return new Set(str).size === str.length;
}

function hasUniqueCharsManual(str) {
    const seen = {};
    for (let char of str) {
        if (seen[char]) return false;
        seen[char] = true;
    }
    return true;
}
// 10. Find All Permutations of String

function getPermutations(str) {
    if (str.length <= 1) return [str];
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        const perms = getPermutations(remaining);
        for (let perm of perms) {
            result.push(char + perm);
        }
    }