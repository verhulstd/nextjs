import styles from "./button.module.scss";
import clsx from "clsx";

const Button = ({
  children,
  active = false,
  secondary = false,
  disabled = false,
}) => {
  return (
    <button
      className={clsx({
        [styles.btn]: true,
        [styles.secondary]: secondary,
        [styles.active]: active,
        [styles.disabled]: disabled,
      })}
      {...disabled}>
      {children}
    </button>
  );
};

export default Button;
