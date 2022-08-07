import React, { Component } from "react";
import Slider from "react-slick";

function Slide(props) {
  return (
    <div className='slider__item'>
      <img src={props.img} alt={props.name} />
      <div className="slider__text">
        <h3>{props.name}</h3>
        <p>{props.descript}</p>
      </div>
    </div>
  )
}

function SlidePic(props) {
  return (
    <div className='slider__item'>
      <img src={props.img} alt={props.name} />
      <div className="nutrition">
        <div>Калории <span>{props.cal}</span></div>
        <div>Жиры <span>{props.fat}г</span></div>
        <div>Белки <span>{props.prot}г</span></div>
        <div>Углеводы <span>{props.carb}г</span></div>
      </div>
    </div>
  )
}

function NextArrow({ onClick }) {
  return (
    <div
      className={'slick-arrow slick-next'}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" /></svg>
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className={'slick-arrow slick-prev'}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" /></svg>
    </div>
  );
}



export default class DoubleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider className='mainSlider'
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          autoplay={true}
          speed={2000}
          autoplaySpeed={15000}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {this.props.topBuns.map((item) =>
            <Slide key={item.id}
              img={item.imageUrl}
              name={item.name}
              descript={item.descript.split('.', 1)} //выводит только первое предложение
            />
          )}
        </Slider>

        <div className='posAbsolute'>
          <Slider className='picSlider'
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            fade={true}
            arrows={false}
            swipe={false}
            speed={2000}
          >
            {this.props.topBuns.map((item) =>
              <SlidePic key={item.id}
                img={item.imageUrl}
                cal={item.nutritional[0]}
                fat={item.nutritional[1]}
                prot={item.nutritional[2]}
                carb={item.nutritional[3]}
              />
            )}
          </Slider>
        </div>
      </div>
    );
  }
}