import {People} from "./People.js";
import {Person} from "./Person.js";


let person1 = new Person("Munish Kumar Garg", "12, Badkal, Faridabad, Haryana", 12);
let person2 = new Person("Sanjay Singh Rawat", "23, Some, Noida, UP", 24);
  
let people1 = new People();
people1.storeInfo(person1);
people1.storeInfo(person2);
// people1.showInfo();
//   people1.nameStartWithEnteredLetter("M");
//   people1.bornAfterParticularYear(2006);
//   people1.livesInEnteredCity("Noida");