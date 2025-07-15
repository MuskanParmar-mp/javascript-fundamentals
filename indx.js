// document.getElementById("btn1").addEventListener("click", myFun);

// function myFun(){
//     alert("welcome to Cybrom Bhopal")
// }


document.getElementById("btn1").addEventListener("click", myAdd);

function myAdd(){
    let num1=document.getElementById("no1").value;
    let num2=document.getElementById("no2").value;

    let ans= num1+num2;
    alert("Addition:" + ans);

}map