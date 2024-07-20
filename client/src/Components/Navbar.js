import React, { useState} from "react";
import Logo from "../Assets/Bhoomii.png";
// import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom"; // Import Link from React Router DOM



const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", id: "home" },
    { text: "About us", id: "about" },
    { text: "Services", id: "service" },
    { text: "Motive", id: "motive" },
    { text: "Contact", id: "contact" },
  ];

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 100; // Adjust this offset if needed
      const targetPosition = targetElement.offsetTop - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // Adjust the duration for slower scrolling

      let start = null;
      window.requestAnimationFrame(step);

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      }

      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }
    }
  };

  

  const handleLoginClick = () => {
    // Navigate to the login page using React Router Link
    return <Link to="/login" />;
  };

  return (


    <nav id="navbar">
      <div className="nav-logo-container">
        <a href="#home">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a key={item.text} href={`#${item.id}`} onClick={() => smoothScroll(item.id)}>
            {item.text}
          </a>
        ))}
        </div>
        

          <Link to="/login" className="primary-button">
          Log In
        </Link>

      
        {/* <Link to="/login" className="primary-button">
          Log In
        </Link> */}
      
      {/* <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div> */}
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => smoothScroll(item.id)}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

