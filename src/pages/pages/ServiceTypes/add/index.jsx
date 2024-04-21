import React,{useState} from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import { Button, Form, Input, Select } from 'antd'
import i18n from '../../../../i18n'
import LayoutPage from '../../../../components/LayoutPage'
import SideBar from '../../../../components/SideBar'
import TableHeader from '../../../../components/table/TableHeader'

export default function AddServiceTypes() {
  const [form] = Form.useForm()
  const navigate = useNavigate();

  const addService = (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error)
    }
  }
  
  // Adicionar rules, i18n, arrumar select para ficar com autoComplete

  return (
    <SideBar>
      <LayoutPage name={<TableHeader title={i18n.servicesTypes} backButton={"<"} />}>
          <Form
            form={form}
            initialValues={{ remember: true }}
            onFinish={addService}
            className='flex flex-col'
            validateTrigger={false}
            size="large"
          >
            <div className='flex flex-row flex-wrap'>
              <Form.Item
                name="name"
                label={"Nome do Serviço"}
                className='w-1/2 p-2'
              >
                <Input maxLength={250}/>
              </Form.Item>
              <Form.Item
                name="description"
                label={"Descrição"}
                className='w-1/2 p-2'
              >
                <Input maxLength={250}/>
              </Form.Item>
            </div>
            <div className='flex flex-row flex-wrap'>
              <Form.Item
                name="duration"
                label={"Duração"}
                className='w-1/2 p-2'
              >
                <Input maxLength={250}/>
              </Form.Item>
              <Form.Item
                name="price"
                label={"Preço"}
                className='w-1/2 p-2'
              >
                <Input maxLength={250}/>
              </Form.Item>
            </div>
            <div className='flex flex-row flex-wrap'>
            <Form.Item
              name="user"
              label={"Usuario"}
              className='w-1/2 p-2'
            >
              <Select maxLength={250}/>
            </Form.Item>
            <Form.Item
              name="employeer"
              label={"Funcionario"}
              className='w-1/2 p-2'
            >
              <Select maxLength={250}/>
            </Form.Item>
            </div>
            <Form.Item>
              <Button 
                type="primary"
                htmlType="submit"
                block
              >
                Adicionar
              </Button>
            </Form.Item>
          </Form>
      </LayoutPage>
    </SideBar>
  )
}
