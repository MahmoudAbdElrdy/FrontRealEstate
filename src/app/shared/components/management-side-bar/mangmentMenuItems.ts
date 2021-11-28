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
        path: '/Management/Contract',
        title: 'التعاقدات',
        icon: 'fas',
        class: '',
        extralink: false,
        submenu: []
},
,

{
        path: '/Management/Supervisor',
        title: 'المشرفيين',
        icon: 'fas fa-user',
        class: '',
        extralink: false,
        submenu: []
},
{
        path: '/Management/DailyReport',
        title: 'التقرير اليومي',
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
                // {
                //         path: '/Management/Visit',
                //         title: 'الزيارات',
                //         icon: 'fas fa-user',
                //         class: '',
                //         extralink: false,
                //         submenu: []
                // },
        ]
},
{
       
        title: 'المبيعات',
        path: '',
        icon: 'mdi mdi-format-color-fill',
        class: 'has-arrow',
        extralink: false,
        submenu: [
                {
                        path: '/Management/CustomerSales',
                        title: 'العملاء',
                        icon: 'fas fa-user',
                        class: '',
                        extralink: false,
                        submenu: []
                },
               
        ]
},
{
       
        title: 'التقارير',
        path: '',
        icon: 'mdi mdi-format-color-fill',
        class: 'has-arrow',
        extralink: false,
        submenu: [
                {
                        path: '/Management/ExtraContrcat',
                        title: 'تقرير الملحقات ',
                        icon: '',
                        class: '',
                        extralink: false,
                        submenu: []
                },
                {
                        path: '/Management/CustomerCard',
                        title: 'كارت العميل',
                        icon: '',
                        class: '',
                        extralink: false,
                        submenu: []
                },
                {
                        path: '/Management/CustomerData',
                        title: 'بيانات العملاء',
                        icon: '',
                        class: '',
                        extralink: false,
                        submenu: []
                }
             
        ]
},
];
