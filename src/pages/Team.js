import "../styles/SubPage.css";

export default function Team() {
  return (
    <>
      <div className='title-wrapper'>
          <section className="title-section">
            <h1 className="title">Team</h1>
          </section>
      </div>

      <div className="text-wrapper">
        <div className="team-wrapper"> 
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/images/Tatjana.jpg`} className="team-image" alt="Tatjana Neuhuber" />
            <p className="paragraph-team">
              <span className="boldText">Tatjana Neuhuber</span> ist Universitätsassistentin am Forschungsbereich für Finanzwissenschaft und Infrastrukturpolitik am Institut für Raumplanung. Ihr wissenschaftliches Interesse gilt sozialer und räumlicher Ungleichheit sowie der Frage, wie soziale Infrastrukturen positive Veränderungen bewirken können. Im Projekt übernimmt sie eine zentrale Rolle in der Konzeption, Datenanalyse und Interpretation der Ergebnisse. Auch in ihrer Dissertation greift sie diese Themen auf und erforscht, wie soziale Infrastrukturen zur regionalen Resilienz beitragen und welche Faktoren deren Wirkung verstärken. Mit ihrer Arbeit verbindet sie theoretische Ansätze mit praxisnahen Analysen, um greifbare Lösungen für gesellschaftliche Herausforderungen zu entwickeln.
            </p>
          </div>
        
          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/images/Antonia.jpg`} className="team-image" alt="Antonia Schneider" />
            <p className="paragraph-team">
              <span className="boldText">Antonia Schneider</span> ist Forscherin und Universitätsassistentin am Forschungsbereich für Finanzwissenschaft und Infrastrukturpolitik am Institut für Raumplanung. Ihre Forschungsschwerpunkte umfassen die Analyse wirtschaftlicher Ungleichheiten, den Wohnungsmarkt sowie umweltökonomische Fragestellungen. Ihr wissenschaftlicher Ansatz ist dabei stark quantitativ ausgerichtet, mit besonderem Fokus auf die Analyse raumbezogener Daten, Kartografie und ökonomische Bewertungsmethoden. Im Rahmen des Projekts war sie neben der konzeptionellen und inhaltlichen Ausarbeitung besonderes mit der Datenaufbereitung und -visualisierung beschäftigt.         
            </p>
          </div>

          <div className="team-member">
            <img src={`${process.env.PUBLIC_URL}/images/Anna.jpg`} className="team-image" alt="Anna-Theresa Renner" /> 
            <p className="paragraph-team">
              <span className="boldText">Anna-Theresa Renner</span> ist Inhaberin der Laufbahnstelle für „Soziale Infrastruktur Forschung und Planung“ am Forschungsbereich Finanzwissenschaft und Infrastrukturpolitik des Instituts für Raumplanung. In ihrer Forschung beschäftigt sie sich vor allem mit regionalen und räumlichen Variationen im Zugang zur Gesundheitsversorgung, und den Effekten einer ungleichen Verteilung von Gesundheitsdienstleistungen auf die Bevölkerungsgesundheit und die Patientenmobilität. Zu ihren früheren Affiliationen zählen, das Weatherhead Center for International Affairs in Harvard, die Wirtschaftsuniversität Wien und die Gesundheit Österreich GmbH. Im Projekt ist sie vor allem in die inhaltliche Konzeptionierung und strategische Ausrichtung involviert. 
            </p>
          </div>

          <div className="team-member">
              <img src={`${process.env.PUBLIC_URL}/images/Lukas.jpg`} className="team-image" alt="Lukas Rast" />
              <p className="paragraph-team">
                <span className="boldText">Lukas Rast</span> ist als Software-Engineer im Raumsimulationslabor des Forschungsbereichs Örtliche Raumplanung am Institut für Raumplanung tätig. Seine Schwerpunkte liegen in der Entwicklung von webbasierten Datenvisualisierungsmethoden sowie ML-gestützter Verfahren zur Unterstützung von Forschungsprojekten im Bereich der Raumplanung. Im Rahmen dieses Projekts ist er für die Implementierung und Aufbereitung der Webseite zuständig.
                {/* <span className="boldText">Lukas Rast</span> ist als studentischer Mitarbeiter im Raumsimulationslabor des Forschungsbereichs Örtliche Raumplanung am Institut für Raumplanung tätig. Seine Schwerpunkte liegen in der Entwicklung von webbasierten Datenvisualisierungsmethoden sowie ML-gestützter Verfahren zur Unterstützung von Forschungsprojekten im Bereich der Raumplanung. Im Rahmen dieses Projekts ist er für die Implementierung und Aufbereitung der Webseite zuständig. */}
              </p>
          </div>

        </div>
      </div>
    </>
  );
}