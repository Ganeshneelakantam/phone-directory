import React, { useState } from 'react';
import Header from './Header';
import './AddSubscriber.css';
import { Link, useNavigate } from 'react-router-dom';

function AddSubscriber({ addSubscriberHandler }) {
  const [subscriber, setSubscriber] = useState({ id: 0, name: '', phone: '' });
  const navigate = useNavigate();

  const inputChangedHandler = (e) => {
    setSubscriber({ ...subscriber, [e.target.name]: e.target.value });
  };

  const onFormSubmitted = (e) => {
    e.preventDefault();
    addSubscriberHandler(subscriber);
    setSubscriber({ id: 0, name: '', phone: '' });
    navigate('/');
  };

  return (
    <div>
      <Header heading="Add Subscriber" />
      <div className="component-body-container">
        <Link to="/">
          <button className="custom-btn">Back</button>
        </Link>
        <form className="subscriber-form" onSubmit={onFormSubmitted}>
          <label htmlFor="name" className="label-control">Name:</label>
          <br />
          <input
            id="name"
            type="text"
            className="input-control"
            name="name"
            onChange={inputChangedHandler}
            value={subscriber.name}
          />
          <br />
          <br />

          <label htmlFor="phone" className="label-control">Phone:</label>
          <br />
          <input
            id="phone"
            type="text"
            className="input-control"
            name="phone"
            onChange={inputChangedHandler}
            value={subscriber.phone}
          />
          <br />
          <br />

          <div className="subscriber-info-container">
            <span className="subscriber-to-add-heading">Subscriber to be added:</span>
            <br />
            <span className="subscriber-info">Name: {subscriber.name}</span>
            <br />
            <span className="subscriber-info">Phone: {subscriber.phone}</span>
          </div>
          <button type="submit" className="custom-btn add-btn">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddSubscriber;
