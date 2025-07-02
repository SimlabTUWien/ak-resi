import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import OutlookChart from '../OutlookChart';

const OutlookSection = () => {

    const { language } = useLanguage();

    const translations = {
        DE: {
            header: 'Was nun?',
            content: [
                {
                    id: 1,
                    text: (
                    <>
                        Soziale Ungleichheit lässt sich nicht allein durch Einkommensunterschiede erklären. 
                        Zwar ist das Einkommen ein zentraler Faktor, der den finanziellen Handlungsspielraum von Haushalten bestimmt – doch ein vollständigeres Bild entsteht erst, 
                        wenn man weitere Aspekte wie notwendige Ausgaben, den Zugang zu öffentlicher Infrastruktur und die zeitlichen Ressourcen von Menschen berücksichtigt.
                    </>
                    ),
                },
                {
                    id: 2,
                    text: (
                    <>
                        Diese Dimensionen wirken nicht isoliert, sondern sind eng miteinander verknüpft: 
                        Wer wenig verdient, aber zusätzlich hohe Fixkosten trägt oder keinen Zugang zu unterstützenden Angeboten hat, ist stärker belastet – sowohl finanziell als auch organisatorisch. 
                        Gleichzeitig kann ein eingeschränkter Zugang zu öffentlicher Infrastruktur die Notwendigkeit erhöhen, Zeit und Geld in private Lösungen zu investieren. 
                        Auch die Verteilung der verfügbaren Zeit – etwa zwischen Erwerbsarbeit, unbezahlter Sorgearbeit und Erholung – ist ungleich verteilt und beeinflusst soziale Teilhabe.
                    </>
                    ),
                },
                {
                    id: 3,
                    text: (
                    <>
                       Das Zusammenspiel dieser Faktoren macht deutlich: Ungleichheit ist mehrdimensional. 
                       Ein vertieftes Verständnis sozialer Ungleichheit erfordert daher einen ganzheitlichen Blick auf Lebensrealitäten. 
                       Nur wenn man diese Zusammenhänge ernst nimmt, können gerechte und wirksame Antworten auf soziale Herausforderungen gefunden werden.
                    </>
                    ),
                },
                {
                    id: 4,
                    isChart: true,
                    alt: "Diagramm mit vier überlappenden Kreisen, welche die Themenbereiche dieser Webseite visualisieren"
                }
            ]
        },
        EN: {
            header: 'Outlook',
            content: [
            ]
        }
    };

    const section = translations[language] || translations.DE;

    return (
        <div>
            <h2 className="section-header">{section.header}</h2>
            {section.content.map((item) =>
                item.isChart ? (
                    <div className='outlook-chart' key={item.id}>
                    <OutlookChart altText={item.alt} />
                </div>
                ) : (
                <p key={item.id} className={`paragraph ${item.className || ''}`}>
                    {item.text}
                </p>
                )
            )}
        </div>
    );
};

export default OutlookSection;