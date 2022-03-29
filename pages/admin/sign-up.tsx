import { jsx } from "@emotion/react";
import { Box, Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { PacmanLoader } from "react-spinners";
import { Form } from "../../components/form";

const Center = ({ children }: { children: JSX.Element }) => (
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

export default function Component() {
  const { data: session, status } = useSession();

  const loading = status === "loading";

  if (loading) {
    return (
      <Center>
        <PacmanLoader color="#F5A623" />
      </Center>
    );
  }

  if (!session && !loading) {
    return (
      <Center>
        <Button variant="contained" color="primary" onClick={() => signIn()}>
          Sign In
        </Button>
      </Center>
    );
  }

  return (
    <Form
      title="Add Projects"
      subHeader="Lmao"
      onSubmit={() => {
        console.log("yes");
      }}
    >
      Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </Form>
  );
}
