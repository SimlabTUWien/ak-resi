import React from "react";
import "../styles/SubPage.css";

export default function Team() {
  return (
    <>
      <div className='title-wrapper'>
          <section className="title-section">
            <h1 className="title">Team</h1>
          </section>
      </div>

      <div className="content-wrapper">
        <p className="paragraph-team">
          <span className="boldText">Tatjana Neuhuber</span> ist Universitätsassistentin am Forschungsbereich für Finanzwissenschaft und Infrastrukturpolitik am Institut für Raumplanung. Ihr wissenschaftliches Interesse gilt sozialer und räumlicher Ungleichheit sowie der Frage, wie soziale Infrastrukturen positive Veränderungen bewirken können. Im Projekt übernimmt sie eine zentrale Rolle in der Konzeption, Datenanalyse und Interpretation der Ergebnisse. Auch in ihrer Dissertation greift sie diese Themen auf und erforscht, wie soziale Infrastrukturen zur regionalen Resilienz beitragen und welche Faktoren deren Wirkung verstärken. Mit ihrer Arbeit verbindet sie theoretische Ansätze mit praxisnahen Analysen, um greifbare Lösungen für gesellschaftliche Herausforderungen zu entwickeln.
        </p>

        <p className="paragraph-team">
        <span className="boldText">Antonia Schneider</span> ist Forscherin und Universitätsassistentin am Forschungsbereich für Finanzwissenschaft und Infrastrukturpolitik am Institut für Raumplanung. Ihre Forschungsschwerpunkte umfassen die Analyse wirtschaftlicher Ungleichheiten, den Wohnungsmarkt sowie umweltökonomische Fragestellungen. Ihr wissenschaftlicher Ansatz ist dabei stark quantitativ ausgerichtet, mit besonderem Fokus auf die Analyse raumbezogener Daten, Kartografie und ökonomische Bewertungsmethoden. Im Rahmen des Projekts war sie neben der konzeptionellen und inhaltlichen Ausarbeitung besonderes mit der Datenaufbereitung und -visualisierung beschäftigt. 
        </p>

        <p className="paragraph-team">
        <span className="boldText">Anna-Theresa Renner</span> ist Inhaberin der Laufbahnstelle für „Soziale Infrastruktur Forschung und Planung“ am Forschungsbereich Finanzwissenschaft und Infrastrukturpolitik des Instituts für Raumplanung. In ihrer Forschung beschäftigt sie sich vor allem mit regionalen und räumlichen Variationen im Zugang zur Gesundheitsversorgung, und den Effekten einer ungleichen Verteilung von Gesundheitsdienstleistungen auf die Bevölkerungsgesundheit und die Patientenmobilität. Zu ihren früheren Affiliationen zählen, das Weatherhead Center for International Affairs in Harvard, die Wirtschaftsuniversität Wien und die Gesundheit Österreich GmbH. Im Projekt ist sie vor allem in die inhaltliche Konzeptionierung und strategische Ausrichtung involviert. 
        </p>
      </div>
    </>
  );
}
