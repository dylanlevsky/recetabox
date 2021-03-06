import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  menuStatus : Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    let search_container: HTMLElement = document.getElementById('search-container');
    this.router.events.subscribe( (e) => {
      if (e instanceof NavigationStart) {
        if (e.url === "/") {
            search_container.setAttribute("style", "top:50%");
            search_container.classList.remove('search-input-mobile');
        } else {
            search_container.setAttribute("style", "top:0");
            search_container.classList.add('search-input-mobile');
        }
      }
    })
  }

  toggleMenu(){
    let menu: HTMLElement = document.getElementById('menu');
    let menu_icon: HTMLElement = document.getElementById('menu-hamburger');
    if(!this.menuStatus){
      menu.setAttribute("style", "right:0");
      menu_icon.classList.add('x');
      this.menuStatus = true;
    }else{
      menu.setAttribute("style", "right:-100%");
      menu_icon.classList.remove('x');
      this.menuStatus = false;
    }
  }

  closeMenu(){
    let menu: HTMLElement = document.getElementById('menu');
    let menu_icon: HTMLElement = document.getElementById('menu-hamburger');
    menu.setAttribute("style", "right:-100%");
    menu_icon.classList.remove('x');
    this.menuStatus = false;
  }

  /* EventEmitter que se llama desde el child: Instant Search */
  public onEventEmitter(): void {
   this.closeMenu();
 }

}
