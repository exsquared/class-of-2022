class Person {
    constructor(Name, Address, Age) {
      this.Name = Name;
      this.Address = Address;
      this.Age = Age;
    }
  }
  let information = [];
  class People {
    constructor(person) {
      this.person = person;
      this.storeInfo(person);
    }
  
    storeInfo(person) {
      information.push(person);
    }

    showinfo() {
      information.forEach((ele) => {
        console.log(`\nName = ${ele.Name}\nAddress = ${ele.Address}\nAge = ${ele.Age}`);
        
      });
    }

    bornAfter1990() {
        information.forEach(ele => {
            if (ele.Age < 32){
                console.log(`\nName = ${ele.Name}\nAddress = ${ele.Address}\nAge = ${ele.Age}`);
            }
        })
    }

    nameStartWithS() {
        information.forEach(ele =>{
            if (ele.Name.startsWith("S")) {
                console.log(`\nName = ${ele.Name}\nAddress = ${ele.Address}\nAge = ${ele.Age}`);
            }
        })
    }

    livesInNoida() {
        information.forEach(ele => {
            if (ele.Address.toLowerCase().includes("noida")) {
                console.log(`\nName = ${ele.Name}\nAddress = ${ele.Address}\nAge = ${ele.Age}`);
            }
        })
    }
  }
  
  let person1 = new Person("lalit", "Meerut", 12);
  let person2 = new Person("Munish", "Noida", 24);
  
  let people1 = new People(person1);
  let people2 = new People(person2);
//   console.log(information);
  people1.showinfo();
//   people1.nameStartWithS();
  people1.bornAfter1990();
//   people1.livesInNoida();