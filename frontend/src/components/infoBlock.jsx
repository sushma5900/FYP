import styled from "styled-components";

const InfoBlock = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-black text-white ">
        <section className="d-flex justify-content-center justify-content-lg-between">
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>BMS
              </h6>
              <p>
                At BakeHub, we're passionate about creating delicious and unique baked goods that bring joy to every bite. Our menu includes a variety of breads, pastries, cakes, and other treats made from scratch with the highest-quality ingredients. Whether you're in the mood for a croissant, a slice of cake, or a fresh loaf of bread, we've got you covered. We also offer catering services for events of all sizes. Come visit us and taste the BakeHub difference!
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Cakes</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Breads</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Dessert</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Doughnut</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Pastries</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Navigate
              </h6>
              <p>
                <a href="/" className="text-reset">Home</a>
              </p>
              <p>
                <a href="/about" className="text-reset">About</a>
              </p>
              <p>
                <a href="/orders" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="/profile" className="text-reset">Profile</a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i>A Naxal-06,Kathmandu</p>
              <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </section>


      </footer>
    </>
  );
};

export default InfoBlock;
