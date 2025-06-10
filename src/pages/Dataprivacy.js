import "../styles/SubPage.css";

export default function Dataprivacy() {
  return (
    <>
      <div className='title-wrapper'>
          <section className="title-section">
          
          <h1 className="title">Datenschutzerklärung</h1>
          </section>
      </div>

      <div className="text-wrapper">
        <h2>Verantwortlich für den Inhalt</h2>
        <p className="paragraph-privacy">Tatjana Neuhuber</p>
        <p className="paragraph-privacy">Forschungsbereich Finanzwissenschaft und Infrastrukturpolitik</p>
        <p className="paragraph-privacy">Institut für Raumplanung</p>
        <p className="paragraph-privacy">TU Wien</p>
        <p className="paragraph-privacy">Karlsgasse 11, 1040 Wien, Österreich</p>
        <br/>
        <p className="paragraph-privacy"> Wir verweisen auf die <a className="privacy-link" href="https://www.tuwien.at/index.php?eID=dms&amp;s=4&amp;path=Dokumente/Datenschutzerkl%C3%A4rungen%20Sonstige/Datenschutzerkl%C3%A4rung_Websites.pdf" target="_blank" rel="noreferrer noopener">Datenschutzerklärung der TU Wien</a>.</p>

      </div>
    </>
  );
}
