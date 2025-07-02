import { useState } from "react";
import { useLanguage } from '../../context/LanguageContext';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GlossaryTerm from '../GlossaryTerm';
import SocialInfrastructureTable from "../tables/SocialInfrastructureTable";
import IndicatorSelect from "../IndicatorSelect";
import SiIndicatorMap from "../SiIndicatorMap";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

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
                    dass Menschen auf teure private Alternativen zurückgreifen müssen oder gar keine Versorgung erhalten. <br/>
                    <br/> 
                </>
                ),
                isAccordion: true,
                itemName: 'si-description-accordion'
            },
            {
                id: 3,
                text: ( 
                <> 
                    Die untenstehende Karten zeigt diese <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialen Infrastrukturen</GlossaryTerm> in Bezug auf den Bedarf in der Gemeinde. 
                    Während Ärzt:innen pro Einwohner:in berechnet werden, beziehen sich Kindergartengruppen auf Kinder im Alter von 3 bis 6 Jahren und Plätze in Pflegeheimen auf Menschen über 70. 
                    Neben der Verfügbarkeit von Infrastrukturen spielt auch ihre Zugänglichkeit eine Rolle: Kurze Öffnungszeiten oder hohe Kosten können die Nutzung einschränken. 
                    Da viele Menschen auch die Infrastrukturen in Nachbargemeinden nutzen, werden diese – mit geringerem Gewicht – in den Infrastrukturindikator einbezogen. 
                    In der Karte kann dieser Effekt ein- und ausgeblendet werden. 
                    Zudem kann man zwischen dem Gesamtindikator (also die gewichtete Summe aller Indikatoren) oder den Einzelindikatoren (für Allgemeinmediziner:innen, Schulen, Kindergärten, etc.) wählen. 
                </>
                ),
            },
            {
                id: 4,
                text: ( 
                <> 
                    Der Infrastrukturindikator reicht von 0 bis 10: Ein Wert von 0 bedeutet, dass eine bestimmte soziale Infrastruktur weder vorhanden noch erreichbar ist. 
                    Ein Wert von 10 zeigt, dass sie sehr gut verfügbar und leicht zugänglich ist – zum Beispiel durch kurze Entfernungen, ausreichende Kapazitäten oder passende Öffnungszeiten.
                </>
                ),
            },
            {
                id: 5,
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
                id: 6,
                text: ( 
                <> 
                    Genauere Informationen zu den einzelnen Infrastrukturen und der Berechnung der Indikatoren befinden sich in der untenstehenden Tabelle.
                </>
                ),
            },            
            {
                id: 7,
                isMapComponent: true,
                itemName: 'si-map',
                alt: "Karte zur Darstellung der sozialen Indikatoren pro Gemeinde"
            },
            {
                id: 8,
                text: ( 
                <> 
                    Die untenstehende Grafik zeigt, wie die Versorgung mit verschiedenen Arten <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm> – etwa 
                    Kindergärten, Schulen, Pflegeheime oder soziale Einrichtungen – in den Gemeinden verteilt ist. Auf der rechten Seite ist zudem der Gesamtindikator dargestellt, 
                    der die durchschnittliche Versorgung über alle sechs Infrastrukturbereiche hinweg zusammenfasst.
                </>
                ),
            },      
            {
                id: 9,
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
                id: 10,
                text: ( 
                <> 
                    Diese Ergebnisse deuten bereits darauf hin, dass die Versorgung mit <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm> stark 
                    vom Wohnort abhängt – und somit ein regional unterschiedlich ausgeprägtes Problem darstellt.
                </>
                ),
            },               
            {
                id: 11,
                isPerMunChart: true,
                itemName: 'si-mun-chart',
                imagePathMIV: "/images/16_SI_proGem_MIV.webp",
                imagePathOEV: "/images/16_SI_proGem_OEV.webp",
                altMIV: "Anteil der Gemeinden je Versorgungskategorie (MIV)",
                altOEV: "Anteil der Gemeinden je Versorgungskategorie (OEV)",
                text: ( 
                <> 
                    <span className="boldText">Beispiel: </span>
                    In einer Gemeinde im Zentralraum kann eine Familie ihr Kind beispielsweise zu Fuß in den Kindergarten bringen, zur Ärztin um die Ecke gehen und nachmittags die pflegebedürftige Mutter 
                    in einer nahegelegenen Einrichtung besuchen. In einer anderen Gemeinde am Rand einer strukturschwachen Region muss dieselbe Familie täglich mehrere Kilometer mit dem Auto fahren, 
                    um medizinische Versorgung, Bildung oder Betreuung zu erreichen – oder sie muss auf teure, private Alternativen zurückgreifen.<br/><br/>
                    
                    Diese Unterschiede führen zu einer doppelten Belastung für Haushalte, besonders für jene mit geringerem Einkommen, vielen Betreuungspflichten oder eingeschränkter Mobilität.<br/><br/>
                </>
                ),
            },
            {
                id: 12,
                text: ( 
                <> 
                    Die untenstehende Grafik verdeutlicht dieses Problem: 
                    Sie zeigt, dass die durchschnittliche Versorgung mit <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm> über die Bundesländer 
                    hinweg – mit Ausnahme von Wien – weitgehend vergleichbar ist. Deutlich größere Unterschiede treten jedoch zwischen Gemeinden unterschiedlicher Größe auf. 
                    Besonders gering ist die Versorgung in kleinen Gemeinden mit weniger als 2.500 Einwohner:innen. 
                    Zwar gibt es auch hier Ausnahmen mit guter bis sehr guter Ausstattung, doch insgesamt ist das Niveau deutlich niedriger. 
                    In Gemeinden mit 2.500 bis 10.000 Einwohner:innen verbessert sich die Versorgung im Durchschnitt, gleichzeitig bestehen aber weiterhin große Unterschiede zwischen einzelnen Orten. 
                    Besonders hervor sticht Wien, das in allen Bezirken die beste Infrastrukturversorgung aufweist.
                </>
                ),
            },
            {
                id: 13,
                isSiBlChart: true,
                imagePath: "/images/17_SI_nach_BL.webp",
                itemName: 'si-bl',
                alt: "Plot zur Darstellung der Versorgung mit sozialer Infrastruktur je Bundesland"
            },
            {
                id: 14,
                text: ( 
                <> 
                    Die Verfügbarkeit <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm> wie Ärzt:innen, Schulen, Kindergärten 
                    und sozialen Einrichtungen spielt eine entscheidende Rolle für das <GlossaryTerm className="glossary-term residualIncome" sectionId="social-infrastructure">Residualeinkommen</GlossaryTerm> von Haushalten. 
                    In Regionen, in denen diese Angebote gut ausgebaut sind, profitieren Haushalte von niedrigeren privaten Ausgaben für Bildung, Gesundheit und soziale Dienstleistungen. 
                    Umgekehrt führt ein mangelhafter Zugang zu diesen Angeboten dazu, dass Menschen gezwungen sind, private Alternativen zu finanzieren – 
                    sei es durch längere Anfahrtswege, kostenpflichtige Dienstleistungen oder haushaltsinterne Bereitstellung (wie beispielsweise Kinderbetreuung oder Pflege von Angehörigen).
                </>
                ),
            },
            {
                id: 15,
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
                id: 16,
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
                id: 17,
                isTableAccordion: true,
                accordionHeader: "Wie werden die einzelnen Infrastrukturindikatoren berechnet?",
                accordionText: ( 
                <>  
                    Der Gesamtindikator für <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">soziale Infrastrukturen</GlossaryTerm> setzt 
                    sich aus sechs gleich gewichteten Teilindikatoren zusammen: 
                    Kindergärten, Schulen, Krankenhäuser, Allgemeinmediziner:innen, Pflegeeinrichtungen und andere soziale Einrichtungen. 
                    Innerhalb der Teilindikatoren wird die Verfügbarkeit mit 50 %, die Zugänglichkeit mit 30 % und die Einflüsse von Nachbargemeinden 
                    (<GlossaryTerm className="glossary-term spillovers" sectionId="social-infrastructure">Spillover-Effekte</GlossaryTerm>) mit 20 % gewichtet, um die unterschiedlichen Aspekte der Infrastruktur umfassend zu berücksichtigen.
                </>
                ),
                ariaLabel: "Tabelle zur Erläuterung der Berechnung der einzelnen Infrastrukturindikatoren"
            },
            // {
            //     id: 17,
            //     text: <> Wie werden die einzelnen Infrastrukturindikatoren berechnet? </>,
            //     isContentHeader: true,
            // },
            // {
            //     id: 18,
            //     text: ( 
            //     <> 
            //         Der Gesamtindikator für <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">soziale Infrastrukturen</GlossaryTerm> setzt 
            //         sich aus sechs gleich gewichteten Teilindikatoren zusammen: 
            //         Kindergärten, Schulen, Krankenhäuser, Allgemeinmediziner:innen, Pflegeeinrichtungen und andere soziale Einrichtungen. 
            //         Innerhalb der Teilindikatoren wird die Verfügbarkeit mit 50 %, die Zugänglichkeit mit 30 % und die Einflüsse von Nachbargemeinden 
            //         (<GlossaryTerm className="glossary-term spillovers" sectionId="social-infrastructure">Spillover-Effekte</GlossaryTerm>) mit 20 % gewichtet, um die unterschiedlichen Aspekte der Infrastruktur umfassend zu berücksichtigen.
            //     </>
            //     ),
            // },
            // {
            //     id: 19,
            //     isTable: true,
            //     itemName: 'si-table',
            //     ariaLabel: ""
            // },
            {
                id: 18,
                text: <> Verknüpfung zwischen Einkommen, Residualeinkommen und sozialer Infrastruktur: </>,
                isContentHeader: true,
            },
            {
                id: 19,
                text: ( 
                <>
                   Die vorangegangenen Analysen zeigen deutlich, dass Haushalte unterschiedlich stark durch <GlossaryTerm className="glossary-term expenditure" sectionId="social-infrastructure">notwendige Ausgaben</GlossaryTerm> belastet sind. 
                   Gerade deshalb ist es wichtig, Einkommen nicht isoliert zu betrachten, sondern immer auch die damit verbundenen Ausgaben – etwa für Wohnen, Energie, Mobilität oder Betreuung. 
                   Diese Belastungen können aus unterschiedlichen Gründen stark variieren: unterschiedliche Mietniveaus, Heizkosten je nach Gebäudezustand, 
                   hohe Mobilitätskosten in schlecht angebundenen Regionen oder die Erfordernis, private Alternativen zu fehlender öffentlicher Infrastruktur zu nutzen.
                </>
                ),
            },
            {
                id: 20,
                text: ( 
                <>
                    Auch die vorliegenden Daten zur Versorgung mit <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialer Infrastruktur</GlossaryTerm> zeigen große regionale Unterschiede. 
                    Dabei fällt auf: Finanziell stark belastete Haushalte sind besonders oft auch infrastrukturbezogen benachteiligt.
                </>
                ),
            },
            {
                id: 21,
                isList: true,
                text: ( 
                <>
                    Die untenstehende Grafik macht das sichtbar: 
                </>
                ),
                list: [
                    "10 % der Haushalte mit sehr hoher finanzieller Belastung leben gleichzeitig in Gemeinden mit schlechter sozialer Infrastrukturversorgung. → Das bedeutet: Diese Haushalte haben nicht nur wenig Geld zur Verfügung, sondern auch kaum Zugang zu entlastenden öffentlichen Angeboten wie Kinderbetreuung oder Gesundheitsversorgung – eine doppelte Belastung.",
                    "Weitere 55 % dieser hoch belasteten Haushalte leben in Gemeinden mit mittlerer Infrastrukturversorgung. → Sie haben ein gewisses öffentliches Angebot zur Verfügung, was private Kosten dämpfen kann, aber oft nicht ausreicht, um die hohe finanzielle Belastung auszugleichen.",
                    "11 % der stark belasteten Haushalte leben in Gemeinden mit sehr guter Infrastrukturversorgung. → Hier zeigt sich: Gute Infrastruktur könnte soziale Ungleichheit abfedern – auch wenn das Einkommen niedrig ist, ermöglichen öffentliche Angebote Teilhabe und Entlastung im Alltag."
                ], 
            },
            {
                id: 22,
                isList: true,
                text: ( 
                <>
                    Dem gegenüber stehen Haushalte mit geringer finanzieller Belastung – also solche, die weniger als 25 % ihres Einkommens für Fixkosten wie Wohnen, Energie oder Mobilität aufwenden:
                </>
                ),
                list: [
                    "Nur 4 % dieser Haushalte leben in Gemeinden mit schlechter Versorgung.",
                    "Der Großteil – 52 % – lebt in Regionen mit guter bis sehr guter sozialer Infrastruktur."
                ], 
            },
            {
                id: 23,
                text: ( 
                <>
                    Es zeigt sich, dass Haushalte mit geringen Einkommen besonders dann benachteiligt sind, wenn sie zusätzlich in Gemeinden mit schwacher Infrastrukturversorgung leben - etwa mit eingeschränktem Zugang zu Kinderbetreuung, 
                    Gesundheitsleistungen oder Pflegeangeboten. In solchen Fällen entstehen zusätzliche Belastungen im Alltag, etwa durch längere Wege, höhere Kosten oder den Bedarf an Eigenleistungen im Haushalt.
                </>
                ),
            },
            {
                id: 24,
                text: ( 
                <>
                    Gut ausgebaute Infrastruktur kann diesen Nachteilen entgegenwirken. Sie unterstützt nicht nur einkommensschwache Haushalte, sondern verbessert auch allgemein die Lebensqualität und Teilhabechancen vor Ort. 
                    Infrastrukturausbau ist daher nicht nur eine Frage der Daseinsvorsorge, sondern auch ein zentrales Element einer fairen regionalen Entwicklung.
                </>
                ),
            },
            {
                id: 25,
                isFinLoadChart: true,
                imagePath: "/images/18_FINANZ_BELASTUNG_SI.webp",
                itemName: 'si-financial-load',
                alt: "Darstellung der finanziellen Belastung und Versorgung mit SI nach Haushalten",
                text: ( 
                <>
                    <span className="boldText">Infrastrukturversorgung: </span> Schlecht: ein Indikatorwert unter 3, mittel: ein Indikatorwert zwischen 3 und &lt; 5, gut: ein Indikatorwert zwischen 5 und &lt; 7, sehr gut: ein Indikatorwert über 7.
                    <br/>
                    <span className="boldText">Finanzielle Belastung: </span> Gering: Ausgaben &lt; 25% des Haushaltseinkommens, mittel: Ausgaben zwischen 25% und 45% des Haushaltseinkommens, hoch: Ausgaben zwischen 26% und 55% des Haushaltseinkommens, sehr hoch: Ausgaben mehr als 55% des Haushaltseinkommens.
                </>
                ),
            }
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
    const [siChartMode, setSiChartMode] = useState("chart_miv");

    const handleToggleModeChange = (type, newValue) => {
        if (newValue !== null) {
            if (type === "map") {
                setSpilloverMode(newValue);

            } else if (type === "chart") {
                setSiChartMode(newValue);
            }
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
                ) : item.isMapComponent ? (
                    <Box
                        key={item.id}
                        sx={{
                            background: "#f4f4f4",
                            padding: 2,
                            borderRadius: 1,
                            boxShadow: 1,
                            fontSize: '14px',
                            margin: '24px 0 32px',
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
                                    onChange={(_, newValue) => handleToggleModeChange("map", newValue)}
                                    aria-label="Si map mode selection"
                                >
                                    {/* <ToggleButton value="no_so"><label>Kein<br/>Spillover</label></ToggleButton> */}
                                    {/* <ToggleButton value="so_miv"><label>Spillover<br/>(MIV)</label></ToggleButton>
                                    <ToggleButton value="so_oev"><label>Spillover<br/>(ÖV)</label></ToggleButton> */}

                                    <ToggleButton value="so_miv" aria-label="Car icon"><label style={{ display: 'contents'}}><DirectionsCarIcon /></label></ToggleButton>
                                    <ToggleButton value="so_oev" aria-label="Public transport icon"><label style={{ display: 'contents'}}><DirectionsBusIcon/></label></ToggleButton>
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
                ) : item.isTableAccordion ? (
                    <div key={item.id} className="si-table-container" style={{ margin: '24px 0 32px' }}>
                        <Accordion sx={{ background: '#f4f4f4' }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h4" sx={{ fontSize: '1.125rem' }}>
                                {item.accordionHeader}
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{item.accordionText}</Typography>
                                <SocialInfrastructureTable ariaLabel={item.ariaLabel}/>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                // ) : item.isTable ? (
                //     <div key={item.id} className="si-table-container" style={{margin: '24px 0 32px'}}>
                //         <SocialInfrastructureTable/>
                //     </div>
                ) : item.isList ? (
                    <div key={item.id} className="list-container" style={{margin: '12px 0 24px'}}>
                        <span className="paragraph">{item.text}</span>
                        {item.list && (
                            <ul className="custom-list residual-income">
                                {item.list.map((listitem, index) => (
                                    <li className="paragraph" key={index}>
                                        {listitem}
                                    </li>
                                ))}
                            </ul>
                        )}

                    </div>
                    
                ) : item.isPerMunChart ? (
                    <Box
                        key={item.id}
                        sx={{
                            background: "#f4f4f4",
                            padding: 2,
                            borderRadius: 1,
                            boxShadow: 1,
                            fontSize: '14px',
                            margin: '24px 0 32px',
                        }}
                    >
                        <div className="toggle-container">
                            <ToggleButtonGroup
                                className="si-toggle"
                                value={siChartMode}
                                exclusive
                                onChange={(_, newValue) => handleToggleModeChange("chart", newValue)}
                                aria-label="Chart mode selection"
                            >
                                <ToggleButton value="chart_miv" aria-label="Car icon"><label style={{ display: 'contents'}}><DirectionsCarIcon /></label></ToggleButton>
                                <ToggleButton value="chart_oev" aria-label="Public transport icon"><label style={{ display: 'contents'}}><DirectionsBusIcon/></label></ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        
                        <div className="image-container si-mun-chart-container" style={{ margin: '1rem auto'}}>
                            <img
                                src={`${process.env.PUBLIC_URL}${
                                    siChartMode === 'chart_miv' ? item.imagePathMIV : item.imagePathOEV
                                }`}
                                alt={siChartMode === 'chart_miv' ? item.altMIV : item.altOEV}
                            />
                        </div>
                        
                        <Typography>{item.text}</Typography>

                    </Box>
                ) : item.isSiBlChart ? (
                    <div key={item.id} className="image-container si-bl-chart-container" style={{margin: '24px 0 32px'}}>
                        <img src={`${process.env.PUBLIC_URL}${item.imagePath}`} alt={ item.alt } />
                    </div>
                ): item.isFinLoadChart ? (
                    <div key={item.id}>
                        <div className="image-container si-load-chart-container" style={{margin: '24px 0 0'}}>
                            <img src={`${process.env.PUBLIC_URL}${item.imagePath}`} alt={ item.alt } />
                        </div>
                        <span style={{fontSize: '0.9rem'}}>{item.text}</span>
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

