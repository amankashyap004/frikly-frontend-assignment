import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import LazyImage from "../lazyLoading/LazyImage";
import { fetchData } from "../api/data";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Container fluid="md" className="my-8">
      <div className="d-flex justify-content-center align-items-center my-4 text-2xl sm:text-base">
        <span className="text-[#001C30] ">
          Explore a Catalogue of{" "}
          <span className="font-bold">5000+ Products</span>
        </span>
      </div>
      <section className="gap-4 grid grid-cols-4 justify-content-center align-items-start md:gap-2 md:grid-cols-2">
        {data.materialType?.length > 0 &&
          data.materialType.map((item) => (
            <Card key={item.id} className="border-none">
              <LazyImage
                src={item.image}
                className="rounded w-80 h-96 sm:w-56 sm:h-60"
              />
              <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                <Card.Title className="text-[#001C30] font-medium text-xl m-0 sm:text-sm ">
                  {item.name}
                </Card.Title>
                <Card.Text className="text-[#73777B] font-normal text-base sm:text-xs">
                  {item.offerText}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </section>
    </Container>
  );
};

export default Products;
