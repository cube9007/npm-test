import * as React from 'react';
import { Button, TextField, TextArea } from '../wonho-ui/component';

function Page1() {
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
      <div className='flexCenter gap10'>
        <TextField 
          size='extraSmall'
        />
        <TextField 
          size='small'
        />
        <TextField 
          size='medium'
        />
        <TextField 
          className='main-search'
          radius='rect'
          size='large'
        />
      </div>
      <div className='flexCenter gap10'>
        <div className='flex relative'>
        <TextField 
          size='medium'
          className='h50'
          radius='rect'
        />
        <p className='icon'>o</p>
        </div>
        <TextField 
          size='medium'
          disabled
          placeholder='안녕'
        />
        <TextField 
          size='medium'
          readOnly
          defaultValue='안녕'
        />
      </div>
      <div className='flexCenter gap10'>
        <TextArea
          maxLength={100}
          rows={10}
        />
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