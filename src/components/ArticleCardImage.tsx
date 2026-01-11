import { Button, Paper, Text, Title } from "@mantine/core";
import classes from "./ArticleCardImage.module.css";

export default function ArticleCardImage() {
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <div>
        <Text className={classes.category} size="xs">
          Full Body
        </Text>
        <Title order={3} className={classes.title}>
          Swedish Massage
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read more
      </Button>
    </Paper>
  );
}
