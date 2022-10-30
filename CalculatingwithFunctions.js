//This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//seven(times(five())); // must return 35
//four(plus(nine())); // must return 13
//eight(minus(three())); // must return 5
//six(dividedBy(two())); // must return 3

//Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(arg) { return arg ? arg(0) : 0 };
function one(arg) { return arg ? arg(1) : 1 };
function two(arg) { return arg ? arg(2) : 2 };
function three(arg) { return arg ? arg(3) : 3 };
function four(arg) { return arg ? arg(4) : 4 };
function five(arg) { return arg ? arg(5) : 5 };
function six(arg) { return arg ? arg(6) : 6 };
function seven(arg) { return arg ? arg(7) : 7 };
function eight(arg) { return arg ? arg(8) : 8 };
function nine(arg) { return arg ? arg(9) : 9 };

function plus(other_num) {
    return function (first_num) { return first_num + other_num }
}
function minus(other_num) {
    return function (first_num) { return first_num - other_num }

}
function times(other_num) {
    return function (first_num) { return first_num * other_num }


}
function dividedBy(other_num) {
    return function (first_num) { return Math.floor(first_num / other_num) }

}