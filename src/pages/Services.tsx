import { Center, Container, Title, Button, Text, Stack } from "@mantine/core";
import ServiceCards from "../components/ServiceCards";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <Container size="sm" py="xl">
        <Stack gap="xs" align="center">
          <Title order={2} ta="center">
            Services
          </Title>
          <Text ta="center" c="dimmed" maw={600}>
            Sessions are designed to support the body's natural healing process.
          </Text>
        </Stack>
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
