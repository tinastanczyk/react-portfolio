import React from "react";

function Cards({ imgSrc, title, content, repoLink, deployLink }) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={imgSrc} alt="project screenshot"></img>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a href={repoLink}>Github Repo</a>
          <br />
          <a href={deployLink}>Deployed Site</a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {title}
          <i className="material-icons right">close</i>
        </span>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Cards;
