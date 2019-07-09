import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../../api-data.service';
import { RecipeInterface } from '../../recipe-interface';
import { Observable } from 'rxjs/internal/Observable';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public recipeslist = [];

  catname : string; // catname from the url

  constructor(private apiData: ApiDataService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.catname = params.get('cat');
    this.firequery(this.catname).subscribe((catsSnapshot) => {
      this.recipeslist = [];
      catsSnapshot.forEach((catData: any) => {
        this.recipeslist.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })
    });
  }) 
  }

  firequery(valueRef) {
    return this.apiData.getByUserRef('cat', valueRef);
  };

}
