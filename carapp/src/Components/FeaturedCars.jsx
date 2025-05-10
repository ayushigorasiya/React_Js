import React from "react";

const cars = [
  {
    name: "Hyundai Creta",
    price: "₹ 11.00 - 20.15 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1744607863052/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Toyota Fortuner",
    price: "Rs35.37 - 51.94 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10904/1745218908491/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Tata Curvv",
    price: "Rs10 - 19.52 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Curvv/9578/1723033064164/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Mahindra Scorpio",
    price: "Rs13.62 - 17.50 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio/10764/1708522826716/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Maruti FRONX",
    price: "Rs7.54 - 13.03 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1738296828682/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Tata Nexon",
    price: "Rs8 - 15.60 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9675/1743060431849/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Tata Punch",
    price: "Rs6.20 - 10.32 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Mahindra XUV700",
    price: "Rs14.49 - 25.74 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/11736/1746537670362/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Mahindra Thar ROXX",
    price: "Rs12.99 - 23.09 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Mahindra Scorpio N",
    price: "Rs13.99 - 24.89 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1740050844896/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Tata Altroz",
    price: "Rs6.65 - 11.30 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz/10707/1738305103049/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Maruti Swift",
    price: "Rs6.49 - 9.59 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1739945896166/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Hyundai Creta",
    price: "₹ 11.00 - 20.15 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/10497/1697697558001/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Maruti Baleno",
    price: "Rs6.70 - 9.92 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Baleno/10497/1697697558001/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Tata Tiago",
    price: "Rs5 - 8.45 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Tiago/10655/1744284802118/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Hyundai Creta",
    price: "₹ 11.00 - 20.15 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1744607863052/front-left-side-47.jpg?tr=w-300",
  },
  {
    name: "Hyundai Creta",
    price: "₹ 11.00 - 20.15 Lakh",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1744607863052/front-left-side-47.jpg?tr=w-300",
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
    <section className="cardekho-featured-section py-5">
      <div className="container">
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
      </div>
    </section>
  );
}

export default FeaturedCars;
