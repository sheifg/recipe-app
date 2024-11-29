import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// Import everyhting from yup library
import * as Yup from "yup";
import { Button, Error, LoginContainer } from "./../styles/Login.styles";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Card } from "./../styles/UI.styles";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // Navigate between the pages
  const location = useLocation(); // In that case to manage the data that it is obtained from this page
  // useLocation receives the data from details. In home when the image is clicked, location takes the state from there
  // console.log("LOCATION:", location);
  const initialValues = {
    username: "",
    password: "",
  };

  // Yup library uses for validation and it is necessary the schema for that validation
  // The validation can do it inside the Formik, but it is better to have it outside and then call that as prop in Formik
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    // username: Yup.number().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Minimum 6 chars needed"),
  });

  // values are the values that it is included in the form and preventDefault without event
  const submitHandler = (values) => {
    const { username, password } = values;
    login(username, password);
    // navigate("/");
    if (location.state) {
      // Sending the information back to privateRoutes(because the privateRoutes file forgets the information (there is no information holder in the privateRoutes page)) to navigate to the details page
      navigate(location.state.to, {
        state: { recipe: location.state.detailsRecipe },
      });
    } else navigate("/");
    // navigate(location.state.to);
  };
  return (
    <LoginContainer>
      {/* Special and strong library for controlled forms */}
      {/* Formik requires by default 2 props: intialValues(something for the form) and submitHandler */}
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Card bg="#efefef" shadow>
          <Form>
            <h1 className="text-center">Login</h1>
            {/* With Field it is not necessary to make onChange and value, formik make by itself */}
            {/* The name in the Field should be the same as initialValues */}
            <Field
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
            />
            {/* This part(Error) is created later after the Field parts. <Error> it is creted as styled components but it can be included the ErrorMessage(from formik) inside in a div */}
            <Error>
              <ErrorMessage name="username" />
            </Error>
            <Field
              type="password"
              name="password"
              placeholder="*******"
              autoComplete="off"
            />
            <Error>
              <ErrorMessage name="password" />
            </Error>
            {/* The button is included inside in a div because it is wanted to give style with text-center */}
            <div className="text-center">
              <Button type="submit">Login</Button>
            </div>
          </Form>
        </Card>
      </Formik>
    </LoginContainer>
  );
};

export default Login;
