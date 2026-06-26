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

// A funtion that loops through an array to produce the only level 100 students
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

// A function that counts the total number of students
function countStudents(){
    console.log(`Total Count ${students.length}`);
}

displayStudents();
displayLevel100();
countStudents();

//A function that allows one to search for a student by ID
function searchStudentsId(id){
    for(let i=0; i<students.length; i++){
        let found = false;
        if(students[i].id===id){
            found = true;
            console.log("Student Found")
    console.log(`ID: ${students[i].id}`);
    console.log(`Name: ${students[i].name}`);
    console.log(`Age: ${students[i].age}`);
    console.log(`Course: ${students[i].course}`);
    console.log(`Level: ${students[i].level}`);
                break
        }
     return found;
    }
          if(!found){
            console.log("Student Not Found");
        }
}

searchStudentsId(10224)

//A function that allows a student to be searched by Name
function searchStudentsName(name){
    for(let i=0; i<students.length; i++){
        let found = false;
        if(students[i].name===name){
            found = true;
            console.log("Student Found")
    console.log(`ID: ${students[i].id}`);
    console.log(`Name: ${students[i].name}`);
    console.log(`Age: ${students[i].age}`);
    console.log(`Course: ${students[i].course}`);
    console.log(`Level: ${students[i].level}`);
                break
        }return found;
    }
          if(!found){
            console.log("Student Not Found");
        }
}
searchStudentsName("Henry");

// A function that adds students to the array
 function addStudents(id, name, age, course, level){
    let found = false;
    for(let i=0; i<students.length; i++){
    if(id===students[i].id){
        found = true;
       
        break;
    }
}
         if(!found){students.push({id, name, age, course, level})
         console.log("Student Added Successfully");
        return students.length;
    }else{
            console.log("Student ID already exists")
    }
}

 addStudents(10229, "Ama", 18, "Electrical Engineering", 100)
 displayStudents();
//displayLevel100();
countStudents();