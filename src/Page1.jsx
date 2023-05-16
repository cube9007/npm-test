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
  Backdrop,
  Loading,
  Location,
} from '../wonho-ui/component';

function Page1() {
  const LightMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
  }
  const DarkMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  const [popup, setPopup] = React.useState(false);
  const PopupOpen = () => {
    setPopup(true)
  }
  const [popover, setPopover] = React.useState(false);
  const PopoverOpen = () => {
    setPopover(true)
  }
  const [backdrop, setBackdrop] = React.useState(false);
  const BackdropOpen = () => {
    setBackdrop(true)
  }
  return (
    <>
    <div className='flexCenter flexColumn bgc-black_10p gap10'>
      <div className='flexCenter mt20 gap10'>
        <TextField className='w500' size='large' placeholder='클릭시 사라짐'/>
        <TextField size='medium'/>
        <TextField size='small'/>
        <TextField size='extraSmall'/>
      </div>
      <div className='flex gap10 alignCenter'>
        <Checkbox size='large' disabled defaultChecked/>
        <Checkbox size='medium' disabled theme='secondary'/>
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
        <Badge className='bgc-black' content={98} max={99}>
          <Button square variant='contained'>B </Button>
        </Badge>
        
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
        <Button className='w200' variant='contained' size='large' onClick={PopupOpen}>Popup</Button>
        <div className='relative'>
          <Button className='w200' variant='contained' size='large' onClick={PopoverOpen}> Popover </Button>
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
        <Button className='w200' variant='contained' size='large' onClick={BackdropOpen}>Backdrop</Button>
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
    <div className='flexCenter gap10'>
      <Loading />
      <Loading color='secondary'/>
      <Loading color='tertiary'/>
    </div>
    <div className='flexCenter mt20 gap10'>
      <Location 
        number={5}
        icon={<p>I</p>}
      />
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
    

    <Backdrop open={backdrop} onClose={()=>{setBackdrop(false)}}>
      <Loading />
    </Backdrop>
    </>
  )
}

export default Page1;