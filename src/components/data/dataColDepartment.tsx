import { Typography, Badge } from 'antd';

import { BorderlessTableOutlined, EllipsisOutlined, PhoneOutlined, ProfileOutlined } from '@ant-design/icons';
const { Text } = Typography;
export const columns = [
    {
        render: () => <EllipsisOutlined />
    },
    {
        title: 'ID',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }}><ProfileOutlined /> Tên phòng ban</div>,
        dataIndex: 'nameDepartment',
        key: 'nameDepartment',
        render: (_: any, record: { nameDepartment: string }) => (
            <>
                {record.nameDepartment && (
                    <>
                        {record.nameDepartment === 'Chăm sóc khách hàng' && (
                            <div style={{
                                whiteSpace: 'nowrap'
                            }}>
                                <Badge color="#f50" text=" " />
                                <Text underline>{record.nameDepartment}</Text>
                            </div>
                        )}
                        {record.nameDepartment === 'Sales' && (
                            <div style={{
                                whiteSpace: 'nowrap'
                            }}>
                                <Badge color="hwb(205 6% 9%)" text=" " />
                                <Text underline>{record.nameDepartment}</Text>
                            </div>
                        )}
                        {record.nameDepartment === 'Finance' && (
                            <div style={{
                                whiteSpace: 'nowrap'
                            }}>
                                <Badge color="rgb(45, 183, 245)" text=" " />
                                <Text underline>{record.nameDepartment}</Text>
                            </div>
                        )}
                        {record.nameDepartment === 'Marketing' && (
                            <div style={{
                                whiteSpace: 'nowrap'
                            }}>
                                <Badge color="hsl(102, 53%, 61%)" text=" " />
                                <Text underline>{record.nameDepartment}</Text>
                            </div>
                        )}
                    </>
                )}
            </>
        )

    },
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }}><ProfileOutlined /> Quản lý</div>,
        dataIndex: 'nameManagement',
        key: 'nameManagement',
        render: (_: any, record: { nameManagement: string }) => (
            <>
                {record.nameManagement && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.nameManagement}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }}> <BorderlessTableOutlined /> Số nhân viên</div>,
        dataIndex: 'numberStaff',
        key: 'numberStaff',
        render: (_: any, record: { numberStaff: string }) => (
            <>
                {record.numberStaff && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.numberStaff}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }} ><ProfileOutlined /> Email quản lí</div>,
        dataIndex: 'email',
        key: 'email',
        render: (_: any, record: { email: string }) => (
            <>
                {record.email && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.email}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }} ><PhoneOutlined /> Số điện thoại</div>,
        dataIndex: 'phone',
        key: 'phone',
        render: (_: any, record: { phone: string }) => (
            <>
                {record.phone && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.phone}
                        </div>
                    </>
                )}
            </>
        )
    },
]