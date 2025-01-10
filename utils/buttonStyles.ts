export const buttonStyles = {
  base: {
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background-color 0.2s",
    border: "none",
    color: "white",
  },
  primary: {
    backgroundColor: "#1a365d", // Dark blue
    "&:hover": {
      backgroundColor: "#2a4a7f",
    },
  },
  secondary: {
    backgroundColor: "#2d3748", // Lighter shade for cancel buttons
    "&:hover": {
      backgroundColor: "#4a5568",
    },
  },
};
