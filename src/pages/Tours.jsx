import React, { useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection'
import '../styles/tour.css'
import tourData from '../assets/data/tours' // Fixed import path
import TourCard from '../shared/TourCard'
import SearchBar from '../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import { Container, Row, Col } from 'reactstrap'

const Tours = () => {
  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4) // Dynamically calculate based on tourData length
    setPageCount(pages)
  }, [tourData]) // pageCount should depend on tourData

  return (
    <>
      <CommonSection title={'All Tours'} />
      
      {/* Search Bar Section */}
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* Tour Cards Section */}
      <section className='pt-0'>
        <Container>
          <Row>
            {
              tourData?.map(tour => (
                <Col lg='3' className='mb-4' key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            }

            {/* Pagination */}
            <Col lg='12'>
              <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number} onClick={() => setPage(number)}
                    className={page === number ? 'active_page' : ''}>
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </>
  )
}

export default Tours
