import React from 'react'
import { Form, Input, Button, Row, Col } from 'antd';

export const SearchComponent:React.FC = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={[16, 16]}>
        <Col span={18}>
        <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

        </Col>
        <Col span={6}>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Col>
      </Row>
    </Form>
    </div>
  )
}


