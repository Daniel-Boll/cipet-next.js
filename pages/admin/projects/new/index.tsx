import { Form } from "components/Form";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { FixedTags } from "../components/FixedTags";
import { signOut } from "next-auth/react";
import { AdminLayout } from "components/AdminLayout";

const NewProject = (_: {}) => {
  return (
    <AdminLayout>
      <Form
        title="Add Project"
        subHeader="Insert the informations for a new project"
        onSubmit={() => {
          console.log("yes");
        }}
        actions={
          <>
            <Button
              key="submit"
              variant="contained"
              color="primary"
              onClick={() => signOut()}
            >
              Save
            </Button>
          </>
        }
      >
        <Grid item xs={6}>
          <TextField required fullWidth id="title" label="Project title" />
        </Grid>
        <Grid item xs={6}>
          <TextField required fullWidth id="name" label="Project description" />
        </Grid>
        <Grid item xs={6}>
          <TextField required fullWidth id="image" label="Image" />
        </Grid>
        <Grid item xs={6}>
          <FixedTags />
        </Grid>
      </Form>
    </AdminLayout>
  );
};

export default NewProject;
