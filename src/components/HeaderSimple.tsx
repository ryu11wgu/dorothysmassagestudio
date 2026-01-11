import { useState } from "react";
import { Container, Group } from "@mantine/core";

import classes from "./HeaderSimple.module.css";
import { Link } from "react-router-dom";

const links = [
  { link: "/home", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/services", label: "Services" },
  { link: "/contact", label: "Contact" },
];

export function HeaderSimple() {
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        // event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <img src="./logo.png" width={50} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
    </header>
  );
}
