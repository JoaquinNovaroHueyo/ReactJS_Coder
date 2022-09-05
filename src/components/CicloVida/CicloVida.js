import { useEffect } from "react";


const CicloVida = ({ numero }) => {
    useEffect( ()=> {
    } , [numero])



  return (
    <div>
        <h2>{numero}</h2>
    </div>
  )
}

export default CicloVida