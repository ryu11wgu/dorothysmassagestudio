import { Center, Container, Title, Text, Paper } from "@mantine/core";

export default function Contact() {
  return (
    <>
      <Container size={500} p={35}>
        <Center>
          <Title pt={75} order={2}>
            Contact
          </Title>
        </Center>
      </Container>
      <Container>
        <Center>
          <Paper shadow="md" bg={"teal"} c={"white"} p={25} mb={25}>
            <Text>By Appointment Only. Please text.</Text>
            <Title order={5}>Phone: (661) 405 - 4079</Title>
          </Paper>
        </Center>
      </Container>
      <Container>
        <Center>
          <Text fw={700}>Location:</Text>
        </Center>
      </Container>
      <Container pb={25}>
        <Center>
          1034 W Ave L 12, <br /> Suite 101 Room# 5 <br /> Lancaster, CA 93534
        </Center>
      </Container>
      <Container pb={25}>
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
