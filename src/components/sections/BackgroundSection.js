import { useLanguage } from '../../context/LanguageContext';
import GlossaryTerm from '../GlossaryTerm';
import BackgroundChart from '../BackgroundChart';

const BackgroundSection = () => {

    const { language } = useLanguage();

    const translations = {
        DE: {
            header: 'Hintergrund',
            content: [
                {
                    id: 1,
                    text: (
                    <>
                        Die Ressourcen in unserer Gesellschaft sind nicht nur begrenzt sondern auch ungleich verteilt.
                        Traditionelle Indikatoren zur Messung dieser Ungleichheit, wie der <GlossaryTerm className="glossary-term gini" sectionId="intro">Gini-Index</GlossaryTerm>,
                        konzentrieren sich vor allem auf Einkommensunterschiede. Doch das Einkommen allein erzählt nicht die ganze Geschichte.
                    </>
                    ),
                },
                {
                    id: 2,
                    text: (
                    <>  
                        Unsere Lebensqualität wird auch von anderen Faktoren beeinflusst: 
                        Wie hoch sind die Kosten für Grundbedürfnisse wie Wohnen, Energie oder Mobilität? 
                        Welche Infrastruktur steht uns zur Verfügung, etwa in den Bereichen Bildung oder Gesundheit, 
                        und wie können wir diese erreichen? Wie gehen wir mit der kostbaren Ressource Zeit um, 
                        die noch dazu oft ungleich verteilt ist - sei es durch berufliche Verpflichtungen, 
                        unbezahlte Sorgearbeit oder andere Verantwortlichkeiten?
                    </>
                    ),
                },
                {
                    id: 3,
                    text: (
                    <>
                        Diese Aspekte sind nicht unabhängig voneinander, sondern stehen in enger Wechselwirkung:
                        wenn die Miete einen Großteil des Einkommens beansprucht, bleibt für andere Lebensbereiche weniger übrig:
                        wer weite Wege zurücklegen muss, verliert Zeit für Erholung, Bildung oder soziale Teilhabe.
                        Solche Ungleichheiten wirken sich nicht nur auf das Leben des Einzelnen aus, sondern beeinflussen unsere Gesellschaft als Ganzes:
                        Sie können Polarisierung fördern, gefährden den sozialen Zusammenhalt und verschärfen globale Herausforderungen wie den Klimawandel.
                    </>
                    ),
                },
                {
                    id: 4,
                    text: (
                    <>
                        Für eine umfassende Betrachtung der Lebensqualität müssen wir daher über das Einkommen hinausschauen:
                        das Zusammenspiel von Einkommen, <GlossaryTerm className="glossary-term expenditure" sectionId="intro">notwendigen Ausgaben</GlossaryTerm>, Infrastruktur und Zeitverwendung erlaubt ein vollständigeres Bild der Lebenswirklichkeit zu zeichnen.
                    </>
                    ),
                },
                {
                    id: 5,
                    text: (
                    <>
                        Genau dieses Ziel hatte das <span className="boldText">Re:sI:Ze</span> Projekt,
                        das im Auftrag der Arbeiterkammer Wien an der TU Wien am Institut für Raumplanung durchgeführt wurde.
                        Auf dieser Website findet ihr die Ergebnisse der Untersuchung dieser Ebenen in Österreich.
                    </>
                    ),
                },
                // {
                //     id: 6,
                //     text: <>Klicke auf die Elemente um mehr zu erfahren:</>,
                //     className: 'click-information',
                // },
                // {
                //     id: 7,
                //     isChart: true,
                // }
            ]
        },
        EN: { }
    };

    const section = translations[language] || translations.DE;

    return (
        <div>
            <h2 className="section-header">{section.header}</h2>
            {section.content.map((item) =>
                // item.isChart ? (
                // <div className="background-chart" key={item.id}>
                //     <BackgroundChart />
                // </div>
                // ) : (
                <p key={item.id} className={`paragraph ${item.className || ''}`}>
                    {item.text}
                </p>
                // )
            )}
        </div>
    );
};

export default BackgroundSection;