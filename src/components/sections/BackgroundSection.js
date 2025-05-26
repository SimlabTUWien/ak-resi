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
                        Traditionelle Indikatoren zur Messung dieser Ungleichheit, wie der
                        <GlossaryTerm className="glossary-term gini" sectionId="intro">Gini-Index</GlossaryTerm>,
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
                        das Zusammenspiel von Einkommen, Ausgaben, Infrastruktur und Zeitverwendung erlaubt ein vollständigeres Bild der Lebenswirklichkeit zu zeichnen.
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
                {
                    id: 6,
                    text: <>Klicke auf die Elemente um mehr zu erfahren:</>,
                    className: 'click-information',
                },
                {
                    id: 7,
                    isChart: true,
                }
            ]
        },
        EN: {
            header: 'Background',
            content: [
            {
                id: 1,
                text: (
                <>
                    Resources in our society are not only limited but also unequally distributed.
                    Traditional indicators used to measure this inequality, such as the{' '}
                    <GlossaryTerm className="glossary-term gini" sectionId="intro">Gini Index</GlossaryTerm>,
                    primarily focus on income differences. But income alone doesn't tell the full story.
                </>
                ),
            },
            {
                id: 2,
                text: (
                <>
                    Our quality of life is also influenced by other factors:
                    How high are the costs of basic needs such as housing, energy, or mobility?
                    What kind of infrastructure is available to us — in areas like education or healthcare — and how accessible is it?
                    How do we manage the precious resource of time, which is often unevenly distributed,
                    whether due to work obligations, unpaid care work, or other responsibilities?
                </>
                ),
            },
            {
                id: 3,
                text: (
                <>
                    These aspects are not independent of one another but are closely interconnected:
                    If rent consumes a large portion of income, less remains for other areas of life.
                    If long distances need to be covered, time is lost for rest, education, or social participation.
                    Such inequalities not only affect individuals but have an impact on society as a whole:
                    They can foster polarization, undermine social cohesion, and exacerbate global challenges such as climate change.
                </>
                ),
            },
            {
                id: 4,
                text: (
                <>
                    To fully assess quality of life, we must look beyond income alone:
                    The interplay of income, expenses, infrastructure, and time use allows us to form a more complete picture of people’s lived realities.
                </>
                ),
            },
            {
                id: 5,
                text: (
                <>
                    This is exactly the aim of the <span className="boldText">Re:sI:Ze</span> project,
                    which was carried out on behalf of the Vienna Chamber of Labour at the TU Wien’s Institute of Spatial Planning.
                    On this website, you’ll find the results of the investigation into these dimensions in Austria.
                </>
                ),
            },
            {
                id: 6,
                text: <>Click the elements to learn more:</>,
                className: 'click-information',
            },
            {
                id: 7,
                isChart: true,
            }
            ]
        }
    };

    const section = translations[language] || translations.DE;

    return (
        <div>
            <h2 className="section-header">{section.header}</h2>
            {section.content.map((item) =>
                item.isChart ? (
                <div className="background-chart" key={item.id}>
                    <BackgroundChart />
                </div>
                ) : (
                <p key={item.id} className={`paragraph ${item.className || ''}`}>
                    {item.text}
                </p>
                )
            )}
        </div>
    );

    // return (
    //     <div>
    //         <h2 className="section-header">Hintergrund </h2>
    //         <p className="paragraph">
    //             Die Ressourcen in unserer Gesellschaft sind nicht nur begrenzt sondern auch ungleich verteilt. Traditionelle Indikatoren zur Messung dieser Ungleichheit, wie der <GlossaryTerm className="glossary-term gini" sectionId="intro">Gini-Index</GlossaryTerm>, konzentrieren sich vor allem auf Einkommensunterschiede. Doch das Einkommen allein erzählt nicht die ganze Geschichte.
    //         </p>
    //         <p className='paragraph'>
    //             Unsere Lebensqualität wird auch von anderen Faktoren beeinflusst: Wie hoch sind die Kosten für Grundbedürfnisse wie Wohnen, Energie oder Mobilität? Welche Infrastruktur steht uns zur Verfügung, etwa in den Bereichen Bildung oder Gesundheit, und wie können wir diese erreichen? Wie gehen wir mit der kostbaren Ressource Zeit um, die oft ungleich verteilt ist - sei es durch berufliche Verpflichtungen, unbezahlte Sorgearbeit oder andere Verantwortlichkeiten?
    //         </p>
    //         <p className='paragraph'>
    //             Diese Aspekte sind nicht unabhängig voneinander, sondern stehen in enger Wechselwirkung: wenn die Miete einen Großteil des Einkommens beansprucht, bleibt für andere Lebensbereiche weniger übrig: wer weite Wege zurücklegen muss, verliert Zeit für Erholung, Bildung oder soziale Teilhabe. Solche Ungleichheiten wirken sich nicht nur auf das Leben des Einzelnen aus, sondern beeinflussen unsere Gesellschaft als Ganzes: Sie können Polarisierung fördern, gefährden den sozialen Zusammenhalt und verschärfen globale Herausforderungen wie den Klimawandel.
    //         </p>
    //         <p className='paragraph'>
    //             Für eine umfassende Betrachtung der Lebensqualität müssen wir daher über das Einkommen hinausschauen: das Zusammenspiel von Einkommen, Ausgaben, Infrastruktur und Zeitverwendung erlaubt ein vollständigeres Bild der Lebenswirklichkeit zu zeichnen. 
    //         </p>
    //         <p className='paragraph'>
    //             Genau dieses Ziel hatte das <span className="boldText">Re:Si:Ze</span> Projekt, das im Auftrag der Arbeiterkammer Wien an der TU Wien am Institut für Raumplanung durchgeführt wurde. Auf dieser Website findet ihr die Ergebnisse der Untersuchung dieser Ebenen in Österreich.
    //         </p>
    //         <p className='paragraph click-information'>
    //             Klicke auf die Elemente um mehr zu erfahren: 
    //         </p>

    //         {/* <BackgroundChart/> */}
    //         <div className='background-chart'>
    //             <BackgroundChart/>
    //         </div>

    //         <p className='paragraph content-information'>
    //             In den weiteren Teilen dieser Website werden nun Einblicke in alle diese Bereiche und deren Schnittstellen gegeben: 
    //         </p>
    //     </div>
    // );
};

export default BackgroundSection;