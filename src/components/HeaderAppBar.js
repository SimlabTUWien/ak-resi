import { useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { 
  AppBar, 
  Toolbar,
  Slide,
  Typography, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemButton, 
  ListItemIcon 
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import HomeIcon from '@mui/icons-material/Home';
import PaymentsIcon from '@mui/icons-material/Payments';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DescriptionIcon from '@mui/icons-material/Description';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LanguageToggle from "./LanguageToggle";

export default function HeaderAppBar({ show }) {

  const { language } = useLanguage();

  // const [scrollY, setScrollY] = useState(window.scrollY);
  // const viewHeight = window.innerHeight;

  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const translations = {
    DE: {
      home: "Re:sI:Ze",
      residualIncome: "Residualeinkommen",
      socialInfrastructure: "Soziale Infrastruktur",
      timeUsage: "Zeitverwendung",
      glossary: "Glossar",
      imprint: "Impressum",
      team: "Team",
      privacy: "Datenschutzerklärung",
      // privacy: "Privacy",
      alt: "Logo des Re:sI:Ze Projekts",
    },
    EN: {
      home: "Re:sI:Ze",
      residualIncome: "Residual Income",
      socialInfrastructure: "Social Infrastructure",
      timeUsage: "Time Usage",
      glossary: "Glossary",
      imprint: "Imprint",
      team: "Team",
      privacy: "Privacy Policy",
      alt: "Logo of the Re:sI:Ze project",
    }
  };

  const t = translations[language] || translations.DE;

  const menuItems = [
    { text: t.residualIncome, section: "residualIncome", icon: <PaymentsIcon /> },
    { text: t.socialInfrastructure, section: "social-infrastructure", icon: <RoomIcon /> },
    { text: t.timeUsage, section: "time-usage", icon: <AccessTimeIcon /> },
  ];
  
  const linkItems = [
    { text: t.home, link: "/", section: "intro", icon: <HomeIcon /> },
    { text: t.glossary, link: "/glossar", icon: <ImportContactsIcon /> },
    { text: t.imprint, link: "/impressum", icon: <DescriptionIcon /> },
    { text: t.team, link: "/team", icon: <Diversity3Icon /> },
    // { text: t.privacy, link: "/dataprivacy", icon: <span className="material-symbols-outlined">shield_locked</span> }
    { text: t.privacy, link: "/dataprivacy", icon: <PrivacyTipIcon /> }
  ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const backgroundColor = "rgba(0,0,0,.4)"

  // const backgroundColor = location.pathname === "/" 
    // ?  scrollY < viewHeight
    //   ? "rgba(0,0,0,.2)"
    //   : "rgba(0,0,0,.35)"
    // : "rgba(0,0,0,.35)"; 
    //  //   : "rgba(0,0,0,.45)"
    //  // : "rgba(0,0,0,.45)";

  useEffect(() => {
    if (pendingScrollTarget && location.pathname === "/") {
      const scrollToTarget = () => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const section = document.getElementById(pendingScrollTarget);
            if (section) {
              const yOffset = -40;
              const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
              setPendingScrollTarget(null);
            }
          }, 300); // Small delay to ensure content is fully rendered
        });
      };
  
      scrollToTarget();
    }
  }, [location.pathname, pendingScrollTarget]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      setPendingScrollTarget(id); // Store the target section
      navigate("/"); // Navigate to HomePage first
    } else {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -40;
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setMobileDrawerOpen(false);
    setDesktopDrawerOpen(false);
  };

  const navigateToLink = (link) => {
      navigate(link);
      setMobileDrawerOpen(false);
      setDesktopDrawerOpen(false);
  };

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [desktopDrawerOpen, setDesktopDrawerOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDesktopDrawerOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  const toggleMobileDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setMobileDrawerOpen(open);
  };

  const toggleDesktopDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDesktopDrawerOpen(open);
  };

  return (
    <Slide direction="down" in={show} mountOnEnter unmountOnExit>
      {/* <AppBar position="fixed" sx={{ backgroundColor: "#d2d5cb", color: "black" }}> */}
      {/* <AppBar position="fixed" sx={{ backgroundColor: "#566060", color: "white" }}> */}
      <AppBar 
        position="fixed" 
        sx={{ 
          // backgroundColor: "rgba(86, 96, 96, 0.6)",
          backgroundColor: backgroundColor,
          backdropFilter: "blur(10px)",
          color: "white", 
          // color: "black", 
          // boxShadow: "none"
        }}
      >
        <Container maxWidth="xl" sx={{ maxWidth: "1300px !important" }}>
          <Toolbar disableGutters>

            {/* Dektop View */}
            <Box component="img" 
              src={`${process.env.PUBLIC_URL}/images/Logo_project_small.png`} 
              alt={t.alt}
              tabIndex={0}
              onClick={toggleDesktopDrawer(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  toggleDesktopDrawer(true)(e);
                }
              }}
              sx={{
                // display: { xs: 'none', md: 'flex' },  // changed from mid to large
                display: { xs: 'none', lg: 'flex' }, 
                mr: 1, 
                height: 42, 
                marginRight: 1,
                cursor: 'pointer',
                transition: "0.3s ease-in-out",
                "&:hover": {
                  filter: "brightness(0.95)",
                }
              }} 
            />

            {/* Desktop Drawer */}
            <Drawer
              anchor="left"
              open={desktopDrawerOpen}
              onClose={toggleDesktopDrawer(false)}
              sx={{ "& .MuiDrawer-paper": { backgroundColor: "#ececec", width: 280 } }} // Adjust width if necessary
            >
              <List>
                {linkItems.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        if (item.link === "/" && item.section === "intro") {
                          scrollToSection("intro");
                        } else {
                          navigateToLink(item.link);
                        }
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText 
                        primary={item.text}
                        sx={{
                          textAlign: "left",
                          hyphens: "none"
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>


            <Typography variant="h5"
              onClick={() => scrollToSection("intro")}
              sx={{
                mr: 2,
                display: { xs: 'none', lg: 'flex' },
                // fontFamily: 'monospace',
                // fontWeight: 500,
                paddingTop: '10px',
                fontSize: '2.6rem',
                userSelect: "none",
                WebkitTapHighlightColor: "transparent",
                cursor: 'pointer',
                transition: "0.3s ease-in-out",
                "&:hover": {
                  filter: "brightness(0.9)",
                }
              }}
            >
              Re:sI:Ze
            </Typography>

            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
              {menuItems.map((item, index) => (
                <Button key={index}
                  onClick={() => scrollToSection(item.section)}
                  sx={{ 
                    my: 2, 
                    color: 'inherit',
                    fontSize: 'large',
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" }
                  }}
                >
                  <label>{item.text}</label>
                </Button>
              ))}
            </Box>
            

            {/* Mobile View */}

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu button for toggel navigation items"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleMobileDrawer(true)}
                color="inherit"
                // color="#566060"
                sx={{ p: 0 }}
                // sx={{ p: 0, fontSize: "1.6rem" }}
              >
                <MenuIcon />
                {/* <MenuIcon fontSize="inherit" /> */}
              </IconButton>
              <Drawer
                anchor="top"
                open={mobileDrawerOpen}
                onClose={toggleMobileDrawer(false)}
                sx={{ "& .MuiDrawer-paper": { backgroundColor: "#ececec" } }}
              >
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton onClick={() => scrollToSection(item.section)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                          primary={item.text}
                          sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "#333" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}

                  <Divider sx={{ my: 1 }} />

                  {linkItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          if (item.link === "/" && item.section === "intro") {
                            scrollToSection("intro");
                          } else {
                            navigateToLink(item.link);
                          }
                        }}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText
                          primary={item.text}
                          sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "#333" }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </Box>

            <Box component="img" src={`${process.env.PUBLIC_URL}/images/Logo_project_small.png`} alt="Project Logo" 
              onClick={() => scrollToSection("intro")}
              sx={{
                display: { xs: 'flex', lg: 'none' },
                mr: 1, 
                height: 40, 
                marginRight: 1,
                marginLeft: 1.2
              }} 
            />
            <Typography variant="h5"
              onClick={() => scrollToSection("intro")} 
              sx={{
                mr: 2, 
                display: { xs: 'flex', lg: 'none' }, 
                flexGrow: 1,
                // fontFamily: 'monospace',
                // fontWeight: 500,
                paddingTop: '8px',
                fontSize: '2rem',
                margin: 0,
                userSelect: "none",
                WebkitTapHighlightColor: "transparent"
              }}
            >
              Re:sI:Ze
            </Typography>
            
            {/* Language Toggle */}
            <Box sx={{ flexGrow: 0 }}   >
              <LanguageToggle tabIndex={0}/>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}