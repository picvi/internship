let phoneBook = {
  contacts: [],
  finder(name) {
    let item = this.contacts.find(contact => contact.name === name);
    return item;
  },

  read() {
    console.log(this.contacts);
  },
  write(name, phone) {
    this.finder(name) === undefined ? this.contacts.push(new Contact(name, phone)) :
    console.log('Такой пользователь уже есть');
  },
  find(name) {
    this.finder(name) === undefined ? console.log("Такого контакта нету") : console.log(item);
  }, 
  delete(name) {
    if (this.finder(name) !== undefined) {
      this.contacts.splice(this.contacts.indexOf(name), 1);
    }
  }
}
Object.freeze(phoneBook);

function Contact(name, phone) {
  this.name = name;
  this.phone = phone;
}
phoneBook.owner = "Anonim";

phoneBook.write('John Smith', '325');
phoneBook.write('John Smith', '325');
phoneBook.read();
phoneBook.find('Jo Smith');
phoneBook.write('Jo Smith', '325');
phoneBook.read();
phoneBook.delete('Jo Smith');
phoneBook.read();

console.log(phoneBook)
