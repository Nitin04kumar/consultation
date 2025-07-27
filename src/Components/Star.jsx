import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function Star({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="gold" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="gold" />);
    } else {
      stars.push(<AiOutlineStar key={i} color="gold" />);
    }
  }

  return (
    <>
      <span>{stars}</span>
    </>
  );
}
