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
  private recipe: Observable<RecipeInterface>;

  /*
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
  */

  // Get Last Recipes: limited in 6 posts
  getLastRecipes(){
    return this.afs.collection<RecipeInterface>('recipes', ref =>
     ref.limit(6)
     ).snapshotChanges();
  }

  // Read Recipe: with the auto document ID
  public getRecipe(documentId: string) {
    return this.afs.collection('recipes').doc(documentId).snapshotChanges()
  }

  // Read Document: where the field and value via parameters
  getByUserRef(fieldRef, valueRef) {
    return this.afs.collection('recipes', ref =>
     ref.where(fieldRef, '==', valueRef)
     ).snapshotChanges();
  }

  // Search Document: by the title value
  searchByTitle(valueRef) {
    return this.afs.collection('recipes', ref =>
    ref.limit(4).orderBy('title').startAt(valueRef).endAt(valueRef+"\uf8ff"))
    .snapshotChanges();
  };




}
