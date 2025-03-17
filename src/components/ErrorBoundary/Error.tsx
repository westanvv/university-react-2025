import {memo} from 'react';

import styles from './Error.module.scss';

function Error() {
  return (
    <div className={styles.root}>
      <h2>Error title</h2>
      <p>Error description</p>
      <div className={styles.linkContainer}>
        <a href="/" className="text-muted">
          Link to app
        </a>
      </div>
    </div>
  );
}

export default memo(Error);
