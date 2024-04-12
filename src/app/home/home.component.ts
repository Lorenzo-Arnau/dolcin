import { Component, OnInit } from '@angular/core';
import { DolcinService } from '../dolcin-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  financial:any;
  tools:any;
  text:any ='';

  constructor(private dataService: DolcinService,private router:Router){

  }
  ngOnInit(): void {

  }

}


