import * as React from 'react';
import { Button, TextField, TextArea, Checkbox } from '../wonho-ui/component';

function Page1() {
  const LightMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
  }
  const DarkMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  return (
    <>
      <div className='flexCenter flexColumn bgc-black_10p gap10'>
      <div className='flexCenter gap10'>
        <TextField 
          size='extraSmall'
          radius='round'
        />
        <TextField 
          size='small'
          radius='round'
        />
        <TextField 
          size='medium'
          radius='round'
        />
        <TextField 
          className='w500'
          size='large'
          radius='rect'
        />
      </div>
      <div className='flex gap10'>
        <Checkbox size='large' className='checkbox'/>
        <Checkbox size='medium' theme='secondary'/>
        <Checkbox size='small'/>
        <Checkbox size='extraSmall'/>
        <Button size='large' onClick={LightMode} variant='contained'>
          LightMode
        </Button>
        <Button size='large' onClick={DarkMode} variant='contained'>
          DarkMode
        </Button>
        <Button size='large' variant='contained' theme='secondary'>
          Button
        </Button>
        <Button size='large' variant='normal' shadow theme='secondary'>
          Button
        </Button>
        <Button size='large' variant='contained' theme='tertiary'>
          Button
        </Button>
        <Button size='medium' variant='contained' shadow theme='gray9'>
          Button
        </Button>
        
        <Button size='medium' variant='contained' shadow theme='gray6'>
          Button
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