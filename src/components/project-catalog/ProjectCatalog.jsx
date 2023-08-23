import "./ProjectCatalog.scss";
import { projectCatalogItems } from "../../../data";
import RightArrowComp from "../right-arrow-comp/RightArrowComp";

const ProjectCatalog = () => {
  return (
    <div className="project-catalog">
      <div className="left-side">
        <h2>Project Catalog &#8482;</h2>
        <p>Browse and buy projects that have a clear scope and price.</p>
        <RightArrowComp content="Browse Project Catalog" />
      </div>
      <div className="right-side">
        {projectCatalogItems.map((item) => {
          return <div key={item.id} className="container">
            <img src={item.image} alt="image" />
            <div>
            <h3>{item.header}</h3>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default ProjectCatalog;
