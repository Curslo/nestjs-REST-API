import { Injectable } from '@nestjs/common';
const db = {
  pets: [{
    id: 1,
    name: 'Rex',
    type: 'dog',
    age: 3,
    breed: 'labrador'
  },
  {
    id: 2,
    name: 'Fido',
    type: 'dog',
    age: 1,
    breed: 'poodle'
  },
  {
    id: 3,
    name: 'Mittens',
    type: 'dog',
    age: 2,
    breed: 'tabby'
  },
  ]
};

export interface IPets {
  id : number,
  name : string,
  age : number,
  breed : string,
  type : string
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getPet(id: string): {} {
    try {
      const pet = db.pets.find(pet => pet.id === parseInt(id));
      // console.log(pet)
      // console.log(db.pets)
      // console.log(id)
      return pet;
    } catch (err) {
      console.log("Error", err);
    }
  }
  listPets(): {} {
    return db.pets;
  }

  editPet(id: string, data: IPets): {} {
    try {
      const index = db.pets.findIndex(pet => pet.id === parseInt(id))
      console.log(index)

      if (index === -1) throw new Error('Pet not found')
      else {
       db.pets[index] = data;
        console.log(data)
        return data;
      }
    } catch (err) {
      console.log('Error', err)
    }
  }
  addPet(data : IPets): {} {
    try {
      const newPet = { id: db.pets.length + 1, ...data };
      db.pets.push(newPet);
      return newPet;
    } catch (err) {
      console.log('Error', err);
    }
  }
  deletePet(id: string): {} {
    try {
      //Delete item from db
      const index = db.pets.findIndex(pet => pet.id === parseInt(id))

      if (index === -1) throw new Error('Pet not found')

      else {
        db.pets.splice(index, 1);
        // console.log(db.pets)
        return db.pets;
      }
    } catch (err) {
      console.log(err);
    }
  }

}
