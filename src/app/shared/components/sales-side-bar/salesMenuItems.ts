import { RouteInfo } from "../sidebar/sidebar.metadata";
export const ROUTES: RouteInfo[] = [

        {
                path: '/Sales/CustomerSales',
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
                                path: '/CustomerSales/CustomerData',
                                title: 'بيانات العملاء',
                                icon: '',
                                class: '',
                                extralink: false,
                                submenu: []
                        }



                ]
        },
        // {
        //         path: '/Sales/Qestions',
        //         title: 'الاستعلامات',
        //         icon: 'fas fa-user',
        //         class: '',
        //         extralink: false,
        //         submenu: []
        // },
];