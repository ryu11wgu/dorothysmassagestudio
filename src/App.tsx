import "@mantine/core/styles.css";
import { theme } from "./theme";
import { HeaderSimple } from "./components/HeaderSimple";
import { Outlet, NavLink as RouterNavLink } from "react-router-dom";
import { AppShell, Burger, NavLink, MantineProvider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { link: "/", label: "Home", end: true },
  { link: "/about", label: "About" },
  { link: "/services", label: "Services" },
  { link: "/contact", label: "Contact" },
];

export default function App() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <MantineProvider theme={theme}>
      <AppShell
        padding="md"
        header={{ height: 90 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened, desktop: true },
        }}
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <HeaderSimple />
        </AppShell.Header>

        <AppShell.Navbar p="md">
          {links.map((item) => (
            <NavLink
              key={item.label}
              component={RouterNavLink}
              to={item.link}
              end={item.end}
              label={item.label}
              onClick={close}
            />
          ))}
        </AppShell.Navbar>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
