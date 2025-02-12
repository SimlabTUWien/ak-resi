import React, { useState, useEffect } from "react";
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
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import LanguageIcon from '@mui/icons-material/Language';
import PaymentsIcon from '@mui/icons-material/Payments';
import RoomIcon from '@mui/icons-material/Room';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DescriptionIcon from '@mui/icons-material/Description';

const languages= ['DE', 'EN'];

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

  const [pendingScrollTarget, setPendingScrollTarget] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

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
    setDrawerOpen(false);
  };

  const navigateToLink = (link) => {
    navigate(link);
    setDrawerOpen(false);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);


  const toggleMobileDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };


  const [anchorElLanguage, setAnchorElLanguage] = React.useState(null);

  const handleOpenLanguageMenu = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null);
  };
  
  return (
    <Slide direction="down" in={show} mountOnEnter unmountOnExit>
      {/* <AppBar position="fixed" sx={{ backgroundColor: "#d2d5cb", color: "black" }}> */}
      <AppBar position="fixed" sx={{ backgroundColor: "#566060", color: "white" }}>
        <Container maxWidth="xl" sx={{ maxWidth: "1300px !important" }}>
          <Toolbar disableGutters>

            {/* Dektop View */}

            <Box component="img" src="/Logo_project_small.png" alt="Project Logo"
              onClick={() => scrollToSection("intro")}
              sx={{
                display: { xs: 'none', md: 'flex' }, 
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
            <Typography variant="h5" 
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 500,
                fontSize: '2.5rem'
              }}
            >
              Re:sI:Ze
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                open={drawerOpen}
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

              {/* <Drawer
              anchor="top"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{ "& .MuiDrawer-paper": { backgroundColor: "#ececec" } }}
              >
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton
                        onClick={() => scrollToSection(item.section)}
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
              </Drawer> */}
            </Box>

            <Box component="img" src="/Logo_project_small.png" alt="Project Logo" 
              onClick={() => scrollToSection("intro")}
              sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 1, 
                height: 36, 
                marginRight: 1 
              }} 
            />
            <Typography variant="h5" 
              sx={{
                mr: 2, 
                display: { xs: 'flex', md: 'none' }, 
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 500,
                fontSize: '2rem'
              }}
            >
              Re:sI:Ze
            </Typography>
            
            {/* Language button */}
            
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Change language">
                {/* < IconButton color="#566060" onClick={handleOpenLanguageMenu} sx={{ p: 0 }}> */}
                < IconButton color="#566060" onClick={handleOpenLanguageMenu} sx={{ p: 0, fontSize: "1.6rem" }}>
                  <LanguageIcon fontSize="inherit"/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '35px' }}
                id="menu-appbar"
                anchorEl={anchorElLanguage}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElLanguage)}
                onClose={handleCloseLanguageMenu}
                disableScrollLock // 👈 This prevents the body padding issue!
              >
                {languages.map((language) => (
                  <MenuItem key={language} onClick={handleCloseLanguageMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{language}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}