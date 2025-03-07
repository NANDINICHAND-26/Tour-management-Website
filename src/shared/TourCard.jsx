import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';

import './tour-card.css';

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews } = tour;

  // Calculate average rating using a utility function
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className='tour-card'>
      <Card>
        <div className='tour_img'>
          <img src={photo} alt={title} /> {/* Removed redundant words from the alt attribute */}
          {featured && <span>Featured</span>}
        </div>
      </Card>

      <CardBody>
        <div className="card_top d-flex align-items-center gap-1">
          <span className="tour_location d-flex align-items-center gap-1">
            <i className="ri-map-pin-line"></i> {city}
          </span>
          <span className="tour_rating d-flex align-items-center gap-1">
            <i className="ri-star-fill"></i> {avgRating === 0 ? 'Not rated' : avgRating}
            {totalRating > 0 && <span>({reviews.length} reviews)</span>}
          </span>
        </div>

        <h5 className='tour_title'>
          <Link to={`/tours/${id}`}>{title}</Link>
        </h5>

        <div className='card_bottom d-flex align-items-center justify-content-between mt-3'>
          <h5>
            ${price} <span> /per person</span>
          </h5>

          <button className='btn booking_btn'>
            <Link to={`/tours/${id}`}>Book Now</Link>
          </button>
        </div>
      </CardBody>
    </div>
  );
};

export default TourCard;
