import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-contract-navigation',
  templateUrl: './contract-navigation.component.html',
  styleUrls: ['./contract-navigation.component.css']
})
export class ContractNavigationComponent implements AfterViewInit ,OnInit{
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
    localStorage.clear()
    // this.router.navigate(['/authentication/login']);
    window.location.replace("/authentication/login");

  }
}
