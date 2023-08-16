import React, { useState } from 'react';
import { Table, Button, Select, Input } from 'antd';
import { data } from './data/dataStaff';
import { columns } from './data/dataColStaff';
import { LogoutOutlined, PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import '../App.css'
const selectOptions = [
    {
        value: 'Chăm sóc khách hàng',
        label: 'Chăm sóc khách hàng',
    },
    {
        value: 'Sales',
        label: 'Sales',
    },


]
const AllStaff: React.FC = () => {
    const [selected, setSelected] = useState<String>('Toàn bộ phòng ban');
    const refreshFilter = () => {
        setSelected('Toàn bộ phòng ban')
    }
    const changeFilter = (event: String) => {
        setSelected(event);

    }
    const searchStaff = () => {
        console.log(data);
        console.log('HAHAH');
    }
    return (
        <div className='container'>
            <div className='tag-name'>
                <h3 className=''>Danh sách nhân viên</h3>
                <button type="button" className="out_button" ><LogoutOutlined><LogoutOutlined /></LogoutOutlined></button>
            </div>
            <div className='action'>
                <div className='search' >
                    <Input
                        placeholder="Tìm kiếm"
                        onChange={searchStaff}
                        style={{
                            width: 200,
                            border: "none",
                            //   padding:" 0 0 0 ",

                            borderBottom: "1px solid #d9d9d9",
                            borderRadius: 5,
                        }}

                    />
                </div>
                <div className='filter'>
                    <div className='filter-select'>
                        <Select
                            defaultValue={selected}
                            options={selectOptions}
                            value={selected}
                            onChange={changeFilter}
                        />
                    </div>
                    <div className='filter-refresh'>
                        <Button
                            style={{
                                color: "#8de890",
                                borderColor: "#8de890",
                            }}
                            onClick={refreshFilter}
                        >
                            Làm mới
                        </Button>
                    </div>
                </div>
                <div className='add'>
                    <a href='/createstaff'>
                        <Button
                            type="primary"
                            size={"middle"}
                            icon={<PlusOutlined />}
                            className="flex float-right items-center bg-blue-500 text-white"
                        >
                            Thêm nhân viên
                        </Button>
                    </a>
                </div>
            </div>
            <Table columns={columns} dataSource={data} scroll={{ x: true }} pagination={{
                pageSize: 7
            }} />
        </div>
    )
}
export default AllStaff;