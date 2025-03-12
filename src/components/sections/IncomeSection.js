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
                    <li>Erstes Quintil: Die 20 % der Haushalte mit dem niedrigsten Einkommen</li>
                    <li>Zweites Quintil: Haushalte mit Einkommen zwischen den unteren 20 % und 40 %</li>
                    <li>Drittes Quintil: Die mittleren 20 % der Haushalte</li>
                    <li>Viertes Quintil: Haushalte mit Einkommen zwischen den oberen 40 % und 80 %</li>
                    <li>Fünftes Quintil: Die 20 % der Haushalte mit dem höchsten Einkommen</li>
                </ul>
            </div>

            <h2 className="content-header">Warum teilen wir das Haushaltseinkommen in Quintile?</h2>
            <p className='paragraph'>
                Die Einteilung in <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> hilft, die Einkommensverteilung und wirtschaftliche Ungleichheiten besser sichtbar zu machen. Während Durchschnittswerte oft verzerrt sein können (z. B. durch extreme Einkommen an der Spitze), zeigen <GlossaryTerm className="glossary-term quintil" sectionId="income">Quintile</GlossaryTerm> deutlicher, wie Einkommen auf verschiedene gesellschaftliche Gruppen verteilt sind. 
            </p>

            <div className="image-container median-hh-income-container">
                <img src={`${process.env.PUBLIC_URL}/images/00_Median_HH_Income_Personen.svg`} alt="showing median household income" />
            </div>

            <p style={{margin: '32px 0 0'}}>TODO: wollt ihr hier die Werte nochmals in textueller Form?: Das Medianhaushaltseinkommen in Österreich ist XX. Das erste Quintil XXX.</p>
        </div>
    );
};

export default IncomeSection;