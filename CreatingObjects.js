// Basic Objects

let a = {
  totally: "something",
  item: 12,
};

// Factory function

function createAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
    getAddress() {
      return `${street}, ${city}: ${zipcode}`;
    },
  };
}

// Constructor Function

function Address(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
  this.getAddress = function () {
    return `${street}, ${city}: ${zipcode}`;
  };
}

// Classes

class AddressObject {
  constructor(name) {
    this.name = name;
  }

  myMethod() {
    console.log(this.name);
  }
}

let address1 = createAddress("29", "Mangaf", "5698");
let address2 = new Address("12", "Abu Halifa", "5458");
console.log(address1.getAddress());
console.log(address2.getAddress());

