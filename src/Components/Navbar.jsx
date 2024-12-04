import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from '@mui/material/styles';

function Navbar() {
   const [open, setOpen] = useState(false)
   const Theme = useTheme();
   const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"))

   const menuItems = ["About Us", "Pricing", "Customers", "Solutions"];
  return (
    <>
      <AppBar elevation={0} className='Navbar' position='static' sx={{
        backgroundColor: "white",
         color:"inherit",
        justifyContent: "space-around"
         }}/>
      <Toolbar>
        {IsMobile? (
            <div>
                <IconButton color='' onClick={()=> setOpen(true)}>
                    <MenuIcon />
                    </IconButton>
            </div>
        ) : (
            <>
            <Typography sx={{
                flexGrow:1
               
                }}>
                <img src="/Logo.png" alt="" />
            </Typography>

            {menuItems.map((item) => (
                <Button key={item} sx={{ color: '#fff', textTransform: 'capitalize', ml: 5, fontSize: "16px", "&:hover":{
                    color: "#0FF1F9"
                } }}>{item}</Button>
            ))}

            <Button variant='outlined' sx={{
                color: "black", 
                backgroundColor:"#0FF1F9",
                borderRadius: "10px",
                mr: 3,
                textTransform: "capitalize",
                ml: 30,
                "&:hover": {
                    backgroundColor: "#0FF1F8",
                }
                }}>
                   Book a Demo
                </Button>
                <Button variant='outlined' sx={{
                color: "white", 
                borderRadius: "10px",
                textTransform: "capitalize",
                
                }}>
                   Contact Us
                </Button>
            </>
        )}
      </Toolbar>
      
      <Drawer anchor='left' open={open} onClose={()=> setOpen(false)}>
        <List>
            {menuItems.map((item)=>(
                <ListItem button key={item} onClick={()=> setOpen(false)}>
                    <ListItemText>{item}</ListItemText>
                </ListItem>
            ))}
            <ListItem button> <ListItemText primary=" Book a Demo" /> </ListItem>
            <ListItem button > <ListItemText primary=" Contact Us" /> </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default Navbar
