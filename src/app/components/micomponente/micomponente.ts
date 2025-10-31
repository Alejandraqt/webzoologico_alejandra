import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimalService } from '../../services/animal-service';

@Component({
  selector: 'app-micomponente',
  imports: [FormsModule],
  templateUrl: './micomponente.html',
  styleUrl: './micomponente.css',
})

export class Micomponente {
  
  animalList: any = [];

  constructor(private animalService: AnimalService) { }

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  ngOnInit() {
    this.getAllAnimals();
  }

}
