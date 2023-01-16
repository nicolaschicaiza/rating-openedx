import React, { useState } from "react";
import Rating from "react-rating";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <Rating
        emptySymbol={<FontAwesomeIcon icon="star" color="gray" size="2x" />}
        fullSymbol={<FontAwesomeIcon icon="star" color="orange" size="2x" />}
        initialRating={rating}
        onChange={(newRating) => setRating(newRating)}
      />
    </div>
  );
}

export default StarRating;
