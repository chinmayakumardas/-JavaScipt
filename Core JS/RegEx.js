

// Regular expressions (regex) are a powerful tool for matching and manipulating text patterns in JavaScript. They allow you to search, validate, and extract data from strings.

// Creating a Regular Expression

// In JavaScript, you can create a regular expression using the RegExp constructor or by using a regex literal.

//1_ Using the RegExp Constructor


const Regex = new RegExp('pattern', 'flags');

//2._ Using a Regex Literal

const regEx = /pattern/flags;
// Pattern

// The pattern is the text that you want to match. It can be a simple string or a complex pattern using special characters.

// Flags

// Flags are optional and modify the behavior of the regex. The most common flags are:

// g: Global search (find all matches)
// i: Case-insensitive search
// m: Multiline search (treat the string as multiple lines)
// Regex Syntax

// Here are some common regex syntax elements:

// .: Matches any character (except newline)
// \w: Matches a word character (alphanumeric plus underscore)
// \W: Matches a non-word character
// \d: Matches a digit
// \D: Matches a non-digit
// ^: Matches the start of the string
// $: Matches the end of the string
// |: Matches either the expression before or after the |
// (): Groups the expression and captures the match
// []: Matches any character in the brackets
// [^]: Matches any character not in the brackets
// *: Matches zero or more occurrences
// +: Matches one or more occurrences
// ?: Matches zero or one occurrence
// {n}: Matches exactly n occurrences
// {n,}: Matches n or more occurrences
// {n,m}: Matches at least n and at most m occurrences


//3. Regex Methods

//Here are some common regex methods:

test() //Returns a boolean indicating whether the regex matches the string
exec() //Returns an array of matches, or null if no match is found
match()// Returns an array of matches, or null if no match is found
replace() //Replaces matches with a new string
search() //Returns the index of the first match, or -1 if no match is found


//Here are some examples of using regex in JavaScript:

//Matching a Pattern

const regexp = /hello/;
const strings = 'hello world';
console.log(regexp.test(strings)); // outputs true
//Extracting Matches
const regex2 = /(\w+)\s(\w+)/;
const string2 = 'hello world';
const match = regex2.exec(string2);
console.log(match[1]); // outputs "hello"
console.log(match[2]); // outputs "world"
//Replacing Matches


const regex3 = /hello/;
const string3 = 'hello world';
const newString = string3.replace(regex3, 'hi');
console.log(newString); // outputs "hi world"
//Validating Input


const regex = /^[a-zA-Z]+$/;
const input = 'hello';
console.log(regex.test(input)); // outputs true
//Common Use Cases

//Regex is commonly used for:

// Validating user input (e.g., email addresses, phone numbers)
// Extracting data from strings (e.g., extracting URLs from text)
// Searching and replacing text
// Parsing data formats (e.g., CSV, JSON)
// Best Practices

// Here are some best practices for using regex in JavaScript:

// Use regex literals instead of the RegExp constructor
// Use the u flag for Unicode support
// Use the y flag for sticky matching
// Avoid using regex for complex parsing tasks
// Test and debug your regex patterns thoroughly