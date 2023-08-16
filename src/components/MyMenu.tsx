import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, Image } from 'antd';
import { items } from './data/itemMenu';
import avatar from '../assets/anh.jpg'
import '../App.css'
import { LogoutOutlined } from '@ant-design/icons'
const MyMenu: React.FC = () => {
    const location = useLocation();
    let key = location.pathname.replace('/', '');
    return (
        <div>
            <div className='profile'>
                <Image
                    width={50}
                    src={avatar}
                />
                <p style={{ fontWeight: 'bold' }} className='name_profile'>Nguyen Van Quan Ly <Link to={'/'}><LogoutOutlined /></Link></p>
                
            </div>
            <div className='menu'>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[key || '1']}
                    defaultOpenKeys={['staff', 'ot', 'dayoff', 'another_application', 'salary', 'contract', 'hiring']}

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