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



var Progress = {
    ...Student,
    test: "",
    attempt: 0,
    grades: [],
    getAverageGrade: function() {
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    },
    showData: function() {
        console.log('Speciality: ' + this.speciality + '\nGroup: ' + this.group
                + '\nTest: ' + this.test + '\nAttempt: ' + this.attempt 
                + '\nGrades: ' + this.grades + '\nAverage grade: ' + this.getAverageGrade());
    } 
}

function getProgress() {

    Progress.test = prompt("Enter test name:");
    Progress.attempt = +prompt("Enter number of attempts to pass the test:");

    console.log(`Test ${Progress.test} results:`);

    for(var i = 1; i <= Progress.attempt; i++) {
        Progress.grades[i-1] = +prompt(`Enter ${i} attempt score:`);
        console.log(`Attempt: ${i}; score: ${Progress.grades[i-1]}`);
    }

    console.log(`Total score: ${Progress.getAverageGrade()}`);
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
