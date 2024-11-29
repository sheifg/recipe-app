import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useRecipe } from "../context/RecipeContext";
import { HomeContainer, StyledCard } from "../styles/Home.styles";
import { Stack } from "../styles/UI.styles";

const Home = () => {
  const { recipes } = useRecipe();
  return (
    <HomeContainer>
      <Header />

      <Stack gap="1rem" justify="center">
        {recipes?.map((item) => (
          <StyledCard key={item.recipe.uri} bg="#efefef" shadow>
            <h5>{item.recipe.label}</h5>
            {/* Making the image clickable with Link
            It would be the same if there would be a Button and the users wants to go to another page */}
            {console.log(item.recipe)}
            <Link to="/details" state={{ recipe: item.recipe }}>
              {/* <Link to="/details" state={{ recipe: item.recipe }}> */}
              <img src={item.recipe.image} alt={item.recipe.label} />
            </Link>
          </StyledCard>
        ))}
      </Stack>
    </HomeContainer>
  );
};

export default Home;
