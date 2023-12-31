import CategoryPills from "../../components/category-pills/CategoryPills";
import FindGreatWork from "../../components/find-great-work/FindGreatWork";
import ForEnterPrise from "../../components/for-enterprise/ForEnterPrise";
import Header from "../../components/header/Header";
import HowToHire from "../../components/how-to-hire/HowToHire";
import RebrandDelivery from "../../components/rebrand-delivery/RebrandDelivery";
import Testimonials from "../../components/testimonials/Testimonials";
import SupportUkraine from "../../components/we-support-ukraine/SupportUkraine";
import WhyUpworkSection from "../../components/why-upwork-section/WhyUpworkSection";
import RebrandSkills from '../../components/rebrand-skills/RebrandSkills';
import "./Home.scss";
import Footer from "../../components/footer/Footer";

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
    <SupportUkraine />
    <RebrandSkills />
    <Footer />
  </div>;
};

export default Home;
