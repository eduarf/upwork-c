import { useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/responsive-comps/search/Search";

function App() {
  const isOpen = useSelector((state) => state.search.isOpen);

  return (
    <>
      <Navbar />
      { isOpen && <Search /> }
    </>
  );
}

export default App;
