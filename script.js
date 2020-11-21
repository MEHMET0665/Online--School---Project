class School{
  constructor(name,level,numberOfStudents){
    this._name=name;
    this._level=level;
    this._numberOfStudents=numberOfStudents;
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents){
    if (typeof newNumberOfStudents==='number'){
      this._numberOfStudents=newNumberOfStudents;
    }else{
      return  'Invalid Input'
    };
  }
 quickFacts(){
   console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level}school level`)
}
  static pickSubstituteTeacher(substituteTeachers){
    let randomNumber=Math.floor(substituteTeachers.length*Math.random());
   console.log(substituteTeachers[randomNumber]);
  }
}
​
class PrimarySchool extends School{
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy=pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}
​
class HighSchool extends School{
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'high',numberOfStudents);
    this._sportsTeams=sportsTeams;
  }
  get sportsTeams(){
    for(let sportsTeamsIndex=0;sportsTeamsIndex<this._sportsTeams.length;sportsTeamsIndex++){
      console.log(this._sportsTeams[sportsTeamsIndex])
    }
  }
}
const SierreNevada=new PrimarySchool('Sierre Nevada',
422,'Students must be picked up by a parent, guardian, or a family member over the age of 15.')
​
SierreNevada.quickFacts();
School.pickSubstituteTeacher(['Marisol Chandler', 'Morin Marcia Walsh', 'Walton Pratt Wiley', 'Lou Williams', 'J. R. Burton', 'Allen Downs', 'Salinas Mcclain', 'Nancy Miles']);
​
const elkhart = new HighSchool('Al E. Smith',515,['Baseball', 'Basketball', 'Volleyball', 'Ice Hockey']);
​
elkhart.sportsTeams;