import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { RecipeInterface } from './recipe-interface';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private afs: AngularFirestore) {
    this.recipeCollection = afs.collection<RecipeInterface>('recipes');
    this.recipes = this.recipeCollection.valueChanges();
   }
  private recipeCollection: AngularFirestoreCollection<RecipeInterface>;
  private recipes: Observable<RecipeInterface[]>;

  getAllRecipes() {
    return this.recipes = this.recipeCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as RecipeInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

}
