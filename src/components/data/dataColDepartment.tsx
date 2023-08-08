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
        title: <div style={{ minWidth: '10rem' }}><ProfileOutlined />Tên phòng ban</div>,
        dataIndex: 'nameDepartment',
        key: 'nameDepartment',
        render: (_: any, record: { nameDepartment: string }) => (
            <>
                {record.nameDepartment && (
                    <>
                        {record.nameDepartment === 'Chăm sóc khách hàng' && (
                            <div>
                                <Badge color="#f50" text=" " />
                                <Text underline>{record.nameDepartment}</Text>
                            </div>
                        )}
                        {record.nameDepartment ==='Sales' && (
                            <div>
                                <Badge color="hwb(205 6% 9%)" text=" " />
                                <Text underline>{record.nameDepartment}</Text>
                            </div>
                        )}
                        {record.nameDepartment === 'Finance' && (
                            <div>
                                <Badge color="rgb(45, 183, 245)" text=" " />
                                <Text underline>{record.nameDepartment}</Text>
                            </div>
                        )}
                        {record.nameDepartment === 'Marketing' && (
                            <div>
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
        title: <div style={{ minWidth: '10rem' }}><ProfileOutlined /> Quản lý</div>,
        dataIndex: 'nameManagement',
        key: 'nameManagement',

    },
    {
        title: <div style={{ minWidth: '10rem' }}> <BorderlessTableOutlined />Số nhân viên</div>,
        dataIndex: 'numberStaff',
        key: 'numberStaff',
    },
    {
        title: <div style={{ minWidth: '10rem' }} ><ProfileOutlined /> Email</div>,
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: <div style={{ minWidth: '10rem' }} ><PhoneOutlined /> Số điện thoại</div>,
        dataIndex: 'phone',
        key: 'phone',
    },
]