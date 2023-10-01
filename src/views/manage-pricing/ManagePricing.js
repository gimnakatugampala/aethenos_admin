import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Paper from '@mui/material/Paper';
import { Form, Input , Button } from 'antd';
import InputGroup from 'react-bootstrap/InputGroup';
import Typography from '@mui/material/Typography';


const ManagePricing = () => {

    const onChangeResOne = e => {
      document.getElementById("res-1").innerText = 160 - e.target.value.length
      // console.log('click ', e);
    };

    const onFinish = (values) => {
      console.log('Received values of form:', values);
    };
  

  return (
    <div className='row'>

    <Card className='col-md-12'>
    <CardContent>

    <Typography className='my-3' variant="h2">
        Set Course Pricing
      </Typography>
   
    <Paper className='row'>


      {/* Asia */}
    <div className='col-md-6'>
        <div>
        <Typography className='my-3' variant="h3">
        Asia
        </Typography>

          <div className='w-100'>
          <Form labelCol={{flex: '100px'}} colon={false} style={{margin:'auto'}}>

          {/* 1 */}
          <div className="input-group mb-3">
            <input maxLength={160} onChange={onChangeResOne} type="text" className="form-control" placeholder="$ 199.00" />
          </div>
        </Form>
        </div>

            <Form
            name="dynamic_form_item"
            onFinish={onFinish}
            >
            <Form.List name="names">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item required={false} key={field.key}>
                       <div className="input-group w-100">
                        <input maxLength={160} type="text" className="form-control" placeholder="$" />
                        <span className="input-group-text btn btn-danger bg-danger" id="res-3">  {fields.length > 0 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button text-white"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}</span>
                      </div>

                    
                    </Form.Item>
                  ))}

                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} >
                      Add More Prices
                    </Button>
                  
                    
                  </Form.Item>

                </>
              )}
            </Form.List>

          
          </Form>
          </div>

    </div>


      {/* Africa */}
      <div className='col-md-6'>
        <div>
        <Typography className='my-3' variant="h3">
        Africa
        </Typography>

          <div className='w-100'>
          <Form labelCol={{flex: '100px'}} colon={false} style={{margin:'auto'}}>

          {/* 1 */}
          <div className="input-group mb-3">
            <input maxLength={160} onChange={onChangeResOne} type="text" className="form-control" placeholder="$ 199.00" />
          </div>
        </Form>
        </div>
            <Form
            name="dynamic_form_item"
            onFinish={onFinish}
            >
            <Form.List name="names">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item required={false} key={field.key}>
                       <div className="input-group">
                        <input maxLength={160} type="text" className="form-control" placeholder="$" />
                        <span className="input-group-text btn btn-danger bg-danger" id="res-3">  {fields.length > 0 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button text-white"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}</span>
                      </div>

                    
                    </Form.Item>
                  ))}

                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} >
                      Add More Prices
                    </Button>
                  
                    
                  </Form.Item>

                </>
              )}
            </Form.List>

          
          </Form>
          </div>

    </div>


     {/* Europe */}
     <div className='col-md-6'>
        <div>
        <Typography className='my-3' variant="h3">
        Europe
        </Typography>

          <div className='w-100'>
          <Form labelCol={{flex: '100px'}} colon={false} style={{margin:'auto'}}>

          {/* 1 */}
          <div className="input-group mb-3">
            <input maxLength={160} onChange={onChangeResOne} type="text" className="form-control" placeholder="$ 199.00" />
          </div>
        </Form>
        </div>
            <Form
            name="dynamic_form_item"
            onFinish={onFinish}
            >
            <Form.List name="names">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item required={false} key={field.key}>
                       <div className="input-group">
                        <input maxLength={160} type="text" className="form-control" placeholder="$" />
                        <span className="input-group-text btn btn-danger bg-danger" id="res-3">  {fields.length > 0 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button text-white"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}</span>
                      </div>

                    
                    </Form.Item>
                  ))}

                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} >
                      Add More Prices
                    </Button>
                  
                    
                  </Form.Item>

                </>
              )}
            </Form.List>

          
          </Form>
          </div>

    </div>

     {/* Australia */}
     <div className='col-md-6'>
        <div>
        <Typography className='my-3' variant="h3">
        Australia
        </Typography>

          <div className='w-100'>
          <Form labelCol={{flex: '100px'}} colon={false} style={{margin:'auto'}}>

          {/* 1 */}
          <div className="input-group mb-3">
            <input maxLength={160} onChange={onChangeResOne} type="text" className="form-control" placeholder="$ 199.00" />
          </div>
        </Form>
        </div>
            <Form
            name="dynamic_form_item"
            onFinish={onFinish}
            >
            <Form.List name="names">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item required={false} key={field.key}>
                       <div className="input-group">
                        <input maxLength={160} type="text" className="form-control" placeholder="$" />
                        <span className="input-group-text btn btn-danger bg-danger" id="res-3">  {fields.length > 0 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button text-white"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}</span>
                      </div>

                    
                    </Form.Item>
                  ))}

                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} >
                      Add More Prices
                    </Button>
                  
                    
                  </Form.Item>

                </>
              )}
            </Form.List>

          
          </Form>
          </div>

    </div>

     {/* North America */}
     <div className='col-md-6'>
        <div>
        <Typography className='my-3' variant="h3">
        North America
        </Typography>

          <div className='w-100'>
          <Form labelCol={{flex: '100px'}} colon={false} style={{margin:'auto'}}>

          {/* 1 */}
          <div className="input-group mb-3">
            <input maxLength={160} onChange={onChangeResOne} type="text" className="form-control" placeholder="$ 199.00" />
          </div>
        </Form>
        </div>
            <Form
            name="dynamic_form_item"
            onFinish={onFinish}
            >
            <Form.List name="names">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item required={false} key={field.key}>
                       <div className="input-group">
                        <input maxLength={160} type="text" className="form-control" placeholder="$" />
                        <span className="input-group-text btn btn-danger bg-danger" id="res-3">  {fields.length > 0 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button text-white"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}</span>
                      </div>

                    
                    </Form.Item>
                  ))}

                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} >
                      Add More Prices
                    </Button>
                  
                    
                  </Form.Item>

                </>
              )}
            </Form.List>

          
          </Form>
          </div>

    </div>

    {/* South America */}
    <div className='col-md-6'>
        <div>
        <Typography className='my-3' variant="h3">
        South America
        </Typography>

          <div className='w-100'>
          <Form labelCol={{flex: '100px'}} colon={false} style={{margin:'auto'}}>

          {/* 1 */}
          <div className="input-group mb-3">
            <input maxLength={160} onChange={onChangeResOne} type="text" className="form-control" placeholder="$ 199.00" />
          </div>
        </Form>
        </div>
            <Form
            name="dynamic_form_item"
            onFinish={onFinish}
            >
            <Form.List name="names">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item required={false} key={field.key}>
                       <div className="input-group">
                        <input maxLength={160} type="text" className="form-control" placeholder="$" />
                        <span className="input-group-text btn btn-danger bg-danger" id="res-3">  {fields.length > 0 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button text-white"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}</span>
                      </div>

                    
                    </Form.Item>
                  ))}

                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} >
                      Add More Prices
                    </Button>
                  
                    
                  </Form.Item>

                </>
              )}
            </Form.List>

          
          </Form>
          </div>

    </div>



    </Paper>
    </CardContent>
  </Card>
  </div>
  )
}

export default ManagePricing