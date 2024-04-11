import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class DolcinService {

  constructor(private afAuth: AngularFireAuth,private http: HttpClient,private db: AngularFireDatabase) {

  }

    // Metodo per ottenere i dati da un nodo specifico nel database
    getDataFromNode(node: string) {
      return this.db.object(node).valueChanges();
    }

    // Metodo per scrivere dati in un nodo specifico nel database
    writeDataToNode(node: string, data: any) {
      return this.db.object(node).set(data);
    }
    // Metodo per effettuare l'accesso con email e password
  loginWithEmail(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Metodo per effettuare il logout
  logout() {
    return this.afAuth.signOut();
  }
  }

