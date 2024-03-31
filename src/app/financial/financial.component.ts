import { Component } from '@angular/core';
import { DolcinService } from '../dolcin-service.service'
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.scss'
})
export class FinancialComponent implements OnInit  {
  constructor(private dataService: DolcinService) { }
  
  ngOnInit() {
    // Lettura dei dati da un nodo nel database
    this.dataService.getDataFromNode('example_node').subscribe((data: any) => {
      console.log('Dati ottenuti:', data);
    });
  
    // Scrittura dei dati in un nodo nel database
    const newData = {
      name: 'Nuovo dato',
      value: 123
    };
    this.dataService.writeDataToNode('example_node', newData).then(() => {
      console.log('Dati scritti con successo nel nodo');
    }).catch((error) => {
      console.error('Errore durante la scrittura dei dati:', error);
    });
  }

}
