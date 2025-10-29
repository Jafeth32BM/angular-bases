import { Component, inject, signal } from '@angular/core';

import { CharacterListComponent } from "../../component/dragonball/character-list/character-list";
import { CharacterAddComponent } from "../../component/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {
  /**
   * El service ayuda a mantener los datos dentro de la sesion pero
   * si se recarga la pagina vuelve a su estado original
  */

  public dbService = inject(DragonballService);

}
