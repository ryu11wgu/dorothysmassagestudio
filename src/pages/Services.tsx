import { Center, Container, Title, Button } from "@mantine/core";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <Container size={500} p={25}>
        <Center>
          <Title pt={75} order={2}>
            Services
          </Title>
        </Center>
      </Container>
      <Container pb={25}>
        <Card />
      </Container>

      <Container>
        <Center>
          <Button
            component={Link}
            to={"/contact"}
            mb={35}
            variant="filled"
            color="teal"
            size="md"
          >
            Book Now
          </Button>
        </Center>
      </Container>
    </>
  );
}
