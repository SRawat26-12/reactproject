
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="jumbotron text-center">
      <h1>Welcome to LaundryService</h1>
      <p>We provide fast and reliable laundry services at your doorstep.</p>
      <Link to="/services" className="btn btn-primary">View Our Services</Link>
    </div>
  );
};

export default Home;