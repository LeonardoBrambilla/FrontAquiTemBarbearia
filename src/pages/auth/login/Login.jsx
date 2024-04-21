import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import i18n from '../../../i18n'
import { SetAuthenticationToken, signInRequest } from '../../../services/auth'
import LayoutPage from '../../../components/LayoutPage'

export default function Login() {
  const [form] = Form.useForm()
  const onSignIn =  async (values) => {
    try {
      // const {data: {token, user}} = await signInRequest(values)
      // SetAuthenticationToken(token)
      console.log(values);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LayoutPage name={"Login"}>        
      <div className='flex h-screen justify-center items-center'>

        <Form
          className="mt-4"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onSignIn}
          layout="vertical"
          validateTrigger={false}
          size="large"
        >
          <Form.Item
            name="email"
            label={i18n.email}
          >
            <Input className="ant-login-input" maxLength={250}/>
          </Form.Item>
          <Form.Item
            name="password"
            label={i18n.password}
          >
            <Input className="ant-login-input" maxLength={250}/>
          </Form.Item>
          <Form.Item>
            <Button 
              type="primary"
              htmlType="submit"
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LayoutPage>
  )
}
