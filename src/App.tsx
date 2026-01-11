import "@mantine/core/styles.css";
import { theme } from "./theme";
import { HeaderSimple } from "./components/HeaderSimple";
import { Outlet } from "react-router-dom";
import {
  AppShell,
  Burger,
  NavLink,
  Button,
  Center,
  MantineProvider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";

const links = [
  { link: "/home", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/Services", label: "Services" },
  { link: "/Contact", label: "Contact" },
];

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        padding="md"
        header={{ height: 90 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened, desktop: !opened },
        }}
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <HeaderSimple />
        </AppShell.Header>

        <AppShell.Navbar onClick={toggle}>
          {links.map((link) => (
            <NavLink
              key={link.label}
              component={Link}
              to={link.link}
              label={
                <Center>
                  <Button fullWidth color="teal" size="xl">
                    {link.label}
                  </Button>
                </Center>
              }
            />
          ))}
        </AppShell.Navbar>
        {/* <AppShell.Main> */}
        <Outlet />
        {/* </AppShell.Main> */}
      </AppShell>
    </MantineProvider>
  );
}
