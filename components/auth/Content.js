import styles from './Auth.module.css'

export default function Content() {
  return (
    <div className={styles.content}>
      <div className="h4">Different Online Gaming Platform </div>
      <div className="fs-5 text-grey">
        Completed with examples
      </div>
      <div className="text my-4 text-grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis, voluptatum veritatis molestias quas iusto, atque corporis saepe ducimus repellat eveniet eaque! Dicta deserunt, minima eos nobis repellat inventore sunt!
      </div>
      <div className="d-flex align-items-center pt-3 mt-4">
        <div className="btn btn-default">Refresh Page</div>
      </div>
    </div>
  );
}