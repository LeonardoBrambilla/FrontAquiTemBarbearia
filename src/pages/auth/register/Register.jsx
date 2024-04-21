import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import i18n from '../../../i18n'
import LayoutPage from '../../../components/LayoutPage'

export default function Register() {
  const [form] = Form.useForm()

  const onSignIn = (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error)
    }
  }
  
  // Adicionar rules

  return (
    <LayoutPage name={"Cadastro"}>        
      <div className='flex h-screen justify-center items-center'>
        <Form
          className="m-4 w-40 flex flex-col items-center"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onSignIn}
          layout="vertical"
          validateTrigger={false}
          size="large"
        >
          <Form.Item
            name="Nome"
            label={"Nome"}
          >
            <Input className="ant-login-input" maxLength={250}/>
          </Form.Item>
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
          <Form.Item
            name="telefone"
            label={"telefone"}
          >
            <Input className="ant-login-input" maxLength={250}/>
          </Form.Item>
          <Form.Item>
            <Button 
              type="primary"
              htmlType="submit"
              block
            >
              Cadastrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LayoutPage>
  )
}
