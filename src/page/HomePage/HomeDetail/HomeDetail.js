import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";
import { layDSViTriAction } from "../../../redux/action/layDanhSachViTriAction";
import { NavLink } from "react-router-dom";
import InputSearch from "../Header/InputSearch";
import { BsFillArrowRightCircleFill } from "react-icons/bs/index";
import ANIMATION from "../../../assets/animation1.gif";

import { useHistory } from "react-router-dom";
const { Meta } = Card;
export default function HomeDetail() {
  const history = useHistory();
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
  const renderListSearch = () => {
    return dsViTri?.map((item) => {
      return (
        <li
          onClick={() => {
            history.push("/room");
          }}
          className="flex items-center hover:rounded-tl-lg hover:rounded-bl-lg hover:bg-pink-500 hover:text-black"
        >
          <img
            className={
              "rounded-lg object-cover object-center w-12 h-12 flex-shrink"
            }
            src={item.image ? item.image : ANIMATION}
          />
          <p className="flex-grow font-normal text-lg m-0">{item.name}</p>
        </li>
      );
    });
  };

  return (
    <div>
      <div className="relative ">
        <img
          src="https://projectairbnb.vercel.app/static/media/heroImgOne.d825d7d1a6d9c90b5df1.jpg"
          className=" object-cover object-center mx-auto"
        />
        <div id="searchInput">
          <InputSearch dsViTri={dsViTri} />
          <button className="location group relative bg-white p-0 w-80">
            <p className=" m-0 text-gray-400 text-lg">Where do you want go?</p>
            <div className="downshow_location lg:group-hover:block md:group-focus:block group-focus:block hidden">
              <p className="lg:pt-3 md:pt-3 pt-1 font-medium lg:text-lg md:text-lg text-base text-gray-400">
                Đi bất cứ đâu, bất cứ lúc nào
              </p>
              <div className="flex justify-between items-center rounded-3xl px-3 shadow-2xl text-pink-600">
                <p
                  onClick={() => {
                    history.push("/room");
                  }}
                  className="text-primary mb-0.5 font-medium text-xl"
                >
                  Tôi linh hoạt
                </p>
                <BsFillArrowRightCircleFill className="text-primary font-medium text-2xl pb-1" />
              </div>
            </div>
            <div className="list_location group-focus:block hidden">
              <ul className="pt-3 space-y-3">{renderListSearch()}</ul>
            </div>
          </button>
          <div className="searchButton">
            <button className="setButton">Search</button>
          </div>
        </div>
      </div>
      <div className="container my-5 mx-auto py-5 lg:z-0 md:z-0 sm:z-0">
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
