import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function CardHotel({ room }) {
  if (!room) return null;

  return (
   
    <Link style={{ textDecoration: 'none' }} to={`/rooms/${room._id}`}>
      <Card style={{ width: '15rem' }} className='my-5'>
        <Card.Img variant="top" src={room.images[0]} />
        <Card.Body>
          <Card.Text>
            <div className='d-flex justify-content-between align-items-center'>
              <div>{room.hotel.name}</div>
              <div className='d-flex align-items-center'>
                <img src={assets.starIconFilled} alt="Star" />
                <span className='ms-1'>4.5</span>
              </div>
            </div>

            <div className='d-flex align-items-center mt-2'>
              <img src={assets.locationIcon} alt="Location" />
              <span className='ms-1'>{room.hotel?.address}</span>
            </div>

            <div className='d-flex justify-content-between align-items-center mt-3'>
              <span>₹{room.pricePerNight}</span>
              <Button variant="primary" size="sm">Book Now</Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default CardHotel
