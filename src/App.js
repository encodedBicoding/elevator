import React from 'react';
import Button from './components/Button';
import liftData from './data';
import './App.scss';

const App = () => {

  return (
    <div className="flex">
      <div className="btn-space">
        <div className="btn-holder">
          {
            liftData.map((lift, idx) => (
              <Button key={idx} name={lift.name} value={lift.name} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App;
