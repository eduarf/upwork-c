import CategoryPills from "../../components/category-pills/CategoryPills";
import FindGreatWork from "../../components/find-great-work/FindGreatWork";
import ForEnterPrise from "../../components/for-enterprise/ForEnterPrise";
import Header from "../../components/header/Header";
import HowToHire from "../../components/how-to-hire/HowToHire";
import RebrandDelivery from "../../components/rebrand-delivery/RebrandDelivery";
import Testimonials from "../../components/testimonials/Testimonials";
import WhyUpworkSection from "../../components/why-upwork-section/WhyUpworkSection";
import "./Home.scss";

const Home = () => {
  return <div>
    <Header />
    <HowToHire />
    <CategoryPills />
    <ForEnterPrise />
    <RebrandDelivery />
    <WhyUpworkSection />
    <FindGreatWork />
    <Testimonials />
  </div>;
};

export default Home;
