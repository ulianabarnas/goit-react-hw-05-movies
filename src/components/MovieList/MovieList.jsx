import { NavItem } from "./MovieList.styled.";

export default function MovieList({movies}) {
    return (
        <ul>
            {movies.map(({ title, id }) => (
                <li key={id}>
                    <NavItem to={`movies/${id}`}>
                        {title}
                    </NavItem>
                </li>
            ))}
        </ul>
    );
};
