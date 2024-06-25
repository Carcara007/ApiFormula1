import styles from "./Header.module.css"

function Header() {
  return (
    <>
      <header className={styles.header}>
        <a href="">GP Monaco</a>
        <a href="">GP Miami</a>
        <a href="">GP Canadá</a>
        <a href="">GP China</a>
      </header>
    </>
  )
}

export default Header
