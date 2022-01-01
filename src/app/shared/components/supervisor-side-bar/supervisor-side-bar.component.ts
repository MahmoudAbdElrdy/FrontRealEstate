import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouteInfo } from '../sidebar/sidebar.metadata';
@Component({
  selector: 'app-supervisor-side-bar',
  templateUrl: './supervisor-side-bar.component.html',
  styleUrls: ['./supervisor-side-bar.component.css']
})
export class SupervisorSideBarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public isCollapsed = true;
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
      if (element === this.showMenu) {
          this.showMenu = '0';
      } else {
          this.showMenu = element;
      }

  }
  addActiveClass(element: any) {
      if (element === this.showSubMenu) {
          this.showSubMenu = '0';
      } else {
          this.showSubMenu = element;
      }
      window.scroll({
          top: 0,
          left: 0,
          behavior: 'auto'
      });
  }

  constructor(
      private modalService: NgbModal,
      private router: Router,
      private route: ActivatedRoute
  ) { }

  // End open close
  ngOnInit() {
      this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }
}
export const ROUTES: RouteInfo[] = [

  {
          path: '',
          title: 'الحاسابات الصادرة',
          icon: 'mdi mdi-format-color-fill',
          class: 'has-arrow',
          extralink: false,
          submenu: [
                  {
                          path: '/Supervisors/Supervisor',
                          title: 'المشرفيين',
                          icon: 'fas fa-user',
                          class: '',
                          extralink: false,
                          submenu: []
                  },
                  {
                          path: '/Supervisors/DailyReport',
                          title: 'التقرير اليومي',
                          icon: 'fas fa-user',
                          class: '',
                          extralink: false,
                          submenu: []
                  }
          ]
  }

  ];