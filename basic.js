// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let sum = 0;
// for(let i = 1; i <= 10; i++){
//     sum = sum + i;  
// }
// console.log(sum);

// let sum = 0;
// for(let i = 2; i <= 20 ; i = i +2){
//    sum = sum + i;
// }
//  console.log(sum);



//  let secretno = 13;
//  let userguess = 13;
//  if (userguess == secretno){
//     console.log("You Win");
//  }else{
//     console.log("wrong guess");
//  }



//  let a = 10;
//  let b = 20;
//  if(a > b ){
//     console.log("A is greater");
//  }else{
//     console.log("b is greater");
//  }

//  let m = 10;
//  let n = 30;
//  let o = 70;
//  if (m > n){
//     console.log("m is greter");
//  }else if (n > o){
//     console.log("n is greater");
//  }else{
//     console.log("o is greter");
//  }





//ARRAY

// let  fruits = ["mango", "banana", "orange"];
// for( let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }



// let numbers = [10, 20, 30, 40, 50];

// let sum = 0;
// for( let i = 0; i < numbers.length; i ++){
//     sum = sum + numbers[i];
// }
// console.log(sum);




// let numbers = [10,25,30,17,40];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 == 0){
//         console.log(numbers[i]);
//     }
// }

// funtions

function greet(){
    console.log("Good morning ! Muskan");
}
greet();

function add(){
    a = 10;
    b = 20;
    console.log(a+b);
}
add();


function addition(a, b){
    console.log(a+b);
}
addition(10,10);



// function square(num){
        
//         console.log(num * num);
// }
// square(5);


function square(num){
    return num*num;
}
let result = square(5);
console.log(result);



function cube(num){
    return num*num*num;
}
console.log(cube(3));


function checkEvenOdd(num){
     if(num % 2 == 0){
        return true;
     }else{
        return false;
     }
}
console.log(checkEvenOdd(21
      
));



function greet(name){
    return "Hello " + name;
}
console.log(greet("Muskan"));


function larger(a,b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}
console.log(larger(30,20));



