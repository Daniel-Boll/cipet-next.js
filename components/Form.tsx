import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
  Divider,
  Grid,
  Paper,
} from "@mui/material";
import { FC } from "react";

type FormProps = {
  title?: string;
  subHeader?: string;
  actions?: JSX.Element;
  onSubmit: (e?: any) => void;
};

const Form: FC<FormProps> = (props) => {
  return (
    <Box component="form" onSubmit={props.onSubmit} sx={{ width: "100%" }}>
      <CssBaseline />
      <Card>
        <CardHeader title={props.title} subheader={props.subHeader} />
        <Divider />
        <CardContent>
          <Grid container spacing={2}>
            {props.children}
          </Grid>
        </CardContent>
        <Divider />
        <Box sx={{ flexGrow: 1 }} />
        {props.actions && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", m: 2 }}>
            {props.actions}
          </Box>
        )}
      </Card>
    </Box>
  );
};

export { Form };
