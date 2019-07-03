import { Component, OnInit, ViewChild,ViewEncapsulation  } from '@angular/core';
import { ApiDataService } from '../../api-data.service';
import { RecipeInterface } from '../../recipe-interface';
import { Observable } from 'rxjs/internal/Observable';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RecipeComponent implements OnInit {

  constructor(private apiData: ApiDataService, 
    private route: ActivatedRoute,
    private router: Router) { }


  private recipeO: RecipeInterface;
  private title: string;
  private desc: string;
  private img: string;
  private ingredients: string;
  private steps: string;

  idQuery : string;
  section : string;
  
  private content: string; // Que contenido corresponde cargar
  

  @ViewChild('nav_info') nav_info;
  @ViewChild('nav_ingredients') nav_ingredients;
  @ViewChild('nav_steps') nav_steps;

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idQuery = params.get('id');
      this.section = params.get('s');
      //this.loadRecipe(this.idQuery, this.section);
      this.loadRecipeByRef(this.idQuery);
  })

  }


  /*
  loadRecipe(id: string, s: string){
    this.apiData.getRecipe(id).subscribe(recipe =>{
      //console.log('RECIPE', recipe.payload.data());
      this.recipeO = recipe.payload.data();
      this.title = this.recipeO.title;
      this.img = this.recipeO.img;
      this.desc = this.recipeO.desc;
      this.ingredients = this.recipeO.ingredients;
      this.steps = this.recipeO.steps;

     
    })
  }
  */

  loadRecipeByRef(valueRef){
    this.apiData.getByUserRef('permalink', valueRef).subscribe(recipe =>{
      //console.log('RECIPE', recipe[0].payload.doc.data());
      this.recipeO = recipe[0].payload.doc.data();
      this.title = this.recipeO.title;
      this.img = this.recipeO.img;
      this.desc = this.recipeO.desc;
      this.ingredients = this.recipeO.ingredients;
      this.steps = this.recipeO.steps;
    })
  }

}
