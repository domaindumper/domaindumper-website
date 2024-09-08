// pages/index.js
import Header from "../components/Header";
import {
  ChakraProvider,
  useColorMode,
  useColorModeValue,
  Button,
  Text,
} from "@chakra-ui/react";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <Header />
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <h1>Welcome to My Website</h1>
      <p>This is the homepage.</p>
    </div>
  );
};

export default Home;
