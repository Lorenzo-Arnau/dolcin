import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DolcinService } from '../dolcin-service.service';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {

  responsiveMode:any=false;

  @HostListener('window:resize', ['$event'])
  onResize(event?:any) {
     let screenHeight = window.innerHeight;
     let screenWidth = window.innerWidth;
     if(screenWidth <= 600 ){
      this.responsiveMode = true
     }else{
      this.responsiveMode = false
     }
  }

  constructor(private router:Router,private dataService:DolcinService){
    this.onResize();
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

export function siteNavExp(type:any,router:any,service:any){
  switch (type) {
    case 1:
      router.navigate(['/home'])
      break;
      case 2:
      router.navigate(['/financial'])
      break;
      case 3:
      router.navigate(['/tools'])
      break;
      case 4:
        service.logout().then((res:any)=>{
          router.navigate([''])
        }).catch((error:any)=>{
          console.log(error);

        })

      break;

    default:
      break;
  }

}
