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
  //private recipesO: RecipeInterface[];

  public recipesList = [];
  ngOnInit() {
    /*
    this.apiData.getAllRecipes().subscribe(recipes =>{
      //console.log('RECIPES', recipes);
      this.recipesO = recipes;
    })
    */

    /*
   this.apiData.getLastRecipes().subscribe(recipes =>{
    console.log('RECIPES', recipes);
    recipes.forEach((catData: any) => {
      this.recipesO.push({
        id: catData.payload.doc.id,
        data: catData.payload.doc.data()
      });
    })
  })
  */

 this.apiData.getLastRecipes().subscribe(recipes =>{
  recipes.forEach((catData: any) => {
    this.recipesList.push(catData.payload.doc.data());
  })
})

  }

}
