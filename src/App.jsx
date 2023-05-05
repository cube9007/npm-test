import * as React from 'react';
import { Button } from '../wonho-ui/component';
import '../wonho-ui/css/style.scss'
import './App.scss';

function App() {
  return (
    <>
    <div className='flexCenter flexColumn bgc-black_30p gap10'>
      <div className='flexCenter gap10'>
        <Button 
          className=''
        >
          좋아요
        </Button>
        <Button 
          className='' size='small' color='primary' round shadow 
          variant='contained'
        >
          좋아요
        </Button>
        <Button 
          className='' size='small' color='primary' round shadow 
          variant='outlined'
        >
          좋아요
        </Button>
        <Button 
          className='' size='meidum' color='primary' round shadow 
          variant='outlined'
        >
          좋아요
        </Button>
        <Button 
          className='' size='small' color='primary' round shadow 
          variant='outlined'
        >
          좋아요
        </Button>
        
      </div>
      <div className='flexCenter gap10'>
        <Button 
          className='' 
          size='small' 
          color='primary' 
          round 
          shadow 
        >
          좋아요
        </Button>
        <Button 
          className='' 
          variant='contained'
          size='small' 
          color='secondary' 
          round 
          shadow 
        >
          좋아요
        </Button>

        <Button 
          className='' 
          size='small' 
          color='white' 
          round 
          shadow 
        >
          좋아요
        </Button>
        
      </div>
      <div className='flexCenter gap10'>
        <div className='bgc-black_10p w100 h100'/>
        <div className='bgc-black w100 h100'/>
        <div className='bgc-primary_10p w100 h100'/>
        <div className='bgc-primary w100 h100'/>
        <div className='bgc-secondary_10p w100 h100'/>
        <div className='bgc-secondary w100 h100'/>
        <div className='bgc-tertiary_10p w100 h100'/>
        <div className='bgc-tertiary w100 h100'/>
      </div>
    </div>
    </>
  )
}

export default App;
