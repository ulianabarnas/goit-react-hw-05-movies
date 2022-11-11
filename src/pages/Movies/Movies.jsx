import PropTypes from 'prop-types';
import { ErrorMessage, Formik } from "formik";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Button, ButtonLabel, Container, Input, SearchForm } from "./Movies.styles";

export default function Movies({onSubmit}) {
    const handleSubmit = (values, { resetForm }) => {
        if (values.query.trim() === '') {
            return toast.info('Fill this field.')
        }
        
        onSubmit(values.query.trim());
        resetForm();
    };

    return (
        <Container>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={handleSubmit}
            >
                <SearchForm>
                    <Button type="submit">
                        <ButtonLabel>
                            Search
                        </ButtonLabel>
                    </Button>

                    <Input
                        name="query"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                    <ErrorMessage name="query" />
                </SearchForm>
            </Formik>
        </Container>
    );
};

Movies.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};