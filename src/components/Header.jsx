import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { moreHeader, navbarCards } from "../constants";

const Header = () => {
  const [activeItem, setActiveItem] = useState(moreHeader[0].id);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  return (
    <>
      <Navbar className="bg-[#EAE0D5] p-0">
        <Container
          fluid="md"
          className="text-[#22333B] text-sm flex justify-between items-center sm:text-xs"
        >
          <div className="sm:hidden">
            <Nav className="d-flex justify-content-center align-items-center">
              <Image
                src="assets/header/location.png"
                className="w-3 h-4 sm:hidden"
              />
              <Nav.Link href="#" className="font-medium sm:hidden">
                Enter Pincode
              </Nav.Link>
              <Nav.Link href="#" className="font-normal sm:hidden">
                Change Pincode
              </Nav.Link>
            </Nav>
          </div>
          <div className="d-sm-none">
            <Nav className="d-flex justify-content-start align-items-center">
              <Dropdown as={ButtonGroup} className="border-none">
                <Nav.Link href="#" className="font-medium">
                  Enter Pincode
                </Nav.Link>
                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                  className="border-none bg-transparent active:text-[#22333B] text-[#22333B]"
                />
                <Dropdown.Menu className="p-0">
                  <Dropdown.Item href="#/action-1">
                    <Nav.Link href="#" className="font-normal text-sm">
                      Change Pincode
                    </Nav.Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
          <Nav className="d-flex justify-content-center align-items-center font-normal">
            <Image
              src="assets/header/delivery.png"
              className="w-6 h-6 sm:hidden"
            />
            <Nav.Link href="#">Order Tracking</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar expand="lg">
        <Container fluid="md">
          <section className="w-full flex flex-row justify-between items-center">
            <Navbar.Toggle aria-controls={`navbar-expand-lg`} />
            <Navbar.Brand href="#home" className="sm:ml-12">
              <Image src="assets/logo.png" />
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`navbar-expand-lg`}
              aria-labelledby={`navbarLabel-expand-lg`}
              className="!w-60"
            >
              <Offcanvas.Header closeButton className="z-100">
                <Navbar.Brand href="#home" className="w-20">
                  <Image src="assets/logo.png" />
                </Navbar.Brand>
              </Offcanvas.Header>
              <Offcanvas.Body className="d-flex justify-content-start align-items-start">
                <Nav className="gap flex justify-center items-center font-medium text-base text-[#001C30] sm:justify-start sm:items-start">
                  <Nav.Link href="#">Brands</Nav.Link>
                  <Nav.Link href="#">About Us</Nav.Link>
                  <Nav.Link href="#">Get Quote</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Nav className="md:hidden mr-28">
              <InputGroup className="py-2">
                <Form.Control
                  placeholder="Search on frikly"
                  aria-describedby="basic-addon2"
                  className="border border-[#D3D3D3]"
                />
                <InputGroup.Text
                  id="basic-addon2"
                  className="py-0 px-3  cursor-pointer bg-[#22333B] border-[1px] border-[#22333B]"
                >
                  <Image src="/assets/header/searchIcon.png" />
                </InputGroup.Text>
              </InputGroup>
            </Nav>
            <Nav className="gap-3 text-sm font-medium text-[#001C30] flex justify-center items-center ml-4 sm:text-xs sm:font-normal">
              {navbarCards.map((item, index) => (
                <Nav
                  key={index}
                  className={`flex !flex-col cursor-pointer justify-center items-center !py-2 ${
                    index === 0 ? "" : "md:hidden"
                  }`}
                >
                  <Image src={item.iconSrc} className="w-5 h-5" />
                  <span>{item.label}</span>
                </Nav>
              ))}
            </Nav>
          </section>
          <Nav className="w-full d-md-none px-4 py-2">
            <InputGroup className="py-2">
              <Form.Control
                placeholder="Search"
                aria-describedby="basic-addon2"
                className="border border-[#D3D3D3] mr-3"
              />
              <InputGroup.Text
                id="basic-addon2"
                className="w-10 h-10 cursor-pointer !rounded-full bg-[#22333B] border-[1px] border-[#22333B]"
              >
                <Image src="/assets/header/searchIcon.png" />
              </InputGroup.Text>
            </InputGroup>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="bg-[#22333B] m-0 p-0 md:hidden">
        <Container>
          <Nav className="w-full d-flex justify-content-between align-items-center m-0 p-0">
            {moreHeader.map((item) => (
              <div
                key={item.id}
                className={`text-sm font-medium cursor-pointer mt-4 ${
                  activeItem === item.id ? "text-[#C6AC8F]" : "text-white"
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <span className="py-5 px-4 ">{item.name}</span>
                <div
                  className={`border-t-4 rounded-tr-3xl rounded-tl-3xl  w-full h-0 mt-3 ${
                    activeItem === item.id
                      ? "border-[#C6AC8F]"
                      : "border-transparent"
                  }
                `}
                ></div>
              </div>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
