import React from 'react';
import GlossaryTerm from '../GlossaryTerm';
import BackgroundChart from '../BackgroundChart';

const BackgroundSection = () => {
    return (
        <div>
            <h2 className="section-header">Hintergrund </h2>
            <p className="paragraph">
                Die Ressourcen in unserer Gesellschaft sind ungleich verteilt. Traditionelle Indikatoren zur Messung von Ungleichheit, wie das Bruttoinlandsprodukt oder der <GlossaryTerm className="glossary-term gini" sectionId="intro">Gini-Index</GlossaryTerm>, konzentrieren sich vor allem auf Einkommensunterschiede. Aber das Einkommen allein erzählt nicht die ganze Geschichte.
            </p>
            <p className='paragraph'>
                Unser Leben wird auch von anderen Faktoren beeinflusst: Wie hoch sind die Kosten für Grundbedürfnisse wie Wohnen, Energie oder Mobilität? Welche Infrastruktur steht uns zur Verfügung, etwa in den Bereichen Bildung oder Gesundheit? Und wie gehen wir mit der kostbaren Ressource Zeit um, die oft ungleich verteilt ist - sei es durch berufliche Verpflichtungen, unbezahlte Sorgearbeit oder andere Verantwortlichkeiten?
            </p>
            <p className='paragraph'>
                Diese Aspekte sind nicht unabhängig voneinander, sondern stehen in enger Wechselwirkung. Wenn die Miete einen Großteil des Einkommens beansprucht, bleibt für andere Lebensbereiche weniger übrig. Wer weite Wege zurücklegen muss, verliert Zeit für Erholung, Bildung oder soziale Teilhabe. Solche Ungleichheiten wirken sich nicht nur auf das Leben des Einzelnen aus, sondern beeinflussen unsere Gesellschaft als Ganzes: Sie fördern Polarisierung, gefährden den sozialen Zusammenhalt und verschärfen globale Herausforderungen wie den Klimawandel.
            </p>
            <p className='paragraph'>
                Für eine umfassende Betrachtung der Lebensqualität müssen wir daher über das Einkommen hinausschauen: Im Zusammenspiel von Einkommen, Ausgaben, Infrastruktur und Zeitverwendung lässt sich ein vollständigeres Bild der Lebenswirklichkeit zeichnen. 
            </p>
            <p className='paragraph'>
                Genau dieses Ziel hatte das <span className="boldText">Re:Si:Ze</span> Projekt. Auf dieser Website findet ihr die Ergebnisse der Untersuchung dieser Ebenen in Österreich.
            </p>
            <p className='paragraph click-information'>
                Klicke auf die Elemente um mehr zu erfahren: 
            </p>

            {/* <BackgroundChart/> */}
            <div className='background-chart'>
                <BackgroundChart/>
            </div>
        </div>
    );
};

export default BackgroundSection;