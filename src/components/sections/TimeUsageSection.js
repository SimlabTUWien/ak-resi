import { useLanguage } from '../../context/LanguageContext';

import {Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import GlossaryTerm from '../GlossaryTerm';
import IncSexEduBoxplot from '../BoxplotCharts/IncSexEduBoxplot';
import IncSexFtptBoxplot from '../BoxplotCharts/IncSexFtptBoxplot';
import IncSexHhtypeBoxplot from '../BoxplotCharts/IncSexHhtypeBoxplot';
import IncSexGemgroBoxplot from '../BoxplotCharts/IncSexGemgroBoxplot';
import IncSexSiBoxplot from '../BoxplotCharts/IncSexSiBoxplot';


const translations = {
    DE: {
        header: 'Zeitverwendung',
        content: [
            {
                id: 1,
                text: ( 
                <> 
                    Neben dem <GlossaryTerm className="glossary-term residualIncome" sectionId="time-usage">Residualeinkommen</GlossaryTerm> und der Verfügbarkeit und 
                    Zugänglichkeit <GlossaryTerm className="glossary-term si" sectionId="time-usage">sozialer Infrastruktur</GlossaryTerm> ist die Zeitverwendung eine 
                    weitere wichtige Dimension, um Ungleichheiten ganzheitlich zu betrachten.
                </>
                ),
            },
            {
                id: 2,
                text: ( 
                <> 
                    Die Zeitverwendung beschreibt, wie die einzelnen Haushaltsmitglieder ihre 24 Stunden am Tag nutzen, 
                    etwa für Schlaf, bezahlte Arbeit oder Freizeit. Im Gegensatz zu Analysen, die Haushalte gemeinsam betrachten, 
                    etwa beim Haushaltseinkommen, zeigen sich bei der Zeitverwendung auch Unterschiede zwischen den einzelnen Haushaltsmitgliedern. 
                    Diese Unterschiede zeichnen sich oft entlang der Geschlechtsdimension ab. 
                    Die <GlossaryTerm className="glossary-term timeUsage" sectionId="time-usage">Zeitverwendungserhebung</GlossaryTerm> zeigt, dass in Österreich, 
                    wie in vielen anderen Ländern auch, Frauen nach wie vor einen überproportional großen Anteil an unbezahlter Arbeit, 
                    wie Haushaltsführung, Kinderbetreuung und die Pflege von Angehörigen übernehmen. 
                    Da dadurch Frauen oft geringere Erwerbsarbeitszeiten und ein niedrigeres Einkommen haben, hat dies weitreichende finanzielle und soziale Konsequenzen.
                </>
                ),
            },
            {
                id: 3,
                accordionHeader: "Wie misst man die Zeit der Österreicher:innen?",
                accordionText: (
                <>
                    Die <GlossaryTerm className="glossary-term timeUsage" sectionId="time-usage">Zeitverwendungserhebung</GlossaryTerm> (ZVE) ist eine statistische Erhebung, die detailliert erfasst, 
                    wie Menschen in Österreich ihren Tag verbringen. Insgesamt nahmen 4.342 Haushalte in Österreich an der Erhebung teil, 
                    wobei alle Haushaltsmitglieder ab 10 Jahren an einem Wochentag und einem Wochenendtag ein Zeittagebuch ausfüllten, 
                    in dem sie ihre Tätigkeiten im 10-Minuten-Takt festhielten. Die Erhebung wurde im Zeitraum von Oktober 2021 bis Dezember 2022 durchgeführt. 
                    Sie dient dazu, die Zeitaufwendungen für verschiedene Tätigkeiten wie Schlafen, Arbeiten, Lernen, Freizeit, Hausarbeit, Kinderbetreuung oder 
                    Freiwilligentätigkeiten zu dokumentieren und auswerten zu können. Ziel ist es, Einblicke in Lebensgewohnheiten sowie in die Verteilung von unbezahlter Arbeit und zeitlicher Belastung zu gewinnen.
                </>
                ),
                isAccordion: true,
                itemName: 'measurement-accordion'

            },
            {
                id: 4,
                text: ( 
                <> 
                    Die folgenden Analysen zeigen unterschiedliche Dimensionen der Zeitverteilung in österreichischen Haushalten, mit Schwerpunkt auf Geschlechtsunterschieden sowie entlang sozio-ökonomischen und räumlichen Merkmalen. 
                </>
                ),
            },
            {
                id: 5,
                accordionHeader: "Wie liest man einen Boxplot?",
                accordionText: (
                <>
                    Da die Zeit, die Personen für verschiedene Aufgaben aufwenden, von Haushalt zu Haushalt stark schwankt, 
                    werden die Ergebnisse in den folgenden Analysen nicht als Durchschnittswerte, sondern in Form von Boxplots dargestellt. 
                    Ein Boxplot zeigt die Verteilung der Daten. Die Box, eines Boxplots, stellt dabei die mittleren 50 % der Werte dar (vom unteren Quartil (25 %) bis zum oberen Quartil (75 %)), 
                    d. h. 50 % der Personen wenden in diesem Beispiel zwischen 7 und 10 Stunden für die Kategorie auf. 
                    Die Linie innerhalb der Box stellt den Median, also den mittleren Wert, dar. 
                    Die Linien (auch „Antennen” genannt) oberhalb und unterhalb der Boxen zeigen an, wie weit die restlichen Werte ungefähr reichen. 
                    Im Beispiel sind das 4 bis 13 Stunden. Zusätzlich markieren die Punkte Ausreißer, also besonders hohe oder niedrige Werte. 
                    Im Beispiel sind das Personen, die fast 15 Stunden oder weniger als drei Stunden für die Kategorie aufwenden.
                </>
                ),
                isAccordion: true,
                itemName: 'boxplot-accordion',
                imagePath: "/images/boxplotbeispiel.png",
                alt: "Beispielbild eines Boxplots"
            },
            {
                id: 6,
                text: <> Zeitverwendung von Männern und Frauen (21-64 Jahre) für Erwerbsarbeit und unbezahlter Arbeit </>,
                isContentHeader: true,
            },
            {
                id: 7,
                text: <> Bildung: Bildung verändert viel – aber nicht alles </>,
                isContentSubHeader: true,
            },
            {
                id: 8,
                text: ( 
                <> 
                    Unabhängig vom Bildungsgrad zeigt sich ein klares Muster: Frauen übernehmen mehr Care-Arbeit als Männer. 
                    Egal ob Pflichtschulabschluss, Lehre oder Universitätsabschluss – Frauen verbringen täglich mehr Zeit mit Haushaltsarbeit, Kinderbetreuung und der Pflege von Angehörigen als Männer.
                </>
                ),
            },
            {
                id: 9,
                text: ( 
                <> 
                    Während sich die Aufteilung zwischen Erwerbsarbeit und Care-Arbeit bei Männern kaum verändert, 
                    wenn man verschiedene Bildungsgruppen betrachtet, zeigt sich bei Frauen eine leichte Verschiebung: 
                    Mit zunehmendem Bildungsgrad investieren Frauen etwas weniger Zeit in unbezahlte Arbeit und etwas mehr in Erwerbsarbeit.
                </>
                ),
            },
            {
                id: 10,
                text: ( 
                <> 
                    Warum ist das so? Eine mögliche Erklärung liegt in den Arbeitsmarktchancen höher gebildeter Frauen. 
                    Frauen mit höherem Bildungsabschluss haben bessere Einkommensperspektiven, was dazu führen kann, dass sie sich stärker in den Arbeitsmarkt einbringen. 
                    Zudem besteht in höher gebildeten Haushalten oft eine größere finanzielle Möglichkeit, Dienstleistungen wie Kinderbetreuung oder Haushaltsarbeit auszulagern.
                </>
                ),
            },
            {
                id: 11,
                text: ( 
                <> 
                    Trotz dieses Bildungsgradientens bleibt die Grundtendenz bestehen: 
                    Auch hochgebildete Frauen übernehmen mehr unbezahlte Arbeit als Männer mit gleichem Bildungsniveau. 
                    Dies zeigt, dass traditionelle Rollenverteilungen weiterhin Einfluss darauf haben, 
                    wie Erwerbs- und Care-Arbeit innerhalb von Haushalten verteilt wird – unabhängig vom Bildungsgrad.
                </>
                ),
            },
            {
                id: 12,
                isChart: true,
                itemName: 'edu-boxplot',
                alt: "Boxplot zur Darstellung des Einkommens basierend auf Geschlecht und Bildung"
                // altEN: "box plot visualizing income based on sex and education"
            },
            {
                id: 13,
                text: <> Vollzeit-/Teilzeitarbeit: Teilzeit ist nicht gleich Teilzeit – die doppelte Belastung von Frauen </>,
                isContentSubHeader: true,
            },
            {
                id: 14,
                text: ( 
                <> 
                    Frauen, die Teilzeit arbeiten, übernehmen fast doppelt so viel Care-Arbeit wie Frauen, die Vollzeit arbeiten. 
                    Dies könnte darauf zurückzuführen sein, dass viele Frauen ihre Arbeitszeit bewusst reduzieren, um Haushalt, Kinderbetreuung oder die Pflege von Angehörigen zu übernehmen. 
                    Teilzeit ist in diesem Fall oft kein freiwilliges Modell für mehr Freizeit, sondern eine Notwendigkeit, um unbezahlte Arbeit im Haushalt zu bewältigen.
                </>
                ),
            },
            {
                id: 15,
                text: ( 
                <> 
                    Besonders auffällig ist der Unterschied zwischen teilzeitbeschäftigten Frauen und Männern: 
                    Frauen in Teilzeit übernehmen mehr als doppelt so viel Care-Arbeit wie Männer in Teilzeit. 
                    Während Männer, die ihre Arbeitszeit reduzieren, oft mehr persönliche Freizeit oder Erholung gewinnen, 
                    nutzen Frauen die „gewonnene“ Zeit meist für unbezahlte Tätigkeiten.
                </>
                ),
            },
            {
                id: 16,
                text: ( 
                <> 
                    Das hat weitreichende Folgen: Teilzeit verringert das Erwerbseinkommen, die Karrierechancen und langfristig auch die Pensionsansprüche. 
                    Gleichzeitig bleibt der Großteil der unbezahlten Arbeit an Frauen hängen, was die finanzielle Abhängigkeit innerhalb von Haushalten verstärken kann. 
                    Diese Verteilung zeigt, dass Teilzeitarbeit für Frauen oft nicht nur eine berufliche Entscheidung ist, 
                    sondern direkt mit ungleicher Care-Arbeit verknüpft ist – mit langfristigen Konsequenzen für Einkommen, soziale Absicherung und wirtschaftliche Unabhängigkeit.
                </>
                ),
            },
            {
                id: 17,
                isChart: true,
                itemName: 'ftpt-boxplot',
                alt: "Boxplot zur Darstellung des Einkommens basierend auf Geschlecht und Beschäftigungsausmaß"
                // altEN: "box plot visualizing income based on sex and extend of employment"
            },
            {
                id: 18,
                text: <> Haushaltstyp: Wenn aus einem Haushalt eine Familie wird – wie sich Arbeitsteilung verändert </>,
                isContentSubHeader: true,
            },
            {
                id: 19,
                text: ( 
                <> 
                    Bei Single-Frauen und -Männern gibt es kaum Unterschiede in der Aufteilung zwischen Erwerbsarbeit und unbezahlter Care-Arbeit. 
                    Beide verbringen ähnlich viel Zeit mit Haushaltstätigkeiten und gehen einer Erwerbsarbeit nach. 
                    Doch sobald Menschen in Paarhaushalten leben, beginnt sich die Verteilung zu verändern: 
                    Frauen übernehmen im Durchschnitt 50 Minuten mehr unbezahlte Arbeit pro Tag als ihre männlichen Partner.
                </>
                ),
            },
            {
                id: 20,
                text: ( 
                <> 
                    Besonders deutlich wird die Ungleichverteilung, sobald Kinder ins Spiel kommen. 
                    In Paarhaushalten mit einem Kind unter 15 Jahren verbringen Frauen täglich über 4 Stunden mit Care-Arbeit, 
                    während Männer weniger als 2 Stunden für Haushalt und Kinderbetreuung aufwenden. 
                    Dies geht mit einer gegenläufigen Entwicklung in der Erwerbsarbeit einher: Männer arbeiten in diesem Haushaltstyp fast 2 Stunden mehr pro Tag als Frauen.
                </>
                ),
            },
            {
                id: 21,
                text: ( 
                <> 
                    Je mehr Kinder im Haushalt leben, desto mehr verstärkt sich dieses Muster. 
                    Frauen reduzieren ihre Erwerbsarbeitszeit weiter, um mehr Zeit für Haushalt und Kinder aufzuwenden, während Männer ihre Erwerbsarbeit sogar noch ausweiten. 
                    Diese Entwicklung zeigt, dass traditionelle Rollenmuster in Familien trotz gesellschaftlichem Wandel weiterhin tief verankert sind. 
                    Auch bei Alleinerziehenden bleibt dieser Unterschied bestehen: Alleinerziehende Männer arbeiten im Durchschnitt mehr, während alleinerziehende Frauen mehr Care-Arbeit leisten.
                </>
                ),
            },
            {
                id: 22,
                text: ( 
                <> 
                    Um diese Ungleichheiten zu reduzieren, sind gezielte Maßnahmen erforderlich: 
                    Der Ausbau von Kinderbetreuung, Pflegeangeboten und flexibleren Arbeitsmodellen kann Frauen und Männern mehr Spielraum bei der Vereinbarkeit von Beruf und Familie geben. 
                    Zudem sind gerechtere Verteilungen von Erwerbs- und Care-Arbeit nicht nur eine Frage individueller Entscheidungen, sondern auch von gesellschaftlichen Strukturen und politischen Rahmenbedingungen.
                </>
                ),
            },
            {
                id: 23,
                isChart: true,
                itemName: 'hhtype-boxplot',
                alt: "Boxplot zur Darstellung des Einkommens basierend auf Geschlecht und Haushaltstyp"
                // altEN: "box plot visualizing income based on sex and household type"
            },
            {
                id: 24,
                text: <> Gemeindegrößenklasse: Stadt oder Land? Wie der Wohnort die Arbeitsteilung beeinflusst </>,
                isContentSubHeader: true,
            },
            {
                id: 25,
                text: ( 
                <> 
                    Schaut man sich die Zeitverwendung in unterschiedlichen Gemeindegrößen an, zeigt sich ein klares Muster: 
                    Frauen in den ländlichsten Gemeinden leisten täglich mehr als eine Stunde mehr Care-Arbeit als Frauen in Wien. 
                    Je größer die Gemeinde, desto geringer wird der Anteil an unbezahlter Arbeit, den Frauen übernehmen.
                </>
                ),
            },
            {
                id: 26,
                text: ( 
                <> 
                    Bei Männern hingegen bleibt die Verteilung nahezu unverändert – egal, ob sie in einer kleinen Landgemeinde oder in einer Großstadt leben. 
                    Während Frauen auf dem Land also mehr Zeit für Haushalt, Kinderbetreuung und Pflege aufwenden, verändert sich der Anteil der männlichen Care-Arbeit kaum.
                </>
                ),
            },
            {
                id: 27,
                isChart: true,
                itemName: 'gemgr-boxplot',
                alt: "Boxplot zur Darstellung des Einkommens basierend auf Geschlecht und Gemeindegröße"
                // altEN: "box plot visualizing income based on sex and community size"
            },
            {
                id: 29,
                text: <> Erreichbarkeit von sozialer Infrastruktur: So beeinflusst sie die unbezahlte Arbeit </>,
                isContentSubHeader: true,
            },
            {
                id: 30,
                text: ( 
                <> 
                    Wie stark die Verfügbarkeit und Erreichbarkeit <GlossaryTerm className="glossary-term si" sectionId="time-usage">sozialer Infrastruktur</GlossaryTerm> die Verteilung unbezahlter Arbeit beeinflusst, 
                    wird besonders deutlich beim Blick auf die Zeitverwendung: In Gemeinden mit schlechter Infrastruktur zeigen sich kaum Unterschiede bei Männern – 
                    ihr Anteil an unbezahlter Arbeit bleibt relativ konstant. Bei Frauen hingegen ist der Effekt deutlich spürbar: 
                    In schlecht versorgten Gemeinden leisten sie im Durchschnitt über 1,5 Stunden mehr unbezahlte Arbeit pro Tag als Frauen in gut ausgestatteten Regionen.
                </>
                ),
            },
            {
                id: 31,
                text: ( 
                <> 
                    Diese Zahlen verdeutlichen, dass in ländlichen oder infrastrukturschwachen Gemeinden viele Betreuungs- und Versorgungsaufgaben – 
                    etwa Kinderbetreuung, Pflege oder Haushalt – im privaten Rahmen organisiert werden müssen, da öffentliche Angebote fehlen oder schwer erreichbar sind. 
                    Das führt nicht nur zu einer ungleichen Verteilung von Sorgearbeit zwischen den Geschlechtern, sondern auch zu einer Mehrbelastung von Frauen, 
                    die ihren Alltag stärker um fehlende Dienstleistungen herum strukturieren müssen.
                </>
                ),
            },
            {
                id: 32,
                isChart: true,
                itemName: 'si-boxplot',
                alt: "box plot visualizing income based on sex and social infrastructure supply",
                text: ( 
                <>
                    <span className="boldText">Infrastrukturversorgung: </span> Schlecht: ein Indikatorwert &lt; 3, mittel: ein Indikatorwert zwischen 3 und 5, gut: ein Indikatorwert zwischen 5 und 7, sehr gut: ein Indikatorwert über 7.
                </>
                )
            },                                 
        ]
    },
    EN: {
        header: 'Time Usage',
        content: [
        ]
    }
};


const TimeUsageSection = () => {


    const { language } = useLanguage();
    const section = translations[language] || translations.DE;
    
    const renderItem = (item) => {
        switch (true) {
            case item.isContentHeader:
            return (
                <h2 key={item.id} className={`content-header ${item.className || ''}`}>
                    {item.text}
                </h2>
            );

            case item.isContentSubHeader:
            return (
                <h3 key={item.id} className={`content-header ${item.className || ''}`}>
                    {item.text}
                </h3>
            );

            case item.isChart:
            switch (item.itemName) {
                case 'edu-boxplot':
                    return (
                        <IncSexEduBoxplot key={item.id} alt={item.alt}/>
                    );
                case 'ftpt-boxplot':
                    return (
                        <IncSexFtptBoxplot key={item.id} alt={item.alt}/>
                    );
                case 'hhtype-boxplot':
                    return (
                        <IncSexHhtypeBoxplot key={item.id} alt={item.alt}/>
                    );
                case 'gemgr-boxplot':
                    return (
                        <IncSexGemgroBoxplot key={item.id} alt={item.alt}/>
                    );
                default:
                    return (
                        <div key={item.id}>
                            <IncSexSiBoxplot alt={item.alt}/>
                            <span style={{fontSize: '0.9rem'}}>{item.text}</span>
                        </div>
                    );
            }

            case item.isAccordion:
            switch (item.itemName) {    
                case 'measurement-accordion':
                    return (
                        <div key={item.id} style={{ margin: '24px 0' }}>
                        <Accordion sx={{ background: '#f4f4f4' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h4" sx={{ fontSize: '1.125rem' }}>
                                {item.accordionHeader}
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>{item.accordionText}</Typography>
                            </AccordionDetails>
                        </Accordion>
                        </div>
                    );
                default:
                    return (
                        <div key={item.id} style={{ margin: '24px 0' }}>
                        <Accordion sx={{background: "#f4f4f4"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h4" sx={{ fontSize: '1.125rem'}}> {item.accordionHeader} </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.accordionText}
                                </Typography>
                                {item.list && (
                                    <ul className="custom-list infobox-list">
                                        {item.list.map((step, index) => (
                                            <li key={index}>{step}</li>
                                        ))}
                                    </ul>
                                )}
         
                                <div className="image-container">
                                    <img
                                        className="example-boxplot"
                                        src={`${process.env.PUBLIC_URL}${item.imagePath}`}
                                        alt={item.alt}
                                    />
                                </div>
                                
                            </AccordionDetails>
                        </Accordion>
                        </div>
                    );
                }
            
            default:
                return (
                    <p key={item.id} className={`paragraph ${item.className || ''}`}>
                        {item.text}
                    </p>
                );
        }
    };

    return (
        <div>
            <h2 className="section-header">{section.header}</h2>
            {section.content.map(renderItem)}
        </div>
    );
};

export default TimeUsageSection;