import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiDataService } from '../../api-data.service';
import { RecipeInterface } from '../../recipe-interface';
import { Observable } from 'rxjs/internal/Observable';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
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
      this.loadRecipe(this.idQuery, this.section);
  })

  }


  loadRecipe(id: string, s: string){
    this.apiData.getRecipe(id).subscribe(recipe =>{
      //console.log('RECIPE', recipe.payload.data());
      this.recipeO = recipe.payload.data();
      this.title = this.recipeO.title;
      this.img = this.recipeO.img;

      switch(s) { 
        case "info": { 
          this.content = this.recipeO.desc;
          this.nav_info.nativeElement.className = 'nav-selected';
          this.nav_ingredients.nativeElement.className = 'nav';
          this.nav_steps.nativeElement.className = 'nav';
           break; 
        } 
        case "ingredients": { 
          this.content = this.recipeO.ingredients;
          this.nav_info.nativeElement.className = 'nav';
          this.nav_ingredients.nativeElement.className = 'nav-selected';
          this.nav_steps.nativeElement.className = 'nav';
           break; 
        } 
        case "steps": { 
          this.content = this.recipeO.steps;
          this.nav_info.nativeElement.className = 'nav';
          this.nav_ingredients.nativeElement.className = 'nav';
          this.nav_steps.nativeElement.className = 'nav-selected';
           break; 
        } 
        default: { 
          this.content = this.recipeO.desc;
          /*
          this.nav_info.nativeElement.className = 'nav-selected';
          this.nav_ingredients.nativeElement.className = 'nav';
          this.nav_steps.nativeElement.className = 'nav';
          */
           break; 
        } 
     }
     
    })
  }

}
