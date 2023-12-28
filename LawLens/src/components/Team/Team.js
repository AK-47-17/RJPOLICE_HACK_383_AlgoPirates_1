import React from "react";
import { Container } from "react-bootstrap";
import "./Team.css";
import member1 from "../../assets/member1.png";
import member2 from "../../assets/member2.png";
import member3 from "../../assets/member3.png";

export default function Team() {
  return (
    <article id="team">
      <Container className="container">
        <div className="content">
          <h1 className="title"></h1>
          <div className="teamGrid">
            <div xs={4} className="member">
              <img
                src={member1}
                alt="Emma"
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="500"
                data-aos-duration="1000"
              />
              <h3 className="memberInfo">
                Super Admin
                <br />
                DGP, Rajasthan Police
                <br />
                info@police.com
              </h3>
            </div>
            <div
              className="member"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <img src={member2} alt="Manesh" />
              <h3 className="memberInfo">
                Manesh Jhawar
                <br />
                SHO, Rajasthan Police
                <br />
                manesh.jhawar@police.com
              </h3>
            </div>
            <div className="member">
              <img
                src={member3}
                alt="Nick"
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="500"
                data-aos-duration="1000"
              />
              <h3 className="memberInfo">
                Nick Zhang
                <br />
                IG, Nerdy kid
                <br />
                nzhang.jiahui@police.com
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
