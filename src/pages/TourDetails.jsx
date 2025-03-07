import React, { useRef, useState } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';

const TourDetails = () => {
  const { id } = useParams();
  const reviewsMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find((tour) => tour.id === id);

  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;
    // Submit your review to the server or perform your logic
    console.log(reviewText, tourRating);
  };

  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className='tour_content'>
              <img src={photo} alt={title} />

              <div className='tour_info'>
                <h2>{title}</h2>

                <div className='d-flex align-items-center gap-5'>
                  <span className='tour_rating d-flex align-items-center gap-1'>
                    <i className='ri-star-fill' style={{ color: 'var(--secondary-color)' }}></i>
                    {avgRating ? avgRating : 'Not Rated'}
                    {totalRating > 0 && <span>({reviews?.length})</span>}
                  </span>

                  <span>
                    <i className='ri-map-pin-user-fill'></i> {address}
                  </span>
                </div>

                <div className='tour_extra-details'>
                  <span><i className='ri-map-pin-2-line'></i> {city}</span>
                  <span><i className='ri-money-dollar-circle-line'></i> ${price} /per person</span>
                  <span><i className='ri-map-pin-time-line'></i> {distance} km</span>
                  <span><i className='ri-group-line'></i> {maxGroupSize}</span>
                </div>

                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              <div className='tour_reviews mt-4'>
                <h4>Reviews ({reviews?.length})</h4>
                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4 rating_group'>
                    {[1, 2, 3, 4, 5].map((rate) => (
                      <span key={rate} onClick={() => setTourRating(rate)}>
                        {rate}<i className='ri-star-s-fill'></i>
                      </span>
                    ))}
                  </div>

                  <div className='review_input'>
                    <input type='text' ref={reviewsMsgRef} placeholder='Share your thoughts' required />
                    <button className='btn primary_btn text-white' type='submit'>
                      Submit
                    </button>
                  </div>
                </Form>

                <ListGroup className='user-reviews'>
                  {reviews?.map((review, index) => (
                    <div className='review_item' key={index}>
                      <img src={avatar} alt='avatar' />

                      <div className='w-100'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div>
                            <h5>Nandini</h5>
                            <p>{new Date('01-18-2025').toLocaleDateString('en-US', options)}</p>
                          </div>

                          <span className='d-flex align-items-center'>
                            5<i className='ri-star-s-fill'></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
            </div>
          </Col>

          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
    </section>
    <Newsletter/>
    </>
  );
};

export default TourDetails;
