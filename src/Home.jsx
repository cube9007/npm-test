import * as React from 'react';
import { Button } from '../wonho-ui/component';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='flexColumn gap10'>
      <Link to='/home/page1'>페이지 1 가기</Link>
      <Link to='/home/page2'>페이지 2 가기</Link>
    </div>
  )
}

export default Home;