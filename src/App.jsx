import styles from "./components/style";
import Header from "./components/Header/Header";
import logo from "./assets/pipe-logo.svg";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>

        {/*  */}
        {/* <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            Hero
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default App;