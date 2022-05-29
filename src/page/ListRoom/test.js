import React from "react";
import { useSelector } from "react-redux";

export default function Test() {
  const { dsPhong } = useSelector((state) => {
    return state.layDSPhongReducer;
  });
  return <div></div>;
}
