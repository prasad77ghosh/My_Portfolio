import classes from "./SalashScreen.module.css";

const SplashScreen = () => {
  return (
    <main className={classes.main_cont}>
      <svg viewBox="0 0 1000 100">
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
          Prasad Ghosh
        </text>
      </svg>
    </main>
  );
};

export default SplashScreen;
