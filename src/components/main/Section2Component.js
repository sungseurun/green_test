import React from 'react';

function Section2Component({notice, gallery, modalOpen}){

  // 공지사항, 갤러리 상태관리
  const [show, setShow] = React.useState(false);

  const onClickNoticeBtnEvent=(e)=>{
     e.preventDefault();
     setShow(false);
  }
  // const onClickGalleryBtnEvent=(e)=>{
  //    e.preventDefault();
  //    setShow(true);
  // }

  // 공지사항 클릭 이벤트 => 모달 띄우기
  const onClickModal=(e, z)=>{
     e.preventDefault();
     // 최상위 위치의 모달 열기 함수 실행
     if(z!==0) return;
     modalOpen();
  }

  return(
     <section id="section2">
     <div className="left board">
     <button onClick={onClickNoticeBtnEvent} className= "notice-btn">공지사항</button>
     {/* <div className="notice-box board-box"> */}
     <div className={`board-box ${show && 'on'}`}>
         <div className="gap">
           <ul>
              {
                 notice.map((item,idx)=>{
                    return(
                       <li key={idx}>
                        <a href="!#" onClick={(e)=>onClickModal(e, idx)}  className={idx===0 ? 'modal-btn' : ''}>{item.공지글}</a><span>{item.날짜}</span>
                      </li>
                    )
                 })
              }
              {/* 첫번째 줄만 클래스 추가 */}
              {/* <li><a href="#" title="Green 복지재단1" className="modal-btn">Green 복지재단1</a><span>2020.11.23</span></li>
              <li><a href="#" title="Green 복지재단2">Green 복지재단2</a><span>2020.11.23</span></li>
              <li><a href="#" title="Green 복지재단3">Green 복지재단3</a><span>2020.11.23</span></li>
              <li><a href="#" title="Green 복지재단4">Green 복지재단4</a><span>2020.11.23</span></li> */}
           </ul>
         </div>
       </div>
     </div>
     <div className="center board">
       <button className="gallery-btn">갤러리</button>
       <div className={`gallery-box board-box ${show && 'on'}`}>
         <div className="gap">
           <ul>
              {
                gallery.map((item, idx)=>{
                  return(
                    <a href="!#" key={idx} title={item.제목}><img src={item.이미지소스} alt=""/></a>                                    
                  )
                })
              }
              {/* 첫번째 줄만 클래스 추가 */}
              {/* <a href="#" title="icon1"><img src="./images/icon1.png" alt="icon1"/></a>
              <a href="#" title="icon2"><img src="./images/icon2.png" alt="icon2"/></a>
              <a href="#" title="icon3"><img src="./images/icon3.png" alt="icon3"/></a> */}
           </ul>
         </div>
       </div>
     </div>
     <div className="right">
       <div className="banner">
       <div className="title"><h2 style={{color:'rgb(95,0,128)', fontSize:'16px'}}>BANNER LINK</h2></div>
       <div className="img-box">
         <a href="!#" title="banner"><img src="./image/banner.jpg" alt="banner"/></a>
       </div>
       </div>
     </div>
   </section>
  );
};

// 기본 프롭스 만들기 (프롭스는 여기 내용과 같이 나옴)
Section2Component.defaultProps = {
  notice : [
     {공지글:"신규회원 대상 할인 이벤트 안내",날짜:"2020.11.23"},
     {공지글:"S/S 시즌 신규 의류 신상품 안내",날짜:"2020.11.12"},
     {공지글:"반품/환불 규정에 대해 알려드립니다",날짜:"2020.11.07"},
     {공지글:"3월 재입고 품목을 알려드립니다",날짜:"2020.10.28"}
  ],
  gallery : [
     {제목:"img1", 이미지소스: "./image/icon1.png"},
     {제목:"img2", 이미지소스: "./image/icon2.png"},
     {제목:"img3", 이미지소스: "./image/icon3.png"}
  ]
}

export default Section2Component;