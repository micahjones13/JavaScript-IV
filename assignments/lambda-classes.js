// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak(){
        return console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;

    }
    demo(subject){
        return console.log(`Today we are learning about ${subject}`);
    }
    grade(studentObj, subject){
        return console.log(`${studentObj.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor (studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        return console.log(this.favSubjects);
    }
    PRAssignment (subject){
        return console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        return  console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        return console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(studentObj, subject){
        return console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
    }
}

//new obj's
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });
  const micah = new Student({
    name: 'Micah',
    location: 'Provo',
    age: 23,
    previousBackground: 'Office Manager',
    className: 'Web 20',
    favSubjects: [
        'CSS', 'JS', 'HTML',
    ],
  })
  const josh = new ProjectManager ({
    name: 'Joshua',
    location: 'California',
    age: 30,
    favLanguage: 'Javascript',
    specialty: 'back-end',
    catchPhrase: 'I love music!',
    gradClassName: 'Web 18?',
    favInstructor: 'Josh Knell',


  })

  console.log(micah.PRAssignment('Javascript'));
  console.log(micah.location);
  console.log(fred.catchPhrase);
  console.log(fred.grade(micah, 'javascript'));
  console.log(josh.standUp('web20'));
  console.log(josh.debugsCode(micah, 'CSS'));
  console.log(micah.speak());
  console.log(fred.speak());