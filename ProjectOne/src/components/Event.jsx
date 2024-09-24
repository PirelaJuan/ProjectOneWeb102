// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const Event = ({ title, category, image}) => {

  const cardStyle = {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    textAlign: 'center',
    margin: '10px',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '16px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div className="event-card" style={cardStyle}>
      <img src={image} alt={title} className="event-img" style={imageStyle} />
      <div style={contentStyle}>
        <h3>{title}</h3>
        <p>{category}</p>
        <button className="event-btn" style={buttonStyle}>View More</button>
      </div>
    </div>
  );
};

export default Event;