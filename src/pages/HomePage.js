import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

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

export default function HomePage () {
    
    const { language } = useLanguage();

    const translations = {
        DE: {
            title: "Perspektiven auf Ungleichheit in Österreich",
            subTitle: "Residualeinkommen, soziale Infrastruktur und Zeitverwendung",
            contentInformation: "In den weiteren Teilen dieser Website werden nun Einblicke in alle diese Bereiche und deren Schnittstellen gegeben:"
        },
        EN: {
            title: "Perspectives on Inequality in Austria",
            subTitle: "Residual Income, Social Infrastructure and Time Usage",
            contentInformation: "The following sections of this site offer insights into all of these areas and their intersections:"
        }
    };

    const t = translations[language] || translations.DE;

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
            {/* <h3> {t.subTitle} </h3>

            <div className='image-container logo-large'>
                <img style={{width: '240px'}} src={`${process.env.PUBLIC_URL}/images/Logo_project_icons.png`} alt="showing the four core aspects of the project" />
            </div> */}
            </section>
        </div>


        {/* Scrollable Content */}
        <div className="content-wrapper">

            <section className='background' id="background">
                <BackgroundSection />
            </section>

            <p className='paragraph content-information'> {t.contentInformation} </p>

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