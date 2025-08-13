import { useState } from "react";
import { useLanguage } from '../../context/LanguageContext';
import {Accordion, AccordionSummary, AccordionDetails, Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

import GlossaryTerm from '../GlossaryTerm';
import ResiDefinitionChart from "../ResiDefinitionChart";
import MedianExpenditureChart from "../MedianExpenditureChart";
import QuintilExpenditureCharts from "../QuintilExpenditureCharts";
import CounterAnimation from "../CounterAnimation";
import MedianMapChart from "../MedianMapChart";
import EducationCharts from "../EducationCharts";
import HouseholdTable from "../tables/HouseholdTable";
import ExpenditureBundTable from "../tables/ExpenditureBundTable";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const translations = {
    DE: {
        header: 'Residualeinkommen',
        content: [
            {
                id: 1,
                text: ( 
                <> 
                    Während das Haushaltseinkommen ein wichtiger Indikator für wirtschaftliche Verhältnisse ist, stellt sich die Frage, wie viel davon nach den grundlegenden Lebenshaltungskosten im Monat übrigbleibt. 
                    Das sogenannte <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> – 
                    also das Einkommen nach den Ausgaben für Essen, Wohnen, Bildung, Gesundheit und Mobilität – gibt einen noch genaueren Einblick in die finanzielle Lage der Haushalte. 
                    Es zeigt, wie viel finanzieller Spielraum tatsächlich für individuelle Bedürfnisse, Ersparnisse oder Freizeitaktivitäten zur Verfügung steht. 
                    Wie man hier sehen kann, lässt sich das Residualeinkommen berechnen, indem man vom Einkommen der Haushalte, <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> abzieht. 
                </>
                ),
            },
            {
                id: 2,
                isChart: true,
                itemName: 'definition',
                alt: "Berechnung von Residualeinkommen durch Einkommen abzüglich notwendigen Ausgaben"
            },
            {
                id: 3,
                accordionHeader: "Wo kommen unsere Daten her und wie funktioniert die Berechnung genau?",
                accordionText: ( 
                <>  
                    Zur Berechnung der <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> werden die Abgestimmte Lohn- und Einkommensteuerstatistik (AEST) 
                    2019 und 2020 und die <GlossaryTerm className="glossary-term consumption" sectionId="residualIncome">Konsumerhebung</GlossaryTerm> (2019-2020) der Statistik Austria verwendet. 
                    Über eine pseudonymisierte ID können beide Erhebungen verknüpft und Personen eindeutig Haushalten zugeordnet werden. 
                    Während für alle Personen in Österreich mit steuerrelevantem Einkommen Informationen in der AEST vorliegen, 
                    handelt es sich bei der Konsumerhebung um eine repräsentative Stichprobenerhebung, die die detaillierten Ausgaben von 6.873 Haushalte erfasst und kategorisiert. 
                    Das Residualeinkommen kann daher nur für diese Haushalte berechnet werden, weshalb die Ergebnisse auf der Ebene von Personengruppen, Regionen und Haushaltstypen ausgewertet werden.
                    <br/>
                    <br/>
                    <span className="hint">Hinweis: Kreditrückzahlungen für Wohneigentum können in der Analyse nicht berücksichtigt werden, da sie in der Konsumerhebung 2019/2020 nicht erfasst sind.</span>
                </>
                ),
                isAccordion: true,
                itemName: 'data-accordion'
            },
            {
                id: 4,
                accordionHeader: "Was sind notwendige Ausgaben?",
                accordionText: ( 
                <>  
                    Im Rahmen des Projekts werden <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> als jene Aufwendungen definiert, die zur Sicherung grundlegender Lebensbedingungen erforderlich sind. 
                    Dazu zählen Nahrung, Wohnen, Energie, Bildung und Gesundheit. Diese Bereiche wurden gewählt, weil sie zentrale Voraussetzungen für ein gutes Leben darstellen:
                </>
                ),
                list: [
                    { title: 'Nahrung', text: 'gewährleistet die tägliche Versorgung und das körperliche Wohlbefinden.' },
                    { title: 'Wohnen', text: 'bietet Schutz, Stabilität und sozialen Rückzugsraum.' },
                    { title: 'Energie', text: 'ist notwendig für Heizung, Stromversorgung und die Nutzung moderner Infrastruktur.' },
                    { title: 'Bildung', text: 'schafft Zugang zu Wissen, Qualifikationen und gesellschaftlicher Teilhabe.' },
                    { title: 'Gesundheit', text: 'umfasst präventive wie akute medizinische Versorgung und ist Grundlage für ein selbstbestimmtes Leben.' },
                ],
                isAccordion: true,
                itemName: 'expenses-accordion'
            },
            {
                id: 5,
                text: <> Wofür geben Haushalte Geld aus? </>,
                isContentHeader: true,
            },
            {
                id: 6,
                text: (
                <>  
                    Betrachtet man alle Haushalte gemeinsam, zeigt sich, dass im Durchschnitt etwa 10% des Einkommens für Wohnen aufgewendet werden. 
                    Ein ähnlicher Anteil entfällt auf Ernährung. Doch ein genauerer Blick auf Mieter:innenhaushalte offenbart eine deutliche finanzielle Belastung: 
                    Hier steigt der Anteil der Wohnkosten drastisch auf über 23% des Einkommens. 
                    Diese Differenz wirkt sich auch stark auf das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> aus – 
                    also das Einkommen, das nach <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendigen Ausgaben</GlossaryTerm> für Wohnen, Ernährung, Bildung, Gesundheit und Mobilität verbleibt.
                    Dabei spielt die Versorgung mit <GlossaryTerm className="glossary-term si" sectionId="residualIncome">sozialer Infrastruktur<span style={{fontVariationSettings: '"slnt" 0, "wdth" 100, "wght" 300', color: "#000", textDecoration: "none"}}>,</span></GlossaryTerm> die im Abschnitt XX näher beleuchtet wird, eine wichtige Rolle.
                    Während das Residualeinkommen über alle Haushalte hinweg bei etwa 70% des Haushaltseinkommens liegt, 
                    sinkt dieser Wert für Mieter:innenhaushalte auf nur noch ca. 58%. 
                    Das bedeutet, dass Mieter:innen deutlich weniger finanziellen Spielraum für weitere Ausgaben oder Rücklagen haben. 
                </>
                ),
            },
            {
                id: 7,
                accordionHeader: "Warum betrachten wir sowohl alle Haushalte als auch speziell Mieter:innen?",
                accordionText: ( 
                <>  
                    Die Wohnkosten unterscheiden sich je nach Wohnform erheblich. Während Eigentümer:innen oft geringere monatliche Belastungen haben – etwa durch abbezahlte Immobilien – 
                    tragen Mieter:innen meist deutlich höhere laufende Wohnkosten. Um die soziale und wirtschaftliche Bedeutung der Wohnkosten realistisch abzubilden, 
                    ist es daher wichtig, nicht nur den Durchschnitt aller Haushalte zu betrachten, sondern auch gezielt auf Mieter:innen zu schauen.
                </>
                ),
                isAccordion: true,
                itemName: 'distinction-accordion'
            },
            {
                id: 8,
                isEChart: true,
                itemName: "median-expenditure-chart",
                chartTitle: "Ausgabenkategorien",
                labelAll: "Alle",
                labelRent: "Mieter:innen",
                ariaLabel: "Kreisdiagramm mit Ausgabenkategorien",
                source: "Datenquelle: Konsumerhebung 2019/2020, Statistik Austria"
            },
            {
                id: 9,
                text: <> Residualeinkommen nach Haushaltstyp </>,
                isContentHeader: true,
            },
            {
                id: 10,
                text: (
                <>  
                    Wie viel Haushalte einnehmen und ausgeben ist stark von der Haushaltsform abhängig. 
                    Mehr erwerbstätige Personen im Haushalt bringen erwartungsgemäß ein höheres Einkommen, während weitere Haushaltsmitglieder tendenziell 
                    auch höhere <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> bedeuten. 
                    So zeigt sich, dass insbesondere alleinlebende Personen sowie Erwachsene mit einem oder mehreren Kindern deutlich höhere Kosten tragen als andere Haushaltstypen. 
                    Gleichzeitig verfügen sie über ein erheblich geringeres Einkommen und ein entsprechend niedrigeres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>. 
                    Dies verdeutlicht, dass diese Haushaltsgruppen einem erhöhten finanziellen Belastungsrisiko ausgesetzt sind und potenziell größere Schwierigkeiten haben, ihre Lebenshaltungskosten zu decken. 
                    Deutliche Unterschiede ergeben sich auch, wenn man ausschließlich Mieter:innenhaushalte betrachtet. 
                    Insbesondere bei größeren Haushalten mit mehr Platzbedarf sinkt das Residualeinkommen erheblich, was darauf hinweist, 
                    dass die Wohnkosten einen maßgeblichen Einfluss auf die finanzielle Belastung dieser Haushalte haben. 
                    Dies zeigt, dass steigende Mietpreise größere Haushalte überproportional belasten und ihre finanzielle Spielräume erheblich einschränken können.
                </>
                ),
            },
            {
                id: 11,
                text: (
                <>
                    In der Tabelle sieht man die Einkommen, <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendigen Ausgaben</GlossaryTerm> und 
                    das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> für unterschiedliche Haushaltstypen:
                </>
                ),
            },
            {
                id: 12,
                isTable: true,
                itemName: 'household-table',
                ariaLabel: "Tabelle zur Veranschaulichung von Medianeinkommen und notwendigen Ausgaben für Haushaltstypen",
                source: "Datenquelle: Konsumerhebung 2019/2020, Statistik Austria"
            },
            {
                id: 13,
                text: 
                <span className="hint"> 
                    Hinweis: Beim Vergleich von Medianeinkommen, Medianausgaben und medianem <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> (wie in der Tabelle berechnet) ist zu beachten, 
                    dass Medianeinkommen – Medianausgaben ≠ Medianresidualeinkommen. Das liegt daran, dass es sich jeweils um getrennt berechnete <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Medianwerte</GlossaryTerm> über 
                    alle Haushalte einer Gruppe handelt. Das Residualeinkommen eines Haushalts ergibt sich zwar rechnerisch aus Einkommen minus Ausgaben, 
                    aber der Median des Residualeinkommens ist nicht identisch mit der Differenz der beiden anderen Mediane, weil es sich um unterschiedliche Verteilungen handelt.
                </span>,
            },
            {
                id: 14,
                text: <> Einkommen und Residualeinkommen: </>,
                isContentHeader: true,
            },
            {
                id: 15,
                text: (
                <>  
                    Der Scatterplot, der das Haushaltseinkommen und das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> darstellt, zeigt eine starke positive Korrelation: 
                    Haushalte mit höherem Einkommen verfügen in der Regel auch über ein höheres Residualeinkommen. 
                    Das ist zu erwarten, da höhere Einkommen mehr Spielraum nach Abzug <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendiger Ausgaben</GlossaryTerm> lassen. 
                </>
                ),
            },
            {
                id: 16,
                text: (
                <>  
                    Trotz dieser Korrelation ist es wichtig, das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> separat zu betrachten. 
                    Während das Haushaltseinkommen allein oft als Maßstab für Wohlstand verwendet wird, zeigt das Residualeinkommen den tatsächlichen finanziellen Spielraum eines Haushalts. Zwei Haushalte mit gleichem Einkommen können stark unterschiedliche Lebensrealitäten haben – je nach Wohnkosten, Gesundheitsausgaben oder Mobilitätsbedarf.
                </>
                ),
            },
            {
                id: 17,
                text: (
                <>  
                    Besonders auffällig sind die Abweichungen von der Korrelation in niedrigen und mittleren Einkommensgruppen. 
                    Manche Haushalte haben trotz mittlerem Einkommen ein sehr geringes oder sogar negatives <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>, 
                    wenn ihre Fixkosten ihre Einnahmen übersteigen. 
                    Das bedeutet, dass sie Schulden machen oder auf Ersparnisse zurückgreifen müssen, um ihren Lebensunterhalt zu bestreiten. 
                    Umgekehrt gibt es Haushalte mit relativ niedrigem Einkommen, die aufgrund niedriger Fixkosten dennoch über ein stabiles Residualeinkommen verfügen.
                </>
                ),
            },
            {
                id: 18,
                text: (
                <>  
                    Das bedeutet, dass wirtschaftliche Analysen und sozialpolitische Maßnahmen nicht nur auf das Haushaltseinkommen fokussiert sein sollten. 
                    Erst durch die Berücksichtigung des <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommens</GlossaryTerm> lassen 
                    sich tatsächliche finanzielle Ungleichheiten und die Notwendigkeit gezielter Unterstützung erkennen.
                </>
                ),
            },
            {
                id: 19,
                isChart: true,
                itemName: 'scatter-plot',
                imagePath: "/images/3_SCATTER_PLOT_RESI_INCOME.webp",
                alt: "Scatterplot für Darstellung der Verteilung von Resiudaleinkommen und Haushaltseinkommen"
            },
            {
                id: 20,
                text: <> Ausgaben nach Einkommensquintilen </>,
                isContentHeader: true,
            },
            {
                id: 21,
                isEChart: true,
                itemName: 'expenditure-bar-charts',
                labelAbs: 'Absolut',
                labelRel: 'Relativ',
                ariaLabel: "Zwei Balkendiagramme für die Ausgaben nach Einkommenquintilen - Erstes für Alle und zweites für Mieter:innen",
                source: "Datenquelle: Konsumerhebung 2019/2020, Statistik Austria"
            },
            {
                id: 22,
                text: 
                <> 
                    Die Grafik zeigt, dass die Arten und die Gesamthöhe der <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendigen Ausgaben</GlossaryTerm> bei Haushalten unterschiedlicher Einkommensgruppen 
                    auf den ersten Blick recht ähnlich erscheinen (absolut). Deutliche Unterschiede zeigen sich jedoch im Verhältnis der Ausgaben zum Einkommen (relativ).
                </>
            },
            {
                id: 23,
                text: (
                <>  
                    Die ärmsten 20% der Haushalte (Q1) geben knapp 60% ihres Einkommens für Wohnen, Lebensmittel, Gesundheit, Mobilität und Bildung aus. 
                    Dadurch bleibt ihnen deutlich weniger <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> übrig 
                    als anderen Einkommensgruppen, was bedeutet, dass sie weniger Spielraum für unvorhergesehene Ausgaben haben. 
                    Im Gegensatz dazu verwenden die reichsten 20% der Haushalte (Q5) nur etwa 20% ihres Einkommens für <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm>. 
                    Das resultiert in einem sehr hohen Residualeinkommen, das für Freizeit, Ersparnisse oder zusätzliche Investitionen genutzt werden kann. 
                    Bei Haushalten im mittleren Einkommensbereich verbleiben nach den notwendigen Ausgaben ebenfalls über 70% ihres Einkommens.
                </>
                ),
            },
            {
                id: 24,
                text: (
                <>  
                    Die finanzielle Belastung der untersten Einkommensgruppe wird noch deutlicher, wenn man ausschließlich Mietshaushalte betrachtet. 
                    Nach den <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendige Ausgaben</GlossaryTerm> verbleiben ihnen lediglich etwa 30% ihres Einkommens. 
                    Eine Analyse der Wohnkostenbelastung nach Einkommensquintilen zeigt, dass die Wohnkosten in der untersten Einkommensgruppe (Q1) 
                    einen deutlich höheren relativen Anteil am Einkommen ausmachen als in den übrigen <GlossaryTerm className="glossary-term quintil" sectionId="residualIncome">Quintilen</GlossaryTerm>. 
                    Mit steigendem Einkommen nimmt die Wohnkostenbelastung erheblich ab und beträgt im höchsten Einkommensquintil bei Mieter:innen nur rund 14%.
                </>
                ),
            },
            {
                id: 25,
                text: <> Einkommensungleichheit nach Gesamteinkommen und Residualeinkommen </>,
                isContentHeader: true,
            },
            {
                id: 26,
                text: (
                <>  
                    Ein zentrales Maß zur Erfassung der Einkommensungleichheit ist der <GlossaryTerm className="glossary-term gini" sectionId="residualIncome">Gini-Index</GlossaryTerm>. 
                    Dieser standardisierte Wert liegt zwischen 0 und 1, wobei 0 für eine völlig gleichmäßige Verteilung (alle Haushalte haben das gleiche Einkommen) 
                    und 1 für maximale Ungleichheit (eine Person erhält das gesamte Einkommen) steht.
                </>
                ),
            },
            {
                id: 27,
                text: (
                <>  
                    Unsere Analyse zeigt, dass der <GlossaryTerm className="glossary-term gini" sectionId="residualIncome">Gini-Index</GlossaryTerm> für 
                    das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> deutlich höher ist als für das Haushaltseinkommen (0,38 versus 0,27). 
                    Das liegt daran, dass fixe Grundkosten wie Miete, Lebensmittel oder Gesundheitsausgaben einen viel größeren Anteil des Einkommens in unteren Einkommensgruppen ausmachen. 
                    Dadurch bleibt in diesen Gruppen deutlich weniger finanzielle Flexibilität, während höhere Einkommensgruppen 
                    nach den <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendigen Ausgaben</GlossaryTerm> überproportional mehr Mittel zur Verfügung haben. 
                    Dies verstärkt die wirtschaftliche Ungleichheit und macht deutlich, dass das Haushaltseinkommen allein nicht ausreicht, um die (Un-)Gleichverteilung von Ressourcen abzubilden.
                </>
                ),
            },
            {
                id: 28,
                isChart: true,
                itemName: 'gini',
                ariaLabel: "Gegenüberstellung des Gini-Index für Haushalts- und Resiudaleinkommen durch 2 große Zahlen",
                source: "Datenquelle: Konsumerhebung 2019/2020, Integrierte Einkommens- und Lohnsteuerstatistik 2019/2020, Statistik Austria"
            },
            {
                id: 29,
                accordionHeader: "Wie wird der Gini-Index berechnet?",
                accordionText: ( 
                <>  
                    Der <GlossaryTerm className="glossary-term gini" sectionId="residualIncome">Gini-Index</GlossaryTerm> wird aus der Lorenz-Kurve abgeleitet. Diese Kurve zeigt, wie das Einkommen in einer Gesellschaft verteilt ist. 
                    Auf der x-Achse steht der Anteil der Haushalte (von den ärmsten bis zu den reichsten), auf der y-Achse der Anteil am gesamten Einkommen.
                </>
                ),
                list: [
                    { title: 'Schritt 1: ', text: 'Wir ordnen alle Haushalte nach Einkommen, von niedrig nach hoch.' },
                    { title: 'Schritt 2: ', text: 'Dann berechnen wir, wie viel Prozent des gesamten Einkommens auf die ärmsten 10 %, 20 %, 30 % usw. entfallen.' },
                    { title: 'Schritt 3: ', text: 'Wir zeichnen die Lorenz-Kurve: Eine Linie, die zeigt, wie viel Einkommen die unteren Einkommensgruppen zusammen haben.' },
                    { title: 'Schritt 4: ', text: 'Der Gini-Index ergibt sich aus der Fläche zwischen der Lorenz-Kurve und der Gleichverteilungslinie (die eine vollkommen gerechte Verteilung darstellen würde). Je größer diese Fläche, desto ungleicher ist die Verteilung. Ein Gini-Index von 0 bedeutet, dass alle Haushalte exakt das gleiche Einkommen haben. Ein Wert nahe 1 bedeutet, dass fast das gesamte Einkommen von wenigen Haushalten verdient wird.' }
                ],
                imagePath: "/images/Lorenz_Kurven_Gini_AT_DE.png",
                isAccordion: true,
                itemName: 'gini-accordion',
                alt: "Lorenz-Kurve des Gini-Index"
            },
            {
                id: 30,
                text: <> Bildung und Beschäftigung und ihr Einfluss auf das Residualeinkommen von Haushalten </>,
                isContentHeader: true,
            },
            {
                id: 31,
                text: (
                <>  
                    Da die Einkommen stark vom Bildungsniveau, dem Beschäftigungsgrad und der Art der Erwerbstätigkeit abhängen, <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendigen Ausgaben</GlossaryTerm> aber 
                    von allen Haushalten getätigt werden müssen, spiegeln sich diese wirtschaftlichen Unterschiede noch stärker im <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> wider. 
                    In der Grafik wird das Residualeinkommen nach höchster abgeschlossener Bildung, Haupteinkommensquelle und Ausmaß der Erwerbstätigkeit differenziert dargestellt (es kann zwischen den Kategorien gewechselt werden):
                </>
                ),
            },
            {
                id: 32,
                isEChart: true,
                itemName: 'education-bar-charts',
                labelExtent: <> Beschäftigungs&shy;art </>,
                labelSource: <> Einkommens&shy;quelle </> ,
                ariaLabel: "Zwei Balkendiagramme für die Bildung und Beschäftigung - Erstes zeigt abgeschlossene Bildung; zweites je nach ausgewähltem Modus Beschäftigungsart oder Einkommensquelle",
                source: "Datenquelle: Konsumerhebung 2019/2020, Statistik Austria"
            },
            {
                id: 33,
                accordionHeader: "Was bedeuten die Variablen?",
                accordionText: (
                    <>
                        <span className="boldText">Höchste abgeschlossene Bildung: </span>
                        Dieser Begriff bezeichnet den höchsten Bildungsabschluss innerhalb eines Haushalts. Maßgeblich ist dabei die Person im Haushalt, die über den höchsten formalen Bildungsgrad verfügt. <br/>
                        <br/>
                        <span className="boldText">Beschäftigungsausmaß: </span>
                        Hierbei wird betrachtet, in welchem Umfang die erwerbstätigen Personen eines Haushalts arbeiten – also ob alle ausschließlich in Vollzeit oder Teilzeit beschäftigt sind, oder ob im Haushalt beide Beschäftigungsformen (Vollzeit und Teilzeit) gleichzeitig vertreten sind. <br/>
                        <br/>
                        <span className="boldText">Haupteinkommensquelle: </span>
                        Damit ist jene Einkommensart gemeint, die den größten Anteil am gesamten Haushaltseinkommen ausmacht – etwa Erwerbseinkommen, Pensionen oder Transferleistungen. <br/><br/>
                    </>
                ),
                isAccordion: true,
                itemName: 'education-accordion'
            },
            {
                id: 34,
                text: (
                <>  
                    Höhere Bildungsabschlüsse und Vollzeiterwerbstätigkeit geben den Haushalten deutlich mehr finanziellen Spielraum. 
                    Die Bedeutung von Bildung geht weit über den Abschluss einer Schule oder Universität hinaus – 
                    sie beeinflusst direkt die finanzielle Sicherheit eines Haushalts und die Höhe des <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommens</GlossaryTerm>.
                </>
                ),
            },
            {
                id: 35,
                text: (
                <>  
                    Für Haushalte, in denen der höchste Bildungsabschluss jener der Pflichtschule ist, 
                    liegt das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> bei nur 
                    etwa 1.190 € im <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm>. 
                    Dieser Betrag reicht oft nur für das tägliche Leben und lässt wenig Raum für größere finanzielle Belastungen. 
                    Die Ursache liegt darin, dass geringere Bildungsabschlüsse in der Regel mit niedrigeren Löhnen und weniger flexiblen Arbeitsmöglichkeiten verbunden sind, was die Einkommenspotenziale stark begrenzt.
                </>
                ),
            },
            {
                id: 36,
                text: (
                <>  
                    Im Gegensatz dazu zeigt sich bei Haushalten, deren höchste Bildungsabschlüsse eine <GlossaryTerm className="glossary-term postsecondaryEducation" sectionId="residualIncome">postsekundäre</GlossaryTerm> oder  <GlossaryTerm className="glossary-term tertiaryEducation" sectionId="residualIncome">tertiäre</GlossaryTerm> Ausbildung umfassen, ein deutlich anderes Bild. 
                    In diesen Haushalten liegt das Einkommen bei rund 2.640 €, was fast doppelt so hoch ist. 
                    Der Grund dafür ist oftmals, dass höhere Bildungsabschlüsse Zugang zu besser bezahlten und stabileren Arbeitsplätzen eröffnen. 
                    Menschen mit höherer Bildung können in qualifizierteren Berufen arbeiten, die nicht nur ein höheres Gehalt bieten, 
                    sondern auch bessere Aufstiegschancen und eine größere berufliche Sicherheit.
                </>
                ),
            },
            {
                id: 37,
                text: (
                <>  
                    Die Auswirkungen sind nicht nur individuell spürbar – sie betreffen auch die gesamte Familie. 
                    Höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> bedeutet mehr finanzielle Freiheit, die nicht nur für den Lebensunterhalt genutzt werden kann, 
                    sondern auch für Investitionen in die Zukunft, sei es durch Ersparnisse, die Unterstützung der Ausbildung der Kinder oder die Planung einer stabilen Altersvorsorge.
                </>
                ),
            },
            {
                id: 38,
                text: (
                <>  
                    Jedoch zeigt die Analyse auch eine dramatische Verschiebung, wenn in einem Haushalt zumindest ein Mitglied pensioniert ist. 
                    Diese Haushalte haben häufig ein niedrigeres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>, 
                    da Pensionen oft nicht ausreichen, um den Lebensstandard zu halten, 
                    besonders wenn sie nicht durch private Ersparnisse oder Zusatzgewinne ergänzt werden. Hier wird der Unterschied zwischen Haushalten mit höherer Bildung und denen ohne noch klarer. 
                </>
                ),
            },
            {
                id: 39,
                text: (
                <>  
                    Ähnliches zeigt sich, wenn man das Ausmaß der Beschäftigung betrachtet. 
                    In Haushalten, in denen der höchste Bildungsabschluss lediglich die Pflichtschule ist, und in denen alle Haushaltsmitglieder, 
                    die dem Arbeitsmarkt zur Verfügung stehen, Vollzeit arbeiten, liegt das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> bei etwa 1.100 €. 
                    Trotz Vollzeitarbeit bleibt das Residualeinkommen in diesen Haushalten relativ niedrig. Ganz anders sieht es in Haushalten aus, 
                    in denen zumindest ein Familienmitglied eine <GlossaryTerm className="glossary-term postsecondaryEducation" sectionId="residualIncome">postsekundäre</GlossaryTerm> oder <GlossaryTerm className="glossary-term tertiaryEducation" sectionId="residualIncome">tertiäre</GlossaryTerm> Ausbildung abgeschlossen hat. 
                    Auch hier arbeiten alle Mitglieder im erwerbsfähigen Alter Vollzeit, doch das Residualeinkommen liegt mit 2.800 € fast dreimal so hoch wie in den Haushalten mit Pflichtschulabschluss. 
                    Der Unterschied ist auffällig und verdeutlicht, wie stark Bildung den Zugang zu besser bezahlten und stabileren Arbeitsplätzen beeinflusst.
                </>
                ),
            },
            {
                id: 40,
                text: (
                <>  
                    Selbst bei Teilzeitbeschäftigung zeigt sich ein ähnlicher Trend. 
                    In Haushalten mit <GlossaryTerm className="glossary-term tertiaryEducation" sectionId="residualIncome">tertiärer</GlossaryTerm> oder <GlossaryTerm className="glossary-term postsecondaryEducation" sectionId="residualIncome">postsekundärer</GlossaryTerm> Ausbildung 
                    haben die Familien im <GlossaryTerm className="glossary-term median" sectionId="residualIncome">Median</GlossaryTerm> etwa 400 € 
                    mehr <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> als Haushalte, deren höchster Bildungsabschluss die Pflichtschule ist. 
                    Obwohl Teilzeitarbeit in vielen Fällen geringere Arbeitszeiten und damit auch geringere Einnahmen bedeutet, 
                    bleibt der Unterschied zwischen den Haushalten mit unterschiedlichen Bildungsabschlüssen bestehen. 
                    Auch hier wird die Bedeutung der Ausbildung deutlich: Höhere Bildungsabschlüsse ermöglichen Zugang zu besser bezahlten Teilzeitstellen, die sich positiv auf das Residualeinkommen auswirken.
                </>
                ),
            },
            {
                id: 41,
                text: 
                <> 
                    Haushalte, in denen sowohl in Vollzeit als auch in Teilzeit gearbeitet wird, haben zum Teil ein höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> als 
                    Haushalte mit ausschließlich Vollzeiterwerbstätigen. In allen Analysen wird das Residualeinkommen äquivalenzskaliert (also an die Haushaltsgröße und -zusammensetzung angepasst), 
                    um faire Vergleiche zu ermöglichen. Trotz dieser Anpassung kann das Residualeinkommen in diesen „Mischhaushalten“ höher sein, weil dort oft mehr als eine Person zum Einkommen beiträgt. 
                    Ein Haushalt mit z. B. einer vollzeit- und einer teilzeiterwerbstätigen Person hat in Summe ein höheres Einkommen als ein Haushalt mit nur einer vollzeittätigen Person und 
                    selbst nach der Äquivalenzgewichtung kann dadurch mehr finanzieller Spielraum übrig bleiben.
                </>,
            },
            {
                id: 42,
                text: <> Regionale Unterschiede </>,
                isContentHeader: true,
            },
            {
                id: 43,
                text: (
                <>  
                    Die Tabelle veranschaulicht die Unterschiede in der Höhe der <GlossaryTerm className="glossary-term expenditure" sectionId="residualIncome">notwendigen Ausgaben</GlossaryTerm> sowie im Haushalts- 
                    und <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> auf Bundeslandebene. 
                    Dabei zeigt sich, dass Haushalte in Wien die mit Abstand höchsten Ausgaben haben, was aber unter anderem auch darauf zurückzuführen ist, 
                    dass hier Wohnkosten realistischer abgebildet werden, weil im Vergleich zu anderen Bundesländern der Anteil an Personen, die in Wohneigentum leben, in Wien deutlich geringer ist.
                    Zudem weisen Wiener Haushalte gemeinsam mit Kärnten das niedrigste Haushalts- und Residualeinkommen auf. 
                    Wien liegt sogar auf dem letzten Platz beim Residualeinkommen, wenn man alle Haushalte gemeinsam betrachtet.
                    Das höchste Residualeinkommen hingegen findet sich in Oberösterreich und Niederösterreich.
                </>
                ),
            },
            {
                id: 44,
                text: (
                <>  
                    Betrachtet man ausschließlich Mietshaushalte, ergibt sich ein anderes Bild: 
                    Haushalte in Wien zahlen im Durchschnitt nicht die höchsten Wohnkosten.
                    Dies führt dazu, dass Wien unter den Mieter:innenhaushalten das höchste <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> aufweist.
                    Stattdessen liegen die Mietausgaben in Vorarlberg am höchsten, gefolgt von Salzburg. 
                    Dies spiegelt sich auch im Residualeinkommen wider, denn Mieter:innen in Wien verfügen über ein höheres Residualeinkommen als jene in Vorarlberg und Salzburg. 
                    Die niedrigsten Mietkosten tragen hingegen Haushalte im Burgenland und in Kärnten.
                </>
                ),
            },
            {
                id: 45,
                isTable: true,
                itemName: 'expenditure-table',
                ariaLabel: "Aufschlüsselung der Ausgaben nach Bundesland",
                source: "Datenquelle: Konsumerhebung 2019/2020, Statistik Austria"
            },
            {
                id: 46,
                text: (
                <>  
                    Erhebliche Unterschiede zeigen sich, wenn man das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> nach 
                    Bundesland und <GlossaryTerm className="glossary-term municipalitySizeClass" sectionId="residualIncome">Gemeindegrößenklasse</GlossaryTerm> betrachtet. 
                    Diese regionalen Unterschiede im Residualeinkommen verdeutlichen, wie stark die Einkommensmöglichkeiten und Lebensbedingungen in verschiedenen Teilen des Landes variieren. 
                    Besonders bemerkenswert ist, dass diese Unterschiede nicht nur auf der Höhe des Einkommens beruhen, sondern auch durch lokale Gegebenheiten wie Lebenshaltungskosten und Immobilienpreise beeinflusst werden.
                </>
                ),
            },
            {
                id: 47,
                isChart: true,
                itemName: 'median-map',
                labelAll: "Alle",
                labelRent: "Mieter:innen",
                alt: "Karte zur Visualisierung des Residualeinkommens (Median) nach Gemeindegrößenklassen für Österreich",
                source: "Datenquelle: Konsumerhebung 2019/2020, Statistik Austria"
            },
            {
                id: 48,
                accordionHeader: "Wo wohnt Österreich: Gemeindegrößenklassenerklärung",
                accordionText: ( 
                <>  
                    In vielen regionalen Statistiken werden die österreichischen Gemeinden in <GlossaryTerm className="glossary-term municipalitySizeClass" sectionId="residualIncome">Gemeindegrößenklassen</GlossaryTerm> eingeteilt. 
                    Sechs österreichische Landeshauptstädte haben über 100.000 Einwohner:innen (Wien, Graz, Linz, Salzburg, Klagenfurt und Innsbruck). 
                    Insgesamt leben etwas mehr als 20% aller Bewohner:innen Österreichs in diesen Städten, ähnlich viele wie in den 1.366 Gemeinden mit weniger als 2.500 Einwohner:innen. 
                    Mehr als 30% der Österreicher:innen leben in den 641 Gemeinden mit 2.500-10.000 Einwohner:innen und 27% in Klein- und Mittelstädten.
                </>
                ),
                imagePath: "/images/Abb_KarteGemeindegroeßen_DE.png",
                itemName: 'municipality-accordion',
                isAccordion: true,
                alt: "Karte zur Visualisierung der Gemeindegrößenklassen in Österreich"
            },
            {
                id: 49,
                text: (
                <>  
                    In Wien, der größten Stadt des Landes, liegt das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> mit rund 1.545 € am niedrigsten. 
                    Dies mag auf den ersten Blick überraschen, da man in einer Großstadt höhere Einkommensmöglichkeiten vermuten würde.
                    Allerdings wohnen hier auch mehr Mieter:innenhaushalte, deren Wohnkosten realistischer einbezogen werden.
                </>
                ),
            },
            {
                id: 50,
                text: (
                <>  
                    Im Vergleich dazu zeigen die Bundesländer Niederösterreich, Oberösterreich und Vorarlberg ein deutlich höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm>. 
                    Besonders auffällig ist, dass in den kleineren Gemeinden das höchste Residualeinkommen erzielt wird. 
                    Hier spielt der Eigentumserwerb beim Wohnen eine entscheidende Rolle: In ländlicheren Gebieten ist die Eigentumsrate deutlich höher als in städtischen Zentren.
                    Dies ermöglicht es den Haushalten, gegeben, dass sie keine Kreditrückzahlungen bedienen müssen, mehr von ihrem Einkommen zu sparen und somit ein höheres Residualeinkommen zu erzielen.
                </>
                ),
            },
            {
                id: 51,
                text: (
                <>  
                    Trotz dieser generellen Tendenzen gibt es auch innerhalb der Bundesländer Unterschiede. 
                    In Oberösterreich sind es vor allem kleinere Gemeinden, die ein höheres <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> aufweisen, 
                    während im Burgenland vor allem Haushalte in Eisenstadt das höchste Residualeinkommen erzielen.
                </>
                ),
            },
            {
                id: 52,
                text: (
                <>  
                    Betrachtet man ausschließlich Mietshaushalte, wird der erhebliche finanzielle Druck durch die Mietkosten besonders deutlich. 
                    Besonders ausgeprägte Unterschiede zeigen sich in kleineren Gemeinden in Niederösterreich, Vorarlberg und Kärnten. Diese regionalen Unterschiede implizieren, 
                    dass das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> nicht 
                    nur von den Einkommen selbst abhängt, sondern auch stark durch die Lebenshaltungskosten in der jeweiligen Region beeinflusst wird.
                </>
                ),
            },
            {
                id: 53,
                text: (
                <>  
                    Allerdings reicht der Blick auf das <GlossaryTerm className="glossary-term residualIncome" sectionId="residualIncome">Residualeinkommen</GlossaryTerm> allein nicht aus, 
                    um die Lebensqualität und die tatsächliche Wohlstandssituation von Haushalten zu beurteilen. 
                    Häufig ist es so, dass in Regionen mit höherem Residualeinkommen die Infrastruktur und öffentlichen Dienstleistungen nicht in gleichem Maße ausgebaut sind wie in städtischen Gebieten. 
                    Umfassende Infrastruktur und die Verfügbarkeit öffentlicher Dienstleistungen sind ebenfalls entscheidende Faktoren für den Lebensstandard. 
                    In Regionen mit günstigen Lebenshaltungskosten, aber schlechterer Infrastruktur, könnte das höhere Residualeinkommen zwar finanziellen Spielraum bieten, 
                    jedoch nicht die gleichen Lebensbedingungen und Möglichkeiten wie in gut erschlossenen urbanen Regionen.
                </>
                ),
            },
            {
                id: 54,
                text: (
                <>  
                    Für gewisse Bevölkerungsgruppen ist <GlossaryTerm className="glossary-term si" sectionId="residualIncome">soziale Infrastruktur</GlossaryTerm> besonders wichtig. 
                    Vor allem für Haushalte mit geringem Einkommen oder großer finanzieller Belastung durch Lebenserhaltungskosten ist diese von großer Bedeutung. 
                    Diese Gruppen können sich häufig keine teuren privaten Lösungen leisten, weshalb sie öffentliche Angebote wie Gesundheitsversorgung, 
                    Kinderbetreuung und andere soziale Infrastrukturen deutlich finanziell entlasten können.
                </>
                ),
            },
                        
        ]
    },
    EN: {
        header: 'Residual Income',
        content: [
        ]
    }
};

const ResidualIncomeSection = () => {

    const { language } = useLanguage();
    const section = translations[language] || translations.DE;

    const [isWrapped, setIsWrapped] = useState(false);

    const [medianExpenditureMode, setMedianExpenditureMode] = useState("all");
    const [medianMapMode, setMeanMapMode] = useState("all");
    const [quintilExpenditureMode, setQuintilExpenditureMode] = useState("absolute");
    const [educationChartMode, setEducationChartMode] = useState("extent_empl");
    
    const handleToggleModeChange = (type, newValue) => {
        if (newValue !== null) {
            if (type === "median_exp") {
                setMedianExpenditureMode(newValue);
            } else if (type === "quintil_exp") {
                setQuintilExpenditureMode(newValue);
            } else if (type === "education") {
                setEducationChartMode(newValue);
            } else if (type === "median_map") {
                setMeanMapMode(newValue);
            } 
        }
    };

    const renderItem = (item) => {
        switch (true) {
            case item.isContentHeader:
            return (
                <h2 key={item.id} className={`content-header ${item.className || ''}`}>
                    {item.text}
                </h2>
            );

            case item.isChart:
            switch (item.itemName) {
                case 'definition':
                    return (
                        <Box
                            key={item.id}
                            className="definition-chart-container"
                            sx={{ padding: 0, borderRadius: 1, marginTop: 3, marginBottom: 3 }}
                        >
                            <ResiDefinitionChart altText={item.alt} />
                        </Box>
                    );
                case 'scatter-plot':
                    return (
                        <div key={item.id} className="image-container scatter-plot-container">
                            <img src={`${process.env.PUBLIC_URL}${item.imagePath}`} alt={item.alt} />
                        </div>
                    );
                case 'gini':
                    return (
                        <div key={item.id}>
                            <h3 className="gini-header">Gini-Index</h3>
                            <div className="gini-container" aria-label={item.ariaLabel}>
                                <div>
                                    <CounterAnimation targetValue={0.27} />
                                    <h3 className="gini-subheader">Haushaltseinkommen</h3>
                                </div>
                                    <div>
                                    <CounterAnimation targetValue={0.38} />
                                    <h3 className="gini-subheader">Residualeinkommen</h3>
                                </div>
                            </div>
                            <p className='source' style={{margin: "0px auto 40px"}}>{item.source}</p>
                        </div>
                    );
                default:
                    return (
                        <Box
                            key={item.id} 
                            className="median-map-container"
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
                            <div className="toggle-container">
                                <ToggleButtonGroup
                                    className="residual-income-toggle median-map-toggle"
                                    value={medianMapMode}
                                    exclusive
                                    onChange={(_, newValue) => handleToggleModeChange("median_map", newValue)}
                                    aria-label="Map mode selection"
                                >   
                                    <ToggleButton value="all"><label>{item.labelAll}</label></ToggleButton>
                                    <ToggleButton value="renter"><label>{item.labelRent}</label></ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                            <MedianMapChart mode={medianMapMode} altText={item.alt} />
                            <p className='source' style={{margin: "12px auto 0"}}>{item.source}</p>
                        </Box>
                    );
            }

            case item.isEChart:
            switch (item.itemName) {   
                case 'median-expenditure-chart':
                    return (
                        <Box
                            key={item.id}
                            sx={{
                                background: '#f4f4f4',
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
                            onChange={(_, newValue) => handleToggleModeChange('median_exp', newValue)}
                            aria-label="Pie chart mode selection"
                            >
                            <ToggleButton value="all">
                                <label>{item.labelAll}</label>
                            </ToggleButton>
                            <ToggleButton value="renter">
                                <label>{item.labelRent}</label>
                            </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <h3 className="median-exp-chart-title">{item.chartTitle}</h3>
                        <div className="median-exp-chart-container" aria-label={item.ariaLabel}>
                            <MedianExpenditureChart mode={medianExpenditureMode} />
                        </div>
                        <p className='source' style={{margin: "12px auto 0"}}>{item.source}</p>
                        </Box>
                    );
                case 'expenditure-bar-charts':
                    return (
                        <Box
                            key={item.id}
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
                                    aria-label="Barchart mode selection"
                                >   
                                    <ToggleButton value="absolute"><label>{item.labelAbs}</label></ToggleButton>
                                    <ToggleButton value="relative"><label>{item.labelRel}</label></ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                    
                            <div className="quintil-exp-charts-container" aria-label={item.ariaLabel}>
                                <QuintilExpenditureCharts 
                                    mode={quintilExpenditureMode} 
                                    isWrapped={isWrapped}
                                    setIsWrapped={setIsWrapped}
                                />
                            </div>
                            <p className='source' style={{margin: "12px auto 0"}}>{item.source}</p>
                        </Box>
                    );
                default:
                    return (
                        <Box
                            key={item.id}
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
                                className="residual-income-toggle education-chart-toggle"
                                value={educationChartMode}
                                exclusive
                                onChange={(_, newValue) => handleToggleModeChange("education", newValue)}
                                aria-label="Barchart mode selection"
                                >
                                    <ToggleButton value="extent_empl"><label>Beschäftigungs&shy;art</label></ToggleButton>
                                    <ToggleButton value="income_source"><label>Einkommens&shy;quelle</label></ToggleButton>
                                </ToggleButtonGroup>
                            </div>

                            <div className="education-charts-container" aria-label={item.ariaLabel}>
                                <EducationCharts
                                    mode={educationChartMode} 
                                    isWrapped={isWrapped}
                                    setIsWrapped={setIsWrapped}
                                />
                            </div>
                            <p className='source' style={{margin: "12px auto 0"}}>{item.source}</p>
                        </Box>
                    );
            }

            case item.isAccordion:
            switch (item.itemName) {    
                case 'expenses-accordion':
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

                            {item.list && (
                                <ul className="custom-list residual-income">
                                    {item.list.map((step, index) => (
                                        <li key={index}>
                                            <span className="boldText">{step.title}</span> {step.text}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            </AccordionDetails>
                        </Accordion>
                        </div>
                    );
                case 'gini-accordion':
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
                                    <ul className="custom-list residual-income">
                                        {item.list.map((step, index) => (
                                            <li key={index}>
                                                <span className="boldText">{step.title}</span> {step.text}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                
                                <div className="image-container lorenz-curve-container">
                                    <img
                                        className="lorenz-curve"
                                        src={`${process.env.PUBLIC_URL}${item.imagePath}`}
                                        alt="Lorenz Kurve für Haushalts- und Residualeinkommen"
                                    />
                                </div>
                                
                            </AccordionDetails>
                        </Accordion>
                        </div>
                    );
                case 'municipality-accordion':
                    return (
                        <div key={item.id} style={{margin: '24px 0 0'}}>
                            <Accordion sx={{background: "#f4f4f4"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h4" sx={{ fontSize: '1.125rem'}}>{item.accordionHeader}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.accordionText}
                                </Typography>

                                <img className="municipality-size-map" src={`${process.env.PUBLIC_URL}${item.imagePath}`} alt={item.alt} />
                            </AccordionDetails>
                            </Accordion>
                        </div>   
                    );
                default:
                    return (
                        <div key={item.id} style={{margin: '24px 0'}}>
                            <Accordion sx={{background: "#f4f4f4"}}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h4" sx={{ fontSize: '1.125rem'}}>{item.accordionHeader}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.accordionText}
                                </Typography>
                            </AccordionDetails>
                            </Accordion>
                        </div>   
                    );
            }

            case item.isTable:
            switch (item.itemName) {    
                case 'household-table':
                    return (
                        <div key={item.id} className="houshold-table-container">
                            <HouseholdTable ariaLabel={item.ariaLabel} />
                            <p className='source' style={{margin: "12px auto 24px"}}>{item.source}</p>
                        </div>
                    );
                default:
                    return (
                        <div key={item.id} className="expenditure-table-container">
                            <ExpenditureBundTable ariaLabel={item.ariaLabel}/>
                            <p className='source' style={{margin: "12px auto 24px"}}>{item.source}</p>
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

export default ResidualIncomeSection;