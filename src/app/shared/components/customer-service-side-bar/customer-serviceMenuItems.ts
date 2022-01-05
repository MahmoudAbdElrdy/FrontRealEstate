import { RouteInfo } from "../sidebar/sidebar.metadata";


export const ROUTES: RouteInfo[] = [

{
        path: '/CustomerServices/Customer',
        title: 'العملاء',
        icon: 'fas fa-user',
        class: '',
        extralink: false,
        submenu: []
},
{
       
        title: 'التقارير',
        path: '',
        icon: 'mdi mdi-format-color-fill',
        class: 'has-arrow',
        extralink: false,
        submenu: [
               
                {
                        path: '/CustomerServices/CustomerData',
                        title: 'بيانات العملاء',
                        icon: '',
                        class: '',
                        extralink: false,
                        submenu: []
                }
                
                
             
        ]
},
// {
//         path: '/CustomerServices/Visit',
//         title: 'الزيارات',
//         icon: 'fas fa-user',
//         class: '',
//         extralink: false,
//         submenu: []
// },
];
