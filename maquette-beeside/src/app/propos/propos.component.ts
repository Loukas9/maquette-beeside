import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propos',
  templateUrl: './propos.component.html',
  styleUrls: ['./propos.component.css']
})
export class ProposComponent implements OnInit {

  title = "A propos de nous"
  constructor() { }

  ngOnInit(): void {
  }

}
