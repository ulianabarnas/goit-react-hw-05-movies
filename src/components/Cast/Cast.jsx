import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCastById } from "services/api";
import { List } from "./Cast.styled";

export default function Cast() {
    const [cast, setCast] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        getCastById(Number(movieId)).then(data => {
            setCast(data.cast)
            
        })
    }, [movieId]);

    if (cast.length === 0) {
        return ;
    };

    return (
        <List>
            {cast.map(({ name, character, profile_path }) => (
                <li key={name}>
                    <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
                    <p>{name}</p>
                    <p><b>Character:</b> {character}</p>
                </li>
            ))}
        </List>
    );
};
