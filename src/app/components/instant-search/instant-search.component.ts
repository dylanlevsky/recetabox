import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'Rxjs/Rx';

import { Router } from '@angular/router';


import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-instant-search',
  templateUrl: './instant-search.component.html',
  styleUrls: ['./instant-search.component.css']
})
export class InstantSearchComponent implements OnInit {

  searchterm: string; // ngModel del input

  startAt = new Subject();
  endAt = new Subject();

  startObs = this.startAt.asObservable();
  endObs = this.endAt.asObservable();

  recipes;

  
  
  

  constructor(private afs: AngularFirestore,private router: Router) { }

  ngOnInit() {
    
    Observable.combineLatest(this.startObs, this.endObs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((recipes) => {
      this.recipes = recipes;

      })
    })


    

  }

  search($event) {
    let q = $event.target.value.toLowerCase(); // todo lo convierto a lowercase para que haga match con la
    this.startAt.next(q);
    this.endAt.next(q + "\uf8ff");
  }

  onFocus(){
    console.log("MANDALE MECHAAA");
    this.toggleInstantSearch(true);
  }

  onFocusOut(){
    console.log("QUE LINDO FEO SOS");
    this.toggleInstantSearch(false);
  }

  toggleInstantSearch(status){
    let instant_search: HTMLElement = document.getElementById('instant-search-input');
    if(instant_search != null){

      setTimeout(()=>{
        if(status){
          instant_search.classList.remove('hide');
        }else{
          instant_search.classList.add('hide');
        }
      }, 100);

      
    }
    
  }

  firequery(start, end) {
    return this.afs.collection('recipes', ref =>
    ref.limit(4).orderBy('title').startAt(start).endAt(end))
    .valueChanges();
  };

  onItemClick(){
    this.searchterm = "";
    this.recipes = "";
  }

  submitSearch() {
    this.router.navigateByUrl('/search/' + this.searchterm); 
  } 


}
