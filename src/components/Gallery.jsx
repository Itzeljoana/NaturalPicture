import { useContext } from "react";
import {AppContext} from "../context/contextApi";
import IconHeart from "./IconHeart";
import "../index.css";

const Gallery = (props) => {
  const { toggleFavorite, favorites } = useContext(AppContext);

  return (
    <div className="gallery">
       {props.photos.map((photo) => (
        <div key={photo.id} className="gallery-item" >
          <div
            className="gallery-item-background"
            style={{ backgroundImage: `url(${photo.src.large})` }}>
            {/* Muestra el corazón y el texto solo si showHeartAndText es verdadero */}
            {props.showHeartAndText && (
              <>
                {/* Coloca el corazón en la esquina superior derecha */}
                <IconHeart
                  filled={favorites.includes(photo.id)}
                  onClick={() => toggleFavorite(photo.id)}
                  className="heart-icon"
                />
                {/* Coloca el texto en la parte inferior centrada */}
                <p className="image-text">{photo.alt}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
