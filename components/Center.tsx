import { Box } from "@mui/material";

export const Center = ({ children }: { children: JSX.Element }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100vh"
    width="100vw"
  >
    {children}
  </Box>
);
