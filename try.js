document.getElementById("btn1").addEventListener("click", myAdd);

function myAdd(){
    let num1=document.getElementById("no1").value;
    let num2=document.getElementById("no2").value;
    let num3=document.getElementById("no3").value;
    let num4=document.getElementById("no4").value;

    let ans= num1+num2+num3+num4;
    alert("Addition:" + ans);

}