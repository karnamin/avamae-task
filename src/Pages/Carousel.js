import React, { Component } from 'react'
import Swiper from 'react-id-swiper';

import 'swiper/swiper.min.css';

const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  };

class Carousel extends Component {
    render() {
        return (
            <div>
                <Swiper {...params}>
                    {this.props.carouselData.map((data, index) => {
                        return(
                            <div key={index}>
                                <h1>{data.Title}</h1>
                                <h6>{data.Subtitle}</h6>
                                <img src={data.ImageUrl} alt={data.Title} />
                            </div>
                        )
                    })}
                </Swiper>
            </div>
        )
    }
}

export default Carousel
