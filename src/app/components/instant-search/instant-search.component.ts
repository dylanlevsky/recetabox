import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'Rxjs/Rx';

@Component({
  selector: 'app-instant-search',
  templateUrl: './instant-search.component.html',
  styleUrls: ['./instant-search.component.css']
})
export class InstantSearchComponent implements OnInit {

  searchterm: string;

  startAt = new Subject();
  endAt = new Subject();

  startObs = this.startAt.asObservable();
  endObs = this.endAt.asObservable();

  recipes;

  public data: Observable<any[]>;

  constructor(private afs: AngularFirestore) { }

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

  firequery(start, end) {
    return this.afs.collection('recipes', ref =>
    ref.limit(4).orderBy('title').startAt(start).endAt(end))
    .valueChanges();
  };

  onItemClick(){
    this.searchterm = "";
    this.recipes = "";
  }

}
