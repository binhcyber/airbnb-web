import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";
import { layDSViTriAction } from "../../../redux/action/layDanhSachViTriAction";
import { NavLink } from "react-router-dom";
import "../../PageCss/Page.css";
const { Meta } = Card;
export default function HomeDetail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDSViTriAction());
  }, []);
  const { dsViTri } = useSelector((state) => {
    return state.layDSViTriReducer;
  });
  console.log(dsViTri);
  var settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderLocation = () => {
    return dsViTri?.map((vitri, index) => {
      return (
        <div key={index} className="space-x-1 rounded-md my-10">
          <NavLink to={"/room"}>
            <Card
              key={index}
              hoverable
              style={{ width: "90%", borderRadius: "10px", height: "324px" }}
              cover={
                <img
                  alt="example"
                  src={
                    vitri.image ? vitri.image : "https://picsum.photos/252/206"
                  }
                  style={{
                    width: "100%",
                    height: "206px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              }
            >
              <Meta
                className="text-white"
                title={vitri.province}
                description={vitri.name}
              />
            </Card>
          </NavLink>
        </div>
      );
    });
  };
  return (
    <div className="mt-24">
      <div className="relative container mx-auto ">
        <img
          src="https://picsum.photos/1200/600"
          className=" object-cover object-center rounded-xl mx-auto"
        />
        <div className="absolute homeDetail left-28 bottom-5 md:text-3xl md:bottom-32 md:left-48 lg:text-4xl lg:bottom-32 lg:left-80 z-10 text-white font-medium ">
          Hãy để trí tò mò của bạn dẫn lối
        </div>
      </div>
      <div className="container my-5 mx-auto py-5">
        <Slider {...settings}>{renderLocation()}</Slider>
      </div>
      <div className="container mx-auto">
        <h1 className="text-2xl">Khám phá trải nghiệm AirBnB</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="https://picsum.photos/581/700"
              className="object-cover object-center rounded-xl text-center z-10"
            />
            <div className="absolute text-lg top-5 left-5 md:top-5 md:left-5 md:text-4xl lg:top-5 lg:left-5 lg:text-4xl font-medium text-white">
              Những điều nên trải nghiệm trong chuyến đi của bạn
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/580/700"
              className="object-cover object-center rounded-xl"
            />
            <div className="absolute text-lg top-5 left-5 md:top-5 md:left-5 md:text-4xl lg:top-5 lg:left-5 lg:text-4xl font-medium text-white">
              Những điều nên trải nghiệm tại nhà
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-5">
        <img
          src="https://picsum.photos/1380/680"
          className="object-cover object-center mx-auto"
        />
        <div className="absolute text-2xl top-10 left-16 lg:top-10 md:top-10 md:left-16 lg:left-16 md:text-6xl lg:text-6xl font-medium text-white">
          Bạn có thắc mắc về việc đón tiếp khách?
        </div>
      </div>
    </div>
  );
}
