import { useEffect } from "react";
import { Button, Title, Container, Paper, Text } from "@mantine/core";
import "./App.css";
import Header from "./components/Header";

function App() {
  useEffect(() => {
    fetch("http://localhost:3001/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Title order={1} mt="md" mb="lg">
          Pixel Art App 🎨
        </Title>
      </Container>
      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Text size="lg" mb="sm">
          Hello from Mantine 🎨
        </Text>
        <Button color="grape" size="md">
          Upload Image
        </Button>
      </Paper>
    </>
  );
}

export default App;
