class Person {
    constructor(Name, Address, Age) {
      this.Name = Name;
      this.Address = Address;
      this.Age = Age;
    }
  }
//   let information = [];
class People {
  constructor() {
    this.information = []
  }

  storeInfo(person) {
    this.information.push(person);
  }
  showinfo() {
    this.information.forEach(ele => {
        console.log(`\nName = ${ele.Name}\nAddress = ${ele.Address}\nAge = ${ele.Age}`);
    })
  }
  bornAfter1990() {
    this.information.forEach(ele => {
        if (ele.Age < 32) {
            console.log(`\nName = ${ele.Name}\nAddress = ${ele.Address}\nAge = ${ele.Age}`);
        }
    })
  }
  nameStartWithS() {
      this.information.forEach(ele =>{
          if (ele.Name.startsWith("S")) {
            console.log(`\nName = ${ele.Name}\nAddress = ${ele.Address}\nAge = ${ele.Age}`);
        }
    })
  }
  livesInNoida() {
      this.information.forEach(ele => {
          if (ele.Address.toLowerCase().includes("noida")) {
            console.log(`\nName = ${ele.Name}\nAddress = ${ele.Address}\nAge = ${ele.Age}`);
        }
    })
  }
}

let person1 = new Person("lalit", "Meerut", 12);
let person2 = new Person("Munish", "Noida", 24);
  
let people1 = new People();
people1.storeInfo(person1);
people1.storeInfo(person2);
people1.showinfo();
//   people1.nameStartWithS();
//   people1.bornAfter1990();
//   people1.livesInNoida();