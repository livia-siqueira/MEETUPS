import { MainNavigation } from "./MainNavigation";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
