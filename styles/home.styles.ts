export const styles = {
  container: {
    backgroundColor: "#f5f5f5",
  },

  subTextLanding: {
    fontWeight: "300",
  },

  headerButton: {
    color: "white",
    textTransform: "none",
    fontSize: "1rem",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.9)",
  },

  header: {
    display: "flex",
    width: "100vw",
    justifyContent: "right",
    position: "fixed",
    top: 0,
    left: 0,
    padding: "1rem 2rem",
    zIndex: 10,
  },

  landing: {
    width: "100%",
    height: "98vh",
    backgroundImage: 'url("/images/keyboard.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    position: "relative",
  },

  mainLandingText: {
    textShadow: "2px 4px 4px rgba(0, 0, 0, 0.9)",
    color: "white",
    position: "absolute",
    width: "fit-content",
    top: "25%",
    left: "15%",
  },

  mainLandingTitle: {
    fontWeight: "bold",
    marginBottom: "1.5rem",
  },

  aboutMe: {
    padding: "5rem 5rem",
  },

  aboutMeTitle: {
    fontWeight: "bold",
    marginBottom: "1.5rem",
    color: "#141c23",
  },

  aboutMeArticle: {
    display: "flex",
    width: "60%",
    alignItems: "center",
  },

  readerWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
};
