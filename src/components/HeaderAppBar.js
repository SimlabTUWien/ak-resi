import React, { useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

import PaymentsIcon from '@mui/icons-material/Payments';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageToggle from "./LanguageToggle";

const menuItems = [
  { text: "Residualeinkommen", section: "income", icon: <PaymentsIcon /> },
  { text: "Soziale Infrastruktur", section: "social-infrastructure", icon: <RoomIcon /> },
  { text: "Zeitverwendung", section: "time-usage", icon: <AccessTimeIcon /> },
];

const linkItems = [
  { text: "Glossar", link: "/glossar", icon: <ImportContactsIcon /> },
  { text: "Impressum", link: "/impressum", icon: <DescriptionIcon /> },
  { text: "Team", link: "/team", icon: <Diversity3Icon /> },
  { text: "Datenschutzerklärung", link: "/dataprivacy", icon: <span className="material-symbols-outlined">shield_locked</span> }
];

export default function HeaderAppBar({ show }) {

  const [language, setLanguage] = useState("DE");

  const [scrollY, setScrollY] = useState(window.scrollY);
  const viewHeight = window.innerHeight;

  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundColor = location.pathname === "/" 
    ?  scrollY < viewHeight
      ? "rgba(0,0,0,.2)" 
      : "rgba(0,0,0,.4)"
    : "rgba(0,0,0,.4)";

  useEffect(() => {
    if (pendingScrollTarget && location.pathname === "/") {
      const scrollToTarget = () => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            const section = document.getElementById(pendingScrollTarget);
            if (section) {
              const yOffset = -40; // Adjust if needed
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

  // const [anchorElLanguage, setAnchorElLanguage] = React.useState(null);

  // const handleOpenLanguageMenu = (event) => {
  //   setAnchorElLanguage(event.currentTarget);
  // };

  // const handleCloseLanguageMenu = () => {
  //   setAnchorElLanguage(null);
  // };
  
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
            <Box component="img" src={`${process.env.PUBLIC_URL}/images/Logo_project_small.png`} alt="Project Logo"
              onClick={toggleDesktopDrawer(true)}
              sx={{
                // display: { xs: 'none', md: 'flex' },  // changed from mid to large
                display: { xs: 'none', lg: 'flex' }, 
                mr: 1, 
                height: 36, 
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
                    <ListItemButton onClick={() => navigateToLink(item.link)}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>


            <Typography variant="h5" 
              sx={{
                mr: 2,
                display: { xs: 'none', lg: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 500,
                fontSize: '2.5rem',
                userSelect: "none",
                WebkitTapHighlightColor: "transparent"
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
                    fontSize: 'medium',
                    // transform: "translateY(3px)",
                    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.1)" }
                  }}
                >
                  {/* {item.text} */}
                  <span style={{ display: "inline-block", transform: "translateY(1px)" }}>{item.text}</span>
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
                      <ListItemButton onClick={() => navigateToLink(item.link)}>
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
                height: 36, 
                marginRight: 1,
                marginLeft: 1
              }} 
            />
            <Typography variant="h5" 
              sx={{
                mr: 2, 
                display: { xs: 'flex', lg: 'none' }, 
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 500,
                fontSize: '2rem',
                margin: 0,
                userSelect: "none",
                WebkitTapHighlightColor: "transparent"
              }}
            >
              Re:sI:Ze
            </Typography>
            
            {/* Language Toggle */}
            <Box sx={{ flexGrow: 0 }}>
              <LanguageToggle currentLanguage={language} onChangeLanguage={setLanguage} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}