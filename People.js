export {People}
class People {
  constructor() {
    this.information = []
  }

  storeInfo(person) {
    this.information.push(person);
  }

  printInfo(list) {
    list.forEach(ele => {
      let full_name = Object.values(ele.Name).join(" "); 
      let full_address = Object.values(ele.Address).join(", ");
      console.log(`\nName = ${full_name}\nAddress = ${full_address}\nAge = ${ele.Age}`);
    })
  }
  showInfo() {
    this.printInfo(this.information);
  }

  bornAfterParticularYear(year = 1990) {
    currentYear = new Date.getYear();
    let filteredData = this.information.filter(ele => ele.Age < currentYear - year);
    this.printInfo(filteredData);      
  }

  nameStartWithEnteredLetter(letter = "s") {
    let filteredData = this.information.filter(ele => ele.Name.first_name.toLowerCase().startsWith(letter.toLowerCase()));
    this.printInfo(filteredData);
  }

  livesInEnteredCity(city = "Noida") {
    let filteredData = this.information.filter(ele => ele.Address.city.toLowerCase() == city.toLowerCase())
    this.printInfo(filteredData);
  }
}