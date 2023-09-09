import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import LazyImage from "../lazyLoading/LazyImage";
import { fetchData } from "../api/data";

const MaterialFinish = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);
  return (
    <Container fluid="md" className="my-12 md:my-8">
      <div className="w-full flex justify-start items-start my-2 font-semibold text-xl md:text-sm md:justify-center md:items-center">
        <span className="text-[#22333B] font-bold">Shop By Finish</span>
      </div>
      <div className="my-4 grid grid-cols-4 justify-content-center align-items-start gap-4 md:grid-cols-2 md:gap-2 sm:gap-1">
        {data.materialFinish?.length > 0 &&
          data.materialFinish.map((item) => (
            <Card
              key={item.id}
              className="bg-[#F7F7F7] rounded-2xl border-none w-72 h-80 sm:w-44 sm:h-56"
            >
              <LazyImage src={item.image} className="rounded-t-2xl" />
              <Card.Body className="flex flex-col justify-between items-start text-start sm:justify-center sm:px-3 sm:py-2 sm:m-0">
                <Card.Title className="text-[#001C30] font-semibold text-xl sm:text-sm sm:py-0">
                  {item.name}
                </Card.Title>
                <Card.Text className="text-[#001C30] font-normal text-base line-clamp-2 sm:text-xs sm:py-0">
                  {item.offerText}
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center my-4 cursor-pointer sm:m-0">
                  <span className="text-[#001C30] text-lg font-semibold mr-2 sm:text-xs">
                    Buy Now
                  </span>
                  <Image src="assets/iconArrow.png" className="w-5 h-5" />
                </div>
              </Card.Body>
            </Card>
          ))}
      </div>
    </Container>
  );
};

export default MaterialFinish;
