import { Component, OnInit } from '@angular/core';
import { CatsService } from '../cats-service/cats.service';
import { Cat } from '../models/cat';
@Component({
  selector: 'app-cats-parent',
  templateUrl: './cats-parent.component.html',
  styleUrls: ['./cats-parent.component.css']
})
export class CatsParentComponent implements OnInit {
  cats;
  constructor(private catsService: CatsService) { }

  ngOnInit() {
    this.catsService.allCats().subscribe(result => {
      this.cats = result
      console.log(this.cats)
    })
  }
}
