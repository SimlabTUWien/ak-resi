import React from 'react';
import GlossaryTerm from '../GlossaryTerm';

const IncomeSection = () => {
    return (
        <div>
            <h2 className="content-header">Wieviel Einkommen haben die Haushalte?</h2>
            <p className='paragraph'>
                Das Haushaltseinkommen ist ein zentraler Indikator für wirtschaftliche Ungleichheit und Lebensstandard in Österreich. Um eine präzisere Analyse der Einkommensverteilung zu ermöglichen, wird das Haushaltseinkommen häufig in sogenannte <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> eingeteilt. Aber was bedeutet das genau, und warum ist diese Einteilung sinnvoll?
            </p>

            <h2 className="content-header">Was sind Quintile?</h2>
            <div className='paragraph'>
                <p>Ein <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintil</GlossaryTerm> beschreibt jeweils ein Fünftel der Haushalte, geordnet nach ihrem verfügbaren Einkommen. Das bedeutet:</p>
                <ul className="custom-list background">
                    <li><span className="boldText">Erstes Quintil:</span> Die 20 % der Haushalte mit dem niedrigsten Einkommen</li>
                    <li><span className="boldText">Zweites Quintil:</span> Haushalte mit Einkommen zwischen den unteren 20 % und 40 %</li>
                    <li><span className="boldText">Drittes Quintil:</span> Die mittleren 20 % der Haushalte</li>
                    <li><span className="boldText">Viertes Quintil:</span> Haushalte mit Einkommen zwischen den oberen 40 % und 80 %</li>
                    <li><span className="boldText">Fünftes Quintil:</span> Die 20 % der Haushalte mit dem höchsten Einkommen</li>
                </ul>
            </div>

            <h2 className="content-header">Warum teilen wir das Haushaltseinkommen in Quintile?</h2>
            <p className='paragraph'>
                Die Einteilung in <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> hilft, die Einkommensverteilung und wirtschaftliche Ungleichheiten besser sichtbar zu machen. Während Durchschnittswerte oft verzerrt sein können (z. B. durch extreme Einkommen an der Spitze), zeigen Quintile deutlicher, wie Einkommen auf verschiedene gesellschaftliche Gruppen verteilt sind. 
            </p>

            <div className="image-container median-hh-income-container">
                <img src={`${process.env.PUBLIC_URL}/images/00_Median_HH_Income_Personen_DE.png`} alt="showing median household income" />
            </div>

            <p className='paragraph'>
                Das Medianhaushaltseinkommen in Österreich beträgt 2.632€. Dabei zeigt sich eine deutliche Einkommensungleichheit zwischen den verschiedenen Bevölkerungsgruppen. So liegt das mittlere Einkommen des ersten Quintils – also jenes Fünftels der Haushalte mit den niedrigsten Einkommen – bei lediglich 1.247€ und damit deutlich unter dem österreichweiten Median. Im Gegensatz dazu verfügt das oberste Quintil, also die einkommensstärksten 20% der Haushalte, über ein mittleres Einkommen von über 4.500€. Das bedeutet, dass Haushalte im obersten Quintil im Schnitt mehr als 3.000€ monatlich mehr zur Verfügung haben als jene im untersten Quintil.
            </p>
        </div>
    );
};

export default IncomeSection;