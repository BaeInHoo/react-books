import styles from './Layout.module.css';

interface Layout {
  children: string;
}

const Layout: React.FC<Layout> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;