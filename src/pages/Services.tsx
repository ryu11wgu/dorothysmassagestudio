import { Center, Container, Title } from "@mantine/core";
import Card from "../components/Card";

export default function Services() {
  return (
    <>
      <Container size={500} p={35}>
        <Center>
          <Title pt={75} order={2}>
            Services
          </Title>
        </Center>
      </Container>
      <Container>
        <Card />
      </Container>
    </>
  );
}
