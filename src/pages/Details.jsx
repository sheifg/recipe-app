import { useLocation } from "react-router-dom";
import { Card, Container, Stack } from "../styles/UI.styles";
import {
  Button,
  DetailsContainer,
  List,
  Section,
  StyledImage,
  Title,
} from "./../styles/Details.styles";

const Details = () => {
  //! Normal way
  // const data = useLocation();
  // console.log(data)

  //! Using destructuring
  const { state } = useLocation();
  console.log(state);
  const recipe = state.recipe;
  console.log(recipe);

  // const location = useLocation();
  // console.log(location);

  //! Using desctructruing inside of destructuring
  // const { state: {recipe} } = useLocation();

  // Creating this array, the array can be mapped and get the necessary information according to these labels for each recipe
  const labels = [
    "PROCNT",
    "FAT",
    "CHOCDF.net",
    "CHOLE",
    "NA",
    "CA",
    "MG",
    "K",
    "FE",
  ];

  return (
    <Container>
      <DetailsContainer>
        <Card shadow bg="#fefefe">
          <Stack
            direction="row"
            gap="1px"
            justify="space-between"
            align="center"
          >
            <StyledImage src={recipe.image} />
            <div className="right-side">
              <Title>{recipe.label}</Title>
              <Card
                bg="#f1f1f1"
                border="1px solid #ccc"
                shadow
                style={{ marginBottom: "5px" }}
              >
                <h3>Ingredients</h3>
                <hr />
                <List>
                  {recipe.ingredients.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </List>
              </Card>
            </div>
          </Stack>
          {/* id="nutrients-card" It is created inside of Details.styles.jsx */}
          <Card bg="#f1f1f1" border="1px solid #ccc" id="nutrients-card" shadow>
            <Stack direction="row" gap="2rem" justify="flex-start">
              <Section>
                <Title>{recipe.calories.toFixed(1)} cal.</Title>
              </Section>
              <Section>
                {labels.map((item, index) => (
                  <Stack key={index} direction="row" justify="space-between">
                    <p>{recipe.totalNutrients[item].label}</p>
                    <h4>
                      {recipe.totalNutrients[item].quantity.toFixed(2)}{" "}
                      {recipe.totalNutrients[item].unit}
                    </h4>
                  </Stack>
                ))}
              </Section>
            </Stack>
          </Card>
          <div className="text-center">
            {/* It looks like a Button but it is a link, defined in stylecomponent. With a normal button to make it like a link directly in the code, it would have to wrap with a <Link></Link> */}
            <Button to={-1}>Back</Button>
          </div>
        </Card>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
