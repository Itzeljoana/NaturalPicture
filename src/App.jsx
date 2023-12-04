// import { Route, Routes } from "react";
// import Navbar from "./components/Navbar";
// import Favorites from "./views/Favorites";
// import Home from "./views/Home";
// import { AppProvider, AppContext } from './context/contextApi'; 

// const PHOTO_URL = "/photos.json";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <AppProvider>
//         <Routes>
//           <Route
//             path="/"
//             element={<Home />}
//           />
//           <Route
//             path="/favoritos"
//             element={<Favorites />}
//           />
//         </Routes>
//       </AppProvider>
//     </div>
//   );
// };

// export default App;
// App.jsx



import {  Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/contextApi';
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppProvider>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </AppProvider>
    </div>
  );
};

export default App;
