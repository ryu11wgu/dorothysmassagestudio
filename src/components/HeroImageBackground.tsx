import { Button, Container, Overlay, Text, Title } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import { Link } from "react-router-dom";

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Welcome to Dorothy's Massage Studio{" "}
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Where your body softens, your mind quiets, and your spirit returns
            to center
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            component={Link}
            to="/contact"
            className={classes.control}
            variant="white"
            size="lg"
          >
            Book Now
          </Button>
          {/* <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Live demo
          </Button> */}
        </div>
      </div>
    </div>
  );
}
