//Base for a student manager system

// Retrieving data from json file.
 const fs= require("fs");
 const data= fs.readFileSync("students.json", "utf8")
 console.log(typeof data);
 let students = JSON.parse(data);


 // A function that stores changes in students.json file
function saveStudents(){
    const data= JSON.stringify(students, null, 4);
    fs.writeFileSync("students.json", data);    
}


// A function that displays the list of students 
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

//searchStudentsId(10224)

//A function that allows a student to be searched by Name
function searchStudentsName(name){
    for(let i=0; i<students.length; i++){
        let found = false;
        if(students[i].name===name){
            found = true;
            console.log("Student Found")
            displayStudents(students[i]);
                break;
        }return found;
    }
          if(!found){
            console.log("Student Not Found");
        }
}

// A function that adds students to the array
 function addStudent(id, name, age, course, level){
    let found = false;
    for(let i=0; i<students.length; i++){
    if(id===students[i].id){
        found = true;
       
        break;
    }
}
         if(!found){students.push({id, name, age, course, level})
         console.log("Student Added Successfully");
         saveStudents();

        }else{
            console.log("Student ID already exists")
    }
           return students.length;
}

// A function that deletes a students from the array
 function deleteStudent(id){
    let found = false;
    for(let i=0; i<students.length; i++){
        if(id===students[i].id){
            found = true;
            students.splice(i, 1);
            console.log("Student Deleted Successfully");
            saveStudents();
        }
    } if(!found){
        console.log("Student Not Found");
    }
    return students.length;
 }

 // A function that modifies information of a student
 function updateStudent(id, name, age, course, level){
    let found= false;
    for(let i=0; i<students.length; i++){
        if(id===students[i].id){
            found = true;
            students[i].age= age;
            students[i].course= course;
            students[i].level= level;
            students[i].name= name;
            
            saveStudents();
            console.log("Student Information Updated Successfully");
            break;
        }
    }
    if(!found){
        console.log("Student Not Found");
    }
    
 }

addStudent(
    10226,
    "Michael",
    20,
    "Mechanical Engineering",
    100
);
console.log(students)