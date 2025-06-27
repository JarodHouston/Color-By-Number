import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";

function Root() {
  const theme = createTheme({
    fontFamily: "Inter, sans-serif",
  });

  return (
    <StrictMode>
      <MantineProvider theme={theme}>
        <Notifications />
        <App />
      </MantineProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    // optional: show a "Refresh to update" message
  },
  onOfflineReady() {
    // optional: show "App ready offline" message
  },
});
