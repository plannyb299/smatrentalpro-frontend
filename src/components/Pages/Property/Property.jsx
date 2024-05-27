import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../navbar/Navbar";
import { useParams } from "react-router-dom";
import Card from "../../card/Card";
import styles from "./Property.module.scss";

const Property = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  let params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/houses/${params.propertyId}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [params.propertyId]);

  const queryHandler = () => {
    if (loading) return <h1>LOADING</h1>;
    if (error) return <h1>ERROR</h1>;
    if (data) {
      if (data) {
        let house = data;
        return (
          <div className={styles.house}>
            <Card
              info={{
                id: params.properyId,
                category: "Buy",
                imageSource: `http://localhost:1337${house.image}`,
                city: `${house.location.city}`,
                neighbourhood: `${house.neighbourhood}`,
                street: `${house.street}`,
                rooms: `${house.rooms}`,
                bedrooms: `${house.facilities.bedrooms}`,
                bathrooms: `${house.facilities.bathrooms}`,
                shortAndress: `${house.shortAddress}`,
                price: `${house.price}`,
                rent: `${house.rent}`,
              }}
              showInfo={{
                price: house.price ? 1 : 0,
                rent: house.rent ? 1 : 0,
              }}
            />
            <div
              style={{ marginTop: "2rem", marginBottom: "2rem", color: "#333" }}
            >
              <span>Description:</span>
              <p>{house.attributes.Description}</p>
            </div>
          </div>
        );
      }
      return <h1>Property not Found</h1>;
    }
  };

  return (
    <main className={styles.flex}>
      <Navbar />
      <div className={styles.center}>{queryHandler()}</div>
    </main>
  );
};

export default Property;
