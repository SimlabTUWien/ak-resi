import { useState } from "react";
import { useLanguage } from '../../context/LanguageContext';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
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
                text: ( 
                <> 
                    Die Karten zeigen die <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialen Infrastrukturen</GlossaryTerm> in Bezug auf den Bedarf in der Gemeinde. 
                    Während Ärzt:innen pro Einwohner:in berechnet werden, beziehen sich Kindergartengruppen auf Kinder im Alter von 3 bis 6 Jahren und Plätze in Pflegeheimen auf Menschen über 70. 
                    Neben der Verfügbarkeit von Infrastrukturen spielt auch ihre Zugänglichkeit eine Rolle: Kurze Öffnungszeiten oder hohe Kosten können die Nutzung einschränken. 
                    Da viele Menschen auch die Infrastrukturen in Nachbargemeinden nutzen, werden diese – mit geringerem Gewicht – in den Infrastrukturindikator einbezogen. 
                    In der Karte kann dieser Effekt ein- und ausgeblendet werden. Die obere Karte zeigt die Gesamtsumme aller Infrastrukturen, 
                    während in der unteren Karte die verschiedenen Infrastrukturarten einzeln betrachtet werden können. 
                    Genauere Informationen zu den einzelnen Infrastrukturen und der Berechnung der Indikatoren lassen sich unten ausklappen.
                </>
                ),
            },
            {
                id: 3,
                isChart: true,
                itemName: 'si-map'
            },
            {
                id: 4,
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
                id: 5,
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
                id: 6,
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
                id: 7,
                text: <> Wie werden die einzelnen Infrastrukturindikatoren berechnet? </>,
                isContentHeader: true,
            },
            {
                id: 8,
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
                id: 9,
                isTable: true,
                itemName: 'si-table'
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
                    Über 100 Haushalte, die beim reinen Einkommen über dem Median liegen, rutschen unter den <GlossaryTerm className="glossary-term median" sectionId="social-infrastructure">Median</GlossaryTerm>, 
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
        ],
        alt: []
    },
    EN: {
        header: 'Social Infrastructure',
        content: [
        ],
        alt: []
    }
};

const SocialInfrastructureSection = () => {

    const { language } = useLanguage();
    const section = translations[language] || translations.DE;

    const [spilloverMode, setSpilloverMode] = useState("no_so");

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
                                    <ToggleButton value="no_so"><label>Kein<br/>Spillover</label></ToggleButton>
                                    <ToggleButton value="so_miv"><label>Spillover<br/>(MIV)</label></ToggleButton>
                                    <ToggleButton value="so_oev"><label>Spillover<br/>(ÖV)</label></ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </div>
                        
                        <div className="si-spillover-container">
                            <SiIndicatorMap siMode={spilloverMode} subIndicator={selectedIndicator} key={`${spilloverMode}-${selectedIndicator}`} />
                        </div>
                    </Box>
                ) : item.isTable ? (
                    <div key={item.id} className="si-table-container">
                        <SocialInfrastructureTable/>
                    </div>
                ) : item.isImage ? (
                    <div key={item.id} className="image-container si-scatter-plot-container">
                        <img src={`${process.env.PUBLIC_URL}/${item.imagePath}`} alt={ item.alt } />
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