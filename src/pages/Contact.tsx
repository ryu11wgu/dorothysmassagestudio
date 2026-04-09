import {
  Anchor,
  Center,
  Container,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function Contact() {
  return (
    <>
      <Container size="sm" py="xl">
        <Stack gap="md" align="center">
          <Title order={2}>Contact</Title>

          <Text maw={600}>
            This practice focuses on therapeutic massage supporting recovery,
            medically sensitive care, and meditative bodywork. Sessions may be
            coordinated alongside healthcare providers when needed.
          </Text>
        </Stack>
      </Container>

      <Container size="sm" pb="md">
        <Center>
          <Paper shadow="md" bg="teal" c="white" p="xl" radius="md" w="100%">
            <Stack gap="xs" align="center">
              <Text fw={700}>By appointment only. Please text or call.</Text>
              <Anchor
                href="tel:+16614054079"
                c="white"
                underline="never"
                fw={700}
                size="lg"
              >
                (661) 405-4079
              </Anchor>
            </Stack>
          </Paper>
        </Center>
      </Container>

      <Container size="sm" pb="md">
        <Stack gap={4} align="center">
          <Title order={4}>Location</Title>
          <Text ta="center">
            1034 W Ave L 12
            <br />
            Suite 101 Room #5
            <br />
            Lancaster, CA 93534
          </Text>
        </Stack>
      </Container>

      <Container size="md" pb="xl">
        <iframe
          title="Google Maps — 1034 W Ave L 12, Lancaster, CA"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2149545066386!2d-118.1535529236285!3d34.649273972938076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c25a4f39ec2a81%3A0x7905b3f66b2eadcc!2s1034%20W%20Ave%20L%2012%2C%20Lancaster%2C%20CA%2093534!5e0!3m2!1sen!2sus!4v1768101574119!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Container>
    </>
  );
}
