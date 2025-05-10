import React from "react";

function SearchSection() {
  return (
    <section className="bg-white py-4 shadow rounded-3 mx-4 cardekho-searchbox-section">
      <div className="container">
        <form className="row g-3 align-items-center justify-content-center">
          <div className="col-12 col-md-4">
            <input type="text" className="form-control form-control-lg" placeholder="Search by car name, brand, model..." />
          </div>
          <div className="col-6 col-md-2">
            <select className="form-select form-select-lg">
              <option>New Car</option>
              <option>Used Car</option>
            </select>
          </div>
          <div className="col-6 col-md-2">
            <select className="form-select form-select-lg">
              <option>City</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Pune</option>
            </select>
          </div>
          <div className="col-12 col-md-2">
            <button type="submit" className="btn btn-danger btn-lg w-100">
              Search Cars
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchSection;
