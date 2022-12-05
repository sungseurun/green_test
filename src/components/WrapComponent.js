import React from 'react';
import HeaderComponent from './HeaderComponent.js';
import MainComponent from './MainComponent.js';
import FooterComponent from './FooterComponent.js';
import ModalComponent from './ModalComponent.js';

function WrapComponent(){

  // 모달 상태관리
  const [show, setShow] = React.useState(false);

  // 모달열기 함수
  const modalOpen=()=>{
     setShow(true);
  }

  // 모달닫기 함수
  const modalClose=()=>{
     setShow(false);
  }


  return(
     <div id="wrap">
        <HeaderComponent/>
        <MainComponent modalOpen={modalOpen}/>
        <FooterComponent/>
        {
           show && <ModalComponent modalClose={modalClose}/>
        }
     </div>
  );
};

export default WrapComponent;