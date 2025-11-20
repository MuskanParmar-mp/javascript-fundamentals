document.getElementById("btn1").addEventListener("click", myData);

 let Table=`<table border="1">
         <tr>
            <th> Rollno </th>
            <th> Name </th>
            <th> city </th>
            <th> Fees </th>
          </tr>
            `


            

async function myData() {
    let api="http://localhost:3000/student";

    const Obj = await fetch (api);
    const Data= await Obj.json();
    
    Data.map((key)=>{
      Table+=`<tr>
                  <td> ${key.rollno} </td>
                  <td> ${key.name} </td>
                  <td> ${key.city} </td>
                  <td> ${key.fees} </td>
                </tr>
                `
    })


 Table+="</table>";

 document.getElementById("demo").innerHTML=Table;
  }