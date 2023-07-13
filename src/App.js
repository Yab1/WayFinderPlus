// Contexts
import MapMetaDataContextProvider from "./Context/mapMetaDataContext";
import BuildingsContextProvider from "./Context/buildingsContext";

// Components
import Header from "./Components/IndoorNav/Header/Header";
import MapContainer from "./Components/IndoorNav/Body/MapContainer";
import SideBarLeft from "./Components/IndoorNav/SidebarLeft/SideBarLeft";
import SideBarRight from "./Components/IndoorNav/SidebarRight/SideBarRight";
import Footer from "./Components/IndoorNav/Footer/Footer";

function App() {
  return (
    <div className="App">
      <MapMetaDataContextProvider>
        <BuildingsContextProvider>
          <Header />
          <MapContainer />
          <SideBarLeft />
          <SideBarRight />
          <Footer />
        </BuildingsContextProvider>
      </MapMetaDataContextProvider>
    </div>
  );
}

export default App;
