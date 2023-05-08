import * as React from 'react';
import { Button } from '../wonho-ui/component';

function Page1() {
  return (
    <>
      <div className='flexCenter flexColumn bgc-black_30p gap10'>
      <div className='flexCenter gap10'>
      <Button variant='contained' disabled size='small' radius='round' theme='black' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='gray1' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='gray2' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='gray3' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='gray4' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='gray5' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='gray6' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='gray7' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='gray8' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='gray9' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='graya' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='grayb' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='grayc' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='grayd' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='graye' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='grayf5' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='grayf8' > Like </Button>
      <Button variant='contained' disabled size='small' radius='round' theme='white' > Like </Button>
        

      </div>
      <div className='flexCenter gap10'>
        <Button variant='normal' size='small' radius='round' theme='primary' > Like </Button>
        <Button variant='normal' size='small' radius='round' theme='secondary' > Like </Button>
        <Button variant='normal' size='small' radius='round' theme='tertiary' > Like </Button>
        <Button 
          className='' 
          size='medium' 
          theme='grayc'
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