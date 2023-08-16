import React from 'react';
import { LogoutOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import '../App.css'
const MyContract: React.FC = () => {
    return (
        <div className='own-contract' >
            <div className='tag-name'>
                <h3 className=''>Hợp đồng của tôi</h3>
                <button type="button" className="out_button" ><LogoutOutlined><LogoutOutlined /></LogoutOutlined></button>
            </div>
            <h1 style={{ marginLeft: '100px' }}>Thông tin hợp đồng</h1>
            <div className='content-contract' style={{
                width: '1000px',
                paddingLeft: '200px'
            }}>
                <div className='infor-employee'>
                    <h2 className='title'>Thông tin người lao động</h2>
                    <Row gutter={[32, 16]} style={{ display: 'flex', alignItems: 'center' }}>
                        <Col span={6} ><h4>Họ và tên</h4></Col>
                        <Col span={6} ><p>Nguyen Van Quan Ly</p></Col>
                        <Col span={6} ><h4>Giới tính</h4></Col>
                        <Col span={6} ><p>Nam</p></Col>
                        <Col span={6} ><h4>Sinh ngày</h4></Col>
                        <Col span={6}><p>06-07-2003</p></Col>
                        <Col span={6}></Col>
                        <Col span={6}></Col>
                        <Col span={6}><h4>CMND|CCCD</h4></Col>
                        <Col span={6} ><p>123456789</p></Col>
                        <Col span={6}></Col>
                        <Col span={6}></Col>
                        <Col span={6}><h4>Địa chỉ</h4></Col>
                        <Col span={6} ><p>Thủ Đức</p></Col>
                        <Col span={6}></Col>
                        <Col span={6}></Col>
                        <Col span={6} ><h4>Số điện thoại</h4></Col>
                        <Col span={6} ><p>0935998212</p></Col>
                        <Col span={6}></Col>
                        <Col span={6}></Col>
                    </Row>
                </div>
                <div className='detail-contract'>
                    <h2 className='title'>Hợp đồng lao động</h2>
                    <h3 className='title'>1.Công việc, phòng ban và thời hạn hợp đồng</h3>
                    <Row gutter={[32, 16]} style={{ display: 'flex', alignItems: 'center' }}>
                        <Col span={6} ><h4>Phòng ban công tác</h4></Col>
                        <Col span={6}><p>Sales</p></Col>
                        <Col span={6}></Col><Col span={6}></Col>
                        <Col span={6}><h4>Loại hợp đồng</h4></Col>
                        <Col span={6} ><p>Hợp đồng xác định hạn</p></Col>
                        <Col span={6}></Col><Col span={6}></Col>
                        <Col span={6}><h4>Từ ngày</h4></Col>
                        <Col span={6} ><p>05-08-2023</p></Col>
                        <Col span={6} ><h4>Đến ngày</h4></Col>
                        <Col span={6} >30-11-2023</Col>
                    </Row>
                    <h3 className='title'>2.Lương, phụ cấp và các khoản bổ sung khác</h3>
                    <Row gutter={[32, 16]} style={{ display: 'flex', alignItems: 'center' }}>
                        <Col span={6}> <h4>Lương căn bản</h4></Col>
                        <Col span={6} ><p>90.000.000</p></Col>
                        <Col span={6} ><h4> Lương tính thuế</h4></Col>
                        <Col span={6} ><p>80.000.000</p></Col>
                        <Col span={6} ><h4>Các phụ cấp (mỗi tháng)</h4></Col>
                        <Col span={18} ></Col>
                        <Col span={6} > <h4>Hình thức trả lương </h4></Col>
                        <Col span={6} ><p>Chuyển khoản</p></Col>
                        <Col span={6} ></Col>
                        <Col span={6} ></Col>
                    </Row>
                    <ul>
                        <li><label htmlFor="">Số TK ngân hàng</label> string</li>
                        <li><label htmlFor="">Chủ tài khoản</label> string</li>
                        <li><label htmlFor="">Ngân hàng</label> string</li>
                    </ul>
                    <h3 className='title '>3.Thời gian làm việc và ghi chú</h3>
                    <Row gutter={[32, 16]} style={{ display: 'flex', alignItems: 'center' }}>
                        <Col span={6} ><h4>Số ngày làm việc một tuần</h4></Col>
                        <Col span={6} >5</Col>
                        <Col span={6} ></Col>
                        <Col span={6}></Col>
                        <Col span={6} ><h4>Số người phụ thuộc</h4></Col>
                        <Col span={6}  >1</Col>
                        <Col span={6}></Col>
                        <Col span={6} ></Col>
                        <Col span={6} ><h4>Ghi chú</h4></Col>
                        <Col span={6} >Chưa có ghi chú</Col>
                        <Col span={6} ></Col>
                        <Col span={6} ></Col>
                    </Row>
                </div>
            </div>
        </div >
    )
}
export default MyContract;