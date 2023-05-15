import * as React from 'react';
import { 
  Button, 
  TextField, 
  TextArea, 
  Chip,
  Checkbox, 
  Radio, 
  Switch, 
  Badge,
  Accordion,
  Tree,
  Popup,
  Popover,
} from '../wonho-ui/component';

function Page1() {
  const LightMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
  }
  const DarkMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  const [popup, setPopup] = React.useState(false);
  const PopupClick = () => {
    setPopup(true)
  }
  const [popover, setPopover] = React.useState(false);
  const PopoverOpen = () => {
    setPopover(true)
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
      <div className='flex gap10 alignCenter'>
        <Chip size='large' label='Chip'/>
        <Chip size='medium' label='Chip' deleteIcon='ㅇ'/>
        <Chip size='small' label='Chip'/>
        <Chip size='extraSmall' label='Chip'/>
        <Chip size='large' label='Chip'/>
        <Chip size='medium' label='Chip' deleteIcon='ㅇ'/>
        <Chip size='small' label='Chip'/>
        <Chip size='extraSmall' label='Chip'/>
      </div>
      <div className='flex gap10 alignCenter'>
        <Chip radius='normal' size='large' label='Chip'/>
        <Chip radius='normal' size='medium' label='Chip' />
        <Chip radius='normal' size='small' label='Chip'/>
        <Chip radius='normal' size='extraSmall' label='Chip'/>
      </div>
      <div className='flex gap10 alignCenter'>
        <Chip theme='black'  size='large' label='Chip'/>
        <Chip theme='gray1'  size='large' label='Chip'/>
        <Chip theme='gray2'  size='large' label='Chip'/>
        <Chip theme='gray3'  size='large' label='Chip'/>
        <Chip theme='gray4'  size='large' label='Chip'/>
        <Chip theme='gray5'  size='large' label='Chip'/>
        <Chip theme='gray6'  size='large' label='Chip'/>
        <Chip theme='gray7'  size='large' label='Chip'/>
        <Chip theme='gray8'  size='large' label='Chip'/>
        <Chip theme='gray9'  size='large' label='Chip'/>
        <Chip theme='graya'  size='large' label='Chip'/>
        <Chip theme='grayb'  size='large' label='Chip'/>
        <Chip theme='grayc'  size='large' label='Chip'/>
        <Chip theme='grayd'  size='large' label='Chip'/>
        <Chip theme='graye'  size='large' label='Chip'/>
        <Chip theme='grayf5' size='large' label='Chip'/>
        <Chip theme='grayf8' size='large' label='Chip'/>
      </div>
      <div className='flex gap10 alignCenter'>
        <Chip theme='black'  variant='contained' size='large' label='Chip'/>
        <Chip theme='gray1'  variant='contained' size='large' label='Chip'/>
        <Chip theme='gray2'  variant='contained' size='large' label='Chip'/>
        <Chip theme='gray3'  variant='contained' size='large' label='Chip'/>
        <Chip theme='gray4'  variant='contained' size='large' label='Chip'/>
        <Chip theme='gray5'  variant='contained' size='large' label='Chip'/>
        <Chip theme='gray6'  variant='contained' size='large' label='Chip'/>
        <Chip theme='gray7'  variant='contained' size='large' label='Chip'/>
        <Chip theme='gray8'  variant='contained' size='large' label='Chip'/>
        <Chip theme='gray9'  variant='contained' size='large' label='Chip'/>
        <Chip theme='graya'  variant='contained' size='large' label='Chip'/>
        <Chip theme='grayb'  variant='contained' size='large' label='Chip'/>
        <Chip theme='grayc'  variant='contained' size='large' label='Chip'/>
        <Chip theme='grayd'  variant='contained' size='large' label='Chip'/>
        <Chip theme='graye'  variant='contained' size='large' label='Chip'/>
        <Chip theme='grayf5' variant='contained' size='large' label='Chip'/>
        <Chip theme='grayf8' variant='contained' size='large' label='Chip'/>
      </div>
      <div className='flex gap10 alignCenter'>
        <Chip theme='black'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='gray1'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='gray2'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='gray3'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='gray4'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='gray5'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='gray6'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='gray7'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='gray8'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='gray9'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='graya'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='grayb'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='grayc'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='grayd'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='graye'  radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='grayf5' radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
        <Chip theme='grayf8' radius='normal' variant='normal' size='medium' label='Chip' deletable='right'/>
      </div>
      <div className='flexColumn w500 gap10 alignCenter'>
        <Accordion wrap>
          <Accordion title='Accordion-Title' icon={<>P</>} iconRotate='deg180'>
            <div className='m10 flexColumn otl-grayc radius'>
              <Accordion title='Accordion-Title' >
                asdasd
              </Accordion>
              <div className='width100 h1 bgc-grayc'/>
              <Accordion title='Accordion-Title' >
                asdasd
              </Accordion>
              <div className='width100 h1 bgc-grayc'/>
              <Accordion title='Accordion-Title' >
                asdasd
              </Accordion>
              <div className='width100 h1 bgc-grayc'/>
              <Accordion title='Accordion-Title' >
                asdasd
              </Accordion>
            </div>
          </Accordion>
        </Accordion>
        <Tree title='Tree-Title'
          icon={<p>P</p>}
          iconRotate='deg180'
        >
          <Tree item title='Tree-item' />
          <Tree item title='Tree-item' />
          <Tree item title='Tree-item' />
          <Tree item title='Tree-item' />
          <Tree item title='Tree-item' />
          <Tree title='Tree-Title'>
            
            <Tree item title='Tree-item' />
            <Tree item title='Tree-item' />
            <Tree item title='Tree-item' />
          </Tree>
        </Tree>
      </div>
      <div className='flex gap10'>
        <Button variant='contained' size='large' onClick={PopupClick}>Popup</Button>
        <div className='relative'>
          <Button variant='contained' size='large' onClick={PopoverOpen}> Popover </Button>
          <Popover open={popover} onClose={()=>{setPopover(false)}}>
            <div className='flexColumn w400 p20 gap30 size14'>
              안녕하세요
              <div className='flexBetween gap10'>
                <Button size='small' variant='outlined' onClick={()=>{setPopover(false)}}>cancel</Button>
                <Button size='small' variant='contained'>OK</Button>
              </div>
            </div>
          </Popover>
        </div>
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
    <Popup open={popup} onClose={()=>{setPopup(false)}}>
      <div className='flexColumn w400 p20 gap30 size14'>
        안녕하세요
        <div className='flexBetween gap10'>
          <Button size='small' variant='outlined' onClick={()=>{setPopup(false)}}>cancel</Button>
          <Button size='small' variant='contained'>OK</Button>
        </div>
      </div>
    </Popup>
    </>
  )
}

export default Page1;