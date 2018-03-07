export const addUserDetail=({email,password}={})=>({
type:'ADD-USER',
userdetail:{
    email,
    password
}
});

export const addSignalmentDetail=({facilities, Qualification, Location,Pension, Distance, Working_Shift}={},driving_license,own_car)=>({
    type:'SIGNALMENT-DETAIL',
    signalmentDetail:{
        facilities,
         Qualification, 
         Location,
         Pension,
          Distance, 
          Working_Shift,
          own_car,
          driving_license
        }
});