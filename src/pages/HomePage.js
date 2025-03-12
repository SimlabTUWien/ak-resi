import React, { useState, useEffect } from "react";

import HeaderSection from "../components/sections/HeaderSection";
import BackgroundSection from "../components/sections/BackgroundSection";
import IncomeSection from "../components/sections/IncomeSection";
import ResidualIncomeSection from "../components/sections/ResidualIncomeSection";
import SocialInfrastructureSection from "../components/sections/SocialInfrastructureSection";
import TimeUsageSection from "../components/sections/TimeUsageSection";
import OutlookSection from "../components/sections/OutlookSection";

import ScrollProgressBar from '../components/ScrollProgressBar';
import FloatingButton from "../components/FloatingButton";

import "../styles/HomePage.css";

export default function HomePage() {

    const [showFloatingButton, setShowFloatingButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setShowFloatingButton(window.scrollY > 1400);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <>

        <HeaderSection />

        <div className='title-wrapper'>
            <section className="title-section" id="intro">
            
            <h1 className="title">Perspektiven auf Ungleichheit in Österreich</h1>
            <h3>Residualeinkommen, soziale Infrastruktur und Zeitverwendung</h3>

            <div className='image-container logo-large'>
                <img style={{width: '240px'}} src={`${process.env.PUBLIC_URL}/images/Logo_project_icons.png`} alt="showing the four core aspects of the project" />
            </div>
            </section>
        </div>


        {/* Scrollable Content */}
        <div className="content-wrapper">

            <section className='background' id="background">
                <BackgroundSection />
            </section>

            <section id="income">
                <IncomeSection />
            </section>

            <section id="residualIncome">
                <ResidualIncomeSection />
            </section>

            <section id="social-infrastructure">
                <SocialInfrastructureSection />
            </section>

            <section id="time-usage">
                <TimeUsageSection />
            </section>

            <section id="what-now">
                <OutlookSection />
            </section>

        </div>

        <div className="floatingButton-container"> 
            <FloatingButton show={showFloatingButton} />
        </div>

        <div className='progressBar'>
            <ScrollProgressBar />
        </div>
        </>
    );
}