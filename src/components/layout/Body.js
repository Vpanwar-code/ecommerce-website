import { productsArr } from "../Data/productData";
import CartContext from "../store/CartContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      imageUrl: item.imageUrl,
      title: item.title,
      price: item.price,
      amount: 1,
    });
  };
  return (
    <Fragment>
      <h2 style={{ textAlign: "center" }}>Music</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {productsArr.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <Card
                  style={{
                    width: "18rem",
                    margin: "20px",
                    marginRight: "70px",
                    border: "none",
                  }}
                  key={index}
                >
                  <Card.Body>
                    <Card.Title
                      style={{ marginBottom: "15px", textAlign: "center" }}
                    >
                      {item.title}
                    </Card.Title>
                    <Link to={`/product/${item.id}`}>
                      <div style={{ overflow: "hidden" }}>
                        <Card.Img
                          variant="center"
                          src={item.imageUrl}
                          style={{
                            width: "100%",
                            height: "100%",
                            transition: "transform 0.7s ease",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        />
                      </div>
                    </Link>
                    <Card.Text style={{ float: "left", marginTop: "15px" }}>
                      ${item.price}
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{ float: "right", marginTop: "15px" }}
                      onClick={() => addToCartHandler(item)}
                    >
                      Add to Cart
                    </Button>
                    <div style={{ clear: "both" }}></div>
                  </Card.Body>
                </Card>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div>
          {productsArr.map((item, index) => {
            if (index % 2 !== 0) {
              return (
                <Card
                  style={{
                    width: "18rem",
                    margin: "20px",
                    marginLeft: "70px",
                    border: "none",
                  }}
                  key={index}
                >
                  <Card.Body>
                    <Card.Title
                      style={{ marginBottom: "15px", textAlign: "center" }}
                    >
                      {item.title}
                    </Card.Title>
                    <Link to={`/product/${item.id}`}>
                      <div style={{ overflow: "hidden" }}>
                        <Card.Img
                          variant="center"
                          src={item.imageUrl}
                          style={{
                            width: "100%",
                            height: "100%",
                            transition: "transform 0.7s ease",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = "scale(1.1)";
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        />
                      </div>
                    </Link>
                    <Card.Text style={{ float: "left", marginTop: "15px" }}>
                      ${item.price}
                    </Card.Text>
                    <Button
                      variant="primary"
                      style={{ float: "right", marginTop: "15px" }}
                      onClick={() => addToCartHandler(item)}
                    >
                      Add to Cart
                    </Button>
                    <div style={{ clear: "both" }}></div>
                  </Card.Body>
                </Card>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default Body;
