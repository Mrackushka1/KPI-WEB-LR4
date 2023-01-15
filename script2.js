var User = {
    name: "",
    surname: ""
}

var Student = {
    speciality: "",
    group: "",
    addOrChangeData: function(param, value) {
        this[param] = value;
    },
    deleteData: function() {
        this.speciality = "";
        this.group = "";
    }
}

function getStudentSpeciality() {
    Student.speciality = document.querySelector('input[name="speciality"]').value;
    Student.showSpeciality();
}

function getStudentGroup() {
    Student.group = document.querySelector('input[name="group"]').value;
    Student.showGroup();
}



var SomeGuy = Student;

SomeGuy.showData = function() {
    console.log('Speciality: ' + this.speciality + '\nGroup: ' + this.group);
}

SomeGuy.showSpeciality = function() {
    console.log('Speciality: ' + this.speciality);
}

SomeGuy.showGroup = function() {
    console.log('Group: ' + this.group);
}

function wipeStudentData() {
    Student.deleteData();
    console.log('Student data was cleared');
}



function showUserCopy() { 

    var UserCopy = {
        ...User
    };

    console.log(UserCopy);
}

function showStudentCopy() {
    var StudentCopy = {
        ...Student
    };
    
    console.log(StudentCopy);
}



class Progress {

    constructor() {
        this.test = prompt("Enter test name:");
        this.attempt = +prompt("Enter number of attempts to pass the test:");
        this.grades = [];
        this.speciality = Student.speciality
        this.group = Student.group

        console.log(`Test ${this.test} results:`);

        for (var i = 1; i <= this.attempt; i++) {
            this.grades[i-1] = +prompt(`Enter ${i} attempt score:`);
            console.log(`Attempt: ${i}; score: ${this.grades[i-1]}`);
        }

        console.log(`Total score: ${this.getAverageGrade()}`);
    }

    getAverageGrade() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }

    showData() {
        console.log('Speciality: ' + this.speciality + '\nGroup: ' + this.group
                + '\nTest: ' + this.test + '\nAttempt: ' + this.attempt 
                + '\nGrades: ' + this.grades + '\nAverage grade: ' + this.getAverageGrade());
    } 
}

function createProgressInstance() { 
    window.progress = new Progress() 
}



class StudentClass {
    constructor(speciality, group) {
        this.speciality = speciality;
        this.group = group;
    }

    set setSpeciality(speciality) {
        this.speciality = speciality;
    }

    set setGroup(group) {
        this.group = group;
    }

    get getSpeciality() {
        return this.speciality;
    }

    get getGroup() {
        return this.group;
    }

    showData() {
        this.showSpeciality()
        this.showGroup()
    }

    showSpeciality() {
        console.log('Speciality: ' + this.speciality);
    }

    showGroup() {
        console.log('Group: ' + this.group);
    }

    deleteData() {
        this.speciality = "";
        this.group = "";
    }
}

function studentData() {
    var newStudent = new StudentClass(prompt("Enter student speciality:"), 
      prompt("Enter student group:"));
    
    console.log('Current data:');
    newStudent.showData();

    console.log('Data cleared');
    newStudent.deleteData();
    newStudent.showData();
}
