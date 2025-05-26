import { useLanguage } from '../../context/LanguageContext';
import GlossaryTerm from '../GlossaryTerm';

const translations = {
        DE: {
            content: [
                {
                    id: 1,
                    text: <> Wie viel Einkommen haben die Haushalte? </>,
                    isContentHeader: true,
                },
                {
                    id: 2,
                    text: (
                    <>  
                        Das Haushaltseinkommen ist ein zentraler Indikator für die Messung des Lebensstandards der Österreicher:innen und dient oftmals als Basis der Berechnung Ungleichheit im Land. 
                        Um eine präzisere Analyse der Einkommensverteilung zu ermöglichen, wird das Haushaltseinkommen häufig in sogenannte <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> eingeteilt. 
                        Aber was bedeutet das genau, und warum ist diese Einteilung sinnvoll?
                    </>
                    ),
                },
                {
                    id: 3,
                    text: <> Was sind Quintile? </>,
                    isContentHeader: true,
                },
                {
                    id: 4,
                    text: (
                    <>
                        Ein <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintil</GlossaryTerm> beschreibt jeweils genau ein Fünftel der Haushalte, geordnet nach ihrem verfügbaren Einkommen. Das bedeutet:
                    </>
                    ),
                },
                {
                    id: 5,
                    text: (
                    <ul className="custom-list background">
                        <li><span className="boldText">Erstes Quintil:</span> Die 20 % der Haushalte mit dem niedrigsten Einkommen </li>
                        <li><span className="boldText">Zweites Quintil:</span> Haushalte mit Einkommen zwischen den unteren 20 % und 40 % aller Haushalte </li>
                        <li><span className="boldText">Drittes Quintil:</span> Die mittleren 20 % der Haushalte in der Einkommensverteilung </li>
                        <li><span className="boldText">Viertes Quintil:</span> Haushalte mit Einkommen zwischen den oberen 60 % und 80 % aller Haushalte</li>
                        <li><span className="boldText">Fünftes Quintil:</span> Die 20 % der Haushalte mit dem höchsten Einkommen</li>
                    </ul>
                    ),
                    isList: true,
                },
                                {
                    id: 6,
                    text: <> Warum teilen wir das Haushaltseinkommen in Quintile? </>,
                    isContentHeader: true,
                },
                {
                    id: 7,
                    text: (
                    <>  
                        Die Einteilung in <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> hilft, die Einkommensverteilung und wirtschaftliche Ungleichheiten besser sichtbar zu machen. 
                        Während Durchschnittswerte oft verzerrt sein können (z. B. durch extreme Einkommen an der Spitze), 
                        zeigen Quintile deutlicher, wie Einkommen auf verschiedene gesellschaftliche Gruppen verteilt sind.
                    </>
                    ),
                },
                {
                    id: 8,
                    isChart: true,
                },
                                {
                    id: 9,
                    text: (
                    <>  
                        Das Medianhaushaltseinkommen in Österreich beträgt 2.632€. Dabei zeigt sich eine deutliche <GlossaryTerm className="glossary-term incomeInequality" sectionId="income">Einkommensungleichheit</GlossaryTerm> zwischen den verschiedenen Bevölkerungsgruppen. 
                        So liegt das mittlere Einkommen des ersten <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintils</GlossaryTerm> – also jenes Fünftels der Haushalte mit den niedrigsten Einkommen – 
                        bei lediglich 1.247€ und damit deutlich unter dem österreichweiten <GlossaryTerm className="glossary-term median" sectionId="income">Median</GlossaryTerm>. 
                        Im Gegensatz dazu verfügt das oberste Quintil, also die einkommensstärksten 20% der Haushalte, über ein mittleres Einkommen von über 4.500€. 
                        Das bedeutet, dass Haushalte im obersten Quintil im Schnitt mehr als 3.000€ monatlich mehr zur Verfügung haben als jene im untersten Quintil.
                    </>
                    ),
                },
            ],
            alt: "Diagramm mit 5 Balken, die das mittlere Haushaltseinkommen pro Einkommensquintil in Österreich darstellen."
        },
        EN: {
            content: [
                {
                    id: 1,
                    text: <> How much income do households have? </>,
                    isContentHeader: true,
                },
                {
                    id: 2,
                    text: (
                    <>  

                    </>
                    ),
                },
                {
                    id: 3,
                    text: <> What are quintiles? </>,
                    isContentHeader: true,
                },
                {
                    id: 4,
                    text: (
                    <>
             
                    </>
                    ),
                },
                {
                    id: 5,
                    text: (
                    <>
             
                    </>
                    ),
                },
                                {
                    id: 6,
                    text: <> Why do we divide household income into quintiles? </>,
                    isContentHeader: true,
                },
                {
                    id: 7,
                    text: (
                    <>  

                    </>
                    ),
                },
                {
                    id: 8,
                    // isChart: true,
                },
                                {
                    id: 9,
                    text: (
                    <>  
                    </>
                    ),
                },
            ],
            alt: "Chart with 5 bars illustrating the median household income per income quintile in Austria."
        }
    };

const IncomeSection = () => {

    const { language } = useLanguage();

    const section = translations[language] || translations.DE;

    return (

        <div>
            {/* <h2 className="section-header">{section.header}</h2> */}
            {section.content.map((item) =>
                
               item.isContentHeader ? (
                    <h2 key={item.id} className={`content-header ${item.className || ''}`}>{item.text}</h2>
                ) : item.isChart ? (
                    <div key={item.id} className="image-container median-hh-income-container">
                        <img src={`${process.env.PUBLIC_URL}/images/00_Median_HH_Income_Personen_DE.png`} alt={`${section.alt}`} />
                    </div>
                ) : item.isList ? (
                    <div key={item.id} className={`paragraph ${item.className || ''}`}>
                        {item.text}
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

export default IncomeSection;