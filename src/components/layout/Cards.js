import React from "react";
import '../assets/css/Project.css';

function Cards({ imgSrc, title, content, repoLink, deployLink }) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator responsive-img" src={imgSrc} alt="project screenshot"></img>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4 center">
          {title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a href={repoLink} target='_blank'>Github Repo</a>
          <br />
          <a href={deployLink} target='_blank'>Deployed Site</a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {title}
          <i className="material-icons right">close</i>
        </span>
        <p>{content}</p>
        <p>
          <a href={repoLink} target='_blank'>Github Repo</a>
          <br />
          <a href={deployLink} target='_blank'>Deployed Site</a>
        </p>
      </div>
    </div>
  );
}

export default Cards;
