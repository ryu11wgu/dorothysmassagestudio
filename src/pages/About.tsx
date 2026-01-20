import { Center, Container, Title, Text, Image } from "@mantine/core";

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
      <Container size={500} pb={25}>
        <Center>
          <Text>
            A private therapeutic massage practice supporting clients in
            physical therapy, post-surgical and cancer recovery, and medically
            sensitive care, while also welcoming individuals who seek
            meditative, mindful bodywork. Sessions may be coordinated alongside
            healthcare providers when needed.
          </Text>
        </Center>
        <Center>
          <Title order={4} pt={25}>
            Meet Your Massage Therapist
            <br />
            <br />
          </Title>
        </Center>
        <Center>
          <Text>
            Hi, I'm Dorothy — a licensed massage therapist offering private,
            appointment-only sessions focused on therapeutic care, relaxation,
            and nerovus-system support.
            <br />
            <br />
            My work blends skilled bodywork with a calm, attentive presence,
            creating sessions that are both effective and deeply restorative.
            Clients come seeking relief from tension, chronic discomfort,
            stress, and emotional fatigue — and leave feeling more grounded,
            supported, and at ease.
            <br />
            <br />
            I maintain a small, private practice so I can offer unrushed,
            personalized care in a peaceful and respectful environment. Each
            session is thoughtfully tailored to the individual, allowing space
            for the body to soften, reset, and restore naturally.
            <br />
            <br />
            My intention is to provide a safe, welcoming space where clients
            feel truly cared for — not rushed, not overlooked — but fully
            supported in their healing and well-being.
          </Text>
        </Center>
      </Container>
    </>
  );
}
