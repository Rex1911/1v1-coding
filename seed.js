const fs = require('fs');
const Question = require("./models/questionsModel");

let data = [
    //==================START OF DAY 1===============================================
    {
        day: 1,
        question:"<div id=\"DIV_1\">\n\t<p id=\"P_3\">\n\t\tJohnny needs to make a rectangular box for his physics class project. He has bought P cm of wire and S cm<sup id=\"SUP_4\">2<\/sup> of special paper. He would like to use all the wire (for the 12 edges) and paper (for the 6 sides) to make the box.\n\t<\/p>\n\t<p id=\"P_5\">\n\t\tWhat is the largest volume of the box that Johnny can make?\n\t<\/p>\n\t<h3 id=\"H3_6\">\n\t\tInput\n\t<\/h3>\n\t<p id=\"P_7\">\n\t\tThe first line contains t, the number of test cases (about 10). Then t test cases follow.\n\t<\/p>\n\t<p id=\"P_8\">\n\t\tEach test case contains two integers P and S in a line (1 ≤ P ≤ 40000, 1 ≤ S ≤ 20000). You may assume that there always exists an optimal solution for the given input cases.\n\t<\/p>\n\t<h3 id=\"H3_9\">\n\t\tOutput\n\t<\/h3>\n\t<p id=\"P_10\">\n\t\tFor each test case, print a real number that is the largest volume of the box that Johnny can make, rounded to two decimal places.\n\t<\/p>\n\t<h3 id=\"H3_11\">\n\t\tExample\n\t<\/h3>\n\t<pre id=\"PRE_12\"><b class=\" mathjax-support\" id=\"B_13\">Input:<\/b>\n2\n20 14\n20 16\n\n<b class=\" mathjax-support\" id=\"B_14\">Output:<\/b>\n3.00\n4.15\n\n<b class=\" mathjax-support\" id=\"B_15\">Output details<\/b>\nFirst case: the dimensions of the largest box may be 3, 1 and 1.\nSecond case: the dimensions of the largest box may be 7\/3, 4\/3 and 4\/3.\n\t<\/pre>\n<\/div>",
        title: "The Best Box",
        noOfTestCases: 2,
        testCases: ["2\n20 14\n20 16"],
        testCasesAnswer: ["3.00","4.15"],
        noOfPrivateCases: 7,
        privateCases: ["10\n4034 3521\n3952 19003\n7342 377\n613 44\n192 442\n2844 333\n3745 2356"],
        privateCasesAnswer: ["768.98","22956.16","4.84","0.79","268.13","9.75","370.79"]
    },
    {
        day: 1,
        question:"<section id=\"SECTION_1\">\n\t<div id=\"DIV_2\">\n\t\t<p id=\"P_3\">\n\t\t\tYou are given an array <b id=\"B_4\">A<\/b> with size <b id=\"B_5\">N<\/b> and a number <b id=\"B_6\">K<\/b>. Let\'s call a position <b id=\"B_7\">i<\/b> (1 ≤ <b id=\"B_8\">i<\/b> ≤ <b id=\"B_9\">N<\/b>) <i id=\"I_10\">valid<\/i> if, after increasing <b id=\"B_11\">A<sub id=\"SUB_12\">i<\/sub><\/b> by <b id=\"B_13\">K<\/b>, it would be greater than the sum of all other elements in the array <b id=\"B_14\">A<\/b>.\n\t\t<\/p>\n\t\t<p id=\"P_15\">\n\t\t\tDetermine the number of distinct valid positions.\n\t\t<\/p>\n\t\t<h3 id=\"H3_16\">\n\t\t\tInput\n\t\t<\/h3>\n\t\t<ul id=\"UL_17\">\n\t\t\t<li id=\"LI_18\">\n\t\t\t\tThe first line of the input contains a single integer <b id=\"B_19\">T<\/b> denoting the number of test cases. The description of <b id=\"B_20\">T<\/b> test cases follows.\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_21\">\n\t\t\t\tThe first line of each test case contains two space-separated integers <b id=\"B_22\">N<\/b> and <b id=\"B_23\">K<\/b>.\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_24\">\n\t\t\t\tThe second line contains <b id=\"B_25\">N<\/b> space-separated integers <b id=\"B_26\">A<sub id=\"SUB_27\">1<\/sub>, A<sub id=\"SUB_28\">2<\/sub>, ..., A<sub id=\"SUB_29\">N<\/sub><\/b>.\n\t\t\t<\/li>\n\t\t<\/ul>\n\t\t<h3 id=\"H3_30\">\n\t\t\tOutput\n\t\t<\/h3>\n\t\t<p id=\"P_31\">\n\t\t\tFor each test case, print a single line containing one integer — the number of valid positions.\n\t\t<\/p>\n\t\t<h3 id=\"H3_32\">\n\t\t\tConstraints\n\t\t<\/h3>\n\t\t<ul id=\"UL_33\">\n\t\t\t<li id=\"LI_34\">\n\t\t\t\t1 ≤ <b id=\"B_35\">T<\/b> ≤ 100,000\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_36\">\n\t\t\t\t1 ≤ <b id=\"B_37\">N<\/b> ≤ 100,000\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_38\">\n\t\t\t\t1 ≤ <b id=\"B_39\">K<\/b> ≤ 10<sup id=\"SUP_40\">9<\/sup>\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_41\">\n\t\t\t\t1 ≤ <b id=\"B_42\">A<sub id=\"SUB_43\">i<\/sub><\/b> ≤ 10<sup id=\"SUP_44\">4<\/sup> for each valid <b id=\"B_45\">i<\/b>\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_46\">\n\t\t\t\t1 ≤ sum of <b id=\"B_47\">N<\/b> over all test cases ≤ 100,000\n\t\t\t<\/li>\n\t\t<\/ul>\n\t\t<h3 id=\"H3_48\">\n\t\t\tExample\n\t\t<\/h3>\n\t\t<pre id=\"PRE_49\"><b class=\" mathjax-support\" id=\"B_50\">Input:<\/b>\n\n2\n4 4\n2 1 6 7\n4 2\n2 1 5 4\n\n<b class=\" mathjax-support\" id=\"B_51\">Output:<\/b>\n\n1\n0\n\t\t<\/pre>\n\t\t<h3 id=\"H3_52\">\n\t\t\t\tExplanation\n\t\t\t<\/h3>\n\t\t<p id=\"P_53\">\n\t\t\t\t <b id=\"B_54\">Example case 1:<\/b> <b id=\"B_55\">A<sub id=\"SUB_56\">1<\/sub> + K<\/b> = 6 isn\'t greater than <b id=\"B_57\">A<sub id=\"SUB_58\">2<\/sub> + A<sub id=\"SUB_59\">3<\/sub> + A<sub id=\"SUB_60\">4<\/sub><\/b> = 14, so position 1 isn\'t valid. <b id=\"B_61\">A<sub id=\"SUB_62\">2<\/sub> + K<\/b> = 5 isn\'t greater than <b id=\"B_63\">A<sub id=\"SUB_64\">1<\/sub> + A<sub id=\"SUB_65\">3<\/sub> + A<sub id=\"SUB_66\">4<\/sub><\/b> = 15, so position 2 isn\'t valid. <b id=\"B_67\">A<sub id=\"SUB_68\">3<\/sub> + K<\/b> = 10 isn\'t greater than <b id=\"B_69\">A<sub id=\"SUB_70\">1<\/sub> + A<sub id=\"SUB_71\">2<\/sub> + A<sub id=\"SUB_72\">4<\/sub><\/b> = 10, so position 3 also isn\'t valid. <b id=\"B_73\">A<sub id=\"SUB_74\">4<\/sub> + K<\/b> = 11 is greater than <b id=\"B_75\">A<sub id=\"SUB_76\">1<\/sub> + A<sub id=\"SUB_77\">2<\/sub> + A<sub id=\"SUB_78\">3<\/sub><\/b> = 9. Therefore, there is only one valid position — position 4.\n\t\t\t<\/p>\n\t\t<!'+'--.problem-statement--'+'>\n\n\t\t<!'+'--.problem-info--'+'>\n\n\t\t<div id=\"DIV_79\">\n\t\t\t\t<input type=\"hidden\" value=\"value\" id=\"INPUT_80\" \/>\n\t\t\t<\/div>\n\t<\/div>\n<\/section>",
        title: "Magic Elements",
        noOfTestCases: 2,
        testCases:["2\n4 4\n2 1 6 7\n4 2\n2 1 5 4"],
        testCasesAnswer: ["1","0"],
        noOfPrivateCases: 7,
        privateCases: ["7\n13 523\n239 347 26 17 3 492 27 48 1 9 3 14 5\n7 365\n2848 26 16 3 1 4 99\n8 99\n99 4 523 1 3 3488 4 2\n4 34\n1883 22 1 421\n3 384\n383 272 991\n5 36\n73 261 38 28 2\n3 382\n261 340 77"],
        privateCasesAnswer: ["1", "1", "1", "1", "1", "1", "2"]
    },
    {
        day: 1,
        question: "<section id=\"SECTION_1\">\n\t<div id=\"DIV_2\">\n\t\t<p id=\"P_3\">\n\t\t\tFarmer Feb has three fields with potatoes planted in them. He harvested <b id=\"B_4\">x<\/b> potatoes from the first field, <b id=\"B_5\">y<\/b> potatoes from the second field and is yet to harvest potatoes from the third field. Feb is very superstitious and believes that if the sum of potatoes he harvests from the three fields is a prime number (<a href=\"http:\/\/en.wikipedia.org\/wiki\/Prime_number\" id=\"A_6\">http:\/\/en.wikipedia.org\/wiki\/Prime_number<\/a>), he\'ll make a huge profit. Please help him by calculating for him the minimum number of potatoes that if harvested from the third field will make the sum of potatoes prime. At least one potato should be harvested from the third field.\n\t\t<\/p>\n\t\t<p id=\"P_7\">\n\t\t<\/p>\n\t\t<h3 id=\"H3_8\">\n\t\t\tInput\n\t\t<\/h3>\n\t\t<p id=\"P_9\">\n\t\t\tThe first line of the input contains an integer <b id=\"B_10\">T<\/b> denoting the number of test cases. Each of the next <b id=\"B_11\">T<\/b> lines contain 2 integers separated by single space: <b id=\"B_12\">x<\/b> and <b id=\"B_13\">y<\/b>.\n\t\t<\/p>\n\t\t<p id=\"P_14\">\n\t\t<\/p>\n\t\t<h3 id=\"H3_15\">\n\t\t\tOutput\n\t\t<\/h3>\n\t\t<p id=\"P_16\">\n\t\t\tFor each test case, output a single line containing the answer.\n\t\t<\/p>\n\t\t<p id=\"P_17\">\n\t\t<\/p>\n\t\t<h3 id=\"H3_18\">\n\t\t\tConstraints\n\t\t<\/h3>\n\t\t<ul id=\"UL_19\">\n\t\t\t<li id=\"LI_20\">\n\t\t\t\t<b id=\"B_21\">1<\/b> ≤ <b id=\"B_22\">T<\/b> ≤ <b id=\"B_23\">1000<\/b>\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_24\">\n\t\t\t\t<b id=\"B_25\">1<\/b> ≤ <b id=\"B_26\">x<\/b> ≤ <b id=\"B_27\">1000<\/b>\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_28\">\n\t\t\t\t<b id=\"B_29\">1<\/b> ≤ <b id=\"B_30\">y<\/b> ≤ <b id=\"B_31\">1000<\/b>\n\t\t\t<\/li>\n\t\t<\/ul>\n\t\t<p id=\"P_32\">\n\t\t<\/p>\n\t\t<h3 id=\"H3_33\">\n\t\t\tExample\n\t\t<\/h3>\n\t\t<pre id=\"PRE_34\"><b class=\" mathjax-support\" id=\"B_35\">Input:<\/b>\n2\n1 3\n4 3\n\n<b class=\" mathjax-support\" id=\"B_36\">Output:<\/b>\n1\n4\n\t\t<\/pre>\n\t\t<h3 id=\"H3_37\">\n\t\t\t\tExplanation\n\t\t\t<\/h3>\n\t\t<p id=\"P_38\">\n\t\t\t\tIn example case 1: the farmer harvested a potato from the first field and 3 potatoes from the second field. The sum is 4. If he is able to harvest a potato from the third field, that will make the sum 5, which is prime. Hence the answer is 1(he needs one more potato to make the sum of harvested potatoes prime.)\n\t\t\t<\/p>\n\t\t<!'+'--.problem-statement--'+'>\n\n\t\t<!'+'--.problem-info--'+'>\n\n\t\t<div id=\"DIV_39\">\n\t\t\t\t<input type=\"hidden\" value=\"value\" id=\"INPUT_40\" \/>\n\t\t\t<\/div>\n\t<\/div>\n<\/section>",
        title: "Farmer Feb",
        noOfTestCases: 2,
        testCases: ["2\n1 3\n4 3"],
        testCasesAnswer: ["1","4"],
        noOfPrivateCases: 7,
        privateCases: ["7\n34 22\n838 21\n299 374\n238 477\n1 999\n96 588\n985 713"],
        privateCasesAnswer: ["3", "4", "4", "4", "9", "7", "1"]
    },
    {
        day: 1,
        question:"<div id=\"DIV_1\">\n\t<p id=\"P_2\">\n\t\tChef is very fond of horses. He enjoys watching them race. As expected, he has a stable full of horses. He, along with his friends, goes to his stable during the weekends to watch a few of these horses race. Chef wants his friends to enjoy the race and so he wants the race to be close. This can happen only if the horses are comparable on their skill i.e. the difference in their skills is less.\n\t<\/p>\n\t<p id=\"P_3\">\n\t\tThere are <b id=\"B_4\">N<\/b> horses in the stable. The skill of the horse <b id=\"B_5\">i<\/b> is represented by an integer <b id=\"B_6\">S[i]<\/b>. The Chef needs to pick 2 horses for the race such that the difference in their skills is <i id=\"I_7\">minimum<\/i>. This way, he would be able to host a very interesting race. Your task is to help him do this and report the minimum difference that is possible between 2 horses in the race.\n\t<\/p>\n\t<h3 id=\"H3_8\">\n\t\tInput:\n\t<\/h3> First line of the input file contains a single integer <b id=\"B_9\">T<\/b>, the number of test cases.<br id=\"BR_10\" \/> Every test case starts with a line containing the integer <b id=\"B_11\">N<\/b>.<br id=\"BR_12\" \/> The next line contains <b id=\"B_13\">N<\/b> space separated integers where the <b id=\"B_14\">i<\/b>-th integer is <b id=\"B_15\">S[i]<\/b>.<br id=\"BR_16\" \/>\n\t<h3 id=\"H3_17\">\n\t\tOutput:\n\t<\/h3> For each test case, output a single line containing the minimum difference that is possible.\n\t<h3 id=\"H3_18\">\n\t\tConstraints:\n\t<\/h3>\n\t<pre id=\"PRE_19\">1 ≤ <b class=\" mathjax-support\" id=\"B_20\">T<\/b> ≤ 10\n2 ≤ <b class=\" mathjax-support\" id=\"B_21\">N<\/b> ≤ 5000\n1 ≤ <b class=\" mathjax-support\" id=\"B_22\">S[i]<\/b> ≤ 1000000000\n\t<\/pre>\n\t<h3 id=\"H3_23\">\n\t\t\tExample:\n\t\t<\/h3> <b id=\"B_24\">Input:<\/b>\n\t<pre id=\"PRE_25\">1\n5\n4 9 1 32 13\n\t\t<\/pre> <b id=\"B_26\">Output:<\/b>\n\t<pre id=\"PRE_27\">3\n\t\t\t<\/pre> <b id=\"B_28\">Explanation:<\/b> The minimum difference can be achieved if we pick horses with skills 1 and 4 for the race.\n\t<!'+'--.problem-statement--'+'>\n\n\t<!'+'--.problem-info--'+'>\n\n\t<div id=\"DIV_29\">\n\t\t\t\t\t<input type=\"hidden\" value=\"value\" id=\"INPUT_30\" \/>\n\t\t\t\t<\/div>\n<\/div>",
        title: "Racing Horses",
        noOfTestCases: 1,
        testCases: ["1\n5\n4 9 1 32 13"],
        testCasesAnswer: ["3"],
        noOfPrivateCases: 7,
        privateCases: ["7\n5\n342 37 21 66 399\n9\n377 364 277 264 362 251 99 3 23\n6\n98 57 884 37 22 19\n5\n34 88 25 14 59\n4\n38 15 99 5\n7\n935 25 366 73 37 1 34\n3\n1 3 4"],
        privateCasesAnswer: ["16", "2", "3", "9", "10", "3", "1"]
    },
    {
        day: 1,
        question: "<section id=\"SECTION_1\">\n\t<div id=\"DIV_2\">\n\t\t<p id=\"P_3\">\n\t\t\tAlice and Bob are playing a game. Alice initially has the number <b id=\"B_4\">A<\/b> and Bob has the number <b id=\"B_5\">B<\/b>. There are a total of <b id=\"B_6\">N<\/b> turns in the game, and Alice and Bob alternatively take turns. In each turn the player whose turn it is, multiplies his or her number by 2. Alice has the first turn.\n\t\t<\/p>\n\t\t<p id=\"P_7\">\n\t\t\tSuppose after all the <b id=\"B_8\">N<\/b> turns, Alice\'s number has become <b id=\"B_9\">C<\/b> and Bob\'s number has become <b id=\"B_10\">D<\/b>. You want to calculate the <a href=\"http:\/\/mathworld.wolfram.com\/IntegerDivision.html\" id=\"A_11\">integer division<\/a> of the maximum number among <b id=\"B_12\">C<\/b> and <b id=\"B_13\">D<\/b> by the minimum number among <b id=\"B_14\">C<\/b> and <b id=\"B_15\">D<\/b>.\n\t\t<\/p>\n\t\t<h3 id=\"H3_16\">\n\t\t\tInput\n\t\t<\/h3>\n\t\t<ul id=\"UL_17\">\n\t\t\t<li id=\"LI_18\">\n\t\t\t\tThe first line of the input contains an integer <b id=\"B_19\">T<\/b> denoting the number of test cases. The description of each testcase follows.\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_20\">\n\t\t\t\tEach test case contains a single line with 3 integers <b id=\"B_21\">A<\/b>, <b id=\"B_22\">B<\/b>, and <b id=\"B_23\">N<\/b>.\n\t\t\t<\/li>\n\t\t<\/ul>\n\t\t<h3 id=\"H3_24\">\n\t\t\tOutput\n\t\t<\/h3>\n\t\t<p id=\"P_25\">\n\t\t\tFor each test case output a new line with a single integer which should be the answer.\n\t\t<\/p>\n\t\t<h3 id=\"H3_26\">\n\t\t\tConstraints\n\t\t<\/h3>\n\t\t<ul id=\"UL_27\">\n\t\t\t<li id=\"LI_28\">\n\t\t\t\t<b id=\"B_29\">1<\/b> ≤ <b id=\"B_30\">T<\/b> ≤ <b id=\"B_31\">100<\/b>\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_32\">\n\t\t\t\t<b id=\"B_33\">1<\/b> ≤ <b id=\"B_34\">A<\/b> ≤ <b id=\"B_35\">1000000000<\/b>\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_36\">\n\t\t\t\t<b id=\"B_37\">1<\/b> ≤ <b id=\"B_38\">B<\/b> ≤ <b id=\"B_39\">1000000000<\/b>\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_40\">\n\t\t\t\t<b id=\"B_41\">1<\/b> ≤ <b id=\"B_42\">N<\/b> ≤ <b id=\"B_43\">1000000000<\/b>\n\t\t\t<\/li>\n\t\t<\/ul>\n\t\t<ul id=\"UL_44\">\n\t\t<\/ul>\n\t\t<h3 id=\"H3_45\">\n\t\t\tExample\n\t\t<\/h3>\n\t\t<pre id=\"PRE_46\"><b class=\" mathjax-support\" id=\"B_47\">Input:<\/b>\n3\n1 2 1\n3 2 3\n3 7 2\n\n<b class=\" mathjax-support\" id=\"B_48\">Output:<\/b>\n1\n3\n2\n\t\t<\/pre>\n\t\t<h3 id=\"H3_49\">\n\t\t\t\tExplanation\n\t\t\t<\/h3>\n\t\t<p id=\"P_50\">\n\t\t\t\tIn the first testcase, the initial numbers are (<b id=\"B_51\">A<\/b> = 1, <b id=\"B_52\">B<\/b> = 2). There is only one turn. In this turn Alice multiplies her number by 2. Hence, we get (<b id=\"B_53\">A<\/b> = 2, <b id=\"B_54\">B<\/b> = 2). Therefore <b id=\"B_55\">C<\/b> = 2, and <b id=\"B_56\">D<\/b> = 2. max(<b id=\"B_57\">C<\/b>, <b id=\"B_58\">D<\/b>)\/min(<b id=\"B_59\">C<\/b>, <b id=\"B_60\">D<\/b>) = 2\/2 = 1. Hence the first output is 1.\n\t\t\t<\/p>\n\t\t<p id=\"P_61\">\n\t\t\t\tIn the second testcase, the initial numbers are (<b id=\"B_62\">A<\/b> = 3, <b id=\"B_63\">B<\/b> = 2). There three turns. In the first turn Alice multiplies her number by 2. Hence, we get (<b id=\"B_64\">A<\/b> = 6, <b id=\"B_65\">B<\/b> = 2). In the second turn Bob multiplies his number by 2. Hence, we get (<b id=\"B_66\">A<\/b> = 6, <b id=\"B_67\">B<\/b> = 4). In the third turn Alice multiplies her number by 2. Hence, we get (<b id=\"B_68\">A<\/b> = 12, <b id=\"B_69\">B<\/b> = 4). Therefore <b id=\"B_70\">C<\/b> = 12, and <b id=\"B_71\">D<\/b> = 4. max(<b id=\"B_72\">C<\/b>, <b id=\"B_73\">D<\/b>)\/min(<b id=\"B_74\">C<\/b>, <b id=\"B_75\">D<\/b>) = 12\/4 = 3. Hence the second output is 3.\n\t\t\t<\/p>\n\t\t<p id=\"P_76\">\n\t\t\t\tIn the third testcase, the initial numbers are (<b id=\"B_77\">A<\/b> = 3, <b id=\"B_78\">B<\/b> = 7). There two turns. In the first turn Alice multiplies her number by 2. Hence, we get (<b id=\"B_79\">A<\/b> = 6, <b id=\"B_80\">B<\/b> = 7). In the second turn Bob multiplies his number by 2. Hence, we get (<b id=\"B_81\">A<\/b> = 6, <b id=\"B_82\">B<\/b> = 14). Therefore <b id=\"B_83\">C<\/b> = 6, and <b id=\"B_84\">D<\/b> = 14. max(<b id=\"B_85\">C<\/b>, <b id=\"B_86\">D<\/b>)\/min(<b id=\"B_87\">C<\/b>, <b id=\"B_88\">D<\/b>) = 14\/6 = 2, because we are doing integer division. Hence the third output is 2.\n\t\t\t<\/p>\n\t\t<!'+'--.problem-statement--'+'>\n\n\t\t<!'+'--.problem-info--'+'>\n\n\t\t<div id=\"DIV_89\">\n\t\t\t\t<input type=\"hidden\" value=\"value\" id=\"INPUT_90\" \/>\n\t\t\t<\/div>\n\t<\/div>\n<\/section>",
        title: "Two Numbers",
        noOfTestCases: 3,
        testCases: ["3\n1 2 1\n3 2 3\n3 7 2"],
        testCasesAnswer: ["1","3","2"],
        noOfPrivateCases: 7,
        privateCases: ["7\n237 346 77\n73 16 33\n348 263 11\n493 475 22\n485 223 66\n294 453 34\n48 37 9"],
        privateCasesAnswer: ["1", "9", "2", "1", "2", "1", "2"]
    },
    {
        day: 1,
        question:'<div>\n<div>\n<p>Micro purchased an array&nbsp;<em>A<\/em>&nbsp;having&nbsp;<em>N<\/em>&nbsp;integer values. After playing it for a while, he got bored of it and decided to update value of its element. In one second he can increase value of each array element by&nbsp;<em>1<\/em>. He wants each array element\'s value to become greater than or equal to&nbsp;<em>K<\/em>. Please help Micro to find out the minimum amount of time it will take, for him to do so.<\/p>\n<p><strong>Input:<\/strong>&nbsp;<br \/>First line consists of a single integer,&nbsp;<em>T<\/em>, denoting the number of test cases.&nbsp;<br \/>First line of each test case consists of two space separated integers denoting&nbsp;<em>N<\/em>&nbsp;and&nbsp;<em>K<\/em>.&nbsp;<br \/>Second line of each test case consists of&nbsp;<em>N<\/em>&nbsp;space separated integers denoting the array&nbsp;<em>A<\/em>.<\/p>\n<p><strong>Output:<\/strong><br \/>For each test case, print the minimum time in which all array elements will become greater than or equal to&nbsp;<em>K<\/em>. Print a new line after each test case.<\/p>\n<p><strong>Constraints:<\/strong>&nbsp;<br \/>1&le;T&le;51&le;T&le;5&nbsp;<br \/>1&le;N&le;1051&le;N&le;105&nbsp;<br \/>1&le;A[i],K&le;1061&le;A[i],K&le;106<\/p>\n<\/div>\n<div>\n<div>\n<div>\n<div>SAMPLE INPUT<\/div>\n<\/div>\n<div>\n<pre>2\n3 4\n1 2 5\n3 2\n2 5 5<\/pre>\n<\/div>\n<\/div>\n<div>\n<div>\n<div>SAMPLE OUTPUT<\/div>\n<\/div>\n<div>\n<pre>3\n0<\/pre>\n<\/div>\n<\/div>\n<\/div>\n<div>Explanation\n<div>\n<p>For first test case,<br \/>After&nbsp;<em>1<\/em>&nbsp;second, array will be&nbsp;{2,3,6}{2,3,6}<br \/>After&nbsp;<em>2<\/em>&nbsp;second, array will be&nbsp;{3,4,7}{3,4,7}<br \/>After&nbsp;<em>3<\/em>&nbsp;second, array will be&nbsp;{4,5,8}{4,5,8}<\/p>\n<p>So it will take&nbsp;<em>3<\/em>&nbsp;second for all array elements to become greater than or equal to&nbsp;<em>4<\/em>.<\/p>\n<\/div>\n<\/div>\n<\/div>',
        title: "Micro and Array Update",
        noOfTestCases: 2,
        testCases: ["2\n3 4\n1 2 5\n3 2\n2 5 5"],
        testCasesAnswer: ["3","0"],
        noOfPrivateCases: 5,
        privateCases: ["5\n33 985776\n157879 667546 399995 675888 452230 840166 347020 677136 553316 211346 381766 435981 755732 196607 906637 230836 119315 154022 887265 712071 841109 337218 937323 491984 246170 862979 524215 75162 589780 290388 293513 264010 957933\n36 11250\n926514 50025 286917 603649 119693 14614 501766 555673 770345 698372 462309 517533 817686 616330 921149 46109 973790 774718 499783 982125 537240 362762 22691 612401 468893 313078 905914 732902 787362 632125 672799 713875 198501 476067 833876 318193\n78 999128\n390217 293729 34013 852525 811261 368050 985206 248761 930510 475347 23478 430293 973824 560717 793054 996514 689470 261946 825944 111735 511199 613305 743859 183997 843532 942359 176415 677407 260552 699799 529399 650768 993527 79763 19645 321139 964165 521202 569899 894674 512901 109728 324966 486724 670445 634371 483237 876266 412668 309180 988000 923867 438837 731858 624215 798720 190568 316982 992478 967471 16780 521876 618239 526658 601639 154235 847796 82155 191788 934046 976828 704688 560125 301794 707763 746921 452516 191000\n79 2655\n16531 611185 789050 971719 859394 929616 770438 49962 246597 762915 17432 263376 284791 152022 790033 402781 822608 154180 484935 14396 604577 978114 235435 681054 796259 943198 427974 248775 650549 567512 113958 183431 178696 419359 155150 554442 865326 925587 120755 111923 204854 138186 891650 5996 806560 198035 925128 145519 868566 926414 676266 473143 904527 911701 670548 700786 371250 98521 465912 538150 666032 96221 721580 361080 515579 393081 431873 380904 835020 552627 9178 39873 207164 900828 45868 530075 98862 970995 675594\n15 983601\n351859 956921 318286 779911 627468 535423 151160 242341 1334 205661 424724 97554 927241 302155 12948"],
        privateCasesAnswer: ["910614", "0", "982348", "0", "982267"]
    },
    {
        day: 1,
        question: "<section id=\"SECTION_1\">\n\t<div id=\"DIV_2\">\n\t\t<h3 id=\"H3_3\">\n\t\t\tProblem description\n\t\t<\/h3>\n\t\t<p id=\"P_4\">\n\t\t\tIt is winter super sale and all the shops have various offers. Suraj selected <b id=\"B_5\">N<\/b> items to buy and he is standing in the billing queue. It was then he noticed the offer \"Buy two, get two\". That means for every two items you buy, they give you two items for free. However, items can be of varying price, they always charge for 2 most costly items and give other 2 as free. For example, if the items cost 1, 1, 2, 2, then you have to pay 4 and take all 4 items.\n\t\t<\/p>\n\t\t<p id=\"P_6\">\n\t\t\tSuraj is busy reordering his items to reduce the total price he has to pay. He can separate the items and get them on different bills if needed. Can you tell me what is the least price Suraj has to pay to buy all the <b id=\"B_7\">N<\/b> items?\n\t\t<\/p>\n\t\t<h3 id=\"H3_8\">\n\t\t\tInput\n\t\t<\/h3>\n\t\t<p id=\"P_9\">\n\t\t\tThe first line of the input contains an integer <b id=\"B_10\">T<\/b> denoting the number of test cases. The description of <b id=\"B_11\">T<\/b> test cases follows. First line of each test case has single integer <b id=\"B_12\">N<\/b>. Second line of each test case has <b id=\"B_13\">N<\/b> space separated integers, which are the costs of items Suraj want to buy.\n\t\t<\/p>\n\t\t<h3 id=\"H3_14\">\n\t\t\tOutput\n\t\t<\/h3>\n\t\t<p id=\"P_15\">\n\t\t\tFor each test case, output a single line containing the required answer.\n\t\t<\/p>\n\t\t<h3 id=\"H3_16\">\n\t\t\tConstraints\n\t\t<\/h3>\n\t\t<ul id=\"UL_17\">\n\t\t\t<li id=\"LI_18\">\n\t\t\t\t<b id=\"B_19\">1<\/b> ≤ <b id=\"B_20\">T<\/b> ≤ <b id=\"B_21\">1000<\/b>\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_22\">\n\t\t\t\t<b id=\"B_23\">1<\/b> ≤ <b id=\"B_24\">N<\/b> ≤ <b id=\"B_25\">1000<\/b>\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_26\">\n\t\t\t\t<b id=\"B_27\">1<\/b> ≤ <b id=\"B_28\">Cost of items<\/b> ≤ <b id=\"B_29\">1000<\/b>\n\t\t\t<\/li>\n\t\t<\/ul>\n\t\t<h3 id=\"H3_30\">\n\t\t\tExample\n\t\t<\/h3>\n\t\t<pre id=\"PRE_31\"><b class=\" mathjax-support\" id=\"B_32\">Input:<\/b>\n3\n4\n1 1 2 2\n2\n10 200\n7\n1 1 10 2 2 2 1\n\n<b class=\" mathjax-support\" id=\"B_33\">Output:<\/b>\n4\n210\n14\n\t\t<\/pre>\n\t\t<h3 id=\"H3_34\">\n\t\t\t\tExplanation\n\t\t\t<\/h3> <b id=\"B_35\">Example case 1<\/b>\n\t\t<p id=\"P_36\">\n\t\t\t\tSuraj pays for 2 costly items and gets other 2 for free.\n\t\t\t<\/p> <b id=\"B_37\">Example case 2<\/b>\n\t\t<p id=\"P_38\">\n\t\t\t\tSuraj has to pay for both the items, he wont get anything for free.\n\t\t\t<\/p> <b id=\"B_39\">Example case 3<\/b>\n\t\t<p id=\"P_40\">\n\t\t\t\tSuraj separates the items into 2 bills. In one bill he pays 12. And in another bill he pays 2.\n\t\t\t<\/p>\n\t\t<!'+'--.problem-statement--'+'>\n\n\t\t<!'+'--.problem-info--'+'>\n\n\t\t<div id=\"DIV_41\">\n\t\t\t\t<input type=\"hidden\" value=\"value\" id=\"INPUT_42\" \/>\n\t\t\t<\/div>\n\t<\/div>\n<\/section>",
        title: "Suraj goes shopping",
        noOfTestCases: 3,
        testCases: ["3\n4\n1 1 2 2\n2\n10 200\n7\n1 1 10 2 2 2 1"],
        testCasesAnswer: ["4","210","14"],
        noOfPrivateCases: 7,
        privateCases: ["7\n7\n3 4 5 8 2 2 2\n15\n15 499 80 199 247 660 444 222 111 101 909 808 707 767 554\n2\n555 775\n5\n243 548 132 151 777\n4\n999 888 444 414\n6\n22 22 22 22 33 22\n20\n20 99 283 485 767 12 45 67 89 999 888 1 1 1 1 15 15 6 89 65"],
        privateCasesAnswer: ["17", "3581", "1330", "1457", "1887", "99", "2433"]
    },
    {
        day: 1,
        question:"<div id=\"DIV_1\">\n\t<p id=\"P_2\">\n\t<\/p>\n\t<p id=\"P_3\">\n\t\tTrans bought a calculator at creatnx\'s store. Unfortunately, it is fake. It has many bugs. One of them is adding two numbers without carrying. Example expression: 12 + 9 will have result 11 in his calculator. Given an expression in the form <b id=\"B_4\">a + b<\/b>, please output result from that calculator.\n\t<\/p>\n\t<p id=\"P_5\">\n\t<\/p>\n\t<h3 id=\"H3_6\">\n\t\tInput\n\t<\/h3>\n\t<p id=\"P_7\">\n\t\tThe first line contains an integer <b id=\"B_8\">T<\/b> denote the number of test cases. Each test case contains two integers <b id=\"B_9\">a, b<\/b> in a single line.\n\t<\/p>\n\t<p id=\"P_10\">\n\t<\/p>\n\t<h3 id=\"H3_11\">\n\t\tOutput\n\t<\/h3>\n\t<p id=\"P_12\">\n\t\tEach test case, print answer in a single line.\n\t<\/p>\n\t<p id=\"P_13\">\n\t<\/p>\n\t<h3 id=\"H3_14\">\n\t\tConstraints\n\t<\/h3>\n\t<ul id=\"UL_15\">\n\t\t<li id=\"LI_16\">\n\t\t\t<b id=\"B_17\">1 ≤ T ≤ 100<\/b>\n\t\t<\/li>\n\t\t<li id=\"LI_18\">\n\t\t\t<b id=\"B_19\">1 ≤ a, b ≤ 10<sup id=\"SUP_20\">9<\/sup><\/b>\n\t\t<\/li>\n\t<\/ul>\n\t<p id=\"P_21\">\n\t<\/p>\n\t<ul id=\"UL_22\">\n\t<\/ul>\n\t<p id=\"P_23\">\n\t<\/p>\n\t<h3 id=\"H3_24\">\n\t\tExample\n\t<\/h3>\n\t<pre id=\"PRE_25\"><b class=\" mathjax-support\" id=\"B_26\">Input:<\/b>\n2\n12 9\n25 25\n\n<b class=\" mathjax-support\" id=\"B_27\">Output:<\/b>\n11\n40\n\t<\/pre>\n\t<p id=\"P_28\">\n\t\t<\/p>\n\t<!'+'--.problem-statement--'+'>\n\n\t<!'+'--.problem-info--'+'>\n\n\t<div id=\"DIV_29\">\n\t\t\t<input type=\"hidden\" value=\"value\" id=\"INPUT_30\" \/>\n\t\t<\/div>\n<\/div>",
        title: "Buggy Calculator",
        noOfTestCases: 2,
        testCases: ["2\n12 9\n25 25"],
        testCasesAnswer: ["11","40"],
        noOfPrivateCases: 7,
        privateCases: ["7\n5494 464\n6898 8401\n4659 5767\n2208 2881\n3071 9582\n3777 9465\n1782 2483"],
        privateCasesAnswer: ["5858", "4299", "9316", "4089", "2553", "2132", "3165"]
    },
    //===============================END OF DAY 1 QUESTIONS===================================================
    
    //===============================START OF DAY 2 QUESTIONS=================================================
    {
        day: 2,
        question:"<div>\n<p>Rash is known about his love for racing sports. He is an avid Formula&nbsp;<em>1<\/em>&nbsp;fan. He went to watch this year\'s Indian Grand Prix at New Delhi. He noticed that one segment of the circuit was a long straight road. It was impossible for a car to overtake other cars on this segment. Therefore, a car had to lower down its speed if there was a slower car in front of it. While watching the race, Rash started to wonder how many cars were moving at their maximum speed. Formally, you\'re given the maximum speed of&nbsp;<em>N<\/em>&nbsp;cars in the order they entered the long straight segment of the circuit. Each car will prefers to move at its maximum speed. If that\'s not possible because of the front car being slow, it might have to lower its speed. It still moves at the fastest possible speed while avoiding any collisions. For the purpose of this problem, you can assume that the straight segment is infinitely long. Count the number of cars which were moving at their maximum speed on the straight segment.<\/p>\n<p><strong>Input<\/strong><\/p>\n<p>The first line of the input contains a single integer&nbsp;<em>T<\/em>&nbsp;denoting the number of test cases to follow. Description of each test case contains&nbsp;<em>2<\/em>lines. The first of these lines contain a single integer&nbsp;<em>N<\/em>, the number of cars. The second line contains&nbsp;<em>N<\/em>&nbsp;space separated integers, denoting the maximum speed of the cars in the order they entered the long straight segment.<\/p>\n<p><strong>Output<\/strong><\/p>\n<p>For each test case, output a single line containing the number of cars which were moving at their maximum speed on the segment.<\/p>\n<p><strong>Constraints<\/strong><\/p>\n<p>1&le;T&le;1001&le;T&le;100<br \/>1&le;N&le;1051&le;N&le;105&nbsp;<br \/>1&le;speed&le;1091&le;speed&le;109<\/p>\n<\/div>\n<div>\n<div>\n<div>\n<div><strong>SAMPLE INPUT<\/strong><\/div>\n<\/div>\n<div>\n<pre>3\n1\n10\n3\n8 3 6\n5\n4 5 1 2 3<\/pre>\n<\/div>\n<\/div>\n<div>\n<div>\n<div><strong>SAMPLE OUTPUT<\/strong><\/div>\n<\/div>\n<div>\n<pre>1\n2\n2<\/pre>\n<\/div>\n<\/div>\n<\/div>",
        title: "Speed",
        noOfTestCases: 3,
        testCases: ["3\n1\n10\n3\n8 3 6\n5\n4 5 1 2 3"],
        testCasesAnswer: ["1","2","2"],
        noOfPrivateCases: 7,
        privateCases: ["7\n20\n2871 1165 7526 4669 706 7300 2322 8203 3780 2867 6331 2403 4902 1025 2598 5847 3913 4195 2521 1745\n20\n4320 5852 72 8772 6784 3903 1219 8478 7516 3358 9226 8925 4584 668 9834 6583 6696 1928 9622 885\n20\n4672 8732 5025 121 5459 4990 7096 3966 5628 3899 1107 1603 1585 4066 300 649 8221 3292 9651 5056\n20\n5727 3984 7111 2672 5307 6053 6440 1496 7083 6511 1658 335 9967 3251 806 6175 3379 6569 1633 2167\n20\n3488 3349 2730 6909 9944 2563 3289 1475 444 7712 7194 956 2815 1134 6484 4112 5764 2254 8581 9102\n20\n749 8798 9348 9585 8340 9862 9086 9266 5706 3830 1758 4333 6576 5303 86 9737 327 8309 7086 974\n20\n4633 201 7960 4431 9734 4820 9173 1818 6536 2571 2597 9025 9464 5413 7505 316 7940 5721 7313 9090"],
        privateCasesAnswer: ["3", "2", "2", "5", "6", "2", "2"]
    },
    {
        day: 2,
        question: "<section id=\"SECTION_1\">\n\t<div id=\"DIV_2\">\n\t\t<p id=\"P_3\">\n\t\t\tJem is famous for his laziness at school. He always leaves things to last minute. Now Jem has <b id=\"B_4\">N<\/b> problems in the assignment of \"Advanced topics in algorithm\" class to solved. The assignment is due tomorrow and as you may guess he hasn\'t touch any of the problems. Fortunately he got a plan as always.\n\t\t<\/p>\n\t\t<p id=\"P_5\">\n\t\t\tThe first step will be buying a pack of Red Bull and then to work as hard as he can. Here is how he is going to spend the remaining time:\n\t\t<\/p>\n\t\t<p id=\"P_6\">\n\t\t\tJem will not take a break until he finishes at least half of the remaining problems. Formally, if <b id=\"B_7\">N<\/b> is even then he will take he first break after finishing <b id=\"B_8\">N<\/b> \/ 2 problems. If <b id=\"B_9\">N<\/b> is odd then the break will be after he done (<b id=\"B_10\">N<\/b> + 1) \/ 2 problems. Each of his break will last for <b id=\"B_11\">B<\/b> minutes. Initially, he takes <b id=\"B_12\">M<\/b> minutes in solving a problem, after each break he will take twice more time in solving a problem, i.e. <b id=\"B_13\">2 * M<\/b> minutes per problem after the first break.\n\t\t<\/p>\n\t\t<p id=\"P_14\">\n\t\t\tJem will start working soon and ask you to help him calculate how much time it will take until he finish the last problem!\n\t\t<\/p>\n\t\t<h3 id=\"H3_15\">\n\t\t\tInput\n\t\t<\/h3>\n\t\t<p id=\"P_16\">\n\t\t\tThe first line contains a single integer <b id=\"B_17\">T<\/b> represents the number of test cases in the input.\n\t\t<\/p> Each line in the next <b id=\"B_18\">T<\/b> line contains three integers <b id=\"B_19\">N<\/b>, <b id=\"B_20\">B<\/b> and <b id=\"B_21\">M<\/b> represents a test case.\n\t\t<p id=\"P_22\">\n\t\t<\/p>\n\t\t<h3 id=\"H3_23\">\n\t\t\tOutput\n\t\t<\/h3>\n\t\t<p id=\"P_24\">\n\t\t\tFor each test case output a single line containing an integer represent how much time Jem will need (in minutes).\n\t\t<\/p>\n\t\t<h3 id=\"H3_25\">\n\t\t\tConstraints\n\t\t<\/h3>\n\t\t<ul id=\"UL_26\">\n\t\t\t<li id=\"LI_27\">\n\t\t\t\t<b id=\"B_28\">1 ≤ <b id=\"B_29\">T<\/b> ≤ 100<\/b>\n\t\t\t<\/li>\n\t\t\t<li id=\"LI_30\">\n\t\t\t\t<b id=\"B_31\">1 ≤ <b id=\"B_32\">N<\/b>, <b id=\"B_33\">B<\/b>, <b id=\"B_34\">M<\/b> ≤ 10<sup id=\"SUP_35\">8<\/sup><\/b>\n\t\t\t<\/li>\n\t\t<\/ul>\n\t\t<h3 id=\"H3_36\">\n\t\t\tExample\n\t\t<\/h3>\n\t\t<pre id=\"PRE_37\"><b class=\" mathjax-support\" id=\"B_38\">Input<\/b>:\n2\n9 1 2\n123456 123456 123456\n\n<b class=\" mathjax-support\" id=\"B_39\">Output<\/b>:\n45\n131351258112\n\t\t<\/pre>\n\t\t<h3 id=\"H3_40\">\n\t\t\t\tExplanation\n\t\t\t<\/h3>\n\t\t<p id=\"P_41\">\n\t\t\t\tIn the first test case, Jem will proceed as below:\n\t\t\t<\/p>\n\t\t<p id=\"P_42\">\n\t\t\t<\/p>\n\t\t<ul id=\"UL_43\">\n\t\t\t\t<li id=\"LI_44\">\n\t\t\t\t\tInitially, Jem has 9 problems to solve. since it is an odd number, Jem will finish the first (9 + 1) \/ 2 = 5 problems with speed of 2 minutes\/problem.\n\t\t\t\t<\/li>\n\t\t\t\t<li id=\"LI_45\">\n\t\t\t\t\tAfter that, Jem takes 1 minute break.\n\t\t\t\t<\/li>\n\t\t\t\t<li id=\"LI_46\">\n\t\t\t\t\tNow he has 4 problems to solve, which is an even number, so Jem will solve the next 4 \/ 2 = 2 problems. his speed after the first break has now became 4 minutes\/problem.\n\t\t\t\t<\/li>\n\t\t\t\t<li id=\"LI_47\">\n\t\t\t\t\tAgain, he takes a 1 minute break.\n\t\t\t\t<\/li>\n\t\t\t\t<li id=\"LI_48\">\n\t\t\t\t\the has now 2 problems left so he do one more problem in 8 minutes.\n\t\t\t\t<\/li>\n\t\t\t\t<li id=\"LI_49\">\n\t\t\t\t\tHe takes 1 minute break.\n\t\t\t\t<\/li>\n\t\t\t\t<li id=\"LI_50\">\n\t\t\t\t\the solves the last problem in 16 minutes.\n\t\t\t\t<\/li>\n\t\t\t<\/ul>\n\t\t<p id=\"P_51\">\n\t\t\t<\/p>\n\t\t<p id=\"P_52\">\n\t\t\t\tSo, Jem will need time = 5 × 2 + 1 + 2 × 4 + 1 + 8 + 1 + 16 = 45\n\t\t\t<\/p>\n\t\t<!'+'--.problem-statement--'+'>\n\n\t\t<!'+'--.problem-info--'+'>\n\n\t\t<div id=\"DIV_53\">\n\t\t\t\t<input type=\"hidden\" value=\"value\" id=\"INPUT_54\" \/>\n\t\t\t<\/div>\n\t<\/div>\n<\/section>",
        title: "Lazy Jem",
        noOfTestCases: 2,
        testCases: ["2\n9 1 2\n123456 123456 123456"],
        testCasesAnswer: ["45","131351258112"],
        noOfPrivateCases: 6,
        privateCases: ["6\n977630 895429 635106\n776767 929667 935860\n681384 272633 601152\n431859 330188 655961\n24884 389863 996728\n472542 375869 625860"],
        privateCasesAnswer: ["6261988789213", "7294694480313", "4178523761531", "2744402455964", "193330820962", "2850733350342"]
    }
    //===============================END OF DAY 2 QUESTIONS===================================================
];

function seedDB() {
    Question.deleteMany({}, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Cleared the DB");
        }
    });

    data.forEach((seed) => {
        Question.create(seed, (err,question) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Question added");
            }
        });
    });
}

module.exports = seedDB;
