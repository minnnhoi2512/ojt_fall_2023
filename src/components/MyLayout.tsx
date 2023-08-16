import React from 'react';
import { Layout } from 'antd';
import MyMenu from './MyMenu';

const { Footer, Content, Sider } = Layout;

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
                            background: 'white'
                        }}
                    >
                        {children}

                    </Content>
                    <Footer style={{ textAlign: 'center', bottom: '0', height: '55px' }}>Ant Design ©2023 Created by Minh Hoi</Footer>
                </Layout>

            </Layout>

        </Layout>
    );
}
export default MyLayout;