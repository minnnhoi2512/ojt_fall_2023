import { Tag, Image, Typography, Badge } from 'antd';
import activeAvatar from '../../assets/active.png'
import inativeAvatar from '../../assets/inactive.png'
import { BorderlessTableOutlined, CalendarOutlined, EllipsisOutlined, PhoneOutlined, ProfileOutlined, UnorderedListOutlined } from '@ant-design/icons';
const { Text } = Typography;
export const columns = [
    {
        render: () => <EllipsisOutlined />
    },
    {
        key: 'active',
        dataIndex: 'active',
        render: (_: any, record: { active: string[] }) => (
            <>
                {record.active.map((status) => {

                    if (status === '0') {
                        return (
                            <Image
                                width={20}
                                src={inativeAvatar}
                            />
                        );
                    }
                    if (status === '1') {
                        return (
                            <Image
                                width={20}
                                src={activeAvatar}
                            />
                        );
                    }

                })}
            </>
        ),
    },
    {
        title: 'ID',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: <div style={{ minWidth: '10rem' }}><ProfileOutlined /> Tên nhân viên</div>,
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: <div style={{ minWidth: '10rem' }}><ProfileOutlined /> Phòng ban</div>,
        dataIndex: 'department',
        key: 'department',
        render: (_: any, record: { department: string }) => (
            <>
                {record.department && (
                    <>
                        {record.department === 'Chăm sóc khách hàng' && (
                            <div>
                                <Badge color="#f50" text=" " />
                                <Text underline>{record.department}</Text>
                            </div>
                        )}
                        {record.department === 'Sales' && (
                            <div>
                                <Badge color="hwb(205 6% 9%)" text=" " />
                                <Text underline>{record.department}</Text>
                            </div>
                        )}
                    </>
                )}
            </>
        )

    },
    {
        title: <div style={{ minWidth: '10rem' }} ><PhoneOutlined /> Số điện thoại</div>,
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: <div style={{ minWidth: '5rem' }} ><UnorderedListOutlined /> Giới tính</div>,
        key: 'gender',
        dataIndex: 'gender',
        render: (_: any, record: { gender: string[] }) => (
            <>
                {record.gender.map((sex) => {
                    let color = 'green';
                    if (sex === 'Nam') {
                        color = 'geekblue';
                    }
                    if (sex === 'Nữ') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={sex}>
                            {sex.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: <div style={{ minWidth: '10rem' }} ><ProfileOutlined /> Email</div>,
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: <div style={{ minWidth: '10rem' }} ><ProfileOutlined /> Ngân hàng</div>,
        dataIndex: 'bank_name',
        key: 'bank_name',
    },
    {
        title: <div style={{ minWidth: '12rem' }} ><CalendarOutlined /> Ngày sinh</div>,
        dataIndex: 'dob',
        key: 'dob',
    },
    {
        title: <div style={{ minWidth: '10rem' }} ><ProfileOutlined /> Địa chỉ</div>,
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: <div style={{ minWidth: '10rem' }}> <UnorderedListOutlined /> Quốc gia</div>,
        dataIndex: 'nation',
        key: 'nation',
    },
    {
        title: <div style={{ minWidth: '10rem' }}> <BorderlessTableOutlined />TK ngân hàng</div>,
        dataIndex: 'bank_no',
        key: 'bank_no',
    },
];