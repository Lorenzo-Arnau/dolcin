import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DolcinService } from '../dolcin-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {
  constructor(private router:Router,private dataService:DolcinService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  siteNav(type:any){
    switch (type) {
      case 1:
        this.router.navigate(['/home'])
        break;
        case 2:
        this.router.navigate(['/financial'])
        break;
        case 3:
        this.router.navigate(['/tools'])
        break;
        case 4:
          this.dataService.logout().then(res=>{
            this.router.navigate([''])
          }).catch(error=>{
            console.log(error);

          })

        break;

      default:
        break;
    }

  }
}
