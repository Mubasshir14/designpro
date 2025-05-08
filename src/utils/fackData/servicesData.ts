type DataType = {
    id: number,
    title: string,
    img: string,
    description: string,
    path: string
}[]
export const servicesData: DataType = [
    {
        id: 1,
        title: "Product Design",
        img: "/images/services/service1.jpg",
        description: "Our subscription-based design service gives you access to a dedicated team.",
        path: "/service/product-design"
    },
    {
        id: 2,
        title: "Graphic Design",
        img: "/images/services/service2.jpg",
        description: "Why settle for one designer when you can have a dedicated team",
        path: "/service/graphic-design"
    },
    {
        id: 3,
        title: "Marketing Design",
        img: "/images/services/service3.jpg",
        description: "How our subscription-based design service with a team",
        path: "/service/market-design"
    },

]