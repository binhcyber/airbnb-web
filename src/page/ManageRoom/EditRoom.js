import React, { useEffect, useState } from "react";

import { Form, Input, Button, Switch, InputNumber } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { capNhatNguoiDungAction } from "../../redux/action/CRUDNguoiDungAction";
import { useHistory } from "react-router-dom";
import { capNhatPhongAction } from "../../redux/action/layDanhSachPhongAction";
export default function EditRoom() {
  const { editPhong } = useSelector((state) => {
    return state.layDSPhongReducer;
  });
  const [utilities, setUtilities] = useState({
    elevator: false,
    hotTub: false,
    pool: false,
    hotTub: false,
    indoorFireplace: false,
    dryer: false,
    gym: false,
    kitchen: false,
    wifi: false,
    heating: false,
    cableTV: false,
  });
  console.log(utilities);
  const [form] = Form.useForm();
  useEffect(() => {
    let newUser = { ...editPhong };
    console.log(newUser);
    form.setFieldsValue(newUser);
  }, []);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChangeGuest(value) {
    console.log("Guest", value);
  }
  function onChangeBedRoom(value) {
    console.log("BedRoom", value);
  }
  function onChangeBathRoom(value) {
    console.log("BathRoom", value);
  }
  function onChangeElevator(checked) {
    console.log(`Elevator ${checked}`);
    console.log(typeof checked);
    setUtilities({
      ...utilities,
      elevator: checked,
    });
  }
  console.log(utilities);
  function onChangeHotTub(checked) {
    console.log(`HotTub ${checked}`);
    setUtilities({
      ...utilities,
      hotTub: checked,
    });
  }
  function onChangePool(checked) {
    console.log(`Pool ${checked}`);
    setUtilities({
      ...utilities,
      pool: checked,
    });
  }
  function onChangeIndoorFireplace(checked) {
    console.log(`IndoorFireplace ${checked}`);
    setUtilities({
      ...utilities,
      indoorFireplace: checked,
    });
  }
  function onChangeDryer(checked) {
    console.log(`Dryer ${checked}`);
    setUtilities({
      ...utilities,
      dryer: checked,
    });
  }
  function onChangeGym(checked) {
    console.log(`Gym ${checked}`);
    setUtilities({
      ...utilities,
      gym: checked,
    });
  }
  function onChangeKitchen(checked) {
    console.log(`Kitchen ${checked}`);
    setUtilities({
      ...utilities,
      kitchen: checked,
    });
  }
  function onChangeWifi(checked) {
    console.log(`Wifi ${checked}`);
    setUtilities({
      ...utilities,
      wifi: checked,
    });
  }
  function onChangeHeating(checked) {
    console.log(`Heating ${checked}`);
    setUtilities({
      ...utilities,
      heating: checked,
    });
  }
  function onChangeCableTV(checked) {
    console.log(`CableTV ${checked}`);
    setUtilities({
      ...utilities,
      cableTV: checked,
    });
  }
  const onFinish = (values) => {
    console.log("Success:", values);
    const id = values._id;
    const data = {
      ...values,
      locationId: null,
    };
    console.log(data);
    dispatch(capNhatPhongAction(id, data));
  };
  return (
    <div className="bg-gray-300">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
        className="w-1/2 bg-white mx-auto py-4 pr-24"
      >
        <Form.Item label="ID" name="_id" hasFeedback>
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Tên Phòng"
          name="name"
          rules={[
            { required: true, message: "Please input your tên Phòng!" },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price Room"
          name="price"
          rules={[
            { required: true, message: "Please input your Price Room!" },
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: "Your Price Room is invalid!",
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          // initialValues={0}
          name="guests"
          width="200px"
          label="guests"
          rules={[{ required: true, message: "Please input your guests!" }]}
        >
          <InputNumber
            min={0}
            style={{ width: 200 }}
            onChange={onChangeGuest}
          />
        </Form.Item>
        <Form.Item
          // initialValues={0}
          name="bedRoom"
          label="bedroom"
          rules={[{ required: true, message: "Please input your bedroom!" }]}
        >
          <InputNumber
            min={0}
            style={{ width: 200 }}
            onChange={onChangeBedRoom}
          />
        </Form.Item>
        <Form.Item
          // initialValues={0}
          name="bath"
          label="bath"
          rules={[{ required: true, message: "Please input your bath!" }]}
        >
          <InputNumber
            min={0}
            style={{ width: 200 }}
            onChange={onChangeBathRoom}
          />
        </Form.Item>
        <Form.Item name="elevator" label="elevator" valuePropName="checked">
          <Switch onChange={onChangeElevator} />
        </Form.Item>
        <Form.Item name="hotTub" label="hotTub" valuePropName="checked">
          <Switch onChange={onChangeHotTub} />
        </Form.Item>
        <Form.Item name="pool" label="pool" valuePropName="checked">
          <Switch onChange={onChangePool} />
        </Form.Item>
        <Form.Item
          name="indoorFireplace"
          label="indoorFireplace"
          valuePropName="checked"
        >
          <Switch onChange={onChangeIndoorFireplace} />
        </Form.Item>
        <Form.Item name="dryer" label="dryer" valuePropName="checked">
          <Switch onChange={onChangeDryer} />
        </Form.Item>
        <Form.Item name="gym" label="gym" valuePropName="checked">
          <Switch onChange={onChangeGym} />
        </Form.Item>
        <Form.Item name="kitchen" label="kitchen" valuePropName="checked">
          <Switch onChange={onChangeKitchen} />
        </Form.Item>
        <Form.Item name="wifi" label="wifi" valuePropName="checked">
          <Switch onChange={onChangeWifi} />
        </Form.Item>
        <Form.Item name="heating" label="heating" valuePropName="checked">
          <Switch onChange={onChangeHeating} />
        </Form.Item>
        <Form.Item name="cableTV" label="cableTV" valuePropName="checked">
          <Switch onChange={onChangeCableTV} />
        </Form.Item>
        <Form.Item
          name="description"
          label="description"
          rules={[{ required: true, message: "Please input Intro" }]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12, span: 12 }}>
          <Button type="primary" htmlType="submit">
            Update Room
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
