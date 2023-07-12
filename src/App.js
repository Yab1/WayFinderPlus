// Components
import Header from "./Components/IndoorNav/Header/Header";
import MapContainer from "./Components/IndoorNav/Body/MapContainer";
import SideBarLeft from "./Components/IndoorNav/SidebarLeft/SideBarLeft";
import SideBarRight from "./Components/IndoorNav/SidebarRight/SideBarRight";
import Footer from "./Components/IndoorNav/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MapContainer />
      <SideBarLeft />
      <SideBarRight />
      <Footer />
    </div>
  );
}

export default App;
