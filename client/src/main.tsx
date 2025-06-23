import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      defaultColorScheme="light" // <-- use this instead
      theme={{
        /** Optional: custom theme values here */
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Notifications />
      <App />
    </MantineProvider>
  </StrictMode>
);
