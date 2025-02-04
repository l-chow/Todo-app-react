import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.module.css";
import App from "./App.tsx";
import { Card, CardContent, Typography } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
