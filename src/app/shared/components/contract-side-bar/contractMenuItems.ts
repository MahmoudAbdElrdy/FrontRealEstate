import { RouteInfo } from "../sidebar/sidebar.metadata";


export const ROUTES: RouteInfo[] = [
        {
                path: '/Contracts/Project',
                title: 'العقارات',
                icon: 'fas fa-user',
                class: '',
                extralink: false,
                submenu: []
        },
        {
                path: '/Contracts/Contract',
                title: 'الحاسابات الورداة',
                icon: 'fas fa-user',
                class: '',
                extralink: false,
                submenu: []
        },
        ,
        {

                title: 'التقارير',
                path: '',
                icon: 'mdi mdi-format-color-fill',
                class: 'has-arrow',
                extralink: false,
                submenu: [
                        {
                                path: '/Contracts/ExtraContrcat',
                                title: 'تقرير الملحقات ',
                                icon: '',
                                class: '',
                                extralink: false,
                                submenu: []
                        },
                        {
                                path: '/Contracts/CustomerCard',
                                title: 'كارت العميل',
                                icon: '',
                                class: '',
                                extralink: false,
                                submenu: []
                        },
                        {
                                path: '/Contracts/YearContrcat',
                                title: 'مبيعات السنة ',
                                icon: '',
                                class: '',
                                extralink: false,
                                submenu: []
                        },
                        {
                                path: '/Contracts/CustomerData',
                                title: 'بيانات العملاء',
                                icon: '',
                                class: '',
                                extralink: false,
                                submenu: []
                        }



                ]
        },

];
