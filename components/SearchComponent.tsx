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
      <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={[4, 4]}>
        <Col span={20}>
        <Form.Item
        name="search"
      >
        <Input placeholder="Search a Company, Category, Product" />
      </Form.Item>

        </Col>
        <Col span={2}>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}


