import datamain from "./data"
import "./Gallery.css"
export default function Gallery({heading, title, data}){
    console.log(data);
    
    
    return(
    
    <div className="gallery-main">
      <h1>Gallery</h1>
      <h3>{title}</h3>
    {
    datamain.data.map((result)=>{
        return(
            <div className="gallery-overall">
                <div className="image"> <img src={result.image} alt=""/> </div>
                <div>   <p>{result.desc}</p> </div>
              
            </div>
       
        )
   
    })
    
  
     
    }
    </div>
 
       
    )
}