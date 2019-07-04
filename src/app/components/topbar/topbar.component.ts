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
    let menu: HTMLElement = document.getElementById('menu');
    let menu_icon: HTMLElement = document.getElementById('menu-hamburger');
    if(!this.menuStatus){
      menu.setAttribute("style", "right:0");
      menu_icon.classList.add('x');
      this.menuStatus = true;
    }else{
      menu.setAttribute("style", "right:-40%");
      menu_icon.classList.remove('x');
      this.menuStatus = false;
    }
  }

}
