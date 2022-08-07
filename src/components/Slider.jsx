import React from "react";
import Slider from "react-slick";


function Slide(props) {
  return (
    <div className='slider_item'>
      <img src={props.img} alt={props.name} />
      <div className="slider_itemText">
        <h3>{props.name}</h3>
        <p>{props.descript}</p>
      </div>
    </div>
  )
}

export default function SimpleSlider({buns}) {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className='slider'>
        {buns.map((item) => 
          <Slide key={item.id} 
                img={item.imageUrl}
                name={item.name}
                descript={item.descript}
          />
        )}
    </Slider>
  );
}