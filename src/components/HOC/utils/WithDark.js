const withDark =(Component)=>{
    const styles ={
        backgroundColor:"black",
        color:"white",
        height:"100vh"
    }
    return  function (props){<div className={styles}><Component {...props} /></div>}

}
export default withDark;