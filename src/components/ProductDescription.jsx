import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { moreDescription } from "../constants";
import { fetchData } from "../api/data";

const ProductDescription = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Container className="my-8 sm:hidden">
      <section>
        {data.materialType?.length > 0 &&
          data.materialType.map((item) => (
            <div key={item.id} className="my-2">
              <h3 className="text-[#001C30] font-semibold text-sm py-1">
                {item.name}
              </h3>
              <p className="text-[#73777B] font-normal text-sm py-1">
                {item.description}
              </p>
            </div>
          ))}
      </section>
      <section>
        <div className="my-2">
          <h3 className="text-[#001C30] font-semibold text-sm py-1">
            Laminates & Sunmica By Types
          </h3>
          <p className="text-[#73777B] font-normal text-sm py-1">
            Laminates are available in various types, each with its unique
            features and uses. Some of the common types of laminates are:
          </p>
        </div>
      </section>
      <section>
        {moreDescription &&
          moreDescription.map((item, index) => (
            <div
              key={index}
              className="my-2 text-[#73777B] font-normal text-sm"
            >
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
      </section>
    </Container>
  );
};

export default ProductDescription;
