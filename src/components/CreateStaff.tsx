import React, { useState } from 'react';
import { LogoutOutlined } from '@ant-design/icons'
import { Steps, Button, Form, Input, Radio, Row, Col, DatePicker, Select } from 'antd';
import { itemStep } from './data/itemSteps';
import { departmentData } from './data/dataDepartment';
import '../App.css'
import toast, { Toaster } from 'react-hot-toast';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/;
const CreateStaff: React.FC = () => {
    const [current, setCurrent] = useState<any>(0);
    const [form] = Form.useForm();
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPass, setConfirmPass] = useState<string>('');

    const setStep = () => {
        // if (username === '') {
        //     toast.error("Chưa nhập tên đăng nhập !!!")
        // } else if (email === '') {
        //     toast.error("Chưa nhập email !!!")
        // } else if (!emailRegex.test(email)) {
        //     toast.error('Sai định dạng email !!!')
        // } else if (password === '') {
        //     toast.error("Chưa nhập mật khẩu !!!")
        // } else if (!passwordRegex.test(password)) {
        //     toast.error("Mật khẩu không đúng định dạng !!!")
        // } else if (confirmPass === '') {
        //     toast.error("Chưa xác nhận mật khẩu !!!")
        // } else if (confirmPass === password) {
        //     setCurrent(1);
        // } else toast.error('Xác nhận mật khẩu sai !!!')
        setCurrent(1);
    }
    const setBack = () => {
        setCurrent(0);
    }
    // const handleKeyPress = (e: React.KeyboardEvent) => {
    //     if(e.key === 'Enter') {
    //       setStep();
    //     }
    //   }
    const setValue = (event: any) => {
        if (event.target.name === 'username') setUsername(event.target.value);
        if (event.target.name === 'email') setEmail(event.target.value);
        if (event.target.name === 'password') setPassword(event.target.value);
        if (event.target.name === 'confirmPassword') setConfirmPass(event.target.value);
    }
    let options = departmentData.map(function (choose: any) {
        return { value: choose.key, label: choose.nameDepartment };
    })
    const createAccount = () => {
        toast.success('Tạo mới tài khoản thành công !!!');
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            createAccount();
        }
    }
    const handleKeyContinue = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setStep();
        }
    }

    return (
        <div className='form'>
            <div className='tag-name'>
                <h3 className=''>Thêm nhân viên</h3>
                <button type="button" className="out_button" ><LogoutOutlined><LogoutOutlined /></LogoutOutlined></button>
            </div>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='create-form'>
                <Steps
                    style={{ marginTop: '20px' }}
                    current={current}
                    items={itemStep}
                />
                {current === 0 && (
                    <Form style={{ marginTop: '40px' }}
                        form={form}
                        layout="vertical"
                    >
                        <Form.Item label="Tên đăng nhập" style={{ fontWeight: '500' }}>
                            <Input placeholder="Nhập tên đăng nhập" name='username' value={username} required
                                size='large'
                                onChange={e => setValue(e)}
                                onKeyUp={(event) => {
                                    handleKeyContinue(event);
                                }}
                            />
                        </Form.Item>
                        <Form.Item label="Email" style={{ fontWeight: '500' }}>
                            {/* label={ <p style={{fontSize:"16px"}}>"System Pressurized"</p> }> */}
                            <Input placeholder="Nhập email" name='email' value={email} required
                                size='large'
                                onChange={e => setValue(e)}
                                onKeyUp={(event) => {
                                    handleKeyContinue(event);
                                }} />
                        </Form.Item>
                        <Form.Item label="Mật khẩu" style={{ fontWeight: '500' }}>
                            <Input.Password
                                size='large'
                                required
                                name='password'
                                placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={e => setValue(e)}
                                onKeyUp={(event) => {
                                    handleKeyContinue(event);
                                }}
                            />
                            <p style={{ fontWeight: '400' }}>Mật khẩu cần ít nhất 1 ký tự đặc biệt, 1 chữ in hoa và một số.</p>
                        </Form.Item>
                        <Form.Item label="Xác nhận mật khẩu" style={{ fontWeight: '500' }}>
                            <Input.Password
                                size='large'
                                name='confirmPassword'
                                placeholder="Nhập lại mật khẩu"
                                value={confirmPass}
                                onChange={e => setValue(e)}
                                onKeyUp={(event) => {
                                    handleKeyContinue(event);
                                }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary"
                                onClick={setStep}
                                size='large'
                                style={{
                                    float: 'right',
                                    marginLeft: 'auto'
                                }}
                            >TIẾP</Button>
                        </Form.Item>
                    </Form>
                )}
                {current === 1 && (
                    <Form style={{ marginTop: '40px' }}
                        form={form}
                        layout="vertical"
                    >
                        <Row gutter={[24, 24]}>
                            <Col span={12}
                            >
                                <Form.Item label="Họ" style={{ fontWeight: '500' }}>
                                    <Input placeholder="Nhập họ" size='large' onKeyUp={(event) => {
                                        handleKeyPress(event);
                                    }} />
                                </Form.Item>
                                <Form.Item
                                    label="Giới tính" style={{ fontWeight: '500' }}
                                >
                                    <Radio.Group size='large'>
                                        <div style={{ marginTop: '20px' }}>
                                            <Radio value="female"> Nữ </Radio>
                                            <Radio value="male"> Nam </Radio>
                                        </div>
                                    </Radio.Group>
                                </Form.Item>
                                <Form.Item label="Số điện thoại" style={{ fontWeight: '500' }}>
                                    <Input size='large' placeholder="Nhập số điện thoại" onKeyUp={(event) => {
                                        handleKeyPress(event);
                                    }} />
                                </Form.Item>

                            </Col>
                            <Col span={12}>
                                <Form.Item label="Tên" style={{ fontWeight: '500' }}>
                                    <Input placeholder="Nhập tên" size='large' onKeyUp={(event) => {
                                        handleKeyPress(event);
                                    }} />
                                </Form.Item>
                                <Form.Item label="Quốc tịch" style={{ fontWeight: '500' }}>
                                    <Input placeholder="Nhập quốc tịch" size='large' onKeyUp={(event) => {
                                        handleKeyPress(event);
                                    }} />
                                </Form.Item>
                                <Form.Item label="Ngày sinh" style={{ fontWeight: '500' }}>
                                    <DatePicker placeholder='Chọn ngày' size='large' />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Col span={24}> <Form.Item label="Địa chỉ" style={{ fontWeight: '500' }}>
                            <Input placeholder="Nhập địa chỉ" size='large' onKeyUp={(event) => {
                                handleKeyPress(event);
                            }} />
                        </Form.Item>
                        </Col>

                        <Row gutter={[24, 24]}>
                            <Col span={12}
                            >
                                <Form.Item label="Phòng ban" style={{ fontWeight: '500' }}>
                                    <Select
                                        size='large'
                                        placeholder="Chọn phòng ban"
                                        style={{ width: '100%' }}
                                        options={options}
                                    />
                                </Form.Item>
                                <Form.Item label="Tên tài khoản ngân hàng" style={{ fontWeight: '500' }}>
                                    <Input placeholder="Nhập tên tài khoản ngân hàng" size='large' onKeyUp={(event) => {
                                        handleKeyPress(event);
                                    }} />
                                </Form.Item>

                            </Col>
                            <Col span={12}>
                                <Form.Item label="CMND|CCCD" style={{ fontWeight: '500' }}>
                                    <Input placeholder="Nhập CMND|CCCD" size='large' onKeyUp={(event) => {
                                        handleKeyPress(event);
                                    }} />
                                </Form.Item>
                                <Form.Item label="Số tài khoản ngân hàng" style={{ fontWeight: '500' }}>
                                    <Input placeholder="Nhập số tài khoản ngân hàng" size='large' onKeyUp={(event) => {
                                        handleKeyPress(event);
                                    }} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Col span={24}> <Form.Item label="Ngân hàng" style={{ fontWeight: '500' }}>
                            <Input placeholder="Nhập ngân hàng" size='large' onKeyUp={(event) => {
                                handleKeyPress(event);
                            }} />
                        </Form.Item>
                        </Col>


                        <div className='action-create' style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Form.Item>
                                <Button type="primary" size='large'
                                    onClick={setBack}
                                >QUAY VỀ</Button>
                            </Form.Item>
                            <Form.Item >
                                <Button type="primary" size='large'
                                    onClick={createAccount}
                                >HOÀN THÀNH</Button>
                            </Form.Item>
                        </div>
                    </Form>

                )}
            </div>
        </div>
    )

}
export default CreateStaff;