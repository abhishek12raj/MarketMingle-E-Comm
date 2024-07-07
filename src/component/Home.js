import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
   
      <div className="container home ">
        <div className="homeMain landing-box">
          <div className="left">
            <h1 className="fw-bold">
              Everything you need. Delivered right to your door. We ship you
              happiness.
            </h1>
            <p>We are India's fastest growing Ecommerce Store.</p>
            {/* <a className="btn btn-outline-success bttn " href="/products">
            Shop Now
            </a> */}
            <Link className='btn btn-outline-success bttn'  to="/products"> Shop Now</Link>
          </div>
          <div className="right ">
            <img src={"./assests/bg.png"} alt="" />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4 features my-5 ">
          <div className="col">
            <div className=" features-card">
              <div className="card-body">
                <p class="features-head">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{
                      width: "30px",
                      height: " 30px",
                      marginRight: "3px",
                      color:" rgb(43, 103, 119)"
                    }}
                  >
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                  </svg>
                  Free Home Delivery
                </p>
                <p class="features-para">
                  No shipping Charges on Orders above ₹ 500.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className=" features-card">
              <div className="card-body">
                <p class="features-head">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{
                      width: "30px",
                      height: " 30px",
                      marginRight: "3px",
                      color:" rgb(43, 103, 119)"
                    }}
                  >
                    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
                  </svg>
                  Easy Cancellation
                </p>
                <p class="features-para">Cancel anytime as per your needs.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className=" features-card ">
              <div className="card-body">
                <p class="features-head">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{
                      width: "30px",
                      height: " 30px",
                      marginRight: "3px",
                      color:" rgb(43, 103, 119)"
                    }}
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                  </svg>
                  Easy Return &amp; Refund
                </p>
                <p class="features-para">
                  We offer 30 days return and refund policy.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className=" features-card">
              <div className="card-body">
                <p class="features-head">
                  <svg
                    class="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{
                      width: "30px",
                      height: " 30px",
                      marginRight: "3px",
                      color:" rgb(43, 103, 119)"
                    }}
                  >
                    <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"></path>
                  </svg>
                  24x7 Customer Care
                </p>
                <p class="features-para">
                  We provide 24*7 Customer Care support for feedbacks,
                  suggestions and complaints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer-links">
          <a className="foot-link" href="#/">
            Your Account
          </a>
          <a className="foot-link" href="#/">
            Your Orders
          </a>
          <a className="foot-link" href="#/">
            Wish List
          </a>
          <a className="foot-link" href="#/">
            Returns
          </a>
          <a className="foot-link" href="#/">
            Return Policy
          </a>
          <a className="foot-link" href="#/">
            Refund Policy
          </a>
          <a className="foot-link" href="#/">
            Cancellation Policy
          </a>
          <a className="foot-link" href="#/">
            Customer Service
          </a>
        </div>
        <div className="outCopy">
          <div class="copyright">
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ width: " 18px", height: "18px", marginRight: "10px" }}
            >
              <path d="M11.88 9.14c1.28.06 1.61 1.15 1.63 1.66h1.79c-.08-1.98-1.49-3.19-3.45-3.19C9.64 7.61 8 9 8 12.14c0 1.94.93 4.24 3.84 4.24 2.22 0 3.41-1.65 3.44-2.95h-1.79c-.03.59-.45 1.38-1.63 1.44-1.31-.04-1.86-1.06-1.86-2.73 0-2.89 1.28-2.98 1.88-3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            </svg>
            <p>2024, MarketMingle.in</p>
            <a
              href="https://github.com/abhishek12raj?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                class="MuiSvgIcon-root"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
