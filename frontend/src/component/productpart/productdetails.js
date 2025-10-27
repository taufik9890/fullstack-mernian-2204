'use client'
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import './style.css'
import Images from 'next/image'
import Productdetailsright from "./productdetailsright";
import Image from "next/image";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", alignItems:"center", justifyContent:"center", background: "red", width:"30px", height:'30px', borderRadius:"8px"}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", alignItems:"center", justifyContent:"center", background: "red", width:"30px", height:'30px', borderRadius:"8px"}}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrowsec(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems:"center", justifyContent:"center", background: "red", width:"30px", height:'30px', borderRadius:"8px", marginRight: "30px"}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrowsec(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "flex", alignItems:"center", justifyContent:"center", background: "red", width:"30px", height:'30px', borderRadius:"8px",  marginLeft: "-25px"}}
        onClick={onClick}
      />
    );
  }

function Productdetails({posts, re}) {
  console.log('posts2', posts);
  console.log(re);
  
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      const settingssecond = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrowsec />,
        prevArrow: <SamplePrevArrowsec />
      };
  
    useEffect(() => {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }, []);
  return (
    <div className='product-all-details'>
        <div className='product-elements'>
            <div className='prdct-items'>
                <div className='prdct-img' >
                    <Slider asNavFor={nav2 || undefined} ref={sliderRef1} {...settings}>
                      {
                        posts[0].image.map(item=>(
                          <div >
                            <Image src={`http://localhost:8000${item}`} width={750} height={500} alt="product-img"/>
                          </div>
                        ))
                      }
                    </Slider>
                    <div className="sec-slide">
                        <Slider
                            asNavFor={nav1 || undefined}
                            ref={sliderRef2}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            {...settingssecond}
                        >{
                posts[0].image.map(item=>(

                        <div>
                            <Image src={`http://localhost:8000${item}`} width={150} height={150} alt="product-img"/>
                        </div>
                ))}
                        </Slider>
                    </div>
                    </div>

                </div>
            <div className='prdct-details'>
                <Productdetailsright posts={posts} re={re}/>
            </div>
            </div>
        </div>
  )
}

export default Productdetails
