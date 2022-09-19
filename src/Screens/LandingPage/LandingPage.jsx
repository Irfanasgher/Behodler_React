import React from "react";
import { Row, Col, Button } from "antd";

import Navigation from "../../Components/Navbar";

import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div id="landing">
      <div className="container">
        <Navigation />
        <Row className="smallTab">
          <Col xl={14} lg={14} md={24} sm={24} xs={24}>
            <h1 className="title">
              Liquidity is in the eye of <span>behodler</span>
            </h1>
            <p className="subtitle">
              Behodler is a suite of liquidity management tools for the <br />{" "}
              discerning DeFi connoisseur.Swap tokens cheaply with <br />{" "}
              logarithmic bonduing curves.
            </p>
            <Row>
              <Col span={24}>
                <div className="d-flex mt-3 iconsColumn">
                  <Button type="primary" className="customButtons mr-3 px-3">
                    Launch App
                    <img
                      src="./images/recycle.png"
                      alt="icon"
                      className="ml-2"
                    />
                  </Button>
                  <Button type="primary" className="customButtons mr-3">
                    Learn More
                  </Button>
                </div>
                <div className="mt-2">
                  <div className="socialIcons d-flex pt-1">
                    <div className="icon p-1">
                      {" "}
                      <img src="./images/discord.png" alt="fb" />{" "}
                    </div>
                    <div className="icon p-1">
                      {" "}
                      <img src="./images/twitter.png" alt="linkedin" />{" "}
                    </div>
                    <div className="icon p-1">
                      {" "}
                      <img src="./images/github.png" alt="twitter" />{" "}
                    </div>
                    <div className="icon p-1">
                      {" "}
                      <img src="./images/medium.png" alt="instagram" />{" "}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={10} lg={10} md={24} sm={24} xs={24}></Col>
        </Row>
        {/* <div className='footerBottom'>
					<ul className='footer d-flex justify-content-center align-items-center' style={{ margin: '0' }}>
						<li>EYE: $2.20</li>
						<li>Liquidity: 333b</li>
						<li>Total Volume: 00.00b</li>
						<li>Total Fees: 100,000,00</li>
						<li>Pairs: 999</li>
					</ul>
				</div>				 */}
      </div>
    </div>
  );
};

export default LandingPage;
