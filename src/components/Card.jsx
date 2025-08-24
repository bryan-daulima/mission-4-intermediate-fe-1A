// src/components/Card.jsx
export default function Card({ image, title, description, instructorImg, instructorName, instructorJob, rating, reviews, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="instructor">
          <img src={instructorImg} alt={instructorName} />
          <div>
            <strong>{instructorName}</strong><br />
            <span>{instructorJob}</span>
          </div>
        </div>

        <div className="card-footer">
          <div className="rating">⭐ {rating} ({reviews})</div>
          <div className="price">{price}</div>
        </div>
      </div>
    </div>
  );
}
