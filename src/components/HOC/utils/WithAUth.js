const withAuth = (Component)=>{
    const isAuth = true;
    return function(props){
        if(isAuth){
            return <Component {...props} />
        }
        else{
         return <h1>Please login First</h1>
        }
    }
}
export default withAuth