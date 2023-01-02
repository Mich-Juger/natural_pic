import { useContext } from "react";
import Context from "../Context";


export default function Favoritos() {
  const { fotos, setFotos } = useContext(Context);

  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {
        fotos.filter(foto => foto.favorito === true).map((foto, i) => (
          <div
            className="foto"
            style={{ backgroundImage: `url(${foto.src})` }}
            key={i}
          >
           <p> {foto.desc} </p>          
          </div>
        ))
      }
      </div>
    </div>
  );
}
