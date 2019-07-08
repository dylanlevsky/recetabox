import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../api-data.service';
import { RecipeInterface } from '../../recipe-interface';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private apiData: ApiDataService){ }
  private recipesO: RecipeInterface[];

  ngOnInit() {
    this.apiData.getAllRecipes().subscribe(recipes =>{
      //console.log('RECIPES', recipes);
      this.recipesO = recipes;
    })
  }

}
