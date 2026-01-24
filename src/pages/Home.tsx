import {
  Center,
  Container,
  Table,
  Text,
  Title,
  SimpleGrid,
  Image,
} from "@mantine/core";
import { HeroImageBackground } from "../components/HeroImageBackground";
import {} from "@mantine/core";

export default function Home() {
  const elements = [
    { day: "Monday", hours: "10:00 am - 7:00 pm" },
    { day: "Tuesday", hours: "10:00 am - 7:00 pm" },
    { day: "Wednesday", hours: "6:00 pm - 9:00 pm" },
    { day: "Thursday", hours: "6:00 pm - 9:00 pm" },
    { day: "Friday", hours: "10:00 am - 7:00 pm" },
    { day: "Saturday", hours: "Closed" },
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
      <Container size={700}>
        <Center p={35}>
          <p>
            Book your appointment with Dorothy, a seasoned massage therapist and
            healing practitioner with over 25 years of experience. Since 1996,
            she has offerred a mindful, intuitive touch-customized treatments
            designed to calm the nervous system, release tension, and revitalize
            both body and mind.
          </p>
        </Center>
      </Container>
      <Container>
        <SimpleGrid cols={3} pb={50}>
          <Image radius="md" src="/carousel-photos/carousel-photo-1.png" />
          <Image radius="md" src="/carousel-photos/carousel-photo-2.png" />
          <Image radius="md" src="/carousel-photos/carousel-photo-3.png" />
        </SimpleGrid>
      </Container>

      <Container size={500} pb={25}>
        <Center>
          <Title order={2} p={25}>
            Studio Hours
          </Title>
        </Center>
        <Center pb={5}>
          <Text>By appointment only</Text>
        </Center>

        <Table striped withTableBorder withColumnBorders>
          <Table.Thead>
            {/* <Table.Tr>
              <Table.Th></Table.Th>
              <Table.Th></Table.Th>
            </Table.Tr> */}
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Container>
    </>
  );
}
