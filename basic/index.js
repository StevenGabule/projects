"use strict";
function validatePassword(password) {
    return password.length >= 8;
}
console.log(validatePassword("123123123"));
function greet(user) {
    return "Hello, " + user.firstName + " " + user.lastName;
}
console.log(greet({ firstName: "john", lastName: "gabule" }));
function messUpTheArray(arr) {
    arr.push(3);
}
var strings = ['foo', 'bar'];
messUpTheArray(strings);
var s = strings[2];
