import styles from "./styles.module.css";

export default function LinkBtn(props) {
  return (
    <a className={styles.wrapper} href={props.href} target="_blank">
      {props.children}
    </a>
  );
}
