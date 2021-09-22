import Header from "../components/HeaderNew/Header";
import Menu from "../components/HeaderNew/Menu/Menu";
import Footer from "../components/Footer/Footer";

import styles from './index.module.scss'

function Layout({children}) {
    return (
      <div className="wrapper">
        <div className={styles.wrapper}>
            <Header commonClass={styles.header}/>
            <main className="main">
                <Menu commonClass={styles.nav}/>
                <div className={styles.content}>
                    { children }
                </div>
            </main>

            <Footer />
        </div>
      </div>
    );
}

export default Layout;