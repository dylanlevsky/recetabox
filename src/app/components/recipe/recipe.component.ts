import { Component, OnInit } from '@angular/core';
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

  idQuery : string;
  

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idQuery = params.get('id');
      this.loadRecipe(this.idQuery);
  })

  }


  loadRecipe(id: string){
    this.apiData.getRecipe(id).subscribe(recipe =>{
      console.log('RECIPE', recipe.payload.data());
      this.recipeO = recipe.payload.data();
      this.title = this.recipeO.title;
      this.desc = this.recipeO.desc;
      this.img = this.recipeO.img;
    })
  }

}
