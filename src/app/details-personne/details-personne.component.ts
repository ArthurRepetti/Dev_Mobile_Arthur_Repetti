import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonnesService } from '../personnes.service';
import { Personne } from '../Personne';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html'
})
export class DetailsPersonneComponent implements OnInit {
  data: Personne[] = [];
  id: string = "";

  constructor(private personnesService: PersonnesService, private route: ActivatedRoute) { }

  find_one() {
    this.personnesService.personnes_get_one(this.id).subscribe(
    data => {
      this.data = data;
    }, err => {
      console.log("failed", err);
    }
    );
  }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.id = params['id'];
        this.find_one();
      });

  }
}
