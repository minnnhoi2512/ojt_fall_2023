import React from 'react';
import { Menu, Image } from 'antd';
import { items } from './data/itemMenu';
import avatar from '../assets/anh.jpg'
import '../App.css'
const MyMenu: React.FC = () => {

    return (
        <div>
            <div className='profile'>
                <Image
                    width={50}
                    src={avatar}
                />
                <p className='name_profile'>Nguyen Van Quan Ly</p>
            </div>
            <div className='menu'>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['staff', 'ot', 'dayoff', 'another_application']}

                style={{
                    height: '100%',
                    borderRight: 0,
                }}
                items={items}
            />
            </div>
        </div>
    );

}
export default MyMenu;