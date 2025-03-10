import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="World" />
                </div>
                <h1>
                  Traveling opens the door to creating{' '}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Illo quaerat saepe odit labore consequuntur rem. Ab veritatis
                  vero, aut perferendis in quasi numquam incidunt at officia
                  commodi necessitatibus sit nostrum.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="Tour" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video src={heroVideo} controls alt="Tour Video"></video>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="Another Tour" />
              </div>
            </Col>
          </Row>
          <SearchBar />
        </Container>
      </section>

      {/* Services Section */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Featured Tours Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
