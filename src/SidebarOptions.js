import React, { Component } from 'react';
import './SidebarOptions.css';
import {Add} from "@material-ui/icons";

export default class SidebarOptions extends Component {
  render() {
    return (
      <div className='sidebarOptions'>

            <div className="sidebarOption">
              <Add/>
                <p className="text"> 더보기 </p>
            </div>

            <div className="sidebarOption">
                <img src="https://www.sisain.co.kr/news/photo/200801/1009_1870_5615.jpg" alt=""/>
                <p> 격투기 </p>
            </div>

            <div className="sidebarOption">
                <img src="https://img.hankyung.com/photo/202009/01.23683388.1.jpg" alt=""/>
                <p> 자동차 </p>
            </div>


            <div className="sidebarOption">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Wrigley_field_720.jpg" alt=""/>
                <p> 야구 </p>
            </div>

            <div className="sidebarOption">
                <img
                    src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F214E863354FD32AC23"
                    alt=""/>
                <p> 요리 </p>
            </div>

            <div className="sidebarOption">
                <img src="https://image.chosun.com/sitedata/image/202007/13/2020071300343_0.jpg" alt=""/>
                <p> 축구 </p>
            </div>
      </div>
    )
  }
}
