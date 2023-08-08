import React, { useState } from 'react';
import { Table, Button, Select, Input } from 'antd';
import { data } from './data/dataStaff';
import { columns } from './data/dataColStaff';
import { LogoutOutlined, PlusOutlined } from '@ant-design/icons'
import '../App.css'

const { Search } = Input;
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
                <div className='search'>
                    <Search
                        placeholder="Tìm kiếm"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onClick={searchStaff}
                    />
                </div>
                <div className='filter'>
                    <Select
                        defaultValue={selected}
                        options={selectOptions}
                        value={selected}
                        onChange={changeFilter}
                    />
                    <Button
                        size={"middle"}
                        className="flex float-right items-center border-emerald-500 text-green-500"
                        onClick={refreshFilter}
                    >
                        Làm mới
                    </Button>
                </div>
                <div className='add'>
                    <Button
                        type="primary"
                        size={"large"}
                        icon={<PlusOutlined />}
                        className="flex float-right items-center bg-blue-500 text-white"
                    >
                        Thêm nhân viên
                    </Button>
                </div>
            </div>
            <Table columns={columns} dataSource={data} scroll={{ x: true }} />
        </div>
    )
}
export default AllStaff;