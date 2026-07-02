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

// A function that serves as a container to display the information of a student
function displayStudent(student){

    console.log(`ID: ${student.id}`);
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Course: ${student.course}`);
    console.log(`Level: ${student.level}`);    
}
// A function that displays the list of students 
function displayStudents(){
    for(let i=0; i<students.length; i++){
        displayStudent(students[i]);
    }
}

// A funtion that loops through an array to produce the only level 100 students
function displayLevel100(){
    for(let i=0; i<students.length; i++){
        if(students[i].level==100){
            displayStudent(students[i]);
        }
    }
}

// A function that counts the total number of students
function countStudents(){
    console.log(`Total Count ${students.length}`);
}


//A function that allows one to search for a student by ID
function searchStudentsId(id){
    const student = students.find(student=>student.id === id);
        if(student){
            console.log("Student Found")
            displayStudent(student);
        } else{
            console.log("Student Not Found");
        }
    }
//searchStudentsId(10224)

//A function that allows a student to be searched by Name
function searchStudentsName(name){
    const student = students.find(student => student.name === name);
        if(student){
            console.log("Student Found")
            displayStudent(student);
        } else {
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
    const index = students.findIndex(student => student.id === id);
        if(index !== -1){
            students.splice(index, 1);
            console.log("Student Deleted Successfully");
            saveStudents();
        }else{
        console.log("Student Not Found");
    }
    return students.length;
 }

 // A function that modifies information of a student
 function updateStudent(id, name, age, course, level){
    const student = students.find(student => student.id ===id);

        if(student){
            student.age= age;
            student.course= course;
            student.level= level;
            student.name= name;
            
            saveStudents();
            console.log("Student Information Updated Successfully");
        }else{
        console.log("Student Not Found");
    }
    
 }
