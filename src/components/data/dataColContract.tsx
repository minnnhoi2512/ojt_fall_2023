import { EllipsisOutlined, UserOutlined, UnorderedListOutlined, BorderlessTableOutlined, EditOutlined, CalendarOutlined } from '@ant-design/icons'
import { Tag, Badge } from 'antd';
export const dataColContract = [
    {
        render: () => <EllipsisOutlined />
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}> ID</div>,
        dataIndex: 'key',
        key: 'key',
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><UserOutlined /> Tạo bởi</div>,
        dataIndex: 'createdBy',
        key: 'createdBy',
        render: (_: any, record: { createdBy: string }) => (
            <>
                {record.createdBy && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.createdBy}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><UnorderedListOutlined /> Loại hợp đồng</div>,
        dataIndex: 'category',
        key: 'category',
        render: (_: any, record: { category: string }) => (
            <>
                {record.category && (
                    <>
                        <Badge style={{
                            whiteSpace: 'nowrap',
                            textDecoration: 'underline'
                        }} color={'orange'} text={record.category} />
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><UnorderedListOutlined /> Trạng thái</div>,
        dataIndex: 'status',
        key: 'status',
        render: (_: any, record: { status: string }) => (
            <>
                {record.status === '1' && (
                    <>
                        <Tag style={{
                            whiteSpace: 'nowrap'
                        }} bordered={false}>Hiệu Lực</Tag>
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><UnorderedListOutlined /> Loại lương</div>,
        dataIndex: 'categorySalary',
        key: 'categorySalary',
        render: (_: any, record: { categorySalary: string }) => (
            <>
                {record.categorySalary && (
                    <>
                        <Tag style={{
                            whiteSpace: 'nowrap'
                        }} bordered={false} color="blue">
                            {record.categorySalary}
                        </Tag>
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><BorderlessTableOutlined /> Người phụ thuộc</div>,
        dataIndex: 'dependent',
        key: 'dependent',
        render: (_: any, record: { dependent: string }) => (
            <>
                {record.dependent && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.dependent}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><CalendarOutlined /> Ngày bắt đầu</div>,
        dataIndex: 'startTime',
        key: 'startTime',
        render: (_: any, record: { startTime: string }) => (
            <>
                {record.startTime && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.startTime}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><CalendarOutlined /> Ngày kết thúc</div>,
        dataIndex: 'endTime',
        key: 'endTime',
        render: (_: any, record: { endTime: string }) => (
            <>
                {record.endTime && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.endTime}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><BorderlessTableOutlined /> Lương thỏa thuận</div>,
        dataIndex: 'salaryBase',
        key: 'salaryBase',
        render: (_: any, record: { salaryBase: string }) => (
            <>
                {record.salaryBase && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap',
                            textAlign: 'right'
                        }}>{record.salaryBase} đ
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><BorderlessTableOutlined /> Lương đóng thuế</div>,
        dataIndex: 'tax',
        key: 'tax',
        render: (_: any, record: { tax: string }) => (
            <>
                {record.tax && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap',
                            textAlign: 'right'
                        }}>{record.tax} đ
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><BorderlessTableOutlined /> Tổng phụ cấp</div>,
        dataIndex: 'allowance',
        key: 'allowance',
        render: (_: any, record: { allowance: string }) => (
            <>
                {record.allowance && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap',
                        }}>{record.allowance} đ
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><EditOutlined /> Ghi chú</div>,
        dataIndex: 'note',
        key: 'note',
        render: (_: any, record: { note: string }) => (
            <>
                {record.note && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.note}
                        </div>
                    </>
                )}
                {record.note === '' && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap',
                            fontWeight: '200',
                            fontStyle: 'italic'
                        }}>Chưa có ghi chú
                        </div>
                    </>
                )
                }
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><CalendarOutlined /> Thời gian tạo</div>,
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (_: any, record: { createdAt: string }) => (
            <>
                {record.createdAt && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.createdAt}
                        </div>
                    </>
                )}
            </>
        )
    },
    {
        title:
            <div style={{
                whiteSpace: 'nowrap'
            }}><CalendarOutlined /> Thời gian thay đổi</div>,
        dataIndex: 'updatedAt',
        key: 'updatedAt',
        render: (_: any, record: { updatedAt: string }) => (
            <>
                {record.updatedAt && (
                    <>
                        <div style={{
                            whiteSpace: 'nowrap'
                        }}>{record.updatedAt}
                        </div>
                    </>
                )}
            </>
        )
    },

]