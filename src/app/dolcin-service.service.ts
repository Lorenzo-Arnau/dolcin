import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Financial } from './models/financial.model';

@Injectable({
  providedIn: 'root'
})
export class DolcinService {
  tutorialsRef: AngularFireList<Financial>;
  private dbPath ='/financial_tools'

  constructor(private afAuth: AngularFireAuth,private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Financial> {
    return this.tutorialsRef;
  }

  create(tutorial: Financial): any {
    return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }
  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
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

