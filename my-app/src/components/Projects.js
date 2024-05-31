import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/download (1).jpeg";
import projImg2 from "../assets/img/weather.jpeg";
import projImg from "../assets/img/download.jpeg";
import projImg3 from "../assets/img/portfolio.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React from 'react'
import { Link } from "react-router-dom";


export default function Projects () {

  const projects = [
    {
      title: "Market Minds",
      description: "An interactive stock dashboard, enabling users to input stock codes, select dates, and visualize trends, indicators, and forecasts, Utilized yfinance for historical data and integrated SVR model for predictive analysis, showcasing interactivecharts and forecasts.",
      imgUrl:projImg1,
  

    },
    {
      title: "Wonder Weather",
      description: "User-Friendly Interface: Enjoy a sleek and intuitive interface designed for easy navigation and quick access to essential weather information.",
      imgUrl: projImg2,
      link:"https://loquacious-piroshki-5c451f.netlify.app",
    },
    {
      title: "Crafting Dreams",
      description: "Welcome to my portfolio, a curated collection of my creative endeavors and professional achievements.From graphic design to web development,each piece reflects my dedication to innovation and excellence",
      imgUrl: projImg3,
    },
    {
      title: "DataFlowx",
      description: "Cloud Service",
      imgUrl: projImg,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=''></img>
    </section>
  )
}