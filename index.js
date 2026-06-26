//Base for a student manager system
const students=[
    {id:10221 , name:"Henry" ,age:19 ,course:"Mining and Mineral Engineering" , level:100 },
    {id:10222 , name:"Joseph" ,age:20 ,course:"Natural Gas" , level:200 },
    {id:10223 , name:"John" ,age:21 ,course:"Computer Engineering" , level:100 },
    {id:10224 , name:"Thompson" ,age:18 ,course:"Petroleum Engineering" , level:200 },
    {id:10225 , name:"Kelvin" ,age:20 ,course:"Computer Science" , level:100 },
]

function displayStudents(){
    for(let i=0; i<students.length; i++){
    console.log(`ID: ${students[i].id}`);
    console.log(`Name: ${students[i].name}`);
    console.log(`Age: ${students[i].age}`);
    console.log(`Course: ${students[i].course}`);
    console.log(`Level: ${students[i].level}`);
    }
    
}

function displayLevel100(){
    for(let i=0; i<students.length; i++){
        if(students[i].level==100){
            console.log(`ID: ${students[i].id}`);
            console.log(`Name: ${students[i].name}`);
            console.log(`Age: ${students[i].age}`);
            console.log(`Course: ${students[i].course}`);      
        }
    }
}

function countStudents(){
    console.log(`Total Count ${students.length}`);
}

displayStudents();
displayLevel100();
countStudents();