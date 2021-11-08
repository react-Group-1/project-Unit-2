const initialState = {
    cars: [ {id:"1",brand:"Hyundai" ,name:"i10" ,year:"2022",price:"50",img:"1-Hyundai-i10-2022.png" },
    {id:"2",brand:"Suzuki" ,name:"Dzire" ,year:"2021",price:"60",img:"2-Suzuki-Dzire-2021.jpg"},
    {id:"3",brand:"Chevrolet" ,name:"Spark" ,year:"2021", price:"50",img:"3-Chevrolet-Spark-2021.jpg" },
    {id:"4",brand:"Chevrolet" ,name:"Spark",year: "2020",price:"50",img:"4-Chevrolet-Spark-2020.jpg"},{id:"5",brand:"Toyota" ,name:"Yaris" ,year:"2021",price:"70",img:"5-Toyota-Yaris 2021.jpg" },
    {id:"6",brand:"Suzuki" ,name:"Baleno" ,year:"2021",price:"60",img:"6-Suzuki-Baleno-2021.jpg" },
    {id:"7",brand:"Suzuki" ,name:"Baleno" ,year:"2020",price:"60",img:"7-Suzuki-Baleno-2020.jpg" },{id:"8",brand:"Kia" ,name:"Pegas" ,year:"2021",price:"60",img:"8-Kia-Pegas-2021.jpg" },
    {id:"9",brand:"Kia" ,name:"Pegas" ,year:"2020",price:"60",img:"9-Kia-Pegas-2020.jpg" },
    {id:"10",brand:"Nissan" ,name:"Sunny" ,year:"2022",price:"70",img:"10-Nissan-Sunny-2022.jpg" },{id:"11",brand:"Nissan" ,name:"Sunny",year:"2021",price:"60",img:"11-Nissan-Sunny-2021.jpg" },
    {id:"12",brand:"Nissan" ,name:"Sunny",year:"2020",price:"60",img:"12-Nissan-Sunny-2020.jpg" },
    {id:"13",brand:"Hyundai" ,name:"Accent" ,year: "2021",price:"60",img:"13-Hyundai-Accent-2021.jpg"},{id:"14",brand:"Kia" ,name:"Rio" ,year:"2021",price:"60",img:"14-Kia-Rio-2021.jpg" },
    {id:"15",brand:"Hyundai" ,name:"Elantra" ,year:"2021",price:"70",img:"15-Hyundai Elantra-2021.jpg" },
    {id:"16",brand:"Kia" ,name:"Cerato" ,year:"2021",price:"70",img:"16-Kia-Cerato-2021.jpg" },{id:"17",brand:"Kia" ,name:"Cerato",year:"2020",price:"70",img:"17-Kia-Cerato-2020.jpg"},
    {id:"18",brand:"Mazda" ,name:"6" ,year:"2022",price:"100",img:"18-Mazda-6-2022.jpg" },
    {id:"19",brand:"Chevrolet" ,name:"Malibu" ,year:"2021",price:"110",img:"19-Chevrolet-Malibu-2021.jpg" },{id:"20",brand:"Hyundai" ,name:"Sonata" ,year:"2020",price:"100",img:"20-Hyundai-Sonata-2020.jpg" },
    {id:"21",brand:"Ford",name:"Taurus" ,year:"2021",price:"150",img:"21-Ford-Taurus-2021.jpg" },
    {id:"22",brand:"Ford",name:"Taurus",year:"2020",price:"140",img:"22-Ford-Taurus-2020.jpg" },{id:"23",brand:"Rangerover" ,name:"Evoque" ,year: "2021",price:"300",img:"23-Rangerover-Evoque-2021.jpg"},
    {id:"24",brand:"Volkswagen" ,name:"T-ROC" ,year:"2021",price:"260",img:"24-Volkswagen- T-ROC-2021.jpg" },
    {id:"25",brand:"Hyundai" ,name:"Kona" ,year:"2021",price:"90",img:"25-Hyundai Kona-2021.jpg" },{id:"26",brand:"Hyundai" ,name:"Creta" ,year:"2021",price:"90",img:"26-Hyundai-Creta-2021.jpg" },
    {id:"27",brand:"Kia" ,name:"Sportage" ,year: "2021",price:"140",img:"27-Kia-Sportage-2021.jpg"},
    {id:"28",brand:"Mercedes" ,name:"730" ,year:"2021",price:"360",img:"28-Mercedes-S450 2021.jpg" },{id:"29",brand:"Mercedes" ,name:"S-Class" ,year:"2020",price:"360",img:"29-Mercedes-S-Class-2020.jpg" },
    {id:"30",brand:"BMW" ,name:"730li" ,year:"2022",price:"600",img:"30-BMW-730LI-2022.jpg" },{id:"31",brand:"BMW" ,name:"730" ,year:"2019",price:"660",img:"31-BMW-730-2019.jpg" },
    {id:"32",brand:"BMW" ,name:"520i" ,year:"2022",price:"660",img:"32-BMW-520i-2022.jpg" },{id:"33",brand:"BMW" ,name:"520i"  ,year:"2022",price:"460",img:"33-BMW-520i-2022.jpg" },
    {id:"34",brand:"Audi" ,name:"A6" ,year:"2022",price:"550",img:"34-AUDI-A6-2022.jpg" },{id:"35",brand:"Audi" ,name:"A6",year:"2021",price:"500",img:"35-AUDI-A6-2021.jpg" },
    {id:"36",brand:"Audi" ,name:"A6",year:"2020",price:"500",img: "36-AUDI-A6-2020.jpg"},{id:"37",brand:"Chevrolet" ,name:"Suburban" ,year:"2021",price:"450",img:"37-Chevrolet-Suburban-2021.jpg" },
    {id:"38",brand:"Chevrolet" ,name:"Suburban",year:"2020",price:"450",img:"38-Chevrolet Suburban-2020.jpg" },{id:"39",brand:"Chevrolet" ,name:"Tahoe" ,year:"2021",price:"400",img:"39-Chevrolet-Tahoe-2021.jpg" },
    {id:"40",brand:"Chevrolet" ,name:"Tahoe",year:"2020",price:"400",img:"40-Chevrolet Tahoe-2020.jpg"},]
}

const carsReducer = (state = initialState , {type, payload}) =>{
    switch (type) {
        default:
            return state ;
            break;
    }
}
export default carsReducer;