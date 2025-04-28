import React from 'react';
import IncSexEduBoxplot from '../BoxplotCharts/IncSexEduBoxplot';
import IncSexFtptBoxplot from '../BoxplotCharts/IncSexFtptBoxplot';
// import IncSexFtptBoxplot from '../BoxplotCharts/IncSexFtptBoxplot';


const TimeUsageSection = () => {
    return (
        <div>
            <h2 className="section-header">Zeitverwendung</h2>
                
                <p className='paragraph'>
                In Österreich – wie in vielen anderen Ländern – übernehmen Frauen nach wie vor einen überproportional großen Anteil an unbezahlter Arbeit, darunter Haushaltsführung, Kinderbetreuung und die Pflege von Angehörigen. Dies hat weitreichende finanzielle und soziale Konsequenzen.
                </p>

                <div className='paragraph'>
                    <p>
                    Da Frauen mehr Zeit für unbezahlte Arbeit aufwenden, haben sie oft geringere Erwerbsarbeitszeiten, was zu einem niedrigeren Haushaltseinkommen führt. Gleichzeitig beeinflusst dies das Residualeinkommen, denn:
                    </p>
                    <ul className="custom-list">
                        <li>Frauen in Teilzeit oder mit unterbrochenen Erwerbsbiografien haben oft niedrigere Löhne und Sozialleistungen (z. B. Pensionen).</li>
                        <li>Wenn günstige Kinderbetreuung oder Pflegeeinrichtungen fehlen, sind Haushalte gezwungen, private Lösungen zu finanzieren oder eine Person (oft Frauen) bleibt zu Hause – was das verfügbare Einkommen weiter reduziert.</li>
                        <li>Zeitintensive Care-Arbeit kann dazu führen, dass Frauen weniger in Weiterbildungen oder Karrierechancen investieren können, was langfristig Einkommens- und Vermögensunterschiede verfestigt.</li>
                    </ul>
                </div>

                <p className='paragraph'>
                    Die Verfügbarkeit sozialer Infrastruktur wie Kinderbetreuungseinrichtungen, Ganztagsschulen und Pflegeangebote hat einen direkten Einfluss darauf, wie Erwerbs- und Care-Arbeit innerhalb von Haushalten aufgeteilt wird. In Regionen mit gut ausgebauter Infrastruktur können Frauen häufiger Vollzeit oder in besser bezahlten Positionen arbeiten, da die Betreuung von Kindern oder Angehörigen nicht vollständig auf private Ressourcen angewiesen ist.
                </p>

                <p className='paragraph'>
                    Fehlt diese Infrastruktur, werden Haushalte nicht nur durch direkte Kosten (z. B. private Betreuung), sondern auch durch indirekte Einbußen belastet – etwa durch entgangenes Einkommen oder verringerte Karrieremöglichkeiten. Dies wirkt sich langfristig auf das Residualeinkommen und die wirtschaftliche Absicherung von Frauen aus.
                </p>
                
                <h2 className="content-header">Fokus Tageszeitnutzung nach Geschlecht und Alter</h2>

                <p className='paragraph'>
                    Schaut man sich die Zeitverwendung unterschiedlicher Altersklassen an, wird deutlich, dass sich Ungleichheiten bei bezahlter und unbezahlter Arbeit schon früh abzeichnen. Bereits bei den unter 20-Jährigen verrichten Mädchen und junge Frauen täglich rund 30 Minuten mehr unbezahlte Arbeit als Burschen und junge Männer. Diese Unterschiede verstärken sich mit zunehmendem Alter.
                </p>

                <p className='paragraph'>
                    In der Altersgruppe 21 bis 64 Jahre wird der Unterschied besonders deutlich: Frauen investieren täglich 3,75 Stunden in unbezahlte Arbeit, während Männer dafür im Schnitt nur 2 Stunden aufwenden. Dazu zählen Haushaltsaufgaben, Kinderbetreuung und die Pflege von Angehörigen – Tätigkeiten, die essenziell für die Gesellschaft sind, aber in klassischen Wirtschaftsstatistiken oft nicht sichtbar werden.
                </p>

                <p className='paragraph'>
                    Auch bei den über 65-Jährigen bleibt dieser Unterschied bestehen. Während Männer in dieser Altersgruppe ihre unbezahlte Arbeit leicht erhöhen, tragen Frauen weiterhin die Hauptlast der hauswirtschaftlichen und pflegerischen Tätigkeiten.
                </p>

                <p className='paragraph'>
                    Wie bereits erwähnt, zeigt sich bei der Erwerbsarbeit das umgekehrte Bild: Männer arbeiten im Durchschnitt länger und verdienen dadurch mehr. Das hat weitreichende Konsequenzen wie niedrigere Einkommen von Frauen, was ihr Residualeinkommen und ihre finanzielle Sicherheit langfristig beeinträchtigt. Langfristig wirken sich diese Unterschiede auf Pensionen und Altersarmut aus, da Frauen aufgrund ihrer Erwerbshistorie oft geringere Ansprüche haben.
                </p>

                <p className='paragraph'>
                    Diese Dynamik zeigt, dass die ungleiche Verteilung von Zeit für Erwerbs- und unbezahlte Arbeit ein zentraler Faktor für wirtschaftliche Ungleichheit ist. In den nächsten Analysen konzentrieren wir uns daher gezielt auf die Altersgruppe 21 bis 64 Jahre, um die Auswirkungen dieser Verteilung noch genauer zu untersuchen.
                </p>

                <p style={{margin: '32px 0 0'}}>TODO: Plot Zeitverwendung nach Altersgruppe</p>


                <h2 className="content-header">Zeitverwendung von Männern und Frauen (21-64 Jahre) für Erwerbsarbeit und unbezahlter Arbeit</h2>
                <h3 className="content-header">Bildung: Bildung verändert viel – aber nicht alles</h3>
                <p className='paragraph'>
                Unabhängig vom Bildungsgrad zeigt sich ein klares Muster: Frauen übernehmen mehr Care-Arbeit als Männer. Egal ob Pflichtschulabschluss, Lehre oder Universitätsabschluss – Frauen verbringen täglich mehr Zeit mit Haushaltsarbeit, Kinderbetreuung und der Pflege von Angehörigen als Männer.
                </p>
                <p className='paragraph'>
                Während sich die Aufteilung zwischen Erwerbsarbeit und Care-Arbeit bei Männern kaum verändert, wenn man verschiedene Bildungsgruppen betrachtet, zeigt sich bei Frauen eine leichte Verschiebung: Mit zunehmendem Bildungsgrad investieren Frauen etwas weniger Zeit in unbezahlte Arbeit und etwas mehr in Erwerbsarbeit.
                </p>
                <p className='paragraph'>
                Warum ist das so? Eine mögliche Erklärung liegt in den Arbeitsmarktchancen höher gebildeter Frauen. Frauen mit höherem Bildungsabschluss haben bessere Einkommensperspektiven, was dazu führen kann, dass sie sich stärker in den Arbeitsmarkt einbringen. Zudem besteht in höher gebildeten Haushalten oft eine größere finanzielle Möglichkeit, Dienstleistungen wie Kinderbetreuung oder Haushaltshilfe auszulagern.
                </p>
                <p className='paragraph'>
                Trotz dieser Unterschiede bleibt die Grundtendenz bestehen: Auch hochgebildete Frauen übernehmen mehr unbezahlte Arbeit als Männer mit gleichem Bildungsniveau. Dies zeigt, dass traditionelle Rollenverteilungen weiterhin Einfluss darauf haben, wie Erwerbs- und Care-Arbeit innerhalb von Haushalten verteilt wird – unabhängig vom Bildungsgrad.
                </p>
                
                {/* <div className="image-container box-plot-container">
                    <img src={`${process.env.PUBLIC_URL}/images/9_INC_SEX_EDU_TU.png`} alt="box plot visualizing income based on sex and education" />
                </div> */}
                
                <IncSexEduBoxplot alt="box plot visualizing income based on sex and education"/>

                <h3 className="content-header">Vollzeit-/Teilzeitarbeit: Teilzeit ist nicht gleich Teilzeit – die doppelte Belastung von Frauen</h3>
                <p className='paragraph'>
                Frauen, die Teilzeit arbeiten, übernehmen fast doppelt so viel Care-Arbeit wie Frauen, die Vollzeit arbeiten. Dies könnte darauf zurückzuführen sein, dass viele Frauen ihre Arbeitszeit bewusst reduzieren, um Haushalt, Kinderbetreuung oder die Pflege von Angehörigen zu übernehmen. Teilzeit ist in diesem Fall oft kein freiwilliges Modell für mehr Freizeit, sondern eine Notwendigkeit, um unbezahlte Arbeit im Haushalt zu bewältigen.
                </p>
                <p className='paragraph'>
                Besonders auffällig ist der Unterschied zwischen teilzeitbeschäftigten Frauen und Männern: Frauen in Teilzeit übernehmen mehr als doppelt so viel Care-Arbeit wie Männer in Teilzeit. Während Männer, die ihre Arbeitszeit reduzieren, oft mehr persönliche Freizeit oder Erholung gewinnen, nutzen Frauen die „gewonnene“ Zeit meist für unbezahlte Tätigkeiten.
                </p>
                <p className='paragraph'>
                Das hat weitreichende Folgen: Teilzeit verringert das Erwerbseinkommen, die Karrierechancen und langfristig auch die Pensionsansprüche. Gleichzeitig bleibt der Großteil der unbezahlten Arbeit an Frauen hängen, was die finanzielle Abhängigkeit innerhalb von Haushalten verstärken kann. Diese Verteilung zeigt, dass Teilzeitarbeit für Frauen oft nicht nur eine berufliche Entscheidung ist, sondern direkt mit ungleicher Care-Arbeit verknüpft ist – mit langfristigen Konsequenzen für Einkommen, soziale Absicherung und wirtschaftliche Unabhängigkeit.
                </p>
                

                {/* <div className="image-container ftpt-box-plot-container">
                    <img src={`${process.env.PUBLIC_URL}/images/10_INC_SEX_FTPT_TU.png`} alt="box plot visualizing income based on sex and extent employment" />
                </div> */}

                <IncSexFtptBoxplot alt="box plot visualizing income based on sex and extend of employment"/>


                <h3 className="content-header">Haushaltstyp: Wenn aus einem Haushalt eine Familie wird – wie sich Arbeitsteilung verändert</h3>
                <p className='paragraph'>
                Bei Single-Frauen und -Männern gibt es kaum Unterschiede in der Aufteilung zwischen Erwerbsarbeit und unbezahlter Care-Arbeit. Beide verbringen ähnlich viel Zeit mit Haushaltstätigkeiten und gehen einer Erwerbsarbeit nach. Doch sobald Menschen in Paarhaushalten leben, beginnt sich die Verteilung zu verändern: Frauen übernehmen im Durchschnitt 50 Minuten mehr unbezahlte Arbeit pro Tag als ihre männlichen Partner.
                </p>
                <p className='paragraph'>
                Besonders deutlich wird die Ungleichverteilung, sobald Kinder ins Spiel kommen. In Paarhaushalten mit einem Kind unter 15 Jahren verbringen Frauen täglich über 4 Stunden mit Care-Arbeit, während Männer weniger als 2 Stunden für Haushalt und Kinderbetreuung aufwenden. Dies geht mit einer gegenläufigen Entwicklung in der Erwerbsarbeit einher: Männer arbeiten in diesem Haushaltstyp fast 2 Stunden mehr pro Tag als Frauen.
                </p>
                <p className='paragraph'>
                Je mehr Kinder im Haushalt leben, desto stärker verstärkt sich dieses Muster. Frauen reduzieren ihre Erwerbsarbeitszeit weiter, um mehr Zeit für Haushalt und Kinder aufzuwenden, während Männer ihre Erwerbsarbeit sogar noch ausweiten. Diese Entwicklung zeigt, dass traditionelle Rollenmuster in Familien trotz gesellschaftlichem Wandel weiterhin tief verankert sind. Auch bei Alleinerziehenden bleibt dieser Unterschied bestehen: Alleinerziehende Männer arbeiten im Durchschnitt mehr, während alleinerziehende Frauen mehr Care-Arbeit leisten. 
                </p>
                <p className='paragraph'>
                Um diese Ungleichheiten zu reduzieren, sind gezielte Maßnahmen erforderlich: Der Ausbau von Kinderbetreuung, Pflegeangeboten und flexibleren Arbeitsmodellen kann Frauen und Männern mehr Spielraum bei der Vereinbarkeit von Beruf und Familie geben. Zudem sind gerechtere Verteilungen von Erwerbs- und Care-Arbeit nicht nur eine Frage individueller Entscheidungen, sondern auch von gesellschaftlichen Strukturen und politischen Rahmenbedingungen.
                </p>

                <p style={{margin: '32px 0 0'}}>TODO: 11_INC_SEX_HHTYPE_TU hover effects</p>
                
                <div className="image-container box-plot-container">
                    <img src={`${process.env.PUBLIC_URL}/images/11_INC_SEX_HHTYPE_TU.png`} alt="box plot visualizing income based on sex and household type" />
                </div>

                {/* Check if h2 or h3 */}
                <h3 className="content-header">Gemeindegrößeklasse: Stadt oder Land? Wie der Wohnort die Arbeitsteilung beeinflusst</h3>
                <p className='paragraph'>
                Schaut man sich die Zeitverwendung in unterschiedlichen Gemeindegrößen an, zeigt sich ein klares Muster: Frauen in den ländlichsten Gemeinden leisten täglich mehr als eine Stunde mehr Care-Arbeit als Frauen in Wien. Je größer die Gemeinde, desto geringer wird der Anteil an unbezahlter Arbeit, den Frauen übernehmen.
                </p>
                <p className='paragraph'>
                Bei Männern hingegen bleibt die Verteilung nahezu unverändert – egal, ob sie in einer kleinen Landgemeinde oder in einer Großstadt leben. Während Frauen auf dem Land also mehr Zeit für Haushalt, Kinderbetreuung und Pflege aufwenden, verändert sich der Anteil der männlichen Care-Arbeit kaum.
                </p>

                <p className='paragraph'>
                Dies zeigt, dass ländliche Regionen weniger Infrastruktur für unterstützende Dienstleistungen bieten, wodurch mehr Care-Arbeit privat organisiert werden muss. Weniger verfügbare Kinderbetreuungsplätze, längere Wege zu Ärzt:innen oder soziale Erwartungen in kleinen Gemeinden können dazu führen, dass Frauen auf dem Land mehr unbezahlte Arbeit übernehmen und dadurch oft weniger Erwerbsarbeit leisten können.
                </p>

                <p style={{margin: '32px 0 0'}}>TODO: 12_INC_SEX_GEMGRO_TU hover effects</p>
                
                <div className="image-container box-plot-container">
                    <img src={`${process.env.PUBLIC_URL}/images/12_INC_SEX_GEMGRO_TU.png`} alt="box plot visualizing income based on sex and community size" />
                </div>

                <div className='paragraph' style={{margin: '32px 0 0'}}>
                    <p>
                    Zusammenhang zwischen der Erreichbarkeit sozialer Infrastruktur (z. B. Kinderbetreuung, Gesundheitsversorgung) und Zeitverwendung.
                    </p>
                    <ul className="custom-list">
                        <li>Wie beeinflussen lange Pendelzeiten oder weite Wege zur Infrastruktur die tägliche Zeitaufteilung?</li>
                        <li>Haben Regionen mit besser ausgebauter Infrastruktur geringere Zeitbelastungen für Hausarbeit und Mobilität?</li>
                    </ul>
                </div>
            </div>
    );
};

export default TimeUsageSection;