import React from 'react';
import { Table, Button } from 'antd';
import { departmentData } from './data/dataDepartment';
import { columns } from './data/dataColDepartment';
import { LogoutOutlined, PlusOutlined } from '@ant-design/icons'


import '../App.css'
const AllStaff: React.FC = () => {
    
    return (
        <div className='container'>
            <div className='tag-name'>
                <h3 className=''>Danh sách phòng ban</h3>
                <button type="button" className="out_button" ><LogoutOutlined><LogoutOutlined /></LogoutOutlined></button>
            </div>
            <div className='action-department'>

                <div className='add' style={{justifyContent: 'flex-end' }}>
                    <Button
                        type="primary"
                        size="large"
                        icon={<PlusOutlined />}
                        className="bg-blue-500 text-white"
                    >
                        Thêm phòng ban
                    </Button>
                </div>
            </div>
            <Table columns={columns} dataSource={departmentData} scroll={{ x: true }} />
        </div>
    )
}
export default AllStaff;