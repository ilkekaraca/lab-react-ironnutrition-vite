import React from "react";
import { Input, Form, Button } from "antd";
import { useState } from "react";

export default function AddFoodForm({ onFinish }) {
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [cal, setCal] = useState();
  const [servings, setServings] = useState();

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
    >
      <Form.Item label="Name" name="name">
        <Input
          value={name}
          type="text"
          onChange={(ev) => setName(ev.target.value)}
        />
      </Form.Item>
      <Form.Item label="Image" name="image">
        <Input
          value={img}
          type="text"
          onChange={(ev) => setImg(ev.target.value)}
        />
      </Form.Item>
      <Form.Item label="Calories" name="calories">
        <Input
          value={cal}
          name="calorie"
          type="number"
          onChange={(ev) => setCal(ev.target.value)}
        />
      </Form.Item>
      <Form.Item label="Servings" name="servings">
        <Input
          value={servings}
          type="number"
          onChange={(ev) => setServings(ev.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Create</Button>
      </Form.Item>
    </Form>
  );
}
