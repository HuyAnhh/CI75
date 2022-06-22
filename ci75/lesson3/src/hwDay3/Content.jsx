export const Content = ({img , h1 , i , p}) => {
    return (
        <div style={{textAlign : "center" , border: "1px solid black", borderRadius: "20px", width: "25%", marginTop: "50px", padding: "20px"}}>
            <img src ={img} alt ="" style={{width : "100%" , borderRadius: "20px"}} />
            <h1>{h1}</h1>
            <p><i style={{color: "gray"}}>{i}</i></p>
            <p style={{textDecoration: "underline"}}>{p}</p>
        </div>
    )
}