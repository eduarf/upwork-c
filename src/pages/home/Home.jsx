import CategoryPills from "../../components/category-pills/CategoryPills";
import ForEnterPrise from "../../components/for-enterprise/ForEnterPrise";
import Header from "../../components/header/Header";
import HowToHire from "../../components/how-to-hire/HowToHire";
import RebrandDelivery from "../../components/rebrand-delivery/RebrandDelivery";
import "./Home.scss";

const Home = () => {
  return <div>
    <Header />
    <HowToHire />
    <CategoryPills />
    <ForEnterPrise />
    <RebrandDelivery />
  </div>;
};

export default Home;
