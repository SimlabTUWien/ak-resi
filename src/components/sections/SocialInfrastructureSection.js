import React, { useState } from "react";
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

import GlossaryTerm from '../GlossaryTerm';
import SocialInfrastructureTable from "../SocialInfrastructureTable";
import SIOverallIndicatorMap from "../SocialInfrastructureMaps/SIOverallIndicatorMap";
import SISubIndicatorMap from "../SocialInfrastructureMaps/SISubIndicatorMap";
import IndicatorSelect from "../IndicatorSelect";

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TrainIcon from '@mui/icons-material/Train';

const SocialInfrastructureSection = () => {

    const [siMode, setSiMode] = useState("so_cars");
    const [siSubMode, setSiSubMode] = useState("so_sub");

    const handleToggleModeChange = (type, newValue) => {
        if (newValue !== null) {
            if (type === "si") {
                setSiMode(newValue);
            } else if (type === "si-sub") {
                setSiSubMode(newValue);
            }
        }
    };

    const [selectedIndicator, setSelectedIndicator] = useState(1);

    const handleIndicatorChange = (newValue) => {
        setSelectedIndicator(newValue);
    };


    return (
        <div>
            <h2 className="section-header">Soziale Infrastruktur in Österreich</h2>
            <p className='paragraph'>
            <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">Soziale Infrastrukturen</GlossaryTerm> wie Kindergärten, Schulen, Gesundheits- und Pflegeeinrichtungen sind essenziell für eine funktionierende Gesellschaft. Sie ermöglichen Bildung, Gesundheit und soziale Teilhabe – unabhängig vom Einkommen. Doch ihr Zugang und ihre Qualität sind nicht überall gleich. Regionale Unterschiede und fehlende Angebote können Haushalte zusätzlich belasten und Ungleichheiten verstärken.
            </p>

            <p className='paragraph'>
                Die Karten zeigen die <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">sozialen Infrastrukturen</GlossaryTerm> in Bezug auf den Bedarf in der Gemeinde. Während Ärzt:innen pro Einwohner:in berechnet werden, beziehen sich Kindergartengruppen auf Kinder im Alter von 3 bis 6 Jahren und Plätze in Pflegeheimen auf Menschen über 70. Neben der Verfügbarkeit von Infrastrukturen spielt auch ihre Zugänglichkeit eine Rolle: Kurze Öffnungszeiten oder hohe Kosten können die Nutzung einschränken. Da viele Menschen auch die Infrastrukturen in Nachbargemeinden nutzen, werden diese – mit geringerem Gewicht – in den Infrastrukturindikator einbezogen. In der Karte kann dieser Effekt ein- und ausgeblendet werden. Die obere Karte zeigt die Gesamtsumme aller Infrastrukturen, während in der unteren Karte die verschiedenen Infrastrukturarten einzeln betrachtet werden können. Genauere Informationen zu den einzelnen Infrastrukturen und der Berechnung der Indikatoren lassen sich unten ausklappen.
            </p>

            {/* SI map overall */}
            <Box
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    fontSize: '14px',
                    marginTop: 3,
                }}
            >
                <div className="toggle-container">
                    <ToggleButtonGroup
                        className="si-toggle"
                        value={siMode}
                        exclusive
                        onChange={(_, newValue) => handleToggleModeChange("si", newValue)}
                        aria-label="mode selection"
                    >
                    <ToggleButton value="so_cars"><DirectionsCarIcon/></ToggleButton>
                    <ToggleButton value="so_miv"><TrainIcon/></ToggleButton>
                    <ToggleButton value="no_so"><label>No Spillover</label></ToggleButton>
                    </ToggleButtonGroup>
                </div>
        
                <div className="si-overall-container">
                    <SIOverallIndicatorMap siMode={siMode} key={siMode} />
                </div>
            </Box>

            {/* SI map sub indicators */}
            <Box
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
                            value={siSubMode}
                            exclusive
                            onChange={(_, newValue) => handleToggleModeChange("si-sub", newValue)}
                            aria-label="mode selection"
                        >
                            <ToggleButton value="so_sub"><label>Spillover</label></ToggleButton>
                            <ToggleButton value="no_so_sub"><label>No Spillover</label></ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                
                <div className="si-subindicator-container">
                    <SISubIndicatorMap siMode={siSubMode} subIndicator={selectedIndicator} key={`${siSubMode}-${selectedIndicator}`} />
                </div>
            </Box>

            <p className='paragraph'>
                Die Verfügbarkeit sozialer Infrastruktur wie Ärzt:innen, Schulen, Kindergärten und sozialen Einrichtungen spielt eine entscheidende Rolle für das Residualeinkommen von Haushalten. In Regionen, in denen diese Angebote gut ausgebaut sind, profitieren Haushalte von niedrigeren privaten Ausgaben für Bildung, Gesundheit und soziale Dienstleistungen. Umgekehrt führt ein mangelhafter Zugang zu diesen Angeboten dazu, dass Menschen gezwungen sind, private Alternativen zu finanzieren – sei es durch längere Anfahrtswege, kostenpflichtige Dienstleistungen oder haushaltsinterne Bereitstellung (wie beispielsweise Kinderbetreuung oder Pflege von Angehörigen).
            </p>

            <p className='paragraph'>
                Dies hat direkte Folgen für das Residualeinkommen: Haushalte in Regionen mit schlechter sozialer Infrastruktur müssen oft höhere Fixkosten tragen, obwohl ihr Einkommen identisch mit dem von Haushalten in besser versorgten Gebieten ist. Besonders betroffen sind Familien mit Kindern, ältere Menschen oder Menschen mit gesundheitlichen Einschränkungen, da sie stärker auf diese Angebote angewiesen sind.
            </p>

            <p className='paragraph'>
            Langfristig verstärkt sich dadurch die soziale Ungleichheit. Haushalte mit ohnehin geringem Einkommen werden durch zusätzliche Ausgaben weiter belastet, während jene mit besserem Zugang zu Infrastruktur größere finanzielle Spielräume haben. Regionen mit schlechter Infrastruktur verlieren zudem an Attraktivität, was zu Abwanderung und einem wirtschaftlichen Abwärtstrend führen könnte.
            </p>

            <h2 className="content-header">Wie werden die einzelnen Infrastrukturindikatoren berechnet?</h2>

            <p className='paragraph'>
                Der Gesamtindikator für <GlossaryTerm className="glossary-term si" sectionId="social-infrastructure">soziale Infrastrukturen</GlossaryTerm> setzt sich aus sechs gleich gewichteten Teilindikatoren zusammen: Kindergärten, Schulen, Krankenhäuser, Allgemeinmediziner:innen, Pflegeeinrichtungen und andere soziale Einrichtungen. Innerhalb der Teilindikatoren wird die Verfügbarkeit mit 50 %, die Zugänglichkeit mit 30 % und die Einflüsse von Nachbargemeinden (Spillover-Effekte) mit 20 % gewichtet, um die unterschiedlichen Aspekte der Infrastruktur umfassend zu berücksichtigen.
            </p>

            {/* SI Table*/}
            <SocialInfrastructureTable/>

            <h2 className="content-header">Verknüpfung zwischen Einkommen, Residualeinkommen und sozialer Infrastruktur:</h2>

            <p className='paragraph'>
                Die nachstehende Grafik vergleicht Haushalte entlang dreier Dimensionen: dem verfügbaren Einkommen (linke Achse), dem Residualeinkommen (rechte Achse) – also dem Einkommen nach Abzug fixer Ausgaben wie Wohnen – sowie der Erreichbarkeit sozialer Infrastruktur. Die roten Linien markieren jeweils den Medianwert jeder Dimension und dienen als Schwelle zwischen „überdurchschnittlich“ und „unterdurchschnittlich“.
            </p>

            <p className='paragraph'>
                Auf den ersten Blick scheinen die Verteilungen ähnlich, doch ein genauerer Blick offenbart signifikante Verschiebungen, sobald man Residualeinkommen und Infrastrukturzugang gemeinsam betrachtet:
            </p>

            <p className='paragraph'>
                Über 100 Haushalte, die beim reinen Einkommen über dem Median liegen, rutschen unter den Median, wenn man das Residualeinkommen berücksichtigt. Das bedeutet: Obwohl diese Haushalte relativ gut verdienen, bleiben ihnen – nach Abzug fixer Ausgaben – unterdurchschnittlich geringe Mittel zur freien Verfügung. Diese finanzielle Enge kann durch mangelnden Zugang zu unterstützender Infrastruktur noch verstärkt werden.
            </p>
            
            <p className='paragraph'>
                Umgekehrt zeigt sich bei rund 130 Haushalten, dass sie trotz unterdurchschnittlichem Einkommen ein überdurchschnittliches Residualeinkommen aufweisen – sie verfügen also über vergleichsweise geringe Fixkosten. Gleichzeitig haben sie guten Zugang zu sozialer Infrastruktur. Diese Kombination kann etwa durch leistbaren Wohnraum und gut erreichbare öffentliche Dienstleistungen ermöglicht werden.
            </p>

            <div className="image-container si-scatter-plot-container">
                <img src={`${process.env.PUBLIC_URL}/images/15_INC_RESI_SOCIAL_INFR_DE.png`} alt="side-by-side scatter plot displaying a relationship between Infrastructure Provision and income related variables" />
            </div>

        </div>
    );
};

export default SocialInfrastructureSection;