import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/SubPage.css";

export default function Glossar() {

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", ""); // Get the term ID
    if (hash) {
      setTimeout(() => { // Delay scrolling
        requestAnimationFrame(() => {
          const element = document.getElementById(hash);
          if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        });
      }, 200); // Delay to allow content to render
    } 
  }, [location]);
  
  return (
    <>
      <div className='title-wrapper'>
          <section className="title-section">
            <h1 className="title">Glossar</h1>
          </section>
      </div>

      <div className="text-wrapper">

        <div className="glossar-element" id="income">
          <h2>Einkommensungleichheit</h2>
          <p className="paragraph-glossar">
            Maß für die ungleiche Verteilung von Einkommen innerhalb einer Gesellschaft.
          </p>
        </div>

        <div className="glossar-element" id="municipalitySizeClass">
          <h2>Gemeindegrößenklasse</h2>
          <p className="paragraph-glossar">
            Kategorisierung von Gemeinden nach Einwohnerzahl zur statistischen Analyse.
          </p>
        </div>

        <div className="glossar-element" id="gini">
          <h2>Gini-Index (Koeffizient)</h2>
          <p className="paragraph-glossar">
            Kennzahl zur Messung der Einkommensungleichheit; Werte zwischen 0 (völlige Gleichheit) und 1 (maximale Ungleichheit).
          </p>
        </div>

        <div className="glossar-element" id="consumption">
          <h2>Konsumerhebung</h2>
          <p className="paragraph-glossar">
            Statistische Erhebung zu den Ausgaben und dem Konsumverhalten von Haushalten.
          </p>
        </div>

        <div className="glossar-element" id="median">
          <h2>Median</h2>
          <p className="paragraph-glossar">
            Der mittlere Wert einer geordneten Datenreihe, bei dem 50 % der Werte darüber und 50 % darunter liegen.
          </p>
        </div>

        <div className="glossar-element" id="expenditure">
          <h2>Notwendige Ausgaben</h2>
          <p className="paragraph-glossar">
            Unvermeidbare Kosten für Grundbedürfnisse wie Wohnen, Energie, Ernährung, Bildung, Mobilität und Gesundheitsversorgung.
          </p>
        </div>

        <div className="glossar-element" id="postsecondaryEducation">
          <h2>Postsekundäre Ausbildung</h2>
          <p className="paragraph-glossar">
             Postsekundäre Ausbildung bezeichnet Bildungsprogramme, die nach Abschluss der Sekundarstufe II (z. B. Matura oder gleichwertiger Abschluss) beginnen, aber nicht zwingend zu einem Hochschulabschluss führen. 
             Beispiele für die postsekundäre Bildung sind Kollegs oder Meisterschulen.
          </p>
        </div>

        <div className="glossar-element" id="tertiaryEducation">
          <h2>Tertiäre Ausbildung</h2>
          <p className="paragraph-glossar">
             Die tertiäre Ausbildung umfasst alle Bildungsprogramme, die nach der Sekundarstufe II (z. B. Matura) beginnen und zu einem akademischen oder hochqualifizierten Berufsabschluss führen. 
             Diese Ausbildung findet klassischerweise an Universitäten oder Fachhochschulen statt.
          </p>
        </div>

        <div className="glossar-element" id="quintil">
          <h2>Quintil</h2>
          <p className="paragraph-glossar">
            Ein Fünftel einer geordneten Datenreihe, oft genutzt zur Analyse von Einkommensgruppen.
          </p>
        </div>

        <div className="glossar-element" id="residualIncome">
          <h2>Residualeinkommen</h2>
          <p className="paragraph-glossar">
            Einkommen, das nach Abzug der notwendigen Ausgaben für anderen Konsum oder Ersparnisse übrig bleibt.
          </p>
        </div>

        <div className="glossar-element" id="si">
          <h2>Soziale Infrastruktur</h2>
          <p className="paragraph-glossar">
            Einrichtungen und Dienstleistungen, die das gesellschaftliche Leben unterstützen, z. B. Bildung, Gesundheit, Pflegeeinrichtungen und andere soziale Einrichtungen.
          </p>
        </div>

        <div className="glossar-element" id="spillovers">
          <h2>Spillovers</h2>
          <p className="paragraph-glossar">
            Spillovers im Bereich der sozialen Infrastruktur bedeuten, dass Einrichtungen wie Schulen, Kindergärten und Ärzt:innenpraxen nicht nur den Haushalten in der jeweiligen Gemeinde zugutekommen, 
            sondern auch von Menschen aus umliegenden Gemeinden genutzt werden können. Das heißt: Der Nutzen „spielt über“ die Gemeindegrenzen hinaus.<br/> 
            <br/>
            In unserer Analyse berücksichtigen wir diese Spillover-Effekte, indem wir auch jene Einrichtungen mit einbeziehen, die innerhalb von 30 Minuten Fahrzeit (mit dem Auto oder öffentlichen Verkehrsmitteln) zur jeweiligen Wohngemeinde leben. 
            So wird deutlich, wie weitreichend die Wirkung einer sozialen Infrastruktur tatsächlich ist – sie wirkt oft regional, nicht nur lokal.
          </p>
        </div>

        <div className="glossar-element" id="timeUsage">
          <h2>Zeitverwendungserhebung</h2>
          <p className="paragraph-glossar">
            Studie zur Analyse, wie Menschen ihre Zeit für Erwerbsarbeit, Kinderbetreuung, Haushalt, Freizeit und andere Aktivitäten nutzen.
          </p>
        </div>

      </div>
    </>
  );
}
