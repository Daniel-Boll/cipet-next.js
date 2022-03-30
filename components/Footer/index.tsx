import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { styles } from "./styles";

export const Footer = () => {
  return (
    <Box id="contact" sx={styles.footer}>
      <Typography>©CIPET - PETComp</Typography>
      <Box sx={styles.socialMediaLinksContainer}>
        <Box sx={styles.socialMediaLinks}>
          <Image
            src="/icons/github.svg"
            width={20}
            height={20}
            alt="github icon"
          />{" "}
          /matozinho
        </Box>
        <Box sx={styles.socialMediaLinks}>
          <Image
            src="/icons/instagram.svg"
            width={20}
            height={20}
            alt="instagram icon"
          />{" "}
          @lima_felipi
        </Box>
        <Box sx={styles.socialMediaLinks}>
          <Image
            src="/icons/facebook.svg"
            width={20}
            height={20}
            alt="facebook icon"
          />{" "}
          /Felipi Lima Matozinho
        </Box>
      </Box>
    </Box>
  );
};
