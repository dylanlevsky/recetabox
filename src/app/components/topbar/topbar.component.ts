import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  menuStatus : Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    console.log("TOOGLE MENU");
    let menu: HTMLElement = document.getElementById('menu');
    if(!this.menuStatus){
      menu.setAttribute("style", "right:0");
      this.menuStatus = true;
    }else{
      menu.setAttribute("style", "right:-40%");
      this.menuStatus = false;
    }
    
  }

}
