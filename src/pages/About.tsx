import { Center, Container, Title, Text, Image, Card } from "@mantine/core";

export default function Prices() {
  return (
    <>
      <Container size={500} p={35}>
        <Center>
          <Title pt={75} order={2}>
            About
          </Title>
        </Center>
      </Container>
      <Container>
        <Center>
          <Image radius={"md"} src={"./profile.png"} w={200} pb={35} />
        </Center>
      </Container>
      <Container size={500}>
        <Center>
          <Text>
            Dorothy is a seasoned, licensed massage therapist offering private,
            appointment-only sessions focused on therapeautic care, relaxation,
            and nervous-system support. Her work combines skilled bodywork with
            a calm, attentive presence, creating sessions that are both
            effective and deeply restorative. Clients come for relief from
            tension, chronic discomfort, stress, and emotional fatigue. Dorothy
            maintains a small, private practice in order to provide unrushed,
            personalized care in a peaceful, respectful environment.
          </Text>
        </Center>
      </Container>
    </>
  );
}
