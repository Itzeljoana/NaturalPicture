import { createContext, useState} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    console.log('Toggle likes for photo ID:', photoId);

    setFavorites((prevFavorites) => {
        if(prevFavorites.includes(photoId)){
            return prevFavorites.filter((favId) => favId !== photoId);
        } else {
            return [...prevFavorites, photoId];
        }

    });
  };

  

  return (
     <AppContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};
// export default AppProvider;
export { AppProvider, AppContext };