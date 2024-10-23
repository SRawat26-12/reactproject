import {useState} from "react";
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      alert("Thank you for reaching out!");
    };
  
    return (
      <div className="container">
        <h2 className="text-center my-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default Contact;