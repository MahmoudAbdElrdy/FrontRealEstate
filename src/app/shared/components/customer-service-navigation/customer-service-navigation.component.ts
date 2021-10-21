import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-customer-service-navigation',
  templateUrl: './customer-service-navigation.component.html',
  styleUrls: ['./customer-service-navigation.component.css']
})
export class CustomerServiceNavigationComponent implements AfterViewInit ,OnInit{
  //@Output() toggleSidebar = new EventEmitter<void>();
  public time: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));
  dateObj:any=Date.now();
  department:any;
  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  constructor(private modalService: NgbModal,
    private router: Router) { }
  ngOnInit(): void {
  this.department=  localStorage.getItem("department");
  }

  ngAfterViewInit() { }
  Logout(){
    localStorage.removeItem("userToken");
    localStorage.setItem('isLoggedin', 'true');
    // this.router.navigate(['/authentication/login']);
    window.location.replace("/authentication/login");

  }
}
