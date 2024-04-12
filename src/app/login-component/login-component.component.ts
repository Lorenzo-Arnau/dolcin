import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DolcinService } from '../dolcin-service.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponentComponent implements OnInit {
  username:any='';
  password:any='';

  constructor(private router:Router,private authService: DolcinService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  submitInfo(){
    this.authService.loginWithEmail(this.username, this.password)
    .then((userCredential) => {
      // Accesso riuscito, esegui le azioni necessarie (reindirizzamento, ecc.)
      this.router.navigate(['/home'])
    })
    .catch((error) => {
      // Gestisci eventuali errori durante l'accesso
      console.error('Errore durante l\'accesso:', error);
    });
  }
   seePassword() {
    var x = <HTMLInputElement>document.getElementById("psw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
}
