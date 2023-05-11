import * as React from 'react';
import { 
  Button, 
  TextField, 
  TextArea, 
  Checkbox, 
  Radio, 
  Switch, 
  Badge 
} from '../wonho-ui/component';

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
      <div className='flex gap10 alignCenter'>
        <Checkbox size='large' disabled defaultChecked/>
        <Checkbox size='medium' theme='secondary'/>
        <Checkbox size='small' theme='tertiary'/>
        <Checkbox size='extraSmall'  />
        <Radio name='as' size='large' className='checkbox' disabled defaultChecked/>
        <Radio name='as' size='medium' theme='secondary'/>
        <Radio name='as' size='small' theme='tertiary'/>
        <Radio name='as' size='extraSmall'/>
        <Button size='large' onClick={LightMode} variant='contained' hoverRadius='round'>
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
      <div className='flex gap10 alignCenter'>
        <Badge content={1}>
          <Button size='small' square variant='contained' radius='round'>
            <div className='size14 b'>B</div>
          </Button>
        </Badge>
        <Badge dot >
          <Button size='small' square variant='contained' radius='round'>
            <div className='size14 b'>B</div>
          </Button>
        </Badge>
        <Badge content={1}>
          <Button size='medium' square variant='contained' radius='round'>
            <div className='size14 b'>B</div>
          </Button>
        </Badge>
        <Badge color='success' dot>
          <Button size='medium' square variant='outlined' radius='round'>
            <div className='size14 b'>B</div>
          </Button>
        </Badge>
        <Badge radius='rect' content='new' max={99}>
          <Button size='large' square variant='contained' radius='round'>
            <div className='size14 b'>B</div>
          </Button>
        </Badge>
        <Badge color='success' dot>
          <Button size='large' square variant='contained' radius='round'>
            <div className='size14 b'>B</div>
          </Button>
        </Badge>
      </div>
      <div className='flex gap10 alignCenter'>
        <Switch radius='rect'/>
        <Switch radius='normal'/>
        <Switch />
        <Switch defaultChecked/>
        <Switch disabled/>
        <Switch defaultChecked disabled/>
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