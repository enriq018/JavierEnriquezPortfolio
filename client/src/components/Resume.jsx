import React from 'react';

const Resume = ({ resumeClick, resumeActive}) => (
  <div className={resumeActive ? "modal is-active" : "modal"}>
    <div onClick={()=> resumeClick()} className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title content has-text-centered">
            Javier Enriquez's Resume
          </p>
          <button onClick={() => resumeClick()} className="button" className="delete" aria-label="close" />
        </header>
        <section className="modal-card-body">
          <img className="resumeModal" src="https://javier-enriquez.000webhostapp.com/JavierEnriquezResume-page-001.jpg" alt="Javier Resume" />
        </section>
        <footer className="modal-card-foot">
        <div className="resumeFooter">
          <a className="button is-success " href="https://javier-enriquez.000webhostapp.com/JavierEnriquezResume.pdf" download>
            <span>Download as a PDF </span>
            <span className="icon is-large">
              <i className="fas fa-download" aria-hidden="true" />
            </span>
          </a>
          <button onClick={()=> resumeClick()} className="button"> Close
          </button>
        </div>
        </footer>
      </div>
  </div>
);

export default Resume;