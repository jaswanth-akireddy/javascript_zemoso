//question => Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.


function f1(name){
    return "heyy  "+name;
}
function f2(func){
    console.log(func);
    //expected output => heyy prasad
}

f2(f1("prasad"));