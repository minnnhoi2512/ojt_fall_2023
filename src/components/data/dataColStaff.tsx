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
        title: <div style={{
            whiteSpace: 'nowrap'
        }}><ProfileOutlined /> Tên nhân viên</div>,
        dataIndex: 'name',
        key: 'name',
        render: (_: any, record: { name: string }) => (
            <>
                {record.name && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.name}
                        </div>
                    </>
                )}
            </>
        )

    },
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }}><ProfileOutlined /> Phòng ban</div>,
        dataIndex: 'department',
        key: 'department',
        render: (_: any, record: { department: string }) => (
            <>
                {record.department && (
                    <>
                        {record.department === 'Chăm sóc khách hàng' && (
                            <div style={{
                                whiteSpace: 'nowrap'
                            }}>
                                <Badge color="#f50" text=" " />
                                <Text underline>{record.department}</Text>
                            </div>
                        )}
                        {record.department === 'Sales' && (
                            <div style={{
                                whiteSpace: 'nowrap'
                            }}>
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
        title: <div style={{
            whiteSpace: 'nowrap'
        }}><PhoneOutlined /> Số điện thoại</div>,
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
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }} ><UnorderedListOutlined /> Giới tính</div>,
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
        title: <div style={{
            whiteSpace: 'nowrap'
        }} ><ProfileOutlined /> Email</div>,
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
        }} ><ProfileOutlined /> Ngân hàng</div>,
        dataIndex: 'bank_name',
        key: 'bank_name',
        render: (_: any, record: { bank_name: string }) => (
            <>
                {record.bank_name && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.bank_name}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }}><CalendarOutlined /> Ngày sinh</div>,
        dataIndex: 'dob',
        key: 'dob',
        render: (_: any, record: { dob: string }) => (
            <>
                {record.dob && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.dob}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }} ><ProfileOutlined /> Địa chỉ</div>,
        dataIndex: 'address',
        key: 'address',
        render: (_: any, record: { address: string }) => (
            <>
                {record.address && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.address}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }}> <UnorderedListOutlined /> Quốc gia</div>,
        dataIndex: 'nation',
        key: 'nation',
        render: (_: any, record: { nation: string }) => (
            <>
                {record.nation && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.nation}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title: <div style={{
            whiteSpace: 'nowrap'
        }}> <BorderlessTableOutlined /> TK ngân hàng</div>,
        dataIndex: 'bank_no',
        key: 'bank_no',
        render: (_: any, record: { bank_no: string }) => (
            <>
                {record.bank_no && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.bank_no}
                        </div>
                    </>
                )}
            </>
        )
    },
];