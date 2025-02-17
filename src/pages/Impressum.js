import React from "react";

export default function Impressum() {
  return (
    <>
      <div className='title-wrapper'>
          <section className="title-section">
          
          <h1 className="title">Impressum</h1>
          <h3>Informationen zum Impressum</h3>

          <div className='image-container logo-large'>
              <img style={{width: '240px'}} src={`${process.env.PUBLIC_URL}/images/Logo_project_icons.png`} alt="showing the four core aspects of the project" />
          </div>
          </section>
      </div>
    </>
  );
}
