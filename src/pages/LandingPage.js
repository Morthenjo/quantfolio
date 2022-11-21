import { Box, Logo } from "../components/Styled";
import Quantfolio from "../pages/quantfolio.png";
import Test from "./Test";
import Test3 from "./Test3";
import Test2 from "./Test2";

const LandingPage = () => {
  return (
    <Box>
      <Logo src={Quantfolio} alt="quantfol.io" />
      <Test />
    </Box>
  );
};

export default LandingPage;
