import { Card, Image, Text, Group, SimpleGrid, Box } from "@mantine/core";
import serviceCards from "../service-cards.json";
import type { Service } from "../types/service";

export default function ServiceCards() {
  const cards = (serviceCards as Service[]).map((item) => (
    <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={item.image} height={160} alt={item.title} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{item.title}</Text>
      </Group>

      <Text size="sm" c="dimmed" pb={90}>
        {item.description}
      </Text>

      <Box
        style={{
          position: "absolute",
          bottom: "var(--mantine-spacing-lg)",
          left: "var(--mantine-spacing-lg)",
          right: "var(--mantine-spacing-lg)",
        }}
      >
        <Text fw={1000}>{item.price}</Text>
        {item.price2 && <Text fw={1000}>{item.price2}</Text>}
        {item.price3 && <Text fw={1000}>{item.price3}</Text>}
      </Box>
    </Card>
  ));

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
      {cards}
    </SimpleGrid>
  );
}
