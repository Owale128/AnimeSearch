
interface IStarRatingProps {
    rating: number;
    onRating: (rating: number) => void;
}

const StarRating = ({rating, onRating}: IStarRatingProps) => {
  return (
    <div className="starRating">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return(
            <span
            key={starValue}
            className={starValue <= rating ? 'filled' : 'empty'}
            onClick={() => onRating (starValue)}
            >
            &#9733;
            </span>
        );
      })}
    </div>
  );
};

export default StarRating
