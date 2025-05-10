import React from "react";

const brands = [
  {
    name: "Maruti",
    logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/Maruti.jpg",
  },
  {
    name: "Hyundai",
    logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/Hyundai.jpg",
  },
  {
    name: "Tata",
    logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/Tata.jpg",
  },
  {
    name: "Mahindra",
    logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/Mahindra.jpg",
  },
  {
    name: "Kia",
    logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/Kia.jpg",
  },
  {
    name: "Toyota",
    logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/Toyota.jpg",
  },
  {
    name: "Honda",
    logo: "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/Honda.jpg",
  },
];

function PopularBrands() {
  return (
    <section className="container my-5 cardekho-popularbrands-section">
      <h2 className="fw-bold mb-4 text-center">Popular Car Brands</h2>
      <div className="row g-3 justify-content-center">
        {brands.map((brand) => (
          <div className="col-4 col-sm-3 col-md-2" key={brand.name}>
            <div className="card p-2 align-items-center">
              <img src={brand.logo} alt={brand.name} className="mx-auto" style={{ width: 84, height: 42, objectFit: "contain" }} />
              <div className="small text-center mt-2 fw-semibold">{brand.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularBrands;
