import { ReactElement, useState } from 'react';
import { Outlet } from 'react-router';

function App(): ReactElement {

  return (
    <div className='grid place-items-center w-screen h-screen'>
      <Outlet/>
    </div>
  )
}

export default App;