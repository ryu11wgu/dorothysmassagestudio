import { Center, Container, Title, Button } from "@mantine/core";
import ServiceCards from "../components/ServiceCards";
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
        <ServiceCards />
      </Container>

      <Container>
        <Center>
          <Button
            component={Link}
            to="/contact"
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
