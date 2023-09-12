import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character: Character): void {
    // LOS 3 PUNTOS ... SE UTILIZAN PARA INDICAR QUE SE OCUPARAN
    // TODOS LOS VALORES EN EL TIPADO character
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }
  onDeleteCharacterById(id: string) {
    // this.characters.splice(index, 1);
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
