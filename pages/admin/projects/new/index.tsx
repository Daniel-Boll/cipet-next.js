import { Form } from "components/Form";
import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import React, { createContext, useState } from "react";
import { FixedTags } from "components/projects/FixedTags";
import { AdminLayout } from "components/AdminLayout";
import { api } from "service/api";

interface IContext {
  title: {
    title: string;
    setTitle: (title: string) => void;
  };
  description: {
    description: string;
    setDescription: (description: string) => void;
  };
  image: {
    image: string;
    setImage: (image: string) => void;
  };
  tags: {
    tags: Array<string>;
    setTags: (tags: Array<string>) => void;
  };
}

export const ProjectContext = createContext<IContext>({} as IContext);

const NewProject = (_: {}) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ProjectContext.Provider
      value={{
        title: { title, setTitle },
        description: { description, setDescription },
        image: { image, setImage },
        tags: { tags, setTags },
      }}
    >
      <AdminLayout>
        <Form
          title="Add Project"
          subHeader="Insert the informations for a new project"
          onSubmit={(e: any) => {
            e.preventDefault();

            api
              .post("project/create", {
                title,
                description,
                image,
                tags,
              })
              .then(() => {
                console.log("Success");
                setOpen(true);
              });
          }}
          actions={
            <Button
              key="submit"
              type="submit"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          }
        >
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="title"
              id="title"
              label="Project title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="name"
              id="name"
              label="Project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              name="image"
              id="image"
              label="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FixedTags />
          </Grid>
        </Form>
      </AdminLayout>
      <Notification open={open} handleClose={handleClose} />
    </ProjectContext.Provider>
  );
};

const Notification = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
        Criado
      </Alert>
    </Snackbar>
  );
};

export default NewProject;
