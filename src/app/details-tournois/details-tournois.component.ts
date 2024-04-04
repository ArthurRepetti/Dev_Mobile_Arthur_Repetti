import { Component, OnInit } from '@angular/core';
import { TournoisService } from "../tournois.service";
import { Tournois } from "../Tournois";
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {observable} from "rxjs";


@Component({
  selector: 'app-details-tournois',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-tournois.component.html',
  styleUrl: './details-tournois.component.css'
})
export class DetailsTournoisComponent {
  data: Tournois[] = [] ;
  id: String = "";

  constructor( private tournoisService: TournoisService, private route: ActivatedRoute) {  }

  find_one() {
    this.tournoisService.tournois_get_one(this.id).subscribe(
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
