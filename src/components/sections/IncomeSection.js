import { useLanguage } from '../../context/LanguageContext';
import GlossaryTerm from '../GlossaryTerm';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


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
                        Das Haushaltseinkommen ist ein zentraler Indikator für die Messung des Lebensstandards der Menschen in Österreich und dient oftmals als Basis der Berechnung Ungleichheit im Land. 
                        Um eine präzisere Analyse der Einkommensverteilung zu ermöglichen, wird das Haushaltseinkommen häufig in sogenannte <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> eingeteilt. 
                        Aber was bedeutet das genau, und warum ist diese Einteilung sinnvoll?
                    </>
                    ),
                },
                {
                    id: 3,
                    accordionHeader: "Was sind Quintile?",
                    accordionFirstText: ( 
                    <>  
                        Ein <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintil</GlossaryTerm> beschreibt jeweils genau ein Fünftel der Haushalte, geordnet nach ihrem Einkommen. Das bedeutet:
                    </>
                    ),
                    accordionSubheader: (
                    <>
                        <span className="accordion-subheader" >Warum teilen wir das Haushaltseinkommen in Quintile?</span>
                    </>
                    ),
                    accordionSecondText: ( 
                    <>  
                        Die Einteilung in <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> hilft, die Einkommensverteilung und 
                        wirtschaftliche Ungleichheiten besser sichtbar zu machen. 
                        Während Durchschnittswerte oft verzerrt sein können (z. B. durch extreme Einkommen an der Spitze), 
                        zeigen Quintile deutlicher, wie Einkommen auf verschiedene gesellschaftliche Gruppen verteilt sind.<br/><br/>
                    </>
                    ),
                    list: [
                        { title: 'Erstes Quintil: ', text: 'Die 20 % der Haushalte mit dem niedrigsten Einkommen' },
                        { title: 'Zweites Quintil: ', text: 'Haushalte mit Einkommen zwischen den unteren 20 % und 40 % aller Haushalte' },
                        { title: 'Drittes Quintil: ', text: 'Die mittleren 20 % der Haushalte in der Einkommensverteilung' },
                        { title: 'Viertes Quintil: ', text: 'Haushalte mit Einkommen zwischen den oberen 60 % und 80 % aller Haushalte' },
                        { title: 'Fünftes Quintil: ', text: 'Die 20 % der Haushalte mit dem höchsten Einkommen' },
                    ],
                    isAccordion: true,
                    itemName: 'quintil-accordion'
                },
                {
                    id: 4,
                    isChart: true,
                    alt: "Diagramm mit 5 Balken, die das mittlere Haushaltseinkommen pro Einkommensquintil in Österreich darstellen.",
                    source: "Datenquelle: Konsumerhebung 2019/2020, Statistik Austria",
                },
                                {
                    id: 5,
                    text: (
                    <>  
                        Das Haushaltseinkommen in Österreich (nach Steuern) betrug 2019/2020 2.632€. Dabei zeigt sich eine deutliche <GlossaryTerm className="glossary-term incomeInequality" sectionId="income">Einkommensungleichheit</GlossaryTerm> zwischen den verschiedenen Bevölkerungsgruppen. 
                        So lag das mittlere Einkommen des ersten <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintils</GlossaryTerm>, also jenes Fünftels der Haushalte mit den niedrigsten Einkommen,
                        bei lediglich 1.247€ und damit deutlich unter dem österreichweiten <GlossaryTerm className="glossary-term median" sectionId="income">Median</GlossaryTerm>. 
                        Im Gegensatz dazu verfügte das oberste Quintil, also die einkommensstärksten 20% der Haushalte, über ein mittleres Einkommen von über 4.500€. 
                        Das bedeutet, dass Haushalte im obersten Quintil im Schnitt mehr als 3.000€ monatlich mehr zur Verfügung haben als jene im untersten Quintil.
                    </>
                    ),
                },
            ]
        },
        EN: {
            content: []
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
                        <img src={`${process.env.PUBLIC_URL}/images/00_Median_HH_Income_Personen_DE.png`} alt={`${item.alt}`} />
                        <p className='source' style={{margin: "0 auto 12px"}}>{item.source}</p>
                    </div>
                ) : item.isAccordion ? (
                    <div key={item.id} style={{ margin: '24px 0' }}>
                        <Accordion sx={{ background: '#f4f4f4' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h4" sx={{ fontSize: '1.125rem' }}>
                                {item.accordionHeader}
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>{item.accordionFirstText}</Typography>

                            {item.list && (
                                <ul className="custom-list income">
                                    {item.list.map((step, index) => (
                                        <li key={index}>
                                            <span className="boldText">{step.title}</span> {step.text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <Typography style={{ marginBottom: '0.5rem' }}>{item.accordionSubheader}</Typography>
                            <Typography>{item.accordionSecondText}</Typography>
                            </AccordionDetails>
                        </Accordion>
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