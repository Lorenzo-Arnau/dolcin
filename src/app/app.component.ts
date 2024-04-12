import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DolcinService } from './dolcin-service.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'dolcin';
  data: any;

  constructor(private dataService: DolcinService,router:Router) { }

  ngOnInit() {

  }
}
