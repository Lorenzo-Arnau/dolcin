import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DolcinService } from '../dolcin-service.service'
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.scss'
})
export class FinancialComponent implements OnInit  {
  inputFinancial:any;
  @ViewChild('financialInput') financialInput: ElementRef<HTMLInputElement> = Object.create(null)
  noteObj:any={value:0,type:0}
  constructor(private dataService: DolcinService) { }

  ngOnInit() {
    this.getValues();

  }
  selectFinancialValue(event:any){
    this.noteObj.value = event.target.value

  }
  selectTypeFinancial(type:any){
    this.noteObj.type = type;
  }
  resetValue(){
    this.noteObj.value = 0
    this.noteObj.type = 0
    this.financialInput.nativeElement.value =''
  }
  getValues(){
    this.dataService.getDataFromNode('financial_data').subscribe((data: any) => {
      console.log('Dati ottenuti:', data);
    });
  }

  sendValues(){
    this.dataService.writeDataToNode('example_node', this.noteObj).then(() => {
      console.log('Dati scritti con successo nel nodo');
    }).catch((error:any) => {
      console.error('Errore durante la scrittura dei dati:', error);
    });
  }

}
