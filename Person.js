import {Name} from './Name.js';
import {Address} from './Address.js'

class Person {
  constructor(name, address, age) {
    let name_list = name.split(" ");
    let address_list = address.split(", ")      
    this.name = new Name(name_list[0], name_list[1], name_list[2]);
    this.address = new Address(address_list[0], address_list[1], address_list[2], address_list[3]);
    this.age = age;
  }
}

export {Person}