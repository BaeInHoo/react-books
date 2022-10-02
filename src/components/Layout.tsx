import { LayoutState } from '../types';
import styles from './Layout.module.css';

const Layout: React.FC<LayoutState> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;