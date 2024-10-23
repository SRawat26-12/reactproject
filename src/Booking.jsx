import  { useState } from 'react';

const Booking = () => {
  const [bookingData, setBookingData] = useState({ name: '', service: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${bookingData.service} on ${bookingData.date}`);
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={bookingData.name}
            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Service</label>
          <select
            className="form-control"
            value={bookingData.service}
            onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
          >
            <option value="">Select a Service</option>
            <option value="Wash & Fold">Wash & Fold</option>
            <option value="Dry Cleaning">Dry Cleaning</option>
            <option value="Ironing">Ironing</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={bookingData.date}
            onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
