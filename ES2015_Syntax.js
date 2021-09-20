//Example

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    //Instance Method
    fullname() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies ++;
        if(this.tardies >= 3){
            return "YOU ARE EXPELLED!";
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }

    addScore(score) {
        this.scores.push(score);
        return this.scores;
    }

    calculateAverage() {
        let sum = this.scores.reduce(function(a,b){return a+b;})
        let avg = sum / this.scores.length;
        return avg;
    }

    //Class methods use the static keyword
    static EnrollStudents() {
        return "ENROLLING STUDENTS";
    }
}

let firstStudent = new Student("Colt", "Steele", 2);


let secondStudent = new Student("Blue", "Steele", 3);

