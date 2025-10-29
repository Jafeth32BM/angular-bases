import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {

  public characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001, img: 'assets/pics/goku.png', type: 'Saiyan' },
    { id: 2, name: 'Vegeta', power: 8500, img: 'assets/pics/vegeta.png', type: 'Saiyan' },
  ]);
  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter])
  }
}
