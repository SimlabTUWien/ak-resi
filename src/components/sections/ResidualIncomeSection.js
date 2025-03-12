import React, { useState } from "react";
import {Accordion, AccordionSummary, AccordionDetails, Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import GlossaryTerm from '../GlossaryTerm';
import ResiDefinitionChart from "../ResiDefinitionChart";
import MedianExpenditureChart from "../MedianExpenditureChart";
import QuintilExpenditureCharts from "../QuintilExpenditureCharts";
import HouseholdTable from "../HouseholdTable";
import CounterAnimation from "../CounterAnimation";
import MeanMapChart from "../MeanMapChart";
import EducationCharts from "../EducationCharts";
import ExpenditureBundTable from "../ExpenditureBundTable";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const ResidualIncomeSection = () => {

    const [isWrapped, setIsWrapped] = useState(false);

    const [medianExpenditureMode, setMedianExpenditureMode] = useState("all");
    const [quintilExpenditureMode, setQuintilExpenditureMode] = useState("all");
    
    const handleToggleModeChange = (type, newValue) => {
        if (newValue !== null) {
            if (type === "median_exp") {
                setMedianExpenditureMode(newValue);
            } else if (type === "quintil_exp") {
                setQuintilExpenditureMode(newValue);
            }
        }
    };

    return (
        <div>
            <h2 className="section-header">Residualeinkommen in Österreich</h2>
            <p className='paragraph'>
                Während das Haushaltseinkommen ein wichtiger Indikator für wirtschaftliche Verhältnisse ist, stellt sich die Frage, wie viel davon nach den grundlegenden Lebenshaltungskosten im Monat übrigbleibt. Das sogenannte <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> – also das Einkommen nach den Ausgaben für Essen, Wohnen, Bildung, Gesundheit und Mobilität – gibt einen noch genaueren Einblick in die finanzielle Lage der Haushalte. Es zeigt, wie viel finanzieller Spielraum tatsächlich für individuelle Bedürfnisse, Ersparnisse oder Freizeitaktivitäten zur Verfügung steht. Wie man hier sehen kann, lässt sich das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> berechnen, indem man vom Einkommen der Haushalte, <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> abzieht. 
            </p>
        
            <Box 
                className="definition-chart-container"
                sx={{
                    // background: "#f4f4f4",
                    // boxShadow: 1,
                    padding: 0,
                    borderRadius: 1,
                    // fontSize: '14px',
                    marginTop: 2
                }}
            >
                <ResiDefinitionChart />
            </Box>

            <div style={{margin: '24px 0 24px'}}>
                <Accordion sx={{background: "#f4f4f4"}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h4" sx={{ fontSize: '1.125rem'}}>Wo kommen unsere Daten her und wie funktioniert die Berechnung genau?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Zur Berechnung der verfügbaren Einkommen werden die Abgestimmte Lohn- und Einkommensteuerstatistik 2019 und 2020 und die <GlossaryTerm className="glossary-term consumption" sectionId="residualIncome">Konsumerhebung</GlossaryTerm> (2019-2020) verwendet. Die Informationen zu Personen können über eine ID zwischen den beiden Erhebungen verknüpft und Personen eindeutig Haushalten zugeordnet werden. Das an die OECD-Skala angepasste Haushaltseinkommen wird berechnet. Die <GlossaryTerm className="glossary-term consumption" sectionId="residualIncome">Konsumerhebung</GlossaryTerm> liefert detaillierte Informationen über die Ausgaben der Haushalte, wobei die unter <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> zusammengefassten Kategorien identifiziert werden können. Während für alle Personen in Österreich mit steuerrelevantem Einkommen Informationen vorliegen, handelt es sich bei der <GlossaryTerm className="glossary-term consumption" sectionId="residualIncome">Konsumerhebung</GlossaryTerm> um eine repräsentative Stichprobenerhebung, die 6.873 Haushalte umfasst. Das verfügbare Einkommen kann daher nur für diese Haushalte berechnet werden, weshalb die Ergebnisse auf der Ebene von Personengruppen, Regionen und Haushaltstypen ausgewertet werden.</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <h2 className="content-header">Wofür geben Haushalte Geld aus?</h2>
            <p className='paragraph'>
                Betrachtet man alle Haushalte gemeinsam, zeigt sich, dass im Durchschnitt etwa 10% des Einkommens für Wohnen aufgewendet werden. Ein ähnlicher Anteil entfällt auf Ernährung. Doch ein genauerer Blick auf Mieter:innenhaushalte offenbart eine deutliche finanzielle Belastung: Hier steigt der Anteil der Wohnkosten drastisch auf über 23% des Einkommens. Diese Differenz wirkt sich auch stark auf das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> aus – also das Einkommen, das nach Grundausgaben für Wohnen, Ernährung, Bildung, Gesundheit und Mobilität verbleibt. Während der Median des <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommens</GlossaryTerm> über alle Haushalte hinweg bei etwa 70% des Haushaltseinkommens liegt, sinkt dieser Wert für Mieter:innenhaushalte auf nur noch ca. 58 %.Das bedeutet, dass Mieter:innen deutlich weniger finanziellen Spielraum für weitere Ausgaben oder Rücklagen haben.
            </p>

            <Box
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            >
                <div className="toggle-container">
                    <ToggleButtonGroup
                        className="residual-income-toggle median-exp-toggle"
                        value={medianExpenditureMode}
                        exclusive
                        onChange={(_, newValue) => handleToggleModeChange("median_exp", newValue)}
                        aria-label="median expenditure chart mode selection"
                    >
                        <ToggleButton value="all"><label>Allen</label></ToggleButton>
                        <ToggleButton value="renter"><label>Mieter:Innen</label></ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <h3 className="median-exp-chart-title">Ausgabenkategorien</h3> 
        
                <div className="median-exp-chart-container">
                    <MedianExpenditureChart mode={medianExpenditureMode} />
                </div>
            </Box>



            <h2 className="content-header">Residualeinkommen nach Haushaltstyp</h2>
            <p className='paragraph'>
                Wieviel Haushalte einnehmen und ausgeben ist stark von der Haushaltsform abhängig. Mehr erwerbstätige Personen im Haushalt bringen ein höheres Einkommen, während weitere Haushaltsmitglieder tendenziell auch höhere Konsumausgaben bedeuten. Jedoch zeigt sich, dass insbesondere alleinlebende Personen sowie Erwachsene mit einem oder mehreren Kindern deutlich höhere Kosten tragen als andere Haushaltstypen. Gleichzeitig verfügen sie über ein erheblich geringeres Einkommen und ein entsprechend niedrigeres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>. Dies verdeutlicht, dass diese Haushaltsgruppen einem erhöhten finanziellen Belastungsrisiko ausgesetzt sind und potenziell größere Schwierigkeiten haben, ihre Lebenshaltungskosten zu decken. Deutliche Unterschiede ergeben sich auch, wenn man ausschließlich Mietshaushalte betrachtet. Insbesondere bei größeren Haushalten sinkt das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> erheblich, was darauf hinweist, dass die Wohnkosten einen maßgeblichen Einfluss auf die finanzielle Belastung dieser Haushalte haben. Dies zeigt, dass steigende Mietpreise vor allem größere Haushalte überproportional belasten und ihre finanziellen Spielräume erheblich einschränken können.
            </p>
            
            <p className='paragraph'>
                In der Tabelle sieht man die Medianeinkommen, <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendigen Ausgaben</GlossaryTerm> und daraus ergebende verfügbare Einkommen für unterschiedliche Haushaltstypen: 
            </p>

            {/* Houshold income table */}
            <div className="houshold-table-container">
                <HouseholdTable />
            </div>

            <h2 className="content-header">Einkommen und Residualeinkommen</h2>
            <p className='paragraph'>
                Der Scatterplot, der das Haushaltseinkommen und das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> darstellt, zeigt eine starke positive Korrelation: Haushalte mit höherem Einkommen verfügen in der Regel auch über ein höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>. Das ist zu erwarten, da höhere Einkommen mehr Spielraum nach Abzug fixer Ausgaben lassen.
            </p>

            <p className='paragraph'>
                Trotz dieser Korrelation ist es wichtig, das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> separat zu betrachten. Während das Haushaltseinkommen allein oft als Maßstab für Wohlstand verwendet wird, zeigt das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> realistischeren finanziellen Spielraum. Zwei Haushalte mit gleichem Einkommen können stark unterschiedliche Lebensrealitäten haben – je nach Wohnkosten, Gesundheitsausgaben oder Mobilitätsbedarf.
            </p>

            <p className='paragraph'>
                Besonders auffällig sind die Abweichungen von der Korrelation in niedrigen und mittleren Einkommensgruppen. Manche Haushalte haben trotz mittlerem Einkommen ein sehr geringes oder sogar negatives <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>, wenn ihre Fixkosten ihre Einnahmen übersteigen. Das bedeutet, dass sie Schulden machen oder auf Ersparnisse zurückgreifen müssen, um ihren Lebensunterhalt zu bestreiten. Umgekehrt gibt es Haushalte mit relativ niedrigem Einkommen, die aufgrund niedriger Fixkosten dennoch über ein stabiles <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> verfügen.
            </p>

            <p className='paragraph'>
                Das bedeutet, dass wirtschaftliche Analysen und sozialpolitische Maßnahmen nicht nur auf das Haushaltseinkommen fokussiert sein sollten. Erst durch die Berücksichtigung des <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommens</GlossaryTerm> lassen sich tatsächliche finanzielle Ungleichheiten und die Notwendigkeit gezielter Unterstützung erkennen.
            </p>
            
            <div className="image-container scatter-plot-container">
                <img src={`${process.env.PUBLIC_URL}/images/3_SCATTER_PLOT_RESI_INCOME.png`} alt="scatter plot visualizing houshold and resiudal income" />
            </div>

            <h2 className="content-header">Ausgaben nach Einkommensquintilen</h2>
            <Box
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    marginTop: 3,
                    marginBottom: 3,
                }}
            >
                <div className="toggle-container">
                    <ToggleButtonGroup
                        className="residual-income-toggle quintil-exp-toggle"
                        value={quintilExpenditureMode}
                        exclusive
                        onChange={(_, newValue) => handleToggleModeChange("quintil_exp", newValue)}
                        aria-label="quintil expenditure chart mode selection"
                    >
                        <ToggleButton value="all"><label>Allen</label></ToggleButton>
                        <ToggleButton value="renter"><label>Mieter:Innen</label></ToggleButton>
                    </ToggleButtonGroup>
                </div>
        
                <div className="quintil-exp-charts-container">
                    <QuintilExpenditureCharts 
                        mode={quintilExpenditureMode} 
                        isWrapped={isWrapped}
                        setIsWrapped={setIsWrapped}
                    />
                </div>
            </Box>
            
            <p className='paragraph'>
                Die Grafik zeigt, dass die Arten und die Gesamthöhe der Ausgaben bei Haushalten unterschiedlicher Einkommensgruppen auf den ersten Blick recht ähnlich erscheinen ({isWrapped ? "oberes Diagramm" : "linke Seite"}). Deutliche Unterschiede zeigen sich jedoch im Verhältnis der Ausgaben zum Einkommen ({isWrapped ? "unteres Diagramm" : "rechte Seite"}).
            </p>

            <p className='paragraph'>
                Die ärmsten 20 % der Haushalte geben nahezu ihr gesamtes Einkommen für <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> wie Wohnen, Energie oder Lebensmittel aus. Dadurch bleibt ihnen kaum <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> übrig, was bedeutet, dass sie kaum Spielraum für Notfälle – wie den Ausfall einer Waschmaschine – oder andere unvorhergesehene Ausgaben haben. Im Gegensatz dazu verwenden die reichsten 20 % der Haushalte nur etwa 30 % ihres Einkommens für <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm>. Das resultiert in einem sehr hohen <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>, das für Freizeit, Ersparnisse oder zusätzliche Investitionen genutzt werden kann. Bei Haushalten im mittleren Einkommensbereich verbleiben nach den notwendigen Ausgaben 40 bis 60 % ihres Einkommens, wodurch sie zwar mehr Spielraum als die ärmsten Haushalte, aber weniger finanzielle Freiheit als die reichsten haben.
            </p>

            <h2>Einkommensungleichheit nach Gesamteinkommen und verfügbaren Einkommen</h2>
            <p className='paragraph'>
                Ein zentrales Maß zur Erfassung der <GlossaryTerm className="glossary-term incomeInequality" sectionId="residualIncome">Einkommensungleichheit</GlossaryTerm> ist der <GlossaryTerm className="glossary-term gini" sectionId="residualIncome">Gini-Koeffizient</GlossaryTerm>. Dieser Wert liegt zwischen 0 und 1, wobei 0 für eine völlig gleichmäßige Verteilung (alle Haushalte haben das gleiche Einkommen) und 1 für maximale Ungleichheit (eine Person erhält das gesamte Einkommen) steht.
            </p>

            <p className='paragraph'>
                Unsere Analyse zeigt, dass der <GlossaryTerm className="glossary-term gini" sectionId="residualIncome">Gini-Koeffizient</GlossaryTerm> für das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> deutlich höher ist als für das Haushaltseinkommen. Das liegt daran, dass fixe Grundkosten wie Miete, Lebensmittel oder Gesundheitsausgaben einen viel größeren Anteil des Einkommens in unteren Einkommensgruppen ausmachen. Dadurch bleibt in diesen Gruppen deutlich weniger finanzielle Flexibilität, während höhere Einkommensgruppen nach den Grundausgaben überproportional mehr Mittel zur Verfügung haben. Dies verstärkt die wirtschaftliche Ungleichheit und macht deutlich, dass das Haushaltseinkommen allein nicht ausreicht, um die (Un-)Gleichverteilung von Ressourcen abzubilden.
            </p>

            {/* GINI counter animation*/}
            <h3 className="gini-header">Gini-Koeffizienten</h3>
            <div className="gini-container">
                <div>
                    <CounterAnimation targetValue={0.27} />
                    <h3 className="gini-subheader">Haushaltseinkommen</h3>
                </div>
                    <div>
                    <CounterAnimation targetValue={0.38} />
                    <h3 className="gini-subheader">Residualeinkommen</h3>
                </div>
            </div>

            <div style={{margin: '24px 0 24px'}}>
                <Accordion sx={{background: "#f4f4f4"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h4" sx={{ fontSize: '1.125rem'}}>Wie wird der Gini berechnet?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Der Gini-Koeffizient wird aus der Lorenz-Kurve abgeleitet. Diese Kurve zeigt, wie das Einkommen in einer Gesellschaft verteilt ist. Auf der x-Achse steht der Anteil der Haushalte (von den ärmsten bis zu den reichsten), auf der y-Achse der Anteil am gesamten Einkommen.
                    </Typography>
                    <ul className="custom-list infobox-list">
                        <li>Schritt 1: Wir ordnen alle Haushalte nach Einkommen, von niedrig nach hoch.</li>
                        <li>Schritt 2: Dann berechnen wir, wie viel Prozent des gesamten Einkommens auf die ärmsten 10 %, 20 %, 30 % usw. entfallen.</li>
                        <li>Schritt 3: Wir zeichnen die Lorenz-Kurve: Eine Linie, die zeigt, wie viel Einkommen die unteren Einkommensgruppen zusammen haben.</li>
                        <li>Schritt 4: Der Gini-Koeffizient ergibt sich aus der Fläche zwischen der Lorenz-Kurve und der Gleichverteilungslinie (die eine vollkommen gerechte Verteilung darstellen würde). Je größer diese Fläche, desto ungleicher ist die Verteilung.
                            Ein Gini-Koeffizient von 0 bedeutet, dass alle Haushalte exakt das gleiche Einkommen haben. Ein Wert nahe 1 bedeutet, dass fast das gesamte Einkommen von wenigen Haushalten verdient wird.
                        </li>
                    </ul>
                    
                    <div className="image-container lorenz-curve--container">
                        <img className="lorenz-curve" src={`${process.env.PUBLIC_URL}/images/Lorenz_Kurven_Gini_AT.png`} alt="Lorenz curve of Gini Index in AT" />
                    </div>

                </AccordionDetails>
                </Accordion>
            </div>

            <h2 className="content-header">Bildung und ihr Einfluss auf das Residualeinkommen von Haushalten</h2>
            <p className='paragraph'>
                Da die Einkommen stark vom Bildungsniveau, dem Beschäftigungsgrad und der Art der Erwerbstätigkeit abhängen, die <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> aber von allen getätigt werden müssen, spiegeln sich diese wirtschaftlichen Unterschiede noch stärker im verfügbaren Einkommen wider. In der Grafik kann zwischen den Kategorien gewechselt werden: 
            </p>

            {/*Education Barcharts*/}
            <EducationCharts />

            <p className='paragraph'>
                Höhere Bildungsabschlüsse und Vollzeiterwerbstätigkeit geben den Haushalten deutlich mehr finanziellen Spielraum. Die Bedeutung von Bildung geht weit über den Abschluss einer Schule oder Universität hinaus – sie beeinflusst direkt die finanzielle Sicherheit eines Haushalts und die Höhe des <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommens</GlossaryTerm>.
            </p>

            <p className='paragraph'>
                Für Haushalte, in denen alle Mitglieder im erwerbsfähigen Alter sind und auf dem Arbeitsmarkt aktiv, aber lediglich über den höchsten Bildungsabschluss der Pflichtschule verfügen, liegt das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> bei nur etwa 1190 Euro im <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm>. Dieser Betrag reicht oft nur für das tägliche Leben und lässt wenig Raum für größere finanzielle Spielräume. Die Ursache liegt darin, dass geringere Bildungsabschlüsse in der Regel mit niedrigeren Löhnen und weniger flexiblen Arbeitsmöglichkeiten verbunden sind, was die Einkommenspotenziale stark begrenzt.
            </p>

            <p className='paragraph'>
                Im Gegensatz dazu zeigt sich bei Haushalten, deren höchste Bildungsabschlüsse eine tertiäre oder postsekundäre Ausbildung umfassen, ein deutlich anderes Bild. In diesen Haushalten liegt das Medianeinkommen bei rund 2640 Euro, was fast doppelt so hoch ist. Der Grund dafür ist oftmals, dass höhere Bildungsabschlüsse Zugang zu besser bezahlten und stabileren Arbeitsplätzen eröffnen. Menschen mit höherer Bildung können in anspruchsvolleren, qualifizierteren Berufen arbeiten, die nicht nur ein höheres Gehalt bieten, sondern auch bessere Aufstiegschancen und eine größere berufliche Sicherheit.
            </p>

            <p className='paragraph'>
                Die Auswirkungen sind nicht nur individuell spürbar – sie betreffen auch die gesamte Familie. Höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> bedeutet mehr finanzielle Freiheit, die nicht nur für den Lebensunterhalt genutzt werden kann, sondern auch für Investitionen in die Zukunft, sei es durch Ersparnisse, die Unterstützung der Ausbildung der Kinder oder die Planung einer stabilen Altersvorsorge.
            </p>

            <p className='paragraph'>
                Jedoch zeigt die Analyse auch eine dramatische Verschiebung, wenn in einem Haushalt zumindest ein Mitglied pensioniert ist. Diese Haushalte haben häufig ein signifikant niedrigeres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>, da Renten oft nicht ausreichen, um den Lebensstandard zu halten, besonders wenn sie nicht durch private Ersparnisse oder Zusatzgewinne ergänzt werden. Hier wird der Unterschied zwischen Haushalten mit höherer Bildung und denen ohne noch klarer. Oft müssen Pensionisten auf staatliche Unterstützung angewiesen sein, während Haushalte mit einem stabilen Einkommensniveau und einer höheren Bildung in der Lage sind, langfristige finanzielle Sicherheit zu gewährleisten.
            </p>
            
            <p className='paragraph'>
                Ähnliches zeigt sich, wenn man das Ausmaß der Beschäftigung betrachtet. In Haushalten, in denen der höchste Bildungsabschluss lediglich die Pflichtschule ist, und in denen alle Haushaltsmitglieder, die dem Arbeitsmarkt zur Verfügung stehen, Vollzeit arbeiten, liegt das <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm><span style={{fontStyle: 'italic'}}>-</span><GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> bei etwa 1100 Euro. Trotz Vollzeitarbeit bleibt das Einkommen in diesen Haushalten relativ niedrig. Ganz anders sieht es in Haushalten aus, in denen zumindest ein Familienmitglied eine postsekundäre oder tertiäre Ausbildung abgeschlossen hat. Auch hier arbeiten alle Mitglieder im erwerbsfähigen Alter Vollzeit, doch das <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm><span style={{fontStyle: 'italic'}}>-</span><GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> liegt mit 2800 Euro fast dreimal so hoch wie in den Haushalten mit Pflichtschulabschluss. Der Unterschied ist auffällig und verdeutlicht, wie stark Bildung den Zugang zu besser bezahlten und stabileren Arbeitsplätzen beeinflusst.
            </p>
            
            <p className='paragraph'>
            Selbst bei Teilzeitbeschäftigung zeigt sich ein ähnlicher Trend. In Haushalten mit tertiärer oder postsekundärer Ausbildung haben die Familien im <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm> etwa 400 Euro mehr <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> als Haushalte, deren höchster Bildungsabschluss die Pflichtschule ist. Obwohl Teilzeitarbeit in vielen Fällen geringere Arbeitszeiten und damit auch geringere Einnahmen bedeutet, bleibt der Unterschied zwischen den Haushalten mit unterschiedlichen Bildungsabschlüssen bestehen. Auch hier wird die Bedeutung der Ausbildung deutlich: Höhere Bildungsabschlüsse ermöglichen Zugang zu besser bezahlten Teilzeitstellen, die sich positiv auf das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> auswirken.
            </p>
            
            <h2 className="content-header">Regionale Unterschiede</h2>

            <p className='paragraph'>
                Die Tabelle veranschaulicht die Unterschiede in den Kosten für <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> sowie im Haushalts- und <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> auf Bundeslandebene. Dabei zeigt sich, dass Haushalte in Wien die mit Abstand höchsten Ausgaben haben, was hauptsächlich auf die hohen Wohnkosten zurückzuführen ist. Im Vergleich zu anderen Bundesländern ist der Anteil an Personen, die in Wohneigentum leben, in Wien deutlich geringer. Zudem weisen Wiener Haushalte gemeinsam mit Kärnten das niedrigste Haushalts- und <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> auf. Das höchste <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> hingegen findet sich in Oberösterreich und Niederösterreich.
            </p>

            <p className='paragraph'>
                Betrachtet man ausschließlich Mietshaushalte, ergibt sich ein anderes Bild: Haushalte in Wien zahlen im Durchschnitt nicht die höchsten Wohnkosten. Stattdessen liegen die Mietausgaben in Vorarlberg am höchsten, gefolgt von Salzburg. Dies spiegelt sich auch im <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> wider, denn Mieter:innen in Wien verfügen über ein höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> als jene in Vorarlberg und Salzburg. Die niedrigsten Mietkosten tragen hingegen Haushalte im Burgenland und in Kärnten.
            </p>

            {/* Exp_Bund Table */}
            <ExpenditureBundTable />


            {/* MeanMap */}
            <Box 
                className="mean-map-container"
                sx={{
                    background: "#f4f4f4",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 1,
                    fontSize: '14px',
                    marginTop: 3,
                    marginBottom: 3,
                }}
            >
                <MeanMapChart />
            </Box>

            <p className='paragraph'>
                Erhebliche Unterschiede zeigen sich, wenn man das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> nach Bundesland und <GlossaryTerm className="glossary-term communitySizeClass" sectionId="residualIncome">Gemeindegrößenklasse</GlossaryTerm> betrachtet. Diese regionalen Unterschiede im <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> sind erheblich und verdeutlichen, wie stark die Einkommensmöglichkeiten und Lebensbedingungen in verschiedenen Teilen des Landes variieren. Besonders bemerkenswert ist, dass diese Unterschiede nicht nur auf der Höhe des Einkommens beruhen, sondern auch durch lokale Gegebenheiten wie Lebenshaltungskosten und Immobilienpreise beeinflusst werden.
            </p>

            <p className='paragraph'>
                In Wien, der größten Stadt des Landes, liegt das <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm><span style={{fontStyle: 'italic'}}>-</span><GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> mit rund 1545 Euro am niedrigsten. Dies mag auf den ersten Blick überraschen, da man in einer Großstadt höhere Einkommensmöglichkeiten vermuten würde. Allerdings spielen die hohen Lebenshaltungskosten in der Hauptstadt, insbesondere die Immobilienpreise und Mieten im privaten Mietmarkt, eine entscheidende Rolle.
            </p>

            <p className='paragraph'>
                Im Vergleich dazu zeigen die Bundesländer Niederösterreich, Oberösterreich und Vorarlberg ein deutlich höheres <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm><span style={{fontStyle: 'italic'}}>-</span><GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>. Besonders auffällig ist, dass in den kleineren Gemeinden das höchste <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> erzielt wird. Hier spielt der Eigentumserwerb beim Wohnen eine entscheidende Rolle: In ländlicheren Gebieten ist die Eigentumsrate deutlich höher als in städtischen Zentren. Dies ermöglicht es den Haushalten, gegeben, dass sie keine Kreditrückzahlungen bedienen müssen, mehr von ihrem Einkommen zu sparen und somit ein höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> zu erzielen.
            </p>

            <p className='paragraph'>
                Trotz dieser generellen Tendenzen gibt es auch innerhalb der Bundesländer Unterschiede. In Oberösterreich sind es vor allem kleinere Gemeinden, die ein höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> aufweisen, während im Burgenland vor allem Haushalte in Eisenstadt das höchste <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> erzielen.
            </p>

            <p className='paragraph'>
                Betrachtet man ausschließlich Mietshaushalte, wird der erhebliche finanzielle Druck durch die Mietkosten besonders deutlich. Besonders ausgeprägte Unterschiede zeigen sich in kleineren Gemeinden in Niederösterreich, Vorarlberg und Kärnten. Diese regionalen Unterschiede implizieren, dass das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> nicht nur von den Einkommen selbst abhängt, sondern auch stark durch die Lebenshaltungskosten in der jeweiligen Region beeinflusst wird.
            </p>

            <p className='paragraph'>
                Allerdings reicht der Blick auf das  <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> allein nicht aus, um die Lebensqualität und die tatsächliche Wohlstandssituation von Haushalten zu beurteilen. Häufig ist es so, dass in Regionen mit höherem  <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> die Infrastruktur und öffentlichen Dienstleistungen nicht in gleichem Maße ausgebaut sind wie in städtischen Gebieten. Umfassende Infrastruktur und die Verfügbarkeit öffentlicher Dienstleistungen sind ebenfalls entscheidende Faktoren für den Lebensstandard. In Regionen mit günstigen Lebenshaltungskosten, aber schlechterer Infrastruktur, könnte das höhere  <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> zwar finanziellen Spielraum bieten, jedoch nicht die gleichen Lebensbedingungen und Möglichkeiten wie in gut erschlossenen urbanen Regionen.
            </p>

            <p className='paragraph'>
                Für gewisse Bevölkerungsgruppen ist <GlossaryTerm className="glossary-term si" sectionId="residualIncome">soziale Infrastruktur</GlossaryTerm> besonders wichtig. Vor allem für Haushalte mit geringem Einkommen oder großer finanzieller Belastung durch Lebenserhaltungskosten ist diese von großer Bedeutung. Diese Gruppen können sich häufig keine teuren privaten Lösungen leisten, weshalb sie öffentliche Angebote wie Gesundheitsversorgung, Kinderbetreuung und andere <GlossaryTerm className="glossary-term si" sectionId="residualIncome">soziale Infrastrukturen</GlossaryTerm> deutlich finanziell entlasten können.
            </p>

            {/* Infobox with CommunitySizeClass map */}
            <div style={{margin: '24px 0 0'}}>
                <Accordion sx={{background: "#f4f4f4"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h4" sx={{ fontSize: '1.125rem'}}>Wo wohnt Österreich: Gemeindegrößeklassenerklärung</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        In vielen regionalen Statistiken werden die österreichischen Gemeinden in <GlossaryTerm className="glossary-term communitySizeClass" sectionId="residualIncome">Gemeindegrößeklassen</GlossaryTerm> eingeteilt. Sechs österreichische Landeshauptstädte haben über 100.000 Einwohner:innen (Wien, Graz, Linz, Salzburg, Klagenfurt und Innsbruck). Insgesamt leben etwas mehr als 20% aller Bewohner:innen Österreichs in diesen Städten, ähnlich viele wie in den 1.366 Gemeinden mit weniger als 2.500 Einwohner:innen. Mehr als 30% der Österreicher:innen leben in den 641 Gemeinden mit 2.500-10.000 Einwohner:innen und 27% in Klein- und Mittelstädten.
                    </Typography>

                    <img className="community-size-map" src={`${process.env.PUBLIC_URL}/images/Abb_KarteGemeindegroeßen_DE.png`} alt="Gemeindegrößeklassen" />
                </AccordionDetails>
                </Accordion>
            </div>        


        </div>
    );
};

export default ResidualIncomeSection;