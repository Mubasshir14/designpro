// type DataType = {
//     id: number
//     label: string,
//     path:string
// }[]

// export const menuList:DataType = [
//     {
//         id:1,
//         label:"How it works",
//         path:"how"
//     },
//     {
//         id:2,
//         label:"Services",
//         path:"service"
//     },
//     {
//         id:3,
//         label:"Projects",
//         path:"project"
//     },
//     {
//         id:4,
//         label:"Pricing",
//         path:"pricing"
//     },
//     {
//         id:5,
//         label:"Faqs",
//         path:"faqs"
//     },
//     {
//         id:6,
//         label:"Book Now",
//         path:"book"
//     },

// ]

export type MenuItem = {
    id: number;
    label: string;
    path: string;
    children?: MenuItem[];
};

export type DataType = MenuItem[];

export const menuList: DataType = [
    {
        id: 1,
        label: "How it works",
        path: "how"
    },
    {
        id: 2,
        label: "Services",
        path: "service",
        children: [
            { id: 21, label: "Websites", path: "/service/websites" },
            { id: 22, label: "Web Design", path: "/service/web-design" },
            { id: 23, label: "SEO", path: "/service/seo" },
            { id: 24, label: "Ecommerce Store", path: "/service/ecommerce-store" },
            // { id: 25, label: "Wordpress", path: "/service/wordpress" }
        ]
    },
    {
        id: 3,
        label: "Projects",
        path: "project"
    },
    {
        id: 4,
        label: "Pricing",
        path: "pricing"
    },
    {
        id: 5,
        label: "Faqs",
        path: "faqs"
    },
    {
        id: 6,
        label: "Book Now",
        path: "book"
    }
];
