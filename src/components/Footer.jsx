import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { quickLinks } from "../constants";

const Footer = () => {
  return (
    <Card className="text-center border-none rounded-none">
      <Card.Header className="bg-opacity-90 bg-[#22333B] !border-none !rounded-none">
        <Container
          fluid="md"
          className="h-40 flex justify-between items-center md:h-auto md:flex-col"
        >
          <section className="flex justify-content-start align-items-start md:py-3">
            <div className="mr-2 mt-2 md:mr-4">
              <Image src="/assets/footer/iconPhone.png" />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start">
              <span className="text-white font-medium mb-2">
                Transform your Home
              </span>
              <div className="d-flex justify-content-center align-items-center">
                <Image src="/assets/footer/pyaStore1.png" className="mr-2" />
                <Image src="/assets/footer/pyaStore2.png" />
              </div>
            </div>
          </section>
          <section className="d-flex justify-content-center align-items-start md:py-3">
            <div className="mr-2 mt-2 md:mr-4">
              <Image src="/assets/footer/envelope.png" />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start">
              <span className="text-white font-medium mb-2">
                Get special discount
              </span>
              <div className="d-flex justify-content-center align-items-center">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email address"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    className="p-0 cursor-pointer"
                  >
                    <Image src="/assets/footer/Submit.png" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </section>
          <section className="d-flex justify-content-center align-items-start md:py-3">
            <div className="mr-2 mt-2 md:mr-4">
              <Image src="/assets/footer/telephone.png" />
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start">
              <span className="text-white font-medium mb-2">
                Contact Us{" "}
                <span className="font-normal text-sm">
                  (Mon to Sat, 10AM to 7PM)
                </span>
              </span>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <Image src="/assets/footer/whatsappLogo.png" />
                  <span className="text-white font-medium ml-2">
                    +91-8035388980
                  </span>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <Image src="/assets/footer/callSharp.png" />
                  <span className="text-white font-medium ml-2">
                    +91-8035388980
                  </span>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Card.Header>
      <section className="bg-[#22333B]">
        <Container
          fluid="md"
          className="h-96 d-flex justify-content-center align-items-center md:h-auto"
        >
          <Card.Body className="flex justify-between items-start md:flex-col md:justify-center md:items-start md:my-4 md:h-auto">
            <section className="w-72 d-flex flex-column justify-content-start align-items-start mr-28 md:w-auto">
              <Image src="assets/footer/logo.png" className="w-40" />
              <p className="text-white text-left my-4">
                Frikly is your one-stop destination for everything a home needs.
                We extend seamless assistance to anyone, anywhere, helping
                create the comforting ambiance of home.
              </p>
              <div className="d-flex justify-content-center align-items-center gap-4">
                <Image src="/assets/footer/socialMediaIcon1.png" />
                <Image src="/assets/footer/socialMediaIcon2.png" />
                <Image src="/assets/footer/socialMediaIcon3.png" />
                <Image src="/assets/footer/socialMediaIcon4.png" />
              </div>
            </section>
            <section className="d-flex flex-column justify-content-start align-items-start md:mt-8">
              <h2 className="text-[#EAE0D5] text-xl font-semibold mb-4 ">
                QUICK LINK
              </h2>
              <div className="text-white font-normal text-sm">
                {quickLinks.map((column, index) => (
                  <div
                    key={index}
                    className="gap-36 d-flex justify-content-start align-items-start md:gap-8 [&>*:not(:first-child):not(:nth-child(2))]:md:hidden"
                  >
                    {Object.values(column).map((links, linksIndex) => (
                      <div
                        key={linksIndex}
                        className="gap-4 flex flex-col justify-start items-start"
                      >
                        {Object.values(links).map((link) => (
                          <span key={link.id}>{link.name}</span>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          </Card.Body>
        </Container>
        <Container fluid="md">
          <Card.Footer className="border-[#9B9B9B] border-t-[1px] flex justify-between items-center md:flex-col-reverse md:justify-center">
            <div className="text-white font-medium text-sm md:py-2 md:text-xs">
              <span>
                © Copyright {new Date().getFullYear()} by Malu Technologies Pvt
                Ltd
              </span>
            </div>
            <div className="flex justify-between items-center text-white font-medium text-sm md:py-2 md:text-xs md:w-full">
              <span className="mr-4">Privacy Policy</span>
              <span>Terms & Conditions</span>
              <span className="lg:hidden">Lorem ipsum </span>
            </div>
          </Card.Footer>
        </Container>
      </section>
    </Card>
  );
};

export default Footer;
