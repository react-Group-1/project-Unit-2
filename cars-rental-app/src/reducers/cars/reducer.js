const initialState = {
    cars: [ {id:"1",Brand:"Hyundai" ,Name:"i10" ,Year:"2022",Price:"50",img:"1-Hyundai-i10-2022.jpg" },
    {id:"2",Brand:"Suzuki" ,Name:"Dzire" ,Year:"2021",Price:"60",img:"2-Suzuki-Dzire-2021.jpg"},
    {id:"3",Brand:"Chevrolet" ,Name:"Spark" ,Year:"2021", Price:"50",img:"3-Chevrolet-Spark-2021.jpg" },
    {id:"4",Brand:"Chevrolet" ,Name:"Spark",Year: "2020",Price:"50",img:"4-Chevrolet-Spark-2020.jpg"},{id:"5",Brand:"Toyota" ,Name:"Yaris" ,Year:"2021",Price:"70",img:"5-Toyota-Yaris 2021.jpg" },
    {id:"6",Brand:"Suzuki" ,Name:"Baleno" ,Year:"2021",Price:"60",img:"6-Suzuki-Baleno-2021.jpg" },
    {id:"7",Brand:"Suzuki" ,Name:"Baleno" ,Year:"2020",Price:"60",img:"7-Suzuki-Baleno-2020.jpg" },{id:"8",Brand:"Kia" ,Name:"Pegas" ,Year:"2021",Price:"60",img:"8-Kia-Pegas-2021.jpg" },
    {id:"9",Brand:"Kia" ,Name:"Pegas" ,Year:"2020",Price:"60",img:"9-Kia-Pegas-2020.jpg" },
    {id:"10",Brand:"Nissan" ,Name:"Sunny" ,Year:"2022",Price:"70",img:"10-Nissan-Sunny-2022.jpg" },{id:"11",Brand:"Nissan" ,Name:"Sunny",Year:"2021",Price:"60",img:"11-Nissan-Sunny-2021.jpg" },
    {id:"12",Brand:"Nissan" ,Name:"Sunny",Year:"2020",Price:"60",img:"12-Nissan-Sunny-2020.jpg" },
    {id:"13",Brand:"Hyundai" ,Name:"Accent" ,Year: "2021",Price:"60",img:"13-Hyundai-Accent-2021.jpg"},{id:"14",Brand:"Kia" ,Name:"Rio" ,Year:"2021",Price:"60",img:"14-Kia-Rio-2021.jpg" },
    {id:"15",Brand:"Hyundai" ,Name:"Elantra" ,Year:"2021",Price:"70",img:"15-Hyundai Elantra-2021.jpg" },
    {id:"16",Brand:"Kia" ,Name:"Cerato" ,Year:"2021",Price:"70",img:"16-Kia-Cerato-2021.jpg" },{id:"17",Brand:"Kia" ,Name:"Cerato",Year:"2020",Price:"70",img:"17-Kia-Cerato-2020.jpg"},
    {id:"18",Brand:"Mazda" ,Name:"6" ,Year:"2022",Price:"100",img:"18-Mazda-6-2022.jpg" },
    {id:"19",Brand:"Chevrolet" ,Name:"Malibu" ,Year:"2021",Price:"110",img:"19-Chevrolet-Malibu-2021.jpg" },{id:"20",Brand:"Hyundai" ,Name:"Sonata" ,Year:"2020",Price:"100",img:"20-Hyundai-Sonata-2020.jpg" },
    {id:"21",Brand:"Ford",Name:"Taurus" ,Year:"2021",Price:"150",img:"21-Ford-Taurus-2021.jpg" },
    {id:"22",Brand:"Ford",Name:"Taurus",Year:"2020",Price:"140",img:"22-Ford-Taurus-2020.jpg" },{id:"23",Brand:"Rangerover" ,Name:"Evoque" ,Year: "2021",Price:"300",img:"23-Rangerover-Evoque-2021.jpg"},
    {id:"24",Brand:"Volkswagen" ,Name:"T-ROC" ,Year:"2021",Price:"260",img:"24-Volkswagen- T-ROC-2021.jpg" },
    {id:"25",Brand:"Hyundai" ,Name:"Kona" ,Year:"2021",Price:"90",img:"25-Hyundai Kona-2021.jpg" },{id:"26",Brand:"Hyundai" ,Name:"Creta" ,Year:"2021",Price:"90",img:"26-Hyundai-Creta-2021.jpg" },
    {id:"27",Brand:"Kia" ,Name:"Sportage" ,Year: "2021",Price:"140",img:"27-Kia-Sportage-2021.jpg"},
    {id:"28",Brand:"Mercedes" ,Name:"730" ,Year:"2021",Price:"360",img:"28-Mercedes-S450 2021.jpg" },{id:"29",Brand:"Mercedes" ,Name:"S-Class" ,Year:"2020",Price:"360",img:"29-Mercedes-S-Class-2020.jpg" },
    {id:"30",Brand:"BMW" ,Name:"730li" ,Year:"2022",Price:"600",img:"30-BMW-730LI-2022.jpg" },{id:"31",Brand:"BMW" ,Name:"730" ,Year:"2019",Price:"660",img:"31-BMW-730-2019.jpg" },
    {id:"32",Brand:"BMW" ,Name:"520i" ,Year:"2022",Price:"660",img:"32-BMW-520i-2022.jpg" },{id:"33",Brand:"BMW" ,Name:"520i"  ,Year:"2022",Price:"460",img:"33-BMW-520i-2022.jpg" },
    {id:"34",Brand:"Audi" ,Name:"A6" ,Year:"2022",Price:"550",img:"34-AUDI-A6-2022.jpg" },{id:"35",Brand:"Audi" ,Name:"A6",Year:"2021",Price:"500",img:"35-AUDI-A6-2021.jpg" },
    {id:"36",Brand:"Audi" ,Name:"A6",Year:"2020",Price:"500",img: "36-AUDI-A6-2020.jpg"},{id:"37",Brand:"Chevrolet" ,Name:"Suburban" ,Year:"2021",Price:"450",img:"37-Chevrolet-Suburban-2021.jpg" },
    {id:"38",Brand:"Chevrolet" ,Name:"Suburban",Year:"2020",Price:"450",img:"38-Chevrolet Suburban-2020.jpg" },{id:"39",Brand:"Chevrolet" ,Name:"Tahoe" ,Year:"2021",Price:"400",img:"39-Chevrolet-Tahoe-2021.jpg" },
    {id:"40",Brand:"Chevrolet" ,Name:"Tahoe",Year:"2020",Price:"400",img:"40-Chevrolet Tahoe-2020.jpg"},]
}

const carsReducer = (state = initialState , {type, payload}) =>{
    switch (type) {
        default:
            return state ;
            break;
    }
}
export default carsReducer;