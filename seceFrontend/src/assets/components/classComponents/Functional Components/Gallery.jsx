const Gallery=(props)=>{
    return(
        <div>
            <h2>
                Welcome to {props.page} page
            </h2>
            <img src="logo.png" alt="SECE logo"></img>
            <h3> This is {props.image}</h3>
        </div> 
    )
}

export default Gallery
