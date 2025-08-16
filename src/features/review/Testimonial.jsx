import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    image: "https://via.placeholder.com/150",
    review: "This product exceeded my expectations! I would definitely recommend it to others.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    image: "https://via.placeholder.com/150",
    review: "Great quality and fast shipping. The customer service was also very helpful.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sara Lee",
    image: "https://via.placeholder.com/150",
    review: "I love the design and the functionality of this product. It's perfect for my needs.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Johnson",
    image: "https://via.placeholder.com/150",
    review: "Affordable and reliable. I've been using it for a while now and it hasn't disappointed.",
    rating: 4,
  },
  {
    id: 5,
    name: "Emily Watson",
    image: "https://via.placeholder.com/150",
    review: "The best product in its category. I can't imagine going back to anything else.",
    rating: 5,
  },
  {
    id: 6,
    name: "David Lee",
    image: "https://via.placeholder.com/150",
    review: "Solid performance and great value for money. Highly recommended!",
    rating: 5,
  },
];

function Testimonial() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{
          width: "100%",
          height: "300px",
          overflow: "hidden", // Prevent content overflow
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%", // Ensure content fills slide height
                padding: "20px",
                textAlign: "center",
                boxSizing: "border-box", // Prevent padding issues
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginBottom: "15px",
                }}
              />
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "1rem",
                  maxWidth: "80%", // Prevent text from being too wide
                  lineHeight: "1.5", // Improve readability
                }}
              >
                {item.review}
              </p>
              <p style={{ margin: "0", fontSize: "1rem" }}>
                {"⭐".repeat(item.rating)}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;