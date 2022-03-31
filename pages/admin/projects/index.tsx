import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { AdminLayout } from "components/AdminLayout";
import Link from "next/link";

const Projects = (_: {}) => {
  return (
    <AdminLayout>
      <Grid item xs={4}>
        <Link href="projects/new" passHref>
          <Button variant="contained">New</Button>
        </Link>
      </Grid>
      <Typography variant="h4" gutterBottom>
        List
      </Typography>
    </AdminLayout>
  );
};

export default Projects;
