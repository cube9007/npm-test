import * as React from 'react';
import { Button } from '../wonho-ui/component';

function Page1() {
  return (
    <>
      <div className='flexCenter flexColumn bgc-black_30p gap10'>
      <div className='flexCenter gap10'>
        <Button 
          variant='outlined'
          color='black'
          theme='primary'
          size='large'
          radius='round'
        >
          Like
        </Button>
        
      </div>
      <div className='flexCenter gap10'>
        <Button 
          className='' 
          size='medium' 
          color='graya' 
          shadow 
          radius='round'
        >
          좋아요
        </Button>
        <Button 
          className='' 
          variant='contained'
          size='small' 
          theme='secondary'
          shadow 
        >
          좋아요
        </Button>

        <Button 
          className='' 
          size='extraSmall' 
          variant='outlined'
          theme='black'
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

export default Page1;