import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 
  title = "Bienvenue sur la page d'accueil";
  
  constructor() { }

  ngOnInit(){
  }
  getStatus(){
    
  }
}
