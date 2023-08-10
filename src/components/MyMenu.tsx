import React from 'react';
import { Menu, Image } from 'antd';
import { items } from './data/itemMenu';
import avatar from '../assets/anh.jpg'
import '../App.css'
const MyMenu: React.FC = () => {
    let key = localStorage.getItem('key_menu');
    return (
        <div>
            <div className='profile'>
                <Image
                    width={50}
                    src={avatar}
                />
                <p style={{ fontWeight: 'bold' }} className='name_profile'>Nguyen Van Quan Ly</p>
            </div>
            <div className='menu'>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[key || '1']}
                    defaultOpenKeys={['staff', 'ot', 'dayoff', 'another_application','salary','contract','hiring']}

                    style={{
                        height: '100%',
                        borderRight: 0,
                        
                    }}
                    items={items}
                    onSelect={(item) => {
                        localStorage.setItem('key_menu', item.key);
                    }}
                />
            </div>
        </div>
    );

}
export default MyMenu;