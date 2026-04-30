import { useEffect, useState } from "react";
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
import type { BusinessInfo } from "../types/businessInfo";

export default function Home() {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBusinessInfo() {
      try {
        const response = await fetch("http://localhost:8080/api/business-info");

        if (!response.ok) {
          throw new Error("Failed to load business information.");
        }

        const data: BusinessInfo = await response.json();
        setBusinessInfo(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred.",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchBusinessInfo();
  }, []);

  if (loading) {
    return (
      <Container py="xl">
        <Text ta="center">Loading business information...</Text>
      </Container>
    );
  }

  if (error || !businessInfo) {
    return (
      <Container py="xl">
        <Text ta="center" c="red">
          {error ?? "Business information could not be loaded."}
        </Text>
      </Container>
    );
  }

  const rows = businessInfo.businessHours.map((element) => (
    <Table.Tr key={element.id}>
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
            {businessInfo.homeIntroTitle}
          </Title>

          {businessInfo.homeIntroParagraphs.map((paragraph) => (
            <Text key={paragraph} size="md">
              {paragraph}
            </Text>
          ))}
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
