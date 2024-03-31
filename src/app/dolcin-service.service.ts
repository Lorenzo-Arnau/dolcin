import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DolcinService {

  constructor(private http: HttpClient,private db: AngularFireDatabase) { 

  }

    // Metodo per ottenere i dati da un nodo specifico nel database
    getDataFromNode(node: string) {
      return this.db.object(node).valueChanges();
    }
  
    // Metodo per scrivere dati in un nodo specifico nel database
    writeDataToNode(node: string, data: any) {
      return this.db.object(node).set(data);
    }
  }

