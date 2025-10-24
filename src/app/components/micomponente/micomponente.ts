import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-micomponente',
  imports: [FormsModule],
  templateUrl: './micomponente.html',
  styleUrl: './micomponente.css',
})

export class Micomponente {
  titulo = "mi titulo"

}
