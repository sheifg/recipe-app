import { Field, Form, Formik } from "formik";
import { useRecipe } from "../context/RecipeContext";
import { Button, HeaderContainer } from "../styles/Header.styles";
import { Card, Stack } from "../styles/UI.styles";
import { MdSearch } from "react-icons/md";

const Header = () => {
  const { mealTypes, getData, recipies } = useRecipe();

  const initialValues = { query: "", meal: mealTypes[0].toLocaleLowerCase() };

  const submitHandler = (values) => {
    const { query, meal } = values;
    getData(query, meal);
    console.log(recipies);
  };

  return (
    <HeaderContainer>
      <h2 className="text-secondary">Recipe App</h2>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        <Form>
          <Card bg="#efefef" style={{ padding: "1rem" }} shadow>
            <Stack gap="1rem" className="form-fields">
              {/* The difference using type="search" is that when you write something appears a symbol "x", that allows you to delete the written text in the search field */}
              <Field
                type="search"
                placeholder="Pizza"
                autocomplete="off"
                name="query"
                // flex: 1 -> To occupy the entire space that it is remaining, depending the space that the others occupy. If there is the unique element, it will take the whole space
                style={{ flex: 1 }}
              />
              {/* For formik with dropdown menu, we just need as="select", not type. It is specific for formik */}
              <Field as="select" name="meal">
                {/* <option value=""></option> */}
                {/* Instead of create one by one, we map mealTypes, that include all options
                <option value="breakfast>Breakfast</option>" */}
                {mealTypes.map((meal, index) => (
                  <option key={index} value={meal.toLowerCase()}>
                    {meal}
                  </option>
                ))}
                {/* In that case it can use as key directly the meal, because the meals are unique and there are not repeated
                {mealTypes.map((meal) => (
                  <option key={meal} value={meal.toLowerCase()}>
                    {meal}
                  </option>
                ))} */}
              </Field>
              <Button type="submit">
                <Stack gap="0.5rem" align="center" justify="center">
                  <MdSearch className="searchIcon" />
                  <span>Search</span>
                </Stack>
              </Button>
            </Stack>
          </Card>
        </Form>
      </Formik>
    </HeaderContainer>
  );
};

export default Header;
