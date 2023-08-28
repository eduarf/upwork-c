import { useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/responsive-comps/search/Search";
import Home from "./pages/home/Home";

function App() {
  const isOpen = useSelector((state) => state.search.isOpen);

  return (
    <>
      <Navbar />
      { isOpen && <Search /> }
      <Home />
    </>
  );
}

export default App;
