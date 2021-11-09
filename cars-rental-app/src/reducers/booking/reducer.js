const initialState = {
    SelectedCar:{},
    isSelected:false,
}

const bookingReducer = (state = initialState , {type, payload}) =>{
    switch (type) {
        case "SET_CAR":
            return{
                    SelectedCar:payload,
                    isSelected:true
            }
        case "DELETE_CAR":
            return{
                    SelectedCar:{},
                    isSelected:false
            }
        default:
            return state ;
            
    }
}
export default bookingReducer;