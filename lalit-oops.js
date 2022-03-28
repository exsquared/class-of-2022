import {People} from "./People.js";
import {Person} from "./Person.js";
import {Name} from "./Name.js";
import {Address} from "./Address.js";

let name1 = new Name("Munish", "Kumar","Garg");
let add1 = new Address("12", "Badkal", "Faridabad", "Haryana")

let name2 = new Name("Sanjay", "Singh", "Rawat");
let add2 = new Address("23", "Some", "Noida", "UP");

let person1 = new Person(name1, add1, 12);
let person2 = new Person(name2, add2, 24);
  
let people1 = new People();
people1.storeInfo(person1);
people1.storeInfo(person2);
// people1.showInfo();
  people1.nameStartWithEnteredLetter("S");
//   people1.bornAfterParticularYear(1990);
//   people1.livesInEnteredCity("Faridabad");