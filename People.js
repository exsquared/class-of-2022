export {People}
class People {
  constructor() {
    this.information = []
  }

  storeInfo(person) {
    this.information.push(person);
  }

  printInfo(list){
    list.forEach(ele => {
      let full_name = Object.values(ele.name).join(" "); 
      let full_address = Object.values(ele.address).join(", ");
      console.log(`\nName = ${full_name}\nAddress = ${full_address}\nAge = ${ele.age}`);
    })
  }

  showInfo() {
    this.printInfo(this.information);
  }

  bornAfterParticularYear(year = 1990) {
    let currentYear = new Date().getFullYear();
    let filteredData = this.information.filter(ele => ele.age < currentYear - year);
    this.printInfo(filteredData);      
  }

  nameStartWithEnteredLetter(letter = "s") {
    let filteredData = this.information.filter(ele => ele.name.first_name[0].toLowerCase().startsWith(letter.toLowerCase()));
    this.printInfo(filteredData);
  }
  
  livesInEnteredCity(city = "Noida") {
    let filteredData = this.information.filter(ele => 
      ele.address.city.toLowerCase() == city.toLowerCase()
    );
    this.printInfo(filteredData);
  }
}
