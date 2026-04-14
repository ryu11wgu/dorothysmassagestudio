import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "teal",
  defaultRadius: "md",

  headings: {
    fontWeight: "700",
  },

  components: {
    Button: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },
    Paper: {
      defaultProps: {
        radius: "md",
        shadow: "md",
      },
    },
    Card: {
      defaultProps: {
        radius: "md",
        shadow: "sm",
        withBorder: true,
      },
    },
  },
});
