import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewsById } from "services/api";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {

        getReviewsById(Number(movieId)).then(data => {
            setReviews(data.results)
            
        })
    }, [movieId]);

    console.log(reviews);

    if (reviews.length === 0) {
        return;
    };

    return (
        <ul>
            {reviews.map(({ author, content }) => (
                <li key={author}>
                    <p><b>Author:</b> {author}</p>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    );
};
