import React from "react";

export default function Impressum() {
  return (
    <>
      <div className='title-wrapper'>
          <section className="title-section">
            <h1 className="title">Impressum</h1>
          </section>
      </div>

      <div className="content-wrapper">
        <p className="paragraph-impressum boldText">
          Tatjana Neuhuber
        </p>

        <p className="paragraph-impressum">
          Forschungsbereich Finanzwissenschaft und Infrastrukturpolitik
        </p>

        <p className="paragraph-impressum">
          Institut für Raumplanung
        </p>

        <p className="paragraph-impressum">
          TU Wien
        </p>

        <p className="paragraph-impressum">
          Karlsgasse 11, 1040 Wien, Österreich
        </p>

      </div>
    </>
  );
}
