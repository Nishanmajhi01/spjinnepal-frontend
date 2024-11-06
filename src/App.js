import React from 'react';
import './App.css';

import DefaultLayout from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { Books } from './page/books/Books.page';
import { Tartam } from './page/tartam-wani/Tartam-wani';


function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Dashboard/> */}
        {/* <Books/> */}
        <Tartam/>
      </DefaultLayout>

    </div>
  );
}

export default App;
