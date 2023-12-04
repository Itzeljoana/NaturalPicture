import { useContext, useEffect, useState } from "react";
import Gallery from '../components/Gallery';
import { AppContext } from '../context/contextApi';

const Home = () => {
  const { toggleFavorite } = useContext(AppContext);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/photos.json');
        if (!response.ok) {
          throw new Error('Error al obtener las fotos');
        }
        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery photos={photos} toggleFavorite={toggleFavorite}  showHeartAndText={true}/>
    </div>
  );
};

export default Home;
