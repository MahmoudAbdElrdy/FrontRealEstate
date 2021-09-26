import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-management-navigation',
  templateUrl: './management-navigation.component.html',
  styleUrls: ['./management-navigation.component.css']
})
export class ManagementNavigationComponent implements AfterViewInit ,OnInit{
  //@Output() toggleSidebar = new EventEmitter<void>();
  public time: Observable<Date> = timer(0, 1000).pipe(map(() => new Date()));
  dateObj:any=Date.now();
  companyName:any;
  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  constructor(private modalService: NgbModal,
    private router: Router) { }
  ngOnInit(): void {
  this.companyName=  localStorage.getItem("companyName");
  }

  ngAfterViewInit() { }
  Logout(){
    localStorage.removeItem("userToken");
    localStorage.setItem('isLoggedin', 'true');
    // this.router.navigate(['/authentication/login']);
    window.location.replace("/authentication/login");

  }
}
