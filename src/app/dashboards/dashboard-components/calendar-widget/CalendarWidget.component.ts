import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
@Component({
    selector: 'app-calendarwidget',
    templateUrl: './CalendarWidget.component.html'
})

export class CalendarWidgetComponent implements OnInit {

    model: NgbDateStruct;
    date: {year: number, month: string, day:number};
    dateString: string;
      constructor(private ngbDateParserFormatter: NgbDateParserFormatter) {

      }
  

    ngOnInit(){
        this.model = this.setDefaultDate();
        this.onSelectDate(this.model);
    }
     
      onSelectDate(date: NgbDateStruct){
         if (date != null) {
            this.model = date;   //needed for first time around due to ngModel not binding during ngOnInit call. Seems like a bug in ng2.
            this.dateString = this.ngbDateParserFormatter.format(date);
        }
      }
      
      setDefaultDate(): NgbDateStruct {
            var startDate = new Date();
            let startYear = startDate.getFullYear().toString();
            let startMonth = startDate.getMonth() + 1; 
            let startDay = startDate.getDay()+10;

            return this.ngbDateParserFormatter.parse(startYear + "-" + startMonth.toString() + "-" + startDay);
    }


    
}
