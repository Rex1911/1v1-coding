const fs = require('fs');
const Question = require("./models/questionsModel");

let data = [

    {
        day: 1,
        question:"<p><span style=\"font-weight: 400;\">Write a program to check if a number is a power of 2.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next line contains an input integer <\/span><strong>a<\/strong><span style=\"font-weight: 400;\">.<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print YES if number is power of 2 else print NO<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=a&lt;=10^4<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">64<\/span><\/p>\n<p><span style=\"font-weight: 400;\">22<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">YES<\/span><\/p>\n<p><span style=\"font-weight: 400;\">NO<\/span><\/p>",
        title: "Power of 2",
        noOfTestCases: 2,
        testCases: ["2\n64\n22"],
        testCasesAnswer: ["YES","NO"],
        noOfPrivateCases: 7,
        privateCases: ["7\n2048\n7344\n2732\n1024\n6453\n4096\n8888"],
        privateCasesAnswer: ["YES","NO","NO","YES","NO","YES","NO"]
    },
    {
        day: 1,
        question:"<p><span style=\"font-weight: 400;\">Write a program to find hexadecimal equivalent of the natural number.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next following line indicates the input integer &lsquo;a&rsquo;<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a single line, the converted hexadecimal number<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=a&lt;=10^4<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">43<\/span><\/p>\n<p><span style=\"font-weight: 400;\">6<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2B<\/span><\/p>\n<p><span style=\"font-weight: 400;\">6<\/span><\/p>",
        title: "Convert to Hexadecimal",
        noOfTestCases: 2,
        testCases: ["2\n43\n6"],
        testCasesAnswer: ["2B","6"],
        noOfPrivateCases: 7,
        privateCases: ["7\n3774\n2374\n2883\n1883\n3483\n2389\n2993"],
        privateCasesAnswer: ["EBE","946","B43","75B","D9B","955","BB1"]
    },
    {
        day: 1,
        question:"<p><span style=\"font-weight: 400;\">Write a program to find octal equivalent of the natural number.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next line consists an integer &lsquo;a&rsquo;<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a single line, the converted octal number.<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=a&lt;=10^4<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">43<\/span><\/p>\n<p><span style=\"font-weight: 400;\">6<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">53<\/span><\/p>\n<p><span style=\"font-weight: 400;\">6<\/span><\/p>",
        title: "Convert to Octal",
        noOfTestCases: 2,
        testCases: ["2\n43\n6\n"],
        testCasesAnswer: ["53","6"],
        noOfPrivateCases: 7,
        privateCases: ["7\n3247\n248\n3\n2348\n9922\n7732\n4884"],
        privateCasesAnswer: ["6257","370","3","4454","23302","17064","11424"]
    },
    {
        day: 1,
        question:"<p><span style=\"font-weight: 400;\">Write a program to read a positive number having a decimal point and print the number of digits to the right and left of decimal point.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next line consists of positive number having a decimal point.<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a single line containing two space separated integers, the first integer denoting the number of digits to the left and the second denoting the number of digits to right<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=10^4<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2451.87<\/span><\/p>\n<p><span style=\"font-weight: 400;\">99.12<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">4 2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2 2 <\/span><\/p>",
        title: "Count number of digits to left and right pf point",
        noOfTestCases: 2,
        testCases: ["2\n2451.87\n99.12"],
        testCasesAnswer: ["4 2","2 2"],
        noOfPrivateCases: 7,
        privateCases: ["7\n64.83\n9384.33\n1.3422\n46.4444\n392.3\n88.3\n39.342"],
        privateCasesAnswer: ["2 2","4 2","1 4","2 4","3 1","2 1","2 3"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to check whether a given year is a leap year or not.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next line consists of integer which has to be checked for the leap year.<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print YES if the input year is leap year else print NO<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=a&lt;=10^4<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2012<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2013<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">YES<\/span><\/p>\n<p><span style=\"font-weight: 400;\">NO<\/span><\/p>",
        title: "Check Leap Year",
        noOfTestCases: 2,
        testCases: ["2\n2012\n2013"],
        testCasesAnswer: ["YES","NO"],
        noOfPrivateCases: 7,
        privateCases: ["7\n2012\n2016\n2020\n2024\n2018\n2053\n2043"],
        privateCasesAnswer: ["YES","YES","YES","YES","NO","NO","NO"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to check number it is TWISTED number or not.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><span style=\"font-weight: 400;\">NOTE: A number is twisted if it is prime and its reverse is also a prime<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Eg &ndash; 31 is prime, its reverse 13 is also prime.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next line consists of integer which is the input integer <\/span><strong>a.<\/strong><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a YES if number is twisted else NO<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=a&lt;=10^4<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=b&lt;=10^4<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">31<\/span><\/p>\n<p><span style=\"font-weight: 400;\">42<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Ouput:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">YES<\/span><\/p>\n<p><span style=\"font-weight: 400;\">NO<\/span><\/p>",
        title: "Twisted Number",
        noOfTestCases: 2,
        testCases: ["2\n31\n42"],
        testCasesAnswer: ["YES","NO"],
        noOfPrivateCases: 7,
        privateCases: ["7\n11\n23\n71\n889\n101\n149\n390"],
        privateCasesAnswer: [ 'YES', 'NO', 'YES', 'NO', 'YES', 'YES', 'NO' ]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to find the factors of a given number.<\/span><\/p>\n<p><strong>INPUT<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains a single integer denoting number of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next line consists of integer whose factors are to be yield. <\/span><\/p>\n<p><strong>OUTPUT<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each test case, the factors are displayed in a single line.<\/span><\/p>\n<p><strong>CONSTRAINS:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=a&lt;=10000<\/span><\/p>\n<p><strong>EXAMPLE<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">15<\/span><\/p>\n<p><span style=\"font-weight: 400;\">30<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1 3 5 15<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1 2 3 5 6 10 15 30<\/span><\/p>",
        title: "Factors of a number",
        noOfTestCases: 2,
        testCases: ["2\n15\n30"],
        testCasesAnswer: ["1 3 5 15","1 2 3 5 6 10 15 30"],
        noOfPrivateCases: 7,
        privateCases: ["7\n345\n45\n335\n3888\n2399\n622\n384"],
        privateCasesAnswer: ["1 3 5 15 23 69 115 345", "1 3 5 9 15 45", "1 5 67 335", "1 2 3 4 6 8 9 12 16 18 24 27 36 48 54 72 81 108 144 162 216 243 324 432 486 648 972 1296 1944 3888", "1 2399", "1 2 311 622", "1 2 3 4 6 8 12 16 24 32 48 64 96 128 192 384"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">You are given a string with different parentheses; write a code to check if the parentheses are well formed.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Parentheses are well formed if for every opening parenthesis there is a closing parenthesis in the given string.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Eg. (Hello), [{a,b,c}] &nbsp;etc<\/span><\/p>\n<p><strong>INPUT<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an T which denotes the number of test cases, followed by sample strings in further lines for each test case.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Eg.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">(Hello)<\/span><\/p>\n<p><span style=\"font-weight: 400;\">[{a,b,c]<\/span><\/p>\n<p><strong>OUTPUT<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Print \'well formed\' if the input parentheses are well formed otherwise print \'not correct\'<\/span><\/p>\n<p><span style=\"font-weight: 400;\">for each test case.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Eg.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">well formed<\/span><\/p>\n<p><span style=\"font-weight: 400;\">not correct<\/span><\/p>\n<p><strong>CONSTRAINTS<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=10<\/span><\/p>",
        title: "Well formed brackets",
        noOfTestCases: 2,
        testCases: ["2\n(Hello)\n[{a,b,c]"],
        testCasesAnswer: ["well formed","not correct"],
        noOfPrivateCases: 5,
        privateCases: ["5\n(hree))\n([Rfr])\n(o)\n[[tt]]\n[[ss]"],
        privateCasesAnswer: ["not correct","well formed","well formed","well formed","not correct"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to remove comma from the output.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain a single string which is a combination of numbers and commas<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print the output without comma<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2,63,567<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">263567<\/span><\/p>",
        title: "Remove comma",
        noOfTestCases: 2,
        testCases: ["2\n2,63,567\n866,43,33,22,55"],
        testCasesAnswer: ["263567","86643332255"],
        noOfPrivateCases: 7,
        privateCases: ["7\n65,34,22\n56,33,22\n6,4,2\n7,3,3\n7,5,2\n8,6,3\n88,6,4"],
        privateCasesAnswer: ["653422", "563322", "642", "733", "752", "863", "8864"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to find reverse of a number.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T line contain a input integer &lsquo;a&rsquo;<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a single line of integer which is in the reverse form.<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=a&lt;=10^4<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">246<\/span><\/p>\n<p><span style=\"font-weight: 400;\">8743<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">642<\/span><\/p>\n<p><span style=\"font-weight: 400;\">3478<\/span><\/p>",
        title: "Reverse the number",
        noOfTestCases: 2,
        testCases: ["2\n246\n8743"],
        testCasesAnswer: ["642","3478"],
        noOfPrivateCases: 7,
        privateCases: ["7\n3664\n3876\n711\n3907\n292\n9986\n6585"],
        privateCasesAnswer: ["4663","6783","117","7093","292","6899","5856"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to check whether a given number is palindrome or not.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><span style=\"font-weight: 400;\">NOTE: A number is considered palindrome if the number is equal to the reverse of the number<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain the input integer &lsquo;a&rsquo;<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print YES if number is palindrome else print NO<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">24542<\/span><\/p>\n<p><span style=\"font-weight: 400;\">123<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">YES<\/span><\/p>\n<p><span style=\"font-weight: 400;\">NO<\/span><\/p>",
        title: "Check for Palindrome Number",
        noOfTestCases: 2,
        testCases: ["2\n24542\n123"],
        testCasesAnswer: ["YES","NO"],
        noOfPrivateCases: 7,
        privateCases: ["7\n8732\n7643\n984\n23\n9449\n99\n56465"],
        privateCasesAnswer: ["NO","NO","NO","NO","YES","YES","YES"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to check whether a given number is divisible by both 2 and 5.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain the input integer &lsquo;a&rsquo;<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print YES if it is divisible by both 2 and 5 else print NO<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">3<\/span><\/p>\n<p><span style=\"font-weight: 400;\">20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">5<\/span><\/p>\n<p><span style=\"font-weight: 400;\">3<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">YES<\/span><\/p>\n<p><span style=\"font-weight: 400;\">NO<\/span><\/p>\n<p><span style=\"font-weight: 400;\">NO<\/span><\/p>",
        title: "Check if divisible by 2 and 5",
        noOfTestCases: 3,
        testCases: ["3\n20\n5\n3"],
        testCasesAnswer: ["YES","NO","NO"],
        noOfPrivateCases: 7,
        privateCases: ["7\n460\n620\n980\n3653\n232\n952\n4"],
        privateCasesAnswer: ["YES","YES","YES","NO","NO","NO","NO"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to read a positive integer and print its digits in words.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain the input integer<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a single line of string (all lower case)<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=input number&lt;=10^4<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1760<\/span><\/p>\n<p><span style=\"font-weight: 400;\">55<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">one seven six zero<\/span><\/p>\n<p><span style=\"font-weight: 400;\">five five<\/span><\/p>",
        title: "Digit to words",
        noOfTestCases: 2,
        testCases: ["2\n1760\n55"],
        testCasesAnswer: ["one seven six zero","five five"],
        noOfPrivateCases: 7,
        privateCases: ["7\n1111\n7\n9243\n453\n98\n272\n14"],
        privateCasesAnswer: ["one one one one","seven","nine two four three","four five three","nine eight","two seven two","one four"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to print three given numbers in ascending order.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain three space separated integer.<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print the input integers in ascending order.<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">4 6 2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">10 9 8<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2 4 6<\/span><\/p>\n<p><span style=\"font-weight: 400;\">8 9 10<\/span><\/p>",
        title: "Three numbers is ascending order",
        noOfTestCases: 2,
        testCases: ["2\n4 6 2\n10 9 8"],
        testCasesAnswer: ["2 4 6","8 9 10"],
        noOfPrivateCases: 7,
        privateCases: ["7\n384 33 2\n464 23 292\n936 223 123\n944 64 11\n393 342 33\n2 22 334\n9 372 987"],
        privateCasesAnswer: ["2 33 384", "23 292 464", "123 223 936", "11 64 944", "33 342 393", "2 22 334", "9 372 987"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to print reverse string.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains a integer T indicating the number of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain the input string.<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print the input string in reverse order<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Hello World<\/span><\/p>\n<p><span style=\"font-weight: 400;\">abcd efd<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">dlroW olleH<\/span><\/p>\n<p><span style=\"font-weight: 400;\">dfe dcba<\/span><\/p>",
        title: "Reverse String",
        noOfTestCases: 2,
        testCases: ["2\nHello World\nabcd efd"],
        testCasesAnswer: [ 'dlroW olleH', 'dfe dcba' ],
        noOfPrivateCases: 7,
        privateCases: ["7\nasdaf\nasggge\nwuuqq\ndjja\nwuuedx\njwjejfd\nwieifjasd"],
        privateCasesAnswer: ["fadsa", "egggsa", "qquuw", "ajjdqquuw", "xdeuuw", "dfjejwj", "dsajfieiw"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to check whether a given integer is even or odd.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain the input integer.<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print EVEN if even else print ODD<\/span><\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">3<\/span><\/p>\n<p><span style=\"font-weight: 400;\">5<\/span><\/p>\n<p><span style=\"font-weight: 400;\">4<\/span><\/p>\n<p><span style=\"font-weight: 400;\">10<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">ODD<\/span><\/p>\n<p><span style=\"font-weight: 400;\">EVEN<\/span><\/p>\n<p><span style=\"font-weight: 400;\">EVEN<\/span><\/p>",
        title: "Check Even Odd",
        noOfTestCases: 3,
        testCases: ["3\n5\n4\n10"],
        testCasesAnswer: ["ODD","EVEN","EVEN"],
        noOfPrivateCases: 7,
        privateCases: ["7\n9234\n2636\n992\n3473\n2383\n3\n7"],
        privateCasesAnswer: [ 'EVEN', 'EVEN', 'EVEN', 'ODD', 'ODD', 'ODD', 'ODD' ]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to sort a string in alphabetical order.<\/span><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T, denoting the number of test cases<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T number of line contain a single input string<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a single line of string which is sorted<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Input:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">programming<\/span><\/p>\n<p><span style=\"font-weight: 400;\">dcba<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Output:<\/span><\/p>\n<p><span style=\"font-weight: 400;\">aggimmnoprr<\/span><\/p>\n<p><span style=\"font-weight: 400;\">abcd<\/span><\/p>",
        title: "Sort Alphabetical Order",
        noOfTestCases: 2,
        testCases: ["2\nprogramming\ndcba"],
        testCasesAnswer: ["aggimmnoprr","abcd"],
        noOfPrivateCases: 4,
        privateCases: ["4\nttsrqp\nmynameis\ndonotcopycode\nlifeisstrange"],
        privateCasesAnswer: ["pqrstt", "aeimmnsy", "ccddenoooopty", "aeefgiilnrsst"]
    },
    {
        day: 1,
        question: "<p>Write a program to check whether a given number is special number or not.<\/p>\n<p>&nbsp;<\/p>\n<p><strong>NOTE:<\/strong>&nbsp;A number is special if sum of factorial of each digit is equal to the number itself<\/p>\n<p>Eg - 145=1!+4!+5!<\/p>\n<p>&nbsp;<\/p>\n<p><strong>Input:<\/strong><\/p>\n<p>The first line contains an integer T which denotes the numbers of test cases.<\/p>\n<p>The next line consists of integer which is the input integer&nbsp;<strong>a.<\/strong><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Output:<\/strong><\/p>\n<p>For each case, print YES if number is special number else print NO<\/p>\n<p>&nbsp;<\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p>1&lt;=T&lt;=20<\/p>\n<p>1&lt;=a&lt;=10^5<\/p>\n<p>&nbsp;<\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p>2<\/p>\n<p>145<\/p>\n<p>143<\/p>\n<p><strong>Output:<\/strong><\/p>\n<p>YES<\/p>\n<p>NO<\/p>",
        title: "Special Number",
        noOfTestCases: 2,
        testCases: ["2\n145\n143"],
        testCasesAnswer: ["YES","NO"],
        noOfPrivateCases: 7,
        privateCases: ["7\n1\n123\n2\n345\n100\n40585\n4321"],
        privateCasesAnswer: ["YES","NO","YES","NO","NO","YES","NO"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to find whether the number entered is Armstrong or not.<\/span><\/p>\n<p><strong>NOTE:<\/strong> A number is Armstrong if the sum of digits raised to the total number of digits is equal to the original number.&nbsp;&nbsp;<\/p>\n<p>E.g.: 371 = 3^3+7^3+1^3 = 371.<\/p>\n<p>&nbsp;<\/p>\n<p><strong>INPUT<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains a single integer containing number of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next line consists of integer which has to be checked for the Armstrong Number test.<\/span><\/p>\n<p><strong>OUTPUT<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each test case, print whether the number entered is Armstrong or not. If Armstrong then, print YES else print NO<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>CONSTRAINS:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=a&lt;=10^4<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>EXAMPLE<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">371<\/span><\/p>\n<p><span style=\"font-weight: 400;\">135<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">YES<\/span><\/p>\n<p><span style=\"font-weight: 400;\">NO<\/span><\/p>",
        title: "Armstrong Number",
        noOfTestCases: 2,
        testCases: ["2\n371\n135"],
        testCasesAnswer: ["YES","NO"],
        noOfPrivateCases: 7,
        privateCases: ["7\n153\n111\n370\n222\n371\n863\n407"],
        privateCasesAnswer: ["YES", "NO", "YES", "NO", "YES", "NO", "YES"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to sort the given array in ascending order.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>INPUT<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains a single integer denoting number of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next line consists of integer which denotes the number of elements in the array. The succeeding line will have all the elements of array.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>OUTPUT<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each test case, sort the array entered in ascending order and display them.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>CONSTRAINS:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=n&lt;=100<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=element&lt;=10000<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>EXAMPLE<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">5<\/span><\/p>\n<p><span style=\"font-weight: 400;\">10 8 45 34 99<\/span><\/p>\n<p><span style=\"font-weight: 400;\">4<\/span><\/p>\n<p><span style=\"font-weight: 400;\">4 3 2 1 <\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">8 10 34 45 99<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1 2 3 4<\/span><\/p>",
        title: "Acsending Array",
        noOfTestCases: 2,
        testCases: ["2\n5\n10 8 45 34 99\n4\n4 3 2 1"],
        testCasesAnswer: ["8 10 34 45 99 ","1 2 3 4 "],
        noOfPrivateCases: 7,
        privateCases: ["7\n5\n1 100 5 7 9\n10\n90 100 157 890 2 124 55 88 11 1\n3\n240 560 99\n7\n1 190 990 980 760 551 123\n2\n120 9\n3\n111 124 550\n4\n123 145 9 1"],
        privateCasesAnswer: ["1 5 7 9 100 ", "1 2 11 55 88 90 100 124 157 890 ", "99 240 560 ", "1 123 190 551 760 980 990 ", "9 120 ", "111 124 550 ", "1 9 123 145 "]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Check if the number is Palindrome.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">A palindrome number is one which is read same forward and backward.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Eg. 121 , 353, 1001 etc<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>INPUT:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first input consists of no. Of test cases followed by inputs no. to be checked for each test case.<\/span><\/p>\n<p><strong>OUTPUT:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each testcase, print YES if number is palindrome&nbsp;else print NO<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Test Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">121<\/span><\/p>\n<p><span style=\"font-weight: 400;\">304<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Test Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">YES<\/span><\/p>\n<p><span style=\"font-weight: 400;\">NO<\/span><\/p>",
        title: "Palindrome",
        noOfTestCases: 2,
        testCases: ["2\n121\n304"],
        testCasesAnswer: ["YES","NO"],
        noOfPrivateCases: 7,
        privateCases: ["7\n1234\n111\n370\n222\n371\n12321\n11"],
        privateCasesAnswer: ["NO", "YES", "NO", "YES", "NO", "YES", "YES"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to print sum of digits.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T line contain a single integer &lsquo;a&rsquo;<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a single line of integer which is the sum of all the digits of the input integer<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1234<\/span><\/p>\n<p><span style=\"font-weight: 400;\">7845<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">10<\/span><\/p>\n<p><span style=\"font-weight: 400;\">24<\/span><\/p>",
        title: "Sum of Digits",
        noOfTestCases: 2,
        testCases: ["2\n1234\n7845"],
        testCasesAnswer: ["10","24"],
        noOfPrivateCases: 7,
        privateCases: ["7\n12345\n190\n180\n2\n99\n841\n9876"],
        privateCasesAnswer: ["15", "10", "9", "2", "18", "13", "30"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to delete all occurrences of a given number from a given set of numbers<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next line contains two space separated integer. The first of which denotes the number of elements in the set of numbers and the second denotes the number to be deleted<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next line contains the set of numbers which are space separated &nbsp;<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print the set of numbers without the repeated elements<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">5 4<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2 4 4 6 4<\/span><\/p>\n<p><span style=\"font-weight: 400;\">5 2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1 2 2 2 5<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2 6<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1 5<\/span><\/p>",
        title: "Remove Duplicate",
        noOfTestCases: 2,
        testCases: ["2\n5 4\n2 4 4 6 4\n5 2\n1 2 2 2 5"],
        testCasesAnswer: ["2 6","1 5"],
        noOfPrivateCases: 7,
        privateCases: ["7\n3 3\n3 3 2\n8 1\n1 1 2 1 3 1 4 8\n6 6\n6 7 8 6 6 6\n5 1\n5 5 1 3 1\n8 9\n9 7 5 4 9 2 9 9\n9 0\n1 0 2 0 3 3 4 2 0\n2 2\n2 0"],
        privateCasesAnswer: ["2", "2 3 4 8", "7 8", "5 5 3", "7 5 4 2", "1 2 3 3 4 2", "0"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to count the number of digits in a given number.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a single line of integer which is the answer to count the number of digits in a given number.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=input&lt;=10^7<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">246<\/span><\/p>\n<p><span style=\"font-weight: 400;\">12345<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">3<\/span><\/p>\n<p><span style=\"font-weight: 400;\">5<\/span><\/p>",
        title: "No. of Digits",
        noOfTestCases: 2,
        testCases: ["2\n246\n12345"],
        testCasesAnswer: ["3","5"],
        noOfPrivateCases: 6,
        privateCases: ["6\n5\n54\n367\n8911\n12345\n113756"],
        privateCasesAnswer: ["1", "2", "3", "4", "5", "6"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to count the number of vowels in a given string.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the number of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain the input string.<\/span><\/p>\n<p>NOTE: Check for case sensitive alphabets as well<\/p>\n<p>&nbsp;<\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a single line of integer indicating the number of vowels.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Umbrella<\/span><\/p>\n<p><span style=\"font-weight: 400;\">aeioy<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">3<\/span><\/p>\n<p><span style=\"font-weight: 400;\">4<\/span><\/p>",
        title: "Vowels",
        noOfTestCases: 2,
        testCases: ["2\nUmbrella\naeioy"],
        testCasesAnswer: ["3","4"],
        noOfPrivateCases: 7,
        privateCases: ["7\nAEIOUaeiou\nrAnDom\niCannOtthIGgmore\npleasesaveme\npunintended\nbcdfghj\nzzxxyya"],
        privateCasesAnswer: ["10","2","6","6","4","0","1"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to check whether a given number is prime or not.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain the input integer &lsquo;a&rsquo;<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print PRIME if number is prime else print NOT PRIME<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=a&lt;=20000<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">7<\/span><\/p>\n<p><span style=\"font-weight: 400;\">8<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">PRIME<\/span><\/p>\n<p><span style=\"font-weight: 400;\">NOT PRIME<\/span><\/p>",
        title: "Prime Check",
        noOfTestCases: 2,
        testCases: ["2\n7\n8"],
        testCasesAnswer: ["PRIME","NOT PRIME"],
        noOfPrivateCases: 7,
        privateCases: ["7\n3457\n97\n22\n4909\n6521\n4922\n1234"],
        privateCasesAnswer: ["PRIME","PRIME","NOT PRIME","PRIME","PRIME","NOT PRIME","NOT PRIME"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to find the maximum of three numbers.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain three space-separated integers.<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print a single line of integer which is maximum.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=input&lt;=10000<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">2 3 4<\/span><\/p>\n<p><span style=\"font-weight: 400;\">7 56 2<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">4<\/span><\/p>\n<p><span style=\"font-weight: 400;\">56<\/span><\/p>",
        title: "Max of 3",
        noOfTestCases: 2,
        testCases: ["2\n2 3 4\n7 56 2"],
        testCasesAnswer: ["4","56"],
        noOfPrivateCases: 7,
        privateCases: ["7\n88 102 1990\n111 999 444\n247 0 123\n1 3 5\n7 0 2\n5473 9992 9991\n9091 93 0"],
        privateCasesAnswer: ["1990","999","247","5","7","9992","9091"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to find a binary equivalent of the natural number entered by the user.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain the input integer.<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print the binary equivalent of input,<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">43<\/span><\/p>\n<p><span style=\"font-weight: 400;\">15<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">101011<\/span><\/p>\n<p><span style=\"font-weight: 400;\">1111<\/span><\/p>",
        title: "Decimal to Binary",
        noOfTestCases: 2,
        testCases: ["2\n43\n15"],
        testCasesAnswer: ["101011", "1111"],
        noOfPrivateCases: 7,
        privateCases: ["7\n55\n0\n1\n124\n33\n16\n9"],
        privateCasesAnswer: ["110111","0","1","1111100","100001","10000","1001"]
    },
    {
        day: 1,
        question: "<p><span style=\"font-weight: 400;\">Write a program to check whether a given integer is a square number or not.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line contains an integer T which denotes the numbers of test cases.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">The next T lines contain the input integer &lsquo;a&rsquo;<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">For each case, print YES if it is a square number else print NO<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Constrains:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">1&lt;=T&lt;=20<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">2<\/span><\/p>\n<p><span style=\"font-weight: 400;\">16<\/span><\/p>\n<p><span style=\"font-weight: 400;\">18<\/span><\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">YES<\/span><\/p>\n<p><span style=\"font-weight: 400;\">NO<\/span><\/p>",
        title: "Perfect Square",
        noOfTestCases: 2,
        testCases: ["2\n16\n18"],
        testCasesAnswer: ["YES", "NO"],
        noOfPrivateCases: 7,
        privateCases: ["7\n121\n10404\n11\n1\n7396\n12\n4"],
        privateCasesAnswer: ["YES","YES","NO","YES","YES","NO","YES"]
    },
    {
        day: 2,
        question: "<p><span style=\"font-weight: 400;\">Pooja would like to withdraw&nbsp;X&nbsp;$US from an ATM. The cash machine will only accept the transaction if&nbsp;X&nbsp;is a multiple of 5, and Pooja\'s account balance has enough cash to perform the withdrawal transaction (including bank charges). For each successful withdrawal the bank charges 1 $US. Calculate Pooja\'s account balance after an attempted transaction.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Input<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">The first line of input contains an integer T which indicates the number of test cases<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Positive integer 0 &lt;&nbsp;X&nbsp;&lt;= 2000 - the amount of cash which Pooja wishes to withdraw.<\/span><\/p>\n<p><span style=\"font-weight: 400;\">Nonnegative number 0&lt;=&nbsp;Y&nbsp;&lt;= 2000 - Pooja\'s initial account balance.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Output<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">Output the account balance after the attempted transaction. If there is not enough money in the account to complete the transaction, output the current bank balance.<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Example:<\/strong><\/p>\n<p><strong>Input:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">3<\/span><\/p>\n<p><span style=\"font-weight: 400;\">30 120<\/span><\/p>\n<p><span style=\"font-weight: 400;\">42 150<\/span><\/p>\n<p><span style=\"font-weight: 400;\">300 100<\/span><\/p>\n<p>&nbsp;<\/p>\n<p><strong>Output:<\/strong><\/p>\n<p><span style=\"font-weight: 400;\">89<\/span><\/p>\n<p><span style=\"font-weight: 400;\">150<\/span><\/p>\n<p><span style=\"font-weight: 400;\">100<\/span><\/p>",
        title: "ATM",
        noOfTestCases: 3,
        testCases: ["3\n30 120\n42 150\n300 100"],
        testCasesAnswer: ["89", "150", "100"],
        noOfPrivateCases: 7,
        privateCases: ["7\n40 80\n39 80\n125 100\n250 800\n111 110\n100 190\n119 190"],
        privateCasesAnswer: ["39","80","100","549","110","89","190"]
    }
];

function seedDB() {
    let questionsLoaded = 0;
    Question.deleteMany({}, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Cleared the DB");
            questionsLoaded = 0;
        }
    });

    data.forEach((seed) => {
        Question.create(seed, (err,question) => {
            if(err) {
                console.log(err);
            } else {
                questionsLoaded++;
                console.log("Questions Loaded: " + questionsLoaded);
            }
        });
    });
}

module.exports = seedDB;
