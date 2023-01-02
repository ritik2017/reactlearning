import React from 'react';
import ReactDOM from 'react-dom/client';

import Head, { Button } from './Head';
import Foot from './Foot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Head></Head>
    <Foot></Foot>
    <Button text={'Click from root'}></Button>
  </div>
);
