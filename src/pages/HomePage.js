import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

import HeaderSection from "../components/sections/HeaderSection";
import BackgroundSection from "../components/sections/BackgroundSection";
import ResidualIncomeSection from "../components/sections/ResidualIncomeSection";
import SocialInfrastructureSection from "../components/sections/SocialInfrastructureSection";
import TimeUsageSection from "../components/sections/TimeUsageSection";
import OutlookSection from "../components/sections/OutlookSection";

import Footer from "../components/Footer";
import ScrollProgressBar from '../components/ScrollProgressBar';
import FloatingButton from "../components/FloatingButton";

import "../styles/HomePage.css";
import Dashboard from "../components/Dashboard";

export default function HomePage () {
    
    const translations = {
        DE: {
            title: "Perspektiven auf Ungleichheit in Österreich",
            subTitle: "Residualeinkommen, soziale Infrastruktur und Zeitverwendung",
            contentInformation: "Die wichtigsten Erkenntnisse des Projekts findest du hier auf einen Blick. In den weiteren Teilen dieser Website werden Einblicke in all diese Bereiche und deren Schnittstellen gegeben:"
        },
        EN: {}
    };

    const { language } = useLanguage();
    const t = translations[language];

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
        <div className='hero-wrapper' id="hero">
            <HeaderSection />   
        </div>

        <div className='title-wrapper'>
            <section className="title-section" id="intro">

            <h1 className="title"> {t.title} </h1>
            </section>
        </div>


        {/* Scrollable Content */}
        <div className="content-wrapper">

            <section className='dashboard'>
                <Dashboard />
            </section>

            <section className='background' id="background">
                <BackgroundSection />
            </section>

            {/* <p className='paragraph content-information'> {t.contentInformation} </p> */}

            {/* TODO: Dashboard */}

            {/*             
            <section id="overview">
                <OverviewSection />
            </section> 
            */}

            {/* <section id="income">
                <IncomeSection />
            </section> */}

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

            <Footer />     
        </div>

        <div className="floatingButton-container"> 
            <FloatingButton show={showFloatingButton} tabIndex={0}/>
        </div>

        <div className='progressBar'>
            <ScrollProgressBar />
        </div>
        </>
    );
}