import { Component, OnInit } from '@angular/core';

import { ApiDataService } from '../../api-data.service';
import { RecipeInterface } from '../../recipe-interface';
import { Observable } from 'rxjs/internal/Observable';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  query : string;
  public recipeslist = [];

  constructor(private apiData: ApiDataService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get('s');
      this.firequery(this.query).subscribe((catsSnapshot) => {
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
    return this.apiData.searchByTitle(valueRef);
  };
  









}
