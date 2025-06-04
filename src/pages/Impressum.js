import "../styles/SubPage.css";
import { useLanguage } from "../context/LanguageContext";

export default function Impressum() {

   const { language } = useLanguage();

   const translations = {
    DE: {
      header: 'Impressum',
      content: [
        {
          id: 1,
          text: (
          <>
            Tatjana Neuhuber
          </>
          ),
          className: 'boldText'
        },
        {
          id: 2,
          text: (
          <>
            Forschungsbereich Finanzwissenschaft und Infrastrukturpolitik
          </>
          ),
        },
        {
          id: 3,
          text: (
          <>
            Institut für Raumplanung
          </>
          ),
        },
        {
          id: 4,
          text: (
          <>
            TU Wien
          </>
          ),
        },
        {
          id: 5,
          text: (
          <>
            Karlsgasse 11, 1040 Wien, Österreich
          </>
          ),
        },
      ]
    },
    EN: {
      header: 'Imprint',
      content: [
        {
          id: 1,
          text: (
            <>
              Tatjana Neuhuber
            </>
          ),
          className: 'boldText'
        },
        {
          id: 2,
          text: (
            <>
              Research Unit for Public Finance and Infrastructure Policy
            </>
          ),
        },
        {
          id: 3,
          text: (
            <>
              Institute of Spatial Planning
            </>
          ),
        },
        {
          id: 4,
          text: (
            <>
              TU Wien
            </>
          ),
        },
        {
          id: 5,
          text: (
            <>
              Karlsgasse 11, 1040 Vienna, Austria
            </>
          ),
        },
      ]
    }
  };

  const t = translations[language] || translations.DE;

  return (
    <>
      <div className='title-wrapper'>
          <section className="title-section">
            <h1 className="title">{t.header}</h1>
          </section>
      </div>

      <div className="text-wrapper">
        {t.content.map((item) =>
            <p key={item.id} className={`paragraph-impressum ${item.className || ''}`}>
                {item.text}
            </p>
        )}

      </div>
    </>
  );
}
