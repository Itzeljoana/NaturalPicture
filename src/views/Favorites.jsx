import { useContext, useEffect, useState } from "react";
import Gallery from '../components/Gallery';
import { AppContext } from '../context/contextApi';

const Favorites = () => {
  const { favorites } = useContext(AppContext);
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/photos.json');
        if (!response.ok) {
          throw new Error('Error al obtener las fotos');
        }
        const data = await response.json();
        setAllPhotos(data.photos);
      } catch (error) {
        console.error('Error en la carga de fotos:', error);
      }
    };

    fetchPhotos();
  }, []);

  const favoritePhotos = allPhotos.filter(photo => favorites.includes(photo.id));
  

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="">
        <Gallery photos={favoritePhotos} showText={false} />
      </div>
    </div>
  );
};

export default Favorites;
