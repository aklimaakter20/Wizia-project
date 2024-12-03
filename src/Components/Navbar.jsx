import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

function NavbarArea() {
  return (
    <>
      <Navbar shouldHideOnScroll isBlurred={false} className='bg-secondary w-full lg:px-20' maxWidth='xl'>
        <NavbarBrand>
          <div className='w-16'>
          <img src="Logo.png" alt="" />
          </div>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem> 
            <Link color="foreground" href="#">About Us</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">Pricing</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">Customers</Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">Solutions</Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem className='flex gap-4'>
          <Button as={Link} className='bg-primary'    radius= 'full'>Book a Demo</Button>
          <Button as={Link} className='color-foreground' variant= 'bordered' radius= 'full'>Contact Us</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}

export default NavbarArea
