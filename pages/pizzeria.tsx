import Image from "next/image";
import Slider from "react-slick";

const data = [
  {
    image:
      "https://res.cloudinary.com/dvitljs6q/image/upload/v1653930529/pexels-photo-4254139_mri2bh.jpg",
    title: "order online",
    description: "order today",
  },
  {
    image:
      "https://res.cloudinary.com/dvitljs6q/image/upload/v1653930527/pexels-photo-3490364_aisljh.jpg",
    title: "our menu",
    description: "nostro menu",
  },
  {
    image:
      "https://res.cloudinary.com/dvitljs6q/image/upload/v1653930525/pexels-photo-905847_q5uvzu.jpg",
    title: "explore kitchen",
    description: "explore more",
  },
];

const data2 = [
  { name: "chicago dog" },
  { name: "SPINACH FETA PESTO" },
  { name: "TOMATO PESTO	" },
  { name: "DIMO FLORENTINE" },
  { name: "MARGHERITA" },
  { name: "PEP SAUSAGE" },
  { name: "THE DIANA ROSS" },
  { name: "THE MARY WILSON" },
  { name: "BEEF" },
  { name: "PEPPERONI" },
];

const Pizzeria = () => {
  const settings = {
    // className: "center",
    // centerPadding: "60px",
    // dots: true,
    //  fade: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // draggable:true
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <>
      <section className="relative h-screen flex">
        <img
          src="/images/Pizza-logo-vector-PNG.png"
          alt=""
          className="absolute -left-40 top-20 h-[600px]  opacity-5 -z-30"
        />
        <div className="absolute inset-0 flex">
          <div className="w-1/2 py-6 px-16 relative">
            <div className="header">
              <div className="">
                <a href="" className="">
                  <img
                    src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/9/2019/03/0080_t_roppolos-logo_9.png"
                    alt=""
                    className="h-16"
                  />
                </a>
              </div>
              <div className="">
                <nav className="navbar">
                  <ul className="">
                    <li className="">
                      <a href="" className="">
                        home
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="">
                        pages
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="">
                        menu
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="">
                        events
                      </a>
                    </li>
                    <li className="">
                      <a href="" className="">
                        blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex items-end justify-between mb-11  relative">
              <h1 className="hero-title w-1/2 ">authentic tuscany flavor</h1>
              <img
                src="https://pizzashop-jouelestours.com/src/img/logo.png"
                alt=""
                className="h-52 absolute -bottom-20 right-20 -z-20"
              />
            </div>

            <button className="button-1">
              <span>order online</span>
            </button>
          </div>
          <div className="w-1/2 overflow-hidden">
            <Slider {...settings}>
              <div className="h-screen ">
                <img
                  src="/images/pexels-photo-2147491 (1).jpeg"
                  className="hero-image"
                  alt=""
                />
              </div>
              <div className="h-screen">
                <img
                  src="/images/pexels-photo-315755.jpeg"
                  className="hero-image"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="p-20 space-y-10 bg-gray-50">
        <div className="section-header">
          <a className="">the magic of flavor</a>
          <h1 className="">bienvenuto friends</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ipsa
            animi facere sit reiciendis eos voluptas at, corrupti quibusdam
            voluptates.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-7 mx-auto">
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className="h-80">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <h1 className=" ">{item.title}</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
                ipsa animi facere sit reiciendis eos voluptas at, corrupti
                quibusdamµ
              </p>
              <button className="">
                <svg
                  className="svg"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M792.848 736.72c-101.344 0-158.865-47.629-196.945-79.148-13.472-11.153-25.727-21.905-36.88-31.665-16.912-14.847-38-33.343-45.344-35.903-.223 0-3.712-.16-3.935-.192-1.168.096-4.144.687-4.448.72-5.072 2.064-23.087 17.568-37.568 30-13.136 11.28-28.111 24.16-45.039 37.376l-3.088 2.368c-43.472 33.935-97.584 76.159-193.152 76.159-70.992 0-140.928-32.128-182.576-83.872-27.92-34.689-57.296-95.025-38.672-185.473 2.256-10.944 10.016-19.904 20.432-23.632 10.48-3.776 22.016-1.712 30.608 5.376.624.464 22.576 17.344 59.057 17.344 18.368 0 37.504-4.336 56.832-12.945 33.135-14.752 56.735-56.127 81.71-84.063 34.176-38.16 72.848-81.408 136.689-81.904 44.048 0 83.792 16.288 119.248 48.496 35.311-32.065 74.767-48.257 117.68-48.257 65.103.496 104.592 43.776 139.439 82 25.44 27.872 49.472 69.216 82.608 83.968 19.328 8.592 38.672 12.943 57.488 12.943 37.872 0 61.504-17.311 62.449-18.063 8.767-6.496 20.319-8.193 30.48-4.225 10.143 4 17.679 12.88 19.711 23.664 17.088 89.44-12.96 149.408-41.184 183.968-42.767 52.4-113.903 84.96-185.6 84.96zM510.733 525.875c.992 0 3.683.095 4.627.19.032 0 4.688.336 4.688.369.336.032 3.008.368 3.296.432 23.153 3.28 44.624 22.128 77.216 50.688 10.704 9.408 22.496 19.744 35.472 30.496 34.784 28.816 78.097 64.656 156.816 64.656 53.311 0 105.743-23.632 136.783-61.68 20.4-24.975 31.009-54.72 31.68-88.784-15.024 4.689-33.28 8.192-54.32 8.192-27.664 0-55.568-6.192-82.976-18.368-45.248-20.095-76.304-69.12-103.68-99.152-34.529-37.872-57.473-61.088-92.081-61.376-46.16 0-75.953 29.056-94.416 50.912-6.033 7.12-14.817 11.216-24.097 11.216-9.28 0-18.08-4.128-24.08-11.248-18.529-21.936-48.416-51.12-93.84-51.12-35.088.257-57.408 23.281-90.992 60.85-27.056 30.223-57.696 79.471-103.231 99.68-27.392 12.191-55.104 18.367-82.304 18.367-20.4 0-38.064-3.408-52.624-8.032-.032 34.72 10.111 64.912 30.335 90.032 29.936 37.153 81.04 60.256 133.439 60.256 74 0 114.896-31.935 154.464-62.815l3.088-2.416c16.048-12.529 30.24-24.752 42.688-35.44 28.512-24.497 47.329-40.69 67.649-44.289.015.016 9.695-1.616 16.4-1.616z" />
                </svg>
                <span className="">{item.description}</span>
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="relative bg-fixed bg-cover bg-center h-[600px] bg-[url('/images/pexels-photo-6150423.jpeg')]">
        <div className="absolute inset-0 bg-black bg-opacity-30">
          <div className="  flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl text-white font-medium font-oswald leading-tight">
              GO AHEAD AND BUILD YOUR OWN PIZZA WE WON’T JUDGE!
            </h1>
          </div>
        </div>
      </section>
      <section className="menu-section">
        <div className="section-header">
          <a className="">pick your favorites</a>
          <h1 className="">Fefe’S PIZZA, THE BEST IN TOWN</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ipsa
            animi facere sit reiciendis eos voluptas at, corrupti quibusdam
            voluptates.
          </p>
        </div>
        <div className="px-10 grid grid-cols-2 gap-x-20 gap-y-5">
          {data2.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="">
                <h1 className="">{item.name}</h1>
                <a className="">
                  ..............................................................................
                </a>
                <span className="">$ 7.5 | 9.5 | 198</span>
              </div>
              <p className="">
                All beef hot dog, pickles, red onion, pepperoncini, and tomato.
              </p>
            </div>
          ))}
        </div>
        <div className="menu-section-order">
          <button className="button-1 ">
            <span>order online</span>
          </button>
          <p className="">
            * Offers available for carry-out and delivery orders only.
          </p>
        </div>
      </section>
    </>
  );
};

export default Pizzeria;
