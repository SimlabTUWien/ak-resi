import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Slide,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import PaymentsIcon from "@mui/icons-material/Payments";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function HeaderAppBar({ show }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false);
  };

  const menuItems = [
    { text: "Einkommen", section: "income", icon: <PaymentsIcon /> },
    { text: "Soziale Infrastruktur", section: "social-infrastructure", icon: <RoomIcon /> },
    { text: "Zeitverwendung", section: "time-usage", icon: <AccessTimeIcon /> },
  ];

  return (
    <Slide direction="down" in={show} mountOnEnter unmountOnExit>
      <AppBar position="fixed" sx={{ backgroundColor: "#d2d5cb", color: "black" }}>
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          
          {/* LEFT SECTION - Menu Icon (Small Screens) + Logo + Title */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* Menu Icon on Small Screens */}
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", md: "none" }, mr: 1 }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Box
              component="img"
              src="/Logo_project_small.png"
              alt="Project Logo"
              sx={{
                height: 40,
                display: "block",
                mr: { md: 2, xs: 0 },
                flexShrink: 0,
              }}
            />

            {/* Project Title (Visible on Large Screens) */}
            <Typography
              variant="h6"
              component="h1"
              sx={{
                display: { xs: "none", md: "block" },
                // fontWeight: "bold",
                // ml: 1,
              }}
            >
              Re:sIZE
            </Typography>
          </Box>

          {/* CENTER SECTION (ONLY on Small Screens) - Centered Logo + Title */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Re:sIZE</Typography>
          </Box>

          {/* NAVIGATION ITEMS - Hidden on Small Screens */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 3 }}>
            {menuItems.map((item) => (
              <Typography
                key={item.text}
                variant="h6"
                sx={{ cursor: "pointer" }}
                onClick={() => scrollToSection(item.section)}
              >
                {item.text}
              </Typography>
            ))}
          </Box>

          {/* RIGHT SECTION - Always Show Globe Icon */}
          <IconButton color="inherit">
            <LanguageIcon />
          </IconButton>

          {/* DRAWER MENU (For Small Screens) */}
          <Drawer
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
                    sx={{
                      padding: "12px 16px",
                      transition: "background-color 0.2s ease-in-out",
                      "&:active, &:focus": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
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
        </Toolbar>
      </AppBar>
    </Slide>
  );
}



// import React, { useState } from "react";
// import { AppBar, Toolbar, Typography, Slide, Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton,ListItemIcon } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import LanguageIcon from '@mui/icons-material/Language';
// import PaymentsIcon from '@mui/icons-material/Payments';
// import RoomIcon from '@mui/icons-material/Room';
// import AccessTimeIcon from "@mui/icons-material/AccessTime";

// export default function HeaderAppBar({ show }) {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   // Function to toggle the drawer
//   const toggleDrawer = (open) => (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   // Function to scroll to a section
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//     setDrawerOpen(false); // Close the drawer after clicking
//   };

//   const menuItems = [
//     { text: "Einkommen", section: "income", icon: <PaymentsIcon /> },
//     { text: "Soziale Infrastruktur", section: "social-infrastructure", icon: <RoomIcon /> },
//     { text: "Zeitverwendung", section: "time-usage", icon: <AccessTimeIcon /> },
//   ];

//   return (
//     <Slide direction="down" in={show} mountOnEnter unmountOnExit>
//       <AppBar position="fixed" sx={{ backgroundColor: "#d2d5cb", color: "black" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           {/* Logo + Title */}
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <Box component="img" src="/Logo_project_small.png" alt="Project Logo" sx={{ height: 40, marginRight: 1 }} />
//             <Typography variant="h4">Re:sIZE</Typography>
//           </Box>

//           {/* Section Navigation (hidden on small screens) */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//             <Typography variant="h6" sx={{ cursor: "pointer" }} onClick={() => scrollToSection("income")}>
//               Einkommen
//             </Typography>
//             <Typography variant="h6" sx={{ cursor: "pointer" }} onClick={() => scrollToSection("social-infrastructure")}>
//               Soziale Infrastruktur
//             </Typography>
//             <Typography variant="h6" sx={{ cursor: "pointer" }} onClick={() => scrollToSection("time-usage")}>
//               Zeitverwendung
//             </Typography>
//           </Box>

//           {/* Burger Menu for Mobile Screens */}
//           <IconButton
//             edge="end"
//             color="inherit"
//             onClick={toggleDrawer(true)}
//             sx={{ display: { xs: "block", md: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
          
//           <Drawer
//             anchor="top"
//             open={drawerOpen}
//             onClose={toggleDrawer(false)}
//             sx={{ "& .MuiDrawer-paper": { backgroundColor: "#ececec" } }} // Change background color
//           >
//             <List>
//               {menuItems.map((item, index) => (
//                 <ListItem key={index} disablePadding>
//                   <ListItemButton 
//                   className="list-item-button" 
//                   onClick={() => scrollToSection(item.section)}
//                   >
//                     <ListItemIcon>{item.icon}</ListItemIcon>
//                     <ListItemText 
//                       primary={item.text} 
//                       className="list-item-text"
//                     />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//           </Drawer>
//         </Toolbar>
//       </AppBar>
//     </Slide>
//   );
// }
