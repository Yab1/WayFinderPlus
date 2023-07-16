// Contexts
import StateControllerContextProvider from "./Context/stateControllerContext";
import MapMetaDataContextProvider from "./Context/mapMetaDataContext";
import BuildingsContextProvider from "./Context/buildingsContext";

// Components
import Header from "./Components/Outdoor/Header/Header";
import MapContainer from "./Components/Outdoor/Body/MapContainer";
import SideBarLeft from "./Components/Outdoor/SidebarLeft/SideBarLeft";
import SideBarRight from "./Components/Outdoor/SidebarRight/SideBarRight";
import Footer from "./Components/Outdoor/Footer/Footer";

function App() {
  return (
    <div className="App">
      <StateControllerContextProvider>
        <MapMetaDataContextProvider>
          <BuildingsContextProvider>
            <Header />
            <MapContainer />
            <SideBarLeft />
            <SideBarRight />
            <Footer />
          </BuildingsContextProvider>
        </MapMetaDataContextProvider>
      </StateControllerContextProvider>
    </div>
  );
}

export default App;
