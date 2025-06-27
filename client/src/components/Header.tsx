// import { useState } from "react";
import styles from "../styles/Header.module.css";
import lightModeIcon from "/light-mode-icon.png";
import darkModeIcon from "/dark-mode-icon.png";
import { Drawer, Burger, Button, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [menuOpened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <Burger opened={menuOpened} onClick={open}></Burger>
          <h1>Pixel Art App 🎨</h1>
        </div>
        <div className={styles.settingsContainer}>
          <Button onClick={toggleColorScheme} style={{ background: "none" }}>
            <img
              src={colorScheme === "dark" ? lightModeIcon : darkModeIcon}
              style={{ width: 24 }}
            />
          </Button>
        </div>
      </div>
      <Drawer
        opened={menuOpened}
        onClose={close}
        title="Menu"
        className={styles.sideMenu}
      >
        <h3>Hello!</h3>
      </Drawer>
    </>
  );
}

export default Header;
