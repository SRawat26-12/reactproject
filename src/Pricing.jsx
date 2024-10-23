const Pricing = () => {
    return (
      <div className="container">
        <h2 className="text-center my-4">Pricing</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wash & Fold</td>
              <td>$10 per load</td>
            </tr>
            <tr>
              <td>Dry Cleaning</td>
              <td>$15 per item</td>
            </tr>
            <tr>
              <td>Ironing</td>
              <td>$5 per item</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Pricing;