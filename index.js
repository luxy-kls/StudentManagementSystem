//Base for a student manager system

// Retrieving data from json file.
 const { count } = require("console");
const fs= require("fs");
 const data= fs.readFileSync("students.json", "utf8")
 let students = JSON.parse(data);

 //Receiving input from the console
 const readline = require("readline");
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });


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
    const level100Students = students.filter(student => student.level === 100)
    level100Students.forEach(student => {
         displayStudent(student);
    });
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
    const student = students.find(student => student.id === id);
    if(student){
          console.log("Student ID already exists");
    }else{students.push({id, name, age, course, level})
         saveStudents();
         return {
    success: true,
    message: "Student Added Successfully"
};
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

 //A function that displays the menu 
 function showMenu(){
console.log( `
========================
STUDENT MANAGER SYSTEM
========================

1. Display Students
2. Search Student
3. Add Student
4. Update Student
5. Delete Student
6. Count Students
7. Exit
`);
 }

// A sub-menu for Display Students
function displayMenu(){
    console.log(`
======== DISPLAY MENU ========

1. All Students
2. Level 100
3. Level 200
4. Back
5. Exit
`);
}

// A sub-menu for Search Students
function searchMenu(){
    console.log(`
======== SEARCH MENU ========

1. Search By ID
2. Search By Name
3. Back
4. Exit
`);
}

// Handles user's choice from the main menu
function handleMainMenu(choice){
    switch(choice){
        case 1:
            displayMenu();
            break;
        case 2:
            searchMenu();
            break;
        case 3:
            console.log("Add Student");
            break;
        case 4:
            console.log("Update Students");
            break;
        case 5:
            console.log("Delete Student");
            break;
        case 6:
            countStudents();
            break;
        case 7:
            console.log("Goodbye!");
            break
        default :
        console.log("Invalid Option");
    }
}

// The interactive section of the code
showMenu();
rl.question("What is your option? ", function(choice){
    //converting the input to a number
    choice = Number(choice);

    //Inserting it into the menu handler
    handleMainMenu(choice);
rl.close();
})
