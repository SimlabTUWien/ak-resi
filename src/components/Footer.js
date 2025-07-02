// import { useNavigate } from 'react-router-dom';
import "../styles/Footer.css";


const Footer = () => {
//   const navigate = useNavigate();

//   const navigateToLink = (link) => {
//     navigate(link);
//   };


//   const links = [
//     { label: 'Glossar', link: '/glossar', isExternal: false },
//     { label: 'Team', link: '/team', isExternal: false },
//     { label: 'Impressum', link: '/impressum', isExternal: false },
//     { label: 'Datenschutzerklärung', link: '/dataprivacy', isExternal: false },
//     { label: 'Institut für Raumplanung', link: 'https://www.tuwien.at/ar/raum', isExternal: true },
//     { label: 'TU Wien', link: 'https://www.tuwien.at/', isExternal: true },
//   ];

  const links = [
    { label: 'Glossar', link: `${window.location.origin}/ak-resi#/glossar`, isExternal: false },
    { label: 'Team', link: `${window.location.origin}/ak-resi#/team`, isExternal: false },
    { label: 'Impressum', link: `${window.location.origin}/ak-resi#/impressum`, isExternal: false },
    { label: 'Datenschutzerklärung', link: `${window.location.origin}/ak-resi#/dataprivacy`, isExternal: false },
    { label: 'Institut für Raumplanung', link: 'https://www.tuwien.at/ar/raum', isExternal: true },
    { label: 'TU Wien', link: 'https://www.tuwien.at/', isExternal: true },
    { label: 'AK Wien', link: 'https://wien.arbeiterkammer.at/index.html', isExternal: true },
  ];

  return (
    <footer className="footer-wrapper">

        <div className="partners-wrapper">
            <img className="logo-image" src={`${process.env.PUBLIC_URL}/images/IFIP_Logo.png`} alt="Ifip Logo TU Wien" />
            <img className="logo-image" src={`${process.env.PUBLIC_URL}/images/akwienrot_highres.png`} alt="AK Wien Logo" />
        </div>

      <div className="links-wrapper">
        {links.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="footer-link">
              {item.label}
            </a>
        ))}
        
        {/* {links.map((item, index) => (
          item.isExternal ? (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="footer-link">
              {item.label}
            </a>
          ) : (
            <a key={index} onClick={() => navigateToLink(item.link)} className="footer-link">
              {item.label}
            </a>
          )
        ))} */}
      </div>

      <hr className="footer-divider" />

      <div className="copyright">
        <span>&copy; 2025 Re:sI:Ze</span>
      </div>
    </footer>
  );
};

export default Footer;
