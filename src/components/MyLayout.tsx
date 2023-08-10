import React from 'react';
import { Layout } from 'antd';
import MyMenu from './MyMenu';

const {Footer,Content, Sider } = Layout;

type MyLayoutProps = {
    children?: React.ReactNode;
};

const MyLayout: React.FC<MyLayoutProps> = ({ children }: MyLayoutProps): JSX.Element => {
    return (
        <Layout>
            <Layout>
                <Sider width={300}>
                    <MyMenu></MyMenu>
                </Sider>
                <Layout
                    style={{
                        
                    }}
                >
                    <Content
                        style={{
                            padding: 20,
                            margin: 0,
                            minHeight: 280,
                           
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Minh Hoi</Footer>
        </Layout>
    );
}
export default MyLayout;