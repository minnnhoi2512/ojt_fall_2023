import React from 'react';
import { LogoutOutlined } from '@ant-design/icons'
import { Input, Table } from 'antd';
import { dataColContract } from './data/dataColContract';
import { dataContract } from './data/dataContract';
const StaffContract: React.FC = () => {

    return (
        <div>
            <div className='tag-name'>
                <h3 className=''>Hợp đồng nhân viên</h3>
                <button type="button" className="out_button" ><LogoutOutlined><LogoutOutlined /></LogoutOutlined></button>
            </div>
            <Input
                placeholder="Tìm kiếm"
                style={{
                    width: 200,
                    border: "none",
                    marginBottom: '20px',
                    borderBottom: "1px solid #d9d9d9",
                    borderRadius: 5,
                }}
            />
            <Table columns={dataColContract} dataSource={dataContract} scroll={{ x: true }} pagination={{
                pageSize: 7
            }} />
        </div>
    )
}
export default StaffContract;