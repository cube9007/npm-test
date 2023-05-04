import * as React from 'react';
import { Button } from '../wonho-ui/component';
import '../wonho-ui/css/style.scss'
import './App.scss';

function App() {
  const [state, setState] = React.useState(true)
  function Click() {
    setState(false)
  }
  function Leave() {
    setState(true)
  }
  return (
    <>
    <div className='flex gap10'>
      <div className='test' onMouseMove={Click} onMouseLeave={Leave}>
      <Button className='' size='small' variant='contained' color='primary' round shadow 
      >
        좋아요
      </Button>
      </div>
      
      {state ? 'true' : 'false'}
      <Button className='' size='normal' variant='contained' color='primary' shadow >
        button
      </Button>
      <button className='h100'>
        button
      </button>
      <div className='bgc-black_10p w100 h100'/>
      <div className='bgc-primary_10p w100 h100'/>
      <div className='bgc-primary w100 h100'/>
    </div>
    </>
  )
}

export default App
