export const addUserDetail=({email,password}={})=>({
type:'ADD-USER',
userdetail:{
    email,
    password
}
});

export const addSignalmentDetail=({facilities, Qualification, Location, Distance, Working_Shift}={},Car,Driver)=>({
    type:'SIGNALMENT-DETAIL',
    signalmentDetail:{
        facilities,
         Qualification, 
         Location,
          Distance, 
          Working_Shift,
          Car,
          Driver
        }
});