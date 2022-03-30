import { PowerSettingsNew } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Center } from "components/Center";
import { signIn, signOut, useSession } from "next-auth/react";
import { PacmanLoader } from "react-spinners";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  const loading = status === "loading";

  if (loading) {
    return (
      <Center>
        <PacmanLoader color="#F5A623" />
      </Center>
    );
  }

  if ((session === null || session === undefined) && !loading) {
    return (
      <Center>
        <Button variant="contained" color="primary" onClick={() => signIn()}>
          Sign In
        </Button>
      </Center>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{ px: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} sx={{ mb: 2 }}>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {session?.user?.image && <Avatar src={session.user.image} />}
              {/*Signed in as text*/}
              <Box>
                <Typography component="small">Signed in as</Typography>

                <Typography variant="h6" component="p">
                  {session?.user?.email}
                </Typography>
              </Box>
            </Box>

            <IconButton
              color="error"
              onClick={() => signOut()}
              component="span"
              sx={{
                alignSelf: "flex-end",
                justifySelf: "flex-end",
              }}
            >
              <PowerSettingsNew />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
