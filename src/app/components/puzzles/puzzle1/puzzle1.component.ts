import { Component } from '@angular/core';
import { CodigoSecretoComponent } from "../codigo-secreto/codigo-secreto.component";

@Component({
  selector: 'app-puzzle1',
  standalone: true,
  imports: [CodigoSecretoComponent],
  templateUrl: './puzzle1.component.html',
  styleUrl: './puzzle1.component.scss'
})
export class Puzzle1Component {

}
