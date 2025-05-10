import React from "react";

const cars = [
  {
    name: "Hyundai Creta",
    price: "₹ 11.00 - 20.15 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10998/1705910034771/front-left-side-47.jpg",
  },
  {
    name: "Maruti Brezza",
    price: "₹ 8.34 - 14.14 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Brezza/11969/1694779292574/front-left-side-47.jpg",
  },
  {
    name: "Tata Nexon",
    price: "₹ 8.15 - 15.80 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/11915/1694833705354/front-left-side-47.jpg",
  },
  {
    name: "Kia Seltos",
    price: "₹ 10.90 - 20.35 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos/11954/1706171290632/front-left-side-47.jpg",
  },
];

function FeaturedCars() {
  return (
    <section className="container my-5 cardekho-featured-section">
      <h2 className="fw-bold mb-4 text-center">Popular New Cars</h2>
      <div className="row g-4 justify-content-center">
        {cars.map((car) => (
          <div className="col-12 col-sm-6 col-md-3" key={car.name}>
            <div className="card h-100 shadow-sm">
              <img src={car.img} className="card-img-top" alt={car.name} />
              <div className="card-body">
                <h5 className="card-title mb-1">{car.name}</h5>
                <p className="card-text text-muted small mb-2">{car.price}</p>
                <a href="#" className="btn btn-outline-danger btn-sm">View Offers</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCars;
