import { useLanguage } from '../../context/LanguageContext';

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
                    In Österreich – wie in vielen anderen Ländern – übernehmen Frauen nach wie vor einen überproportional großen Anteil an unbezahlter Arbeit, 
                    darunter Haushaltsführung, Kinderbetreuung und die Pflege von Angehörigen. Dies hat weitreichende finanzielle und soziale Konsequenzen.
                </>
                ),
            },
            {
                id: 2,
                text: ( 
                <> 
                    Da Frauen mehr Zeit für unbezahlte Arbeit aufwenden, haben sie oft geringere Erwerbsarbeitszeiten, was zu einem niedrigeren Haushaltseinkommen führt. 
                    Gleichzeitig beeinflusst dies das <GlossaryTerm className="glossary-term residualIncome" sectionId="time-usage">Residualeinkommen</GlossaryTerm>, denn:
                </>
                ),
            },
            {
                id: 3,
                text: (
                <ul className="custom-list">
                    <li> Wenn günstige Kinderbetreuung oder Pflegeeinrichtungen fehlen, sind Haushalte gezwungen, private Lösungen zu finanzieren oder eine Person (oft Frauen) bleibt zu Hause – was das verfügbare Einkommen weiter reduziert.</li>
                    <li> Zeitintensive Care-Arbeit kann dazu führen, dass Frauen weniger in Weiterbildungen oder Karrierechancen investieren können, was langfristig Einkommens- und Vermögensunterschiede verfestigt.</li>
                    <li> Frauen in Teilzeit oder mit unterbrochenen Erwerbsbiografien haben oft niedrigere Löhne und Sozialleistungen (z. B. Pensionen).</li>
                </ul>
                ),
                isList: true,
            },
            {
                id: 4,
                text: ( 
                <> 
                    Die Verfügbarkeit <GlossaryTerm className="glossary-term si" sectionId="time-usage">sozialer Infrastruktur</GlossaryTerm> wie Kinderbetreuungseinrichtungen, 
                    Ganztagsschulen und Pflegeangebote hat einen direkten Einfluss darauf, wie Erwerbs- und Care-Arbeit innerhalb von Haushalten aufgeteilt wird. 
                    In Regionen mit gut ausgebauter Infrastruktur können Frauen häufiger Vollzeit oder in besser bezahlten Positionen arbeiten, 
                    da die Betreuung von Kindern oder Angehörigen nicht vollständig auf private Ressourcen angewiesen ist.
                </>
                ),
            },
            {
                id: 5,
                text: ( 
                <> 
                    Fehlt diese Infrastruktur, werden Haushalte nicht nur durch direkte Kosten (z. B. private Betreuung), 
                    sondern auch durch indirekte Einbußen belastet – etwa durch entgangenes Einkommen oder verringerte Karrieremöglichkeiten. 
                    Dies wirkt sich langfristig auf das <GlossaryTerm className="glossary-term residualIncome" sectionId="time-usage">Residualeinkommen</GlossaryTerm> und 
                    die wirtschaftliche Absicherung von Frauen aus.
                </>
                ),
            },
            {
                id: 6,
                text: <> Fokus Tageszeitnutzung nach Geschlecht und Alter </>,
                isContentHeader: true,
            },
            {
                id: 7,
                text: ( 
                <> 
                    Schaut man sich die Zeitverwendung unterschiedlicher Altersklassen an, wird deutlich, 
                    dass sich Ungleichheiten bei bezahlter und unbezahlter Arbeit schon früh abzeichnen. 
                    Bereits bei den unter 20-Jährigen verrichten Mädchen und junge Frauen täglich rund 30 Minuten mehr unbezahlte Arbeit als Burschen und junge Männer. 
                    Diese Unterschiede verstärken sich mit zunehmendem Alter.
                </>
                ),
            },
            {
                id: 8,
                text: ( 
                <> 
                    In der Altersgruppe 21 bis 64 Jahre wird der Unterschied besonders deutlich: 
                    Frauen investieren täglich 3,75 Stunden in unbezahlte Arbeit, während Männer dafür im Schnitt nur 2 Stunden aufwenden. 
                    Dazu zählen Haushaltsaufgaben, Kinderbetreuung und die Pflege von Angehörigen – Tätigkeiten, die essenziell für die Gesellschaft sind, 
                    aber in klassischen Wirtschaftsstatistiken oft nicht sichtbar werden.
                </>
                ),
            },
            {
                id: 9,
                text: ( 
                <> 
                    Auch bei den über 65-Jährigen bleibt dieser Unterschied bestehen. 
                    Während Männer in dieser Altersgruppe ihre unbezahlte Arbeit leicht erhöhen, 
                    tragen Frauen weiterhin die Hauptlast der hauswirtschaftlichen und pflegerischen Tätigkeiten.
                </>
                ),
            },
            {
                id: 10,
                text: ( 
                <> 
    	            Wie bereits erwähnt, zeigt sich bei der Erwerbsarbeit das umgekehrte Bild: 
                    Männer arbeiten im Durchschnitt länger und verdienen dadurch mehr. 
                    Das hat weitreichende Konsequenzen wie niedrigere Einkommen von Frauen, 
                    was ihr <GlossaryTerm className="glossary-term residualIncome" sectionId="time-usage">Residualeinkommen</GlossaryTerm> und ihre finanzielle Sicherheit auch später im Leben beeinträchtigt. 
                    Langfristig wirken sich diese Unterschiede auf Pensionen und Altersarmut aus, da Frauen aufgrund ihrer Erwerbshistorie oft geringere Ansprüche haben.
                </>
                ),
            },
            {
                id: 11,
                text: ( 
                <> 
                    Diese Dynamik zeigt, dass die ungleiche Verteilung von Zeit für Erwerbs- und unbezahlte Arbeit ein zentraler Faktor für wirtschaftliche Ungleichheit ist. 
                    In den nächsten Analysen konzentrieren wir uns daher gezielt auf die Altersgruppe 21 bis 64 Jahre, um die Auswirkungen dieser Verteilung noch genauer zu untersuchen.
                </>
                ),
            },
            {
                id: 12,
                text: <> Zeitverwendung von Männern und Frauen (21-64 Jahre) für Erwerbsarbeit und unbezahlter Arbeit </>,
                isContentHeader: true,
            },
            {
                id: 13,
                text: <> Bildung: Bildung verändert viel – aber nicht alles </>,
                isContentSubHeader: true,
            },
            {
                id: 14,
                text: ( 
                <> 
                    Unabhängig vom Bildungsgrad zeigt sich ein klares Muster: Frauen übernehmen mehr Care-Arbeit als Männer. 
                    Egal ob Pflichtschulabschluss, Lehre oder Universitätsabschluss – Frauen verbringen täglich mehr Zeit mit Haushaltsarbeit, Kinderbetreuung und der Pflege von Angehörigen als Männer.
                </>
                ),
            },
            {
                id: 15,
                text: ( 
                <> 
                    Während sich die Aufteilung zwischen Erwerbsarbeit und Care-Arbeit bei Männern kaum verändert, 
                    wenn man verschiedene Bildungsgruppen betrachtet, zeigt sich bei Frauen eine leichte Verschiebung: 
                    Mit zunehmendem Bildungsgrad investieren Frauen etwas weniger Zeit in unbezahlte Arbeit und etwas mehr in Erwerbsarbeit.
                </>
                ),
            },
            {
                id: 16,
                text: ( 
                <> 
                    Warum ist das so? Eine mögliche Erklärung liegt in den Arbeitsmarktchancen höher gebildeter Frauen. 
                    Frauen mit höherem Bildungsabschluss haben bessere Einkommensperspektiven, was dazu führen kann, dass sie sich stärker in den Arbeitsmarkt einbringen. 
                    Zudem besteht in höher gebildeten Haushalten oft eine größere finanzielle Möglichkeit, Dienstleistungen wie Kinderbetreuung oder Haushaltsarbeit auszulagern.
                </>
                ),
            },
            {
                id: 17,
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
                id: 18,
                isChart: true,
                itemName: 'edu-boxplot',
                alt: "box plot visualizing income based on sex and education"
            },
            {
                id: 19,
                text: <> Vollzeit-/Teilzeitarbeit: Teilzeit ist nicht gleich Teilzeit – die doppelte Belastung von Frauen </>,
                isContentSubHeader: true,
            },
            {
                id: 20,
                text: ( 
                <> 
                    Frauen, die Teilzeit arbeiten, übernehmen fast doppelt so viel Care-Arbeit wie Frauen, die Vollzeit arbeiten. 
                    Dies könnte darauf zurückzuführen sein, dass viele Frauen ihre Arbeitszeit bewusst reduzieren, um Haushalt, Kinderbetreuung oder die Pflege von Angehörigen zu übernehmen. 
                    Teilzeit ist in diesem Fall oft kein freiwilliges Modell für mehr Freizeit, sondern eine Notwendigkeit, um unbezahlte Arbeit im Haushalt zu bewältigen.
                </>
                ),
            },
            {
                id: 21,
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
                id: 22,
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
                id: 23,
                isChart: true,
                itemName: 'ftpt-boxplot',
                alt: "box plot visualizing income based on sex and extend of employment"
            },
            {
                id: 24,
                text: <> Haushaltstyp: Wenn aus einem Haushalt eine Familie wird – wie sich Arbeitsteilung verändert </>,
                isContentSubHeader: true,
            },
            {
                id: 25,
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
                id: 26,
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
                id: 27,
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
                id: 28,
                text: ( 
                <> 
                    Um diese Ungleichheiten zu reduzieren, sind gezielte Maßnahmen erforderlich: 
                    Der Ausbau von Kinderbetreuung, Pflegeangeboten und flexibleren Arbeitsmodellen kann Frauen und Männern mehr Spielraum bei der Vereinbarkeit von Beruf und Familie geben. 
                    Zudem sind gerechtere Verteilungen von Erwerbs- und Care-Arbeit nicht nur eine Frage individueller Entscheidungen, sondern auch von gesellschaftlichen Strukturen und politischen Rahmenbedingungen.
                </>
                ),
            },
            {
                id: 29,
                isChart: true,
                itemName: 'hhtype-boxplot',
                alt: "box plot visualizing income based on sex and household type"
            },
            {
                id: 30,
                text: <> Gemeindegrößenklasse: Stadt oder Land? Wie der Wohnort die Arbeitsteilung beeinflusst </>,
                isContentSubHeader: true,
            },
            {
                id: 31,
                text: ( 
                <> 
                    Schaut man sich die Zeitverwendung in unterschiedlichen Gemeindegrößen an, zeigt sich ein klares Muster: 
                    Frauen in den ländlichsten Gemeinden leisten täglich mehr als eine Stunde mehr Care-Arbeit als Frauen in Wien. 
                    Je größer die Gemeinde, desto geringer wird der Anteil an unbezahlter Arbeit, den Frauen übernehmen.
                </>
                ),
            },
            {
                id: 32,
                text: ( 
                <> 
                    Bei Männern hingegen bleibt die Verteilung nahezu unverändert – egal, ob sie in einer kleinen Landgemeinde oder in einer Großstadt leben. 
                    Während Frauen auf dem Land also mehr Zeit für Haushalt, Kinderbetreuung und Pflege aufwenden, verändert sich der Anteil der männlichen Care-Arbeit kaum.
                </>
                ),
            },
            {
                id: 33,
                isChart: true,
                itemName: 'gemgr-boxplot',
                alt: "box plot visualizing income based on sex and community size"
            },
            {
                id: 34,
                text: <> Erreichbarkeit von sozialer Infrastruktur: So beeinflusst sie die unbezahlte Arbeit </>,
                isContentSubHeader: true,
            },
            {
                id: 35,
                text: ( 
                <> 
                    Wie stark die Verfügbarkeit und Erreichbarkeit <GlossaryTerm className="glossary-term si" sectionId="time-usage">sozialer Infrastruktur</GlossaryTerm> die Verteilung unbezahlter Arbeit beeinflusst, 
                    wird besonders deutlich beim Blick auf die Zeitverwendung: In Gemeinden mit schlechter Infrastruktur zeigen sich kaum Unterschiede bei Männern – 
                    ihr Anteil an unbezahlter Arbeit bleibt relativ konstant. Bei Frauen hingegen ist der Effekt deutlich spürbar: 
                    In unterversorgten Gemeinden leisten sie im Durchschnitt über 1,5 Stunden mehr unbezahlte Arbeit pro Tag als Frauen in gut ausgestatteten Regionen.
                </>
                ),
            },
            {
                id: 36,
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
                id: 37,
                isChart: true,
                itemName: 'si-boxplot',
                alt: "box plot visualizing income based on sex and social infrastructure supply"
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
                        <IncSexSiBoxplot key={item.id} alt={item.alt}/>
                    );
            }

            case item.isList:
                return (
                    <div key={item.id} className={`paragraph ${item.className || ''}`}>
                        {item.text}
                    </div>
                );
            
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