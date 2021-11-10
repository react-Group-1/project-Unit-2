export const sortCarsViaSearchBar = (searchBar)=>{
    return{
        type:"FILTER_CARS_VIA_SEARCH_BAR",
        payload:searchBar
    }
}
export const sortFromHtoL = ()=>{
    // H = high , L = Low
    return{
        type:"SORT_FROM_H_TO_L",
    }
}
export const sortFromLtoH = ()=>{
    // H = high , L = Low
    return{
        type:"SORT_FROM_L_TO_H",
    }
}