export const SetCar = (car)=> {
    return {
        type:"SET_CAR",
        payload:car
    };
};
export const deleteCar = ()=> {
    return {
        type:"DELETE_CAR",
    };
};
