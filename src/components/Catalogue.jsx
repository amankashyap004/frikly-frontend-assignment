import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { fetchData } from "../api/data";

const Catalogue = () => {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
      setFilteredData(data.catalogue);
    });
  }, []);

  const handleBadgeClick = (index) => {
    setActiveIndex(index);

    if (index === 0) {
      setFilteredData(data.catalogue);
    } else {
      const filtered = data.catalogue.filter((item) => {
        return item.materialType === data.materialType[index].name;
      });
      setFilteredData(filtered);
    }
  };
  return (
    <Container fluid="md" className="my-8">
      <section>
        <div className="d-flex flex-column justify-content-center align-items-center my-4 text-2xl sm:text-base">
          <span className="text-[#001C30]">
            Our Unbeatable <span className="font-bold">Catalogue</span>
          </span>
          <p className="text-[#73777B] text-base font-normal sm:text-xs">
            The Way to Blissful Interior, Through Your Heart's Desire
          </p>
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3 md:w-full md:overflow-x-auto md:py-4 pl-md-36 pl-lg-0 sm:pl-80">
          {data.materialType &&
            data.materialType.map((item, index) => (
              <Badge
                bg=""
                key={item.id}
                className={`px-3 py-2 font-medium text-lg cursor-pointer border border-[#D3D3D3] text-[#22333B] sm:text-base ${
                  activeIndex === index ? "bg-[#22333B] text-white" : ""
                }`}
                onClick={() => handleBadgeClick(index)}
              >
                {item.name}
              </Badge>
            ))}
        </div>
      </section>
      <section className="my-8">
        <div className="w-full flex justify-start items-start my-2 font-semibold text-xl md:justify-center md:items-center sm:text-sm">
          <span className="text-[#22333B] font-bold">Shop By Type</span>
        </div>
        {filteredData.length === 0 ? (
          <div className="text-center text-[#22333B] font-medium text-xl my-4 sm:text-sm">
            <span>Currently, there are no matching products.</span>
          </div>
        ) : (
          <div className="my-2 grid grid-cols-4 justify-center items-center gap-4 md:grid-cols-2 md:gap-2 sm:gap-1">
            {filteredData?.length > 0 &&
              filteredData.map((item) => (
                <Card
                  key={item.id}
                  className="border-none w-72 h-96 sm:w-44 sm:h-60 my-4 md:my-2"
                >
                  <div className="relative">
                    <Card.Img
                      src={item.image}
                      className="w-80 h-96 sm:w-44 sm:h-60"
                    />
                    <div className="absolute rounded-full top-8 left-8 w-24 h-24 sm:w-14 sm:h-14 sm:top-6 sm:left-2">
                      <Image
                        src={item.SmallImage}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute top-32 left-14 sm:top-20 sm:left-3">
                      <Image src="assets/vector.png" />
                    </div>
                    {item.tag !== "" && (
                      <section className="absolute right-2 top-[-4px] d-flex justify-content-start align-items-start">
                        <div className="w-1 h-1 border-t-[5px] border-t-transparent border-r-[4px] border-r-[#A00303]"></div>
                        <div className=" bg-[#CD1818] d-flex justify-content-center align-items-center w-8 h-24 sm:w-6 sm:h-20">
                          <span
                            className="rotate-180 text-white text-sm font-semibold sm:text-xs"
                            style={{ writingMode: "vertical-rl" }}
                          >
                            {item.tag}
                          </span>
                        </div>
                      </section>
                    )}
                    <div className="absolute bottom-0 left-0 d-flex justify-content-center align-items-center bg-[#03C988] rounded-bl text-white font-semibold text-sm w-36 h-8 sm:font-medium sm:text-xs sm:w-28 sm:h-6">
                      {item.productCount}+ products
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-2">
                    <Card.Title className="text-[#001C30] font-semibold text-xl m-0 uppercase sm:text-sm">
                      {item.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              ))}
          </div>
        )}
      </section>
    </Container>
  );
};

export default Catalogue;
