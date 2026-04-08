import { Container, Group, Image } from "@mantine/core";
import { NavLink } from "react-router-dom";
import classes from "./HeaderSimple.module.css";

const links = [
  { link: "/", label: "Home", end: true },
  { link: "/about", label: "About" },
  { link: "/services", label: "Services" },
  { link: "/contact", label: "Contact" },
];

export function HeaderSimple() {
  const items = links.map((item) => (
    <NavLink
      key={item.label}
      to={item.link}
      end={item.end}
      className={({ isActive }) =>
        isActive ? `${classes.link} ${classes.linkActive}` : classes.link
      }
    >
      {item.label}
    </NavLink>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src="/logo.png" alt="Dorothy's Massage Studio logo" w={80} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
    </header>
  );
}
