import {
  Center,
  Container,
  Table,
  Text,
  Title,
  SimpleGrid,
  Image,
  Stack,
} from "@mantine/core";
import { HeroImageBackground } from "../components/HeroImageBackground";

export default function Home() {
  const elements = [
    { day: "Monday", hours: "8:00 am - 10:00 pm" },
    { day: "Tuesday", hours: "8:00 am - 10:00 pm" },
    { day: "Wednesday", hours: "7:00 pm - 10:00 pm" },
    { day: "Thursday", hours: "8:00 am - 10:00 pm" },
    { day: "Friday", hours: "8:00 am - 10:00 pm" },
    { day: "Saturday", hours: "8:00 am - 10:00 pm" },
    { day: "Sunday", hours: "Closed" },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.day}>
      <Table.Td>{element.day}</Table.Td>
      <Table.Td>{element.hours}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <HeroImageBackground />

      <Container size="xs" py="xl">
        <Stack gap="md">
          <Title order={2} ta="center">
            Therapeutic care with over 25 years of experience
          </Title>

          <Text size="md">
            Book your appointment with Dorothy, a seasoned massage therapist and
            healing practitioner with over 25 years of experience.
          </Text>

          <Text size="md">
            Since 1996, she has offered mindful, intuitive touch-customized
            treatments designed to calm the nervous system, release tension, and
            revitalize both body and mind.
          </Text>
        </Stack>
      </Container>

      <Container size="md" pb="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          <Image
            radius="md"
            src="/carousel-photos/carousel-1.png"
            alt="Massage studio interior"
          />
          <Image
            radius="md"
            src="/carousel-photos/carousel-2.png"
            alt="Massage studio treatment space"
          />
          <Image
            radius="md"
            src="/carousel-photos/carousel-3.png"
            alt="Massage studio atmosphere"
          />
        </SimpleGrid>
      </Container>

      <Container size="sm" pb="xl">
        <Center>
          <Stack gap="xs" w="100%">
            <Title order={2} ta="center">
              Studio Hours
            </Title>

            <Text ta="center">By appointment only.</Text>

            <Table striped withTableBorder withColumnBorders>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Stack>
        </Center>
      </Container>
    </>
  );
}
