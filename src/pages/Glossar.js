import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Glossar.css";

export default function Glossar() {

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", ""); // Get the term ID
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);


  return (
    <>
      <div className='title-wrapper'>
          <section className="title-section">
            <h1 className="title">Glossar</h1>
          </section>
      </div>

      <div className="content-wrapper">

        <div className="glossar-element" id="income">
          <h2>Einkommensungleichheit</h2>
          <p className="paragraph-glossar">
            Maß für die ungleiche Verteilung von Einkommen innerhalb einer Gesellschaft.
          </p>
        </div>

        <div className="glossar-element" id="communityClassSize">
          <h2>Gemeindegrößeklasse</h2>
          <p className="paragraph-glossar">
            Kategorisierung von Gemeinden nach Einwohnerzahl zur statistischen Analyse.
          </p>
        </div>

        <div className="glossar-element" id="gini">
          <h2>Gini-Index</h2>
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
