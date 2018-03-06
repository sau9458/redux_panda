export const addUserDetail=({email,password}={})=>({
type:'ADD-USER',
userdetail:{
    email,
    password
}
});
