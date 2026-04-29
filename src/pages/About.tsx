import {
  Button,
  Center,
  Container,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

const aboutParagraphs = [
  "Hi, I'm Dorothy — a licensed massage therapist offering private, appointment-only sessions focused on therapeutic care, relaxation, and nervous-system support.",
  "My work blends skilled bodywork with a calm, attentive presence, creating sessions that are both effective and deeply restorative. Clients come seeking relief from tension, chronic discomfort, stress, and emotional fatigue — and leave feeling more grounded, supported, and at ease.",
  "I maintain a small, private practice so I can offer unrushed, personalized care in a peaceful and respectful environment. Each session is thoughtfully tailored to the individual, allowing space for the body to soften, reset, and restore naturally.",
  "My intention is to provide a safe, welcoming space where clients feel truly cared for — not rushed, not overlooked — but fully supported in their healing and well-being.",
];

export default function About() {
  return (
    <>
      <Container size="sm" py="xl">
        <Stack gap="lg" align="center">
          <Title order={2}>About</Title>

          <Image
            radius="md"
            src="/profile.png"
            w={200}
            alt="Dorothy, massage therapist"
          />
        </Stack>
      </Container>

      <Container size="xs" pb="xl">
        <Stack gap="md">
          <Title order={4} ta="center">
            Meet Your Massage Therapist
          </Title>

          {aboutParagraphs.map((paragraph) => (
            <Text key={paragraph}>{paragraph}</Text>
          ))}
        </Stack>
      </Container>

      <Container pb="xl">
        <Center>
          <Button
            component={Link}
            to="/contact"
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
