import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styles } from "./styles";

export interface cardData {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const ProjectCard = (props: cardData) => {
  const { title, description, image, tags } = props;

  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Box sx={styles.cardHeader}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
        <Box sx={styles.cardArticle}>{description || ""}</Box>
        <Box sx={styles.cardFooter}>
          {tags && tags.length
            ? tags.map((tagLabel: string, idx: number) => (
                <Chip
                  sx={styles.tags}
                  variant="outlined"
                  label={tagLabel}
                  key={idx}
                />
              ))
            : ""}
        </Box>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: "25%" }}
        image={image}
        alt="Project Image"
      />
    </Card>
  );
};
