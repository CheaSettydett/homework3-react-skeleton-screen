import { useEffect, useState } from "react";

export const ProductCollection = () => {
  //state hook
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((resp) => resp.json())
      .then((resp) => {
        setProducts(resp);
        setLoading(false);
        console.log(products);
      });
  };

  useEffect(() => {
    console.log("First Product");
    fetchProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // return (
  //     products.length > 0 && <>
  //      {
  //         products.map(product =>(
  //             <h1 key = {product.id}>{product.title} </h1>
  //         ))
  //      }
  //     </>
  // )
  return loading ? (
    <WaitingData />
  ) : (
    <div className="container">
      <div className="row mt-5">
        {products.map((product) => (
          <>
            <div className=" col-12 col-sm-12 col-md-4 col-xl-3">
              <div className="card mt-3">
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt="..."
                  style={{ width: '19rem' , height: '18rem' }}
                /> 
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="abc" className="btn btn-primary">
                    ${product.price}
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
function WaitingData() {
  const [productHolders, setProducts] = useState([]);
  const fetchProducts = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((resp) => resp.json())
      .then((resp) => {
        setProducts(resp);
      });
  };
  useEffect(() => {
    console.log("First Product");
    fetchProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {productHolders.map((productHolder) => (
            <>
            <div className=" col-12 col-sm-12 col-md-4 col-xl-3">
              <div className="card mt-3" aria-hidden="true" >
                <img
                  src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "19rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6">
                      {productHolder.id}
                    </span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                  </p>
                  <a
                    href="abc"
                    className="btn btn-primary disabled placeholder col-6"
                  ></a>
                </div>
              </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
