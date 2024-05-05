import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DolcinService } from '../dolcin-service.service'
import { Financial } from '../models/financial.model';
import { map } from 'rxjs';
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrl: './financial.component.scss'
})
export class FinancialComponent implements OnInit  {
  inputFinancial:any;
  @ViewChild('financialInput') financialInput: ElementRef<HTMLInputElement> = Object.create(null)
  noteObj: Financial = new Financial();
  listMultiselect:any=['Spesa primaria','Spesa secondaria','Materia prima','Marketing','Rimborso','Acquisto'];
  allNotes:any=[];
  submitted = false;
  financials?: Financial[];
  currentFinancial?: Financial;
  currentIndex = -1;
  title = '';
  message:any=''
  totalForMonth:any = 0;

  constructor(private dataService: DolcinService) { }

  ngOnInit() {
    this.getValues();

  }
  totalMonth(){
    console.log('test');

    let total = 0;
    this.financials?.forEach(element => {
      let value = parseInt(element.value!)
      if(element.type == 1){
        total = (total - value)
      }else if(element.type == 2){
        total =  (total + value)
      }
    });
    this.totalForMonth = total
  }
  refreshList(){
    this.currentFinancial = undefined;
    this.currentIndex = -1;
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
    this.noteObj.specs = 'Spesa primaria'
    this.financialInput.nativeElement.value =''
  }
  getValues(){

    this.dataService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.financials = data;
      console.log(this.financials);
      this.totalMonth()

    });
  }

  sendValues(){
    console.log('send');

    this.dataService.create(this.noteObj).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
      this.resetValue();
    });
  }
  setActiveFinancial(financial: Financial, index: number): void {
    this.currentFinancial = financial;
    this.currentIndex = index;
  }

  removeAllFinancials(): void {
    this.dataService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

  updatePublishedFinancial(name: boolean): void {
    if (this.currentFinancial?.id) {
      this.dataService.update(this.currentFinancial.id, { name: name })
      .then(() => {
        console.log('success');

      })
      .catch(err => console.log(err));
    }
  }

  updateFinancial(): void {
    const data = {
      title: this.currentFinancial?.name,
      description: this.currentFinancial?.value
    };

    if (this.currentFinancial?.id) {
      this.dataService.update(this.currentFinancial.id, data)
        .then(() => this.message = 'The tutorial was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteFinancial(): void {
    if (this.currentFinancial?.id) {
      this.dataService.delete(this.currentFinancial.id)
        .then(() => {
          this.refreshList();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

  newValue(): void {
    this.submitted = false;
    this.noteObj = new Financial();
  }
}
