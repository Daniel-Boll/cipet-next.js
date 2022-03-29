import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Divider,
  Paper,
} from "@mui/material";
import { FC } from "react";

type FormProps = {
  title?: string;
  subHeader?: string;
  actions?: JSX.Element;
  onSubmit: () => void;
};

const Form: FC<FormProps> = (props) => {
  return (
    <Box component="form" noValidate onSubmit={props.onSubmit}>
      <CssBaseline />
      <Card>
        <CardHeader title={props.title} subheader={props.subHeader} />
        <Divider />
        <CardContent>{props.children}</CardContent>
        <Divider />
      </Card>
      <Paper
        sx={{
          display: "flex",
          position: "sticky",
          // zIndex: 9,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <Box sx={{ flexGrow: 1 }} />
        {props.actions && <Box sx={{ m: 2 }}>{props.actions}</Box>}
      </Paper>
    </Box>
  );
};

export { Form };
