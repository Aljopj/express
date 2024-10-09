let employee;
async function getData() {
    const res=await fetch("http://localhost:3000/api/getEmployee");
    console.log(res); 
    employee=await res.json()
    console.log(employee);
    str=``
    employee.map((emp)=>{        
        str+=` <a href="./pages/employee.html?id=${emp._id}">
                    <div class="card">
                        <div class="emp-img">
                            <img src=${emp.profile} alt="">
                        </div>
                        <div class="details">
                            <h4>${emp.name}</h4>
                            <p>${emp.designation}</p>
                        </div>

                    </div>
                 </a>`
        

    })
    document.getElementById("emp-card").innerHTML=str
    

    
}
getData()
