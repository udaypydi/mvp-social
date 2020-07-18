import React from 'react';
import { withRouter } from 'react-router-dom';

function FallBackComponent() {
  return (
    <div>
      <p>404 Not Found</p>
    </div>
  );
}

export default withRouter(FallBackComponent);
