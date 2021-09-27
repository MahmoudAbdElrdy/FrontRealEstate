import { RouteInfo } from "../sidebar/sidebar.metadata";


export const ROUTES: RouteInfo[] = [

{
        path: '/Management/Project',
        title: 'العقارات',
        icon: 'fas fa-user',
        class: '',
        extralink: false,
        submenu: []
},

{
        path: '/Management/Employees',
        title: 'الموظيفين',
        icon: 'fas fa-user',
        class: '',
        extralink: false,
        submenu: []
},
{
       
        title: 'خدمة العملاء',
        path: '',
        icon: 'mdi mdi-format-color-fill',
        class: 'has-arrow',
        extralink: false,
        submenu: [
                {
                        path: '/Management/Customer',
                        title: 'العملاء',
                        icon: 'fas fa-user',
                        class: '',
                        extralink: false,
                        submenu: []
                },
                {
                        path: '/Management/Visit',
                        title: 'الزيارات',
                        icon: 'fas fa-user',
                        class: '',
                        extralink: false,
                        submenu: []
                },
        ]
},

];
