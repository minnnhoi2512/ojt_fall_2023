import React from "react";
import { Card, Col, Row } from 'antd';
const ContentHomepage: React.FC = () => {
    return (
        <main className="background">
            <div className="card" >
                <div className="card-content">
                    <h2 className="card-title">Laptop</h2>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </main>
    )
}
export default ContentHomepage