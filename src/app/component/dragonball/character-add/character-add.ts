import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);
  type = signal('');

  newCharacter = output<Character>();

  characters = input.required<Character[]>()

 addCharacter() {
    if (!this.name() || !this.type() || this.power() <= 0) { return; }
    const imagen = this.formatName(this.name()); //formato para la imagen del personaje

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
      type: this.type(),
      img: `assets/pics/${imagen}.png`
    };
    this.newCharacter.emit(newCharacter);
    // this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();

  }
  formatName = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '_');
  }

  resetFields(){
    this.name.set('');
    this.type.set('');
    this.power.set(0);

  }
}
