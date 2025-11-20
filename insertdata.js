document.getElementById("btn1").addEventListener("click",myInsert);

async function myInsert(){
    let rollno=document.getElementById("rno").Value;
    let name=document.getElementById("nm").Value;
    let city=document.getElementById("ct").Value;
    let fees=document.getElementById("no").Value;
    console.log(rollno, name, city, fees);

    const request = await fetch("http://localhost:3000/student", {
  method: "POST",
  body: JSON.stringify({
    "rollno": rollno,
    "name": name,
    "city": city,
    "fees": fees,
  }),
});
}