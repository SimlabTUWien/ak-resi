import { useState } from "react";
import { useLanguage } from '../../context/LanguageContext';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GlossaryTerm from '../GlossaryTerm';
import SocialInfrastructureTable from "../tables/SocialInfrastructureTable";
import IndicatorSelect from "../IndicatorSelect";
import SiIndicatorMap from "../SiIndicatorMap";

const translations = {
    DE: {
        header: 'Soziale Infrastruktur',
        content: [
            {
                id: 1,
                text: ( 
                <> 
                    <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">Soziale Infrastrukturen</GlossaryTerm> wie Kindergärten, Schulen, Gesundheits- und Pflegeeinrichtungen sind essenziell für eine funktionierende Gesellschaft. 
                    Sie ermöglichen Bildung, Gesundheit und soziale Teilhabe – unabhängig vom Einkommen. Doch ihr Zugang und ihre Qualität sind nicht überall gleich. 
                    Regionale Unterschiede und fehlende Angebote können Haushalte zusätzlich belasten und Ungleichheiten verstärken. 
                </>
                ),
            },
            {
                id: 2,
                accordionHeader: "Welche sozialen Infrastrukturen schauen wir uns an?",
                accordionText: ( 
                <>  
                    In unserer Analyse betrachten wir sechs zentrale Bereiche sozialer Infrastruktur: <br/>
                    Kinderbetreuungseinrichtungen (Krippen und Kindergärten), Allgemeinmediziner:innen, Schulen (Volks-, höhere und weiterführende Schulen), 
                    Pflegeheime, Krankenhäuser sowie soziale Einrichtungen wie jene von Caritas, Diakonie oder Volkshilfe.
                    <br/>
                    <br/>
                    Diese Auswahl spiegelt jene Angebote wider, die im Alltag für viele Menschen von großer Bedeutung sind: 
                    Kinderbetreuung und Schulen ermöglichen Bildung und Erwerbstätigkeit, insbesondere für Familien mit Kindern. 
                    Allgemeinmediziner:innen und Krankenhäuser sind die Basis der gesundheitlichen Versorgung, besonders im ländlichen Raum oft schwer erreichbar. 
                    Pflegeheime spielen eine zentrale Rolle für ältere Menschen und ihre Angehörigen. 
                    Und soziale Einrichtungen unterstützen Menschen in schwierigen Lebenslagen, etwa bei Armut, Wohnungslosigkeit oder Pflegebedarf.
                    <br/>
                    <br/>
                    Wir beziehen diese Bereiche ein, weil sie die Lebensqualität maßgeblich beeinflussen – und weil fehlende oder schlecht zugängliche Angebote dazu führen können, 
                    dass Menschen auf teure private Alternativen zurückgreifen müssen oder gar keine Versorgung erhalten. 
                </>
                ),
                isAccordion: true,
                itemName: 'si-description-accordion'
            },
            {
                id: 2,
                text: ( 
                <> 
                    Die untenstehende Karten zeig diese <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialen Infrastrukturen</GlossaryTerm> in Bezug auf den Bedarf in der Gemeinde. 
                    Während Ärzt:innen pro Einwohner:in berechnet werden, beziehen sich Kindergartengruppen auf Kinder im Alter von 3 bis 6 Jahren und Plätze in Pflegeheimen auf Menschen über 70. 
                    Neben der Verfügbarkeit von Infrastrukturen spielt auch ihre Zugänglichkeit eine Rolle: Kurze Öffnungszeiten oder hohe Kosten können die Nutzung einschränken. 
                    Da viele Menschen auch die Infrastrukturen in Nachbargemeinden nutzen, werden diese – mit geringerem Gewicht – in den Infrastrukturindikator einbezogen. 
                    In der Karte kann dieser Effekt ein- und ausgeblendet werden. 
                    Zudem kann man zwischen dem Gesamtindikator (also die gewichtete Summe aller Indikatoren) oder den Einzelindikatoren (für Allgemeinmediziner:innen, Schulen, Kindergärten, etc.) wählen. 
                </>
                ),
            },
            {
                id: 3,
                text: ( 
                <> 
                    Der Infrastrukturindikator reicht von 0 bis 10: Ein Wert von 0 bedeutet, dass eine bestimmte soziale Infrastruktur weder vorhanden noch erreichbar ist. 
                    Ein Wert von 10 zeigt, dass sie sehr gut verfügbar und leicht zugänglich ist – zum Beispiel durch kurze Entfernungen, ausreichende Kapazitäten oder passende Öffnungszeiten.
                </>
                ),
            },
            {
                id: 4,
                text: ( 
                <> 
                   Viele Gemeinden erreichen bei einzelnen Infrastrukturarten mittlere oder sogar sehr gute Werte – etwa bei Kindergärten oder Schulen. 
                   Gleichzeitig fehlen aber in manchen Gemeinden bestimmte Angebote völlig – zum Beispiel Pflegeheime oder soziale Einrichtungen. 
                   Solche Lücken wirken sich stark auf den Gesamtindikator aus, denn dieser berücksichtigt alle sechs Bereiche gleichermaßen. 
                   Das bedeutet: Fehlende Infrastruktur in nur einem Bereich kann das Gesamtergebnis deutlich nach unten ziehen, auch wenn andere Angebote gut ausgebaut sind. 
                   So wird sichtbar, dass es nicht nur auf einzelne Angebote ankommt, sondern auf ein ausgewogenes Gesamtbild – also darauf, dass alle grundlegenden Versorgungsbereiche zumindest in erreichbarer Nähe vorhanden sind.
                </>
                ),
            },
            {
                id: 5,
                text: ( 
                <> 
                    Genauere Informationen zu den einzelnen Infrastrukturen und der Berechnung der Indikatoren befinden sich in der untenstehenden Tabelle.
                </>
                ),
            },            
            {
                id: 6,
                isChart: true,
                itemName: 'si-map',
                alt: ""
            },
            {
                id: 7,
                text: ( 
                <> 
                    Die untenstehende Grafik zeigt, wie die Versorgung mit verschiedenen Arten <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm> – etwa 
                    Kindergärten, Schulen, Pflegeheime oder soziale Einrichtungen – in den Gemeinden verteilt ist. Auf der rechten Seite ist zudem der Gesamtindikator dargestellt, 
                    der die durchschnittliche Versorgung über alle sechs Infrastrukturbereiche hinweg zusammenfasst.
                </>
                ),
            },      
            {
                id: 8,
                text: ( 
                <> 
                    Dabei wird deutlich, dass soziale Einrichtungen insgesamt am schlechtesten erreichbar sind – was jedoch auch daran liegt, 
                    dass es davon nur vergleichsweise wenige gibt. Bei Pflegeheimen zeigt sich, dass die Mehrheit der Gemeinden nur eine geringe Erreichbarkeit aufweist. 
                    Nur etwa 10 % der Gemeinden verfügen über mittlere, gute oder sehr gute Versorgung in diesem Bereich. 
                    Auffällig ist außerdem, dass keine Gemeinde eine schlechte Versorgung bei Schulen aufweist – ebenso wenig wie bei Kinderbetreuungseinrichtungen, 
                    wenn man die Erreichbarkeit mit dem Auto betrachtet. Anders sieht es jedoch aus, wenn die Erreichbarkeit mit öffentlichen Verkehrsmitteln herangezogen wird: 
                    In vielen Gemeinden verschlechtert sich das Bild deutlich. Insgesamt erreichen nur sehr wenige Gemeinden in mehreren Bereichen eine „sehr gute“ Bewertung, 
                    insbesondere wenn die Erreichbarkeit mit öffentlichen Verkehrsmitteln berücksichtigt wird.
                </>
                ),
            },      
            {
                id: 9,
                text: ( 
                <> 
                    Diese Ergebnisse deuten bereits darauf hin, dass die Versorgung mit <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm> stark 
                    vom Wohnort abhängt – und somit ein regional unterschiedlich ausgeprägtes Problem darstellt.
                </>
                ),
            },               
            // TODO: add Chart 2 SI proGem + Example                           
            {
                id: 10,
                text: ( 
                <> 
                    Die Verfügbarkeit <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm> wie Ärzt:innen, Schulen, Kindergärten 
                    und sozialen Einrichtungen spielt eine entscheidende Rolle für das <GlossaryTerm className="glossary-term residualIncome" sectionId="social-infrastructure">Residualeinkommen</GlossaryTerm> von 
                    Haushalten. In Regionen, in denen diese Angebote gut ausgebaut sind, profitieren Haushalte von niedrigeren privaten Ausgaben für Bildung, Gesundheit und soziale Dienstleistungen. 
                    Umgekehrt führt ein mangelhafter Zugang zu diesen Angeboten dazu, dass Menschen gezwungen sind, private Alternativen zu finanzieren – 
                    sei es durch längere Anfahrtswege, kostenpflichtige Dienstleistungen oder haushaltsinterne Bereitstellung (wie beispielsweise Kinderbetreuung oder Pflege von Angehörigen).
                </>
                ),
            },
            {
                id: 11,
                text: ( 
                <> 
                    Dies hat direkte Folgen für das <GlossaryTerm className="glossary-term residualIncome" sectionId="social-infrastructure">Residualeinkommen</GlossaryTerm>: 
                    Haushalte in Regionen mit schlechter <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm> müssen oft höhere Fixkosten tragen, 
                    obwohl ihr Einkommen identisch mit dem von Haushalten in besser versorgten Gebieten ist. 
                    Besonders betroffen sind Familien mit Kindern, ältere Menschen oder Menschen mit gesundheitlichen Einschränkungen, da sie stärker auf diese Angebote angewiesen sind.
                </>
                ),
            },
            {
                id: 12,
                text: ( 
                <> 
                    Langfristig kann sich dies auf soziale Ungleichheit zwischen den Regionen auswirken. 
                    Haushalte mit ohnehin geringem Einkommen werden durch zusätzliche Ausgaben weiter belastet, 
                    während jene mit besserem Zugang zu Infrastruktur größere finanzielle Spielräume haben. 
                    Regionen mit schlechter Infrastruktur verlieren zudem an Attraktivität, was zu Abwanderung und einem wirtschaftlichen Abwärtstrend führen kann.
                </>
                ),
            },
            {
                id: 13,
                text: <> Wie werden die einzelnen Infrastrukturindikatoren berechnet? </>,
                isContentHeader: true,
            },
            {
                id: 14,
                text: ( 
                <> 
                    Der Gesamtindikator für <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">soziale Infrastrukturen</GlossaryTerm> setzt 
                    sich aus sechs gleich gewichteten Teilindikatoren zusammen: 
                    Kindergärten, Schulen, Krankenhäuser, Allgemeinmediziner:innen, Pflegeeinrichtungen und andere soziale Einrichtungen. 
                    Innerhalb der Teilindikatoren wird die Verfügbarkeit mit 50 %, die Zugänglichkeit mit 30 % und die Einflüsse von Nachbargemeinden 
                    (<GlossaryTerm className="glossary-term spillovers" sectionId="social-infrastructure">Spillover-Effekte</GlossaryTerm>) mit 20 % gewichtet, um die unterschiedlichen Aspekte der Infrastruktur umfassend zu berücksichtigen.
                </>
                ),
            },
            {
                id: 15,
                isTable: true,
                itemName: 'si-table',
                alt: ""
            },
            {
                id: 10,
                text: <> Verknüpfung zwischen Einkommen, Residualeinkommen und sozialer Infrastruktur: </>,
                isContentHeader: true,
            },
            {
                id: 11,
                text: ( 
                <> 
                    Die nachstehende Grafik vergleicht Haushalte entlang dreier Dimensionen: dem verfügbaren Einkommen (linke Achse), 
                    dem <GlossaryTerm className="glossary-term residualIncome" sectionId="social-infrastructure">Residualeinkommen</GlossaryTerm> (rechte Achse) – also dem Einkommen nach Abzug fixer Ausgaben wie Wohnen – 
                    sowie der Erreichbarkeit <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm>. 
                    Die roten Linien markieren jeweils den <GlossaryTerm className="glossary-term median" sectionId="social-infrastructure">Medianwert</GlossaryTerm> jeder Dimension und dienen als Schwelle zwischen „überdurchschnittlich“ und „unterdurchschnittlich“.
                </>
                ),
            }, 
            {
                id: 12,
                text: ( 
                <> 
                    Auf den ersten Blick scheinen die Verteilungen ähnlich, doch ein genauerer Blick offenbart signifikante Verschiebungen, 
                    sobald man <GlossaryTerm className="glossary-term residualIncome" sectionId="social-infrastructure">Residualeinkommen</GlossaryTerm> und Infrastrukturzugang gemeinsam betrachtet:
                </>
                ),
            },
            {
                id: 13,
                text: ( 
                <> 
                    Über 100 Haushalte, die beim reinen Einkommen über dem <GlossaryTerm className="glossary-term median" sectionId="social-infrastructure">Median</GlossaryTerm> liegen, rutschen unter den Median, 
                    wenn man das <GlossaryTerm className="glossary-term residualIncome" sectionId="social-infrastructure">Residualeinkommen</GlossaryTerm> berücksichtigt. 
                    Das bedeutet: Obwohl diese Haushalte relativ gut verdienen, bleiben ihnen – nach Abzug fixer Ausgaben – unterdurchschnittlich geringe Mittel zur freien Verfügung. 
                    Diese finanzielle Enge kann durch mangelnden Zugang zu unterstützender Infrastruktur noch verstärkt werden.
                </>
                ),
            },
            {
                id: 14,
                text: ( 
                <> 
                    Umgekehrt zeigt sich bei rund 130 Haushalten, dass sie trotz unterdurchschnittlichem Einkommen ein 
                    überdurchschnittliches <GlossaryTerm className="glossary-term residualIncome" sectionId="social-infrastructure">Residualeinkommen</GlossaryTerm> aufweisen 
                    – sie verfügen also über vergleichsweise geringe Fixkosten. 
                    Gleichzeitig haben sie guten Zugang zu <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm>. 
                    Diese Kombination kann etwa durch leistbaren Wohnraum und gut erreichbare öffentliche Dienstleistungen ermöglicht werden.
                </>
                ),
            },
            {
                id: 15,
                isImage: true,
                imagePath: "/images/15_INC_RESI_SOCIAL_INFR_DE.png",
                itemName: 'si-scatter',
                alt: "side-by-side scatter plot displaying a relationship between Infrastructure Provision and income related variables"
            },
        ]
    },
    EN: {
        header: 'Social Infrastructure',
        content: [
        ]
    }
};

const SocialInfrastructureSection = () => {

    const { language } = useLanguage();
    const section = translations[language] || translations.DE;

    const [spilloverMode, setSpilloverMode] = useState("so_miv");

    const handleToggleModeChange = (newValue) => {
        if (newValue !== null) {
            setSpilloverMode(newValue);
        }
    };

    const [selectedIndicator, setSelectedIndicator] = useState(1);

    const handleIndicatorChange = (newValue) => {
        setSelectedIndicator(newValue);
    };

    return (

        <div>
            <h2 className="section-header">{section.header}</h2>
            {section.content.map((item) =>
                
               item.isContentHeader ? (
                    <h2 key={item.id} className={`content-header ${item.className || ''}`}>{item.text}</h2>
                ) : item.isChart ? (
                    <Box
                        key={item.id}
                        sx={{
                            background: "#f4f4f4",
                            padding: 2,
                            borderRadius: 1,
                            boxShadow: 1,
                            fontSize: '14px',
                            margin: '24px 0 48px',
                        }}
                    >
                        <div className="control-container">
                            <div className="select-component">
                                <IndicatorSelect 
                                    value={selectedIndicator}
                                    onChange={handleIndicatorChange}
                                />
                            </div>

                            <div className="toggle-container">
                                <ToggleButtonGroup
                                    className="si-toggle"
                                    value={spilloverMode}
                                    exclusive
                                    onChange={(_, newValue) => handleToggleModeChange(newValue)}
                                    aria-label="mode selection"
                                >
                                    {/* <ToggleButton value="no_so"><label>Kein<br/>Spillover</label></ToggleButton> */}
                                    <ToggleButton value="so_miv"><label>Spillover<br/>(MIV)</label></ToggleButton>
                                    <ToggleButton value="so_oev"><label>Spillover<br/>(ÖV)</label></ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </div>
                        
                        <div className="si-spillover-container">
                            <SiIndicatorMap siMode={spilloverMode} subIndicator={selectedIndicator} key={`${spilloverMode}-${selectedIndicator}`} />
                        </div>
                    </Box>
                )  : item.isAccordion ? (
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
                ) : item.isTable ? (
                    <div key={item.id} className="si-table-container">
                        <SocialInfrastructureTable/>
                    </div>
                ) : item.isImage ? (
                    <div key={item.id} className="image-container si-scatter-plot-container">
                        <img src={`${process.env.PUBLIC_URL}${item.imagePath}`} alt={ item.alt } />
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

export default SocialInfrastructureSection;