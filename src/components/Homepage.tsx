import React from 'react';
import { Layout, Menu } from 'antd';
import HeaderHomepage from './homepage/HeaderHomepage';
import ContentHomepage from './homepage/ContentHomepage';
const { Footer, Content } = Layout;
const Homepage: React.FC = () => {
    return (
        <Layout className='mainLayout'>
            <HeaderHomepage />
            <ContentHomepage/>
            <Footer style={{ textAlign: 'center', bottom: '0'}}>Ant Design ©2023 Created by Minh Hoi</Footer>
        </Layout>
    )
}
export default Homepage;