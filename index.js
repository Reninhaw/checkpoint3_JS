/*
CHECKPOINT 3 -> PROGRAMAÇÃO IMPERATIVA

*MINHA PRIMEIRA APLICAÇÃO*

Nicolas Paiffer do Carmo

Turma 1


*/


// Questão 1

function student(name, absences, grades) {
    this.name=name;
    this.absences=absences;
    this.grades=grades;


// Questão 2

this.calcAverage = function (){
    let add = 0;
    for (let i = 0; i < this.grades.length; i++) {
        add = add + this.grades[i];
    }

    return add / this.grades.length

}

this.totalAbsences = function () {
    return this.absences++
    }
}

const student1 = new student("Daniel", 9, [2,3,4,5]);
const student2 = new student("Broeto", 0, [10,10,10,10]);
const student3 = new student("Conejo", 3, [6,7,6,8]);
const student4 = new student("Gabriel", 2, [7,8,6,5]);
const student5 = new student("Adriano", 1, [9,8,7,9]);


console.log(student1.calcAverage());
console.log(student5.totalAbsences());


// Questão 3

let lesson = {
    lessonName: 'Bradesco',
    gradesAprove: 6,
    totalAbscences: 3,
    students: [student1, student2, student3]
}

// Questão 4

const newStudent = (name, absences, grades) => {
    const newStd = new student(name,absences,grades);
    lesson.students.push(newStd);
}

newStudent('Paiffer',0,[10,10,10,10]);
newStudent('Carmo',3,[5,2,6,4]);

console.log(lesson);


// Questão 5

function aprove(student){
    let grades = student.average();
    let absences = student.absences;
    let aproving = lesson.gradesAprove * 2;

    if(grades >= lesson.gradesAprove && absences < lesson.totalAbscences){
        return true;
    } else if (absences == lesson.totalAbscences && grades >= aproving){
            return true;
    }else{return false}
}

// Questão 6

const ok = () => {

    let bool = [];
    for (const chair of lesson.students) {
        bool.push(aprove(chair));
    }
console.log(bool);
}

ok();


/* 
  Fiz com ajuda de alguns amigos meus mas mesmo assim não consegui resolver alguns problemas que vinham dando no meu projeto.

  Obrigado!
*/

