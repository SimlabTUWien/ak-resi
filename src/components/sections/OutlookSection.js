import React from 'react';
import OutlookChart from '../OutlookChart';

const OutlookSection = () => {
    return (
        <div>
            <h2 className="section-header">Was nun?</h2>

            <p className='paragraph'>
                Ungleichheit ist mehr als nur eine Frage des Einkommens. Wer wie viel verdient, bestimmt zwar den monetären Spielraum, doch erst im Zusammenspiel mit notwendigen Ausgaben, aufgewandter Zeit (vor allem für Erwerbsarbeit und unbezahlter Arbeit) und öffentlicher sozialer Infrastruktur entsteht ein breiteres Bild sozialer Ungleichheit. Unser Projekt zeigt: Diese Faktoren sind nicht isoliert zu betrachten. Sie verstärken sich gegenseitig und beeinflussen. Um nachhaltige Lösungen zu entwickeln, muss Politik diese Zusammenhänge anerkennen und gezielt eingreifen.
            </p>

            <div className='outlook-chart'>
                <OutlookChart />
            </div>
        </div>
    );
};

export default OutlookSection;