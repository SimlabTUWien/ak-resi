import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <ul className="desktop-nav">
        <li><a href="#background">Hintergrund</a></li>
        <li><a href="#income">Verfügbares Einkommen</a></li>
        <li><a href="#infrastructure">Soziale Infrastruktur</a></li>
      </ul>
      <div className="mobile-menu">
        <MenuIcon onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        {mobileMenuOpen && (
          <ul className="mobile-nav">
            <li><a href="#background">Hintergrund</a></li>
            <li><a href="#income">Verfügbares Einkommen</a></li>
            <li><a href="#infrastructure">Soziale Infrastruktur</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
