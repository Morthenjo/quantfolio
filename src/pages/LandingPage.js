import { Box, Logo } from "../components/Styled";
import Quantfolio from "../pages/quantfolio.png";
import Test from "./Test";

const LandingPage = () => {
  return (
    <Box>
      <Logo src={Quantfolio} alt="quantfol.io" />
      <h1>bruh</h1>
      <Test />
    </Box>
  );
};

export default LandingPage;
