import { FaBed } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserOutlined, UserAddOutlined, ClockCircleOutlined, HomeOutlined, DollarOutlined, AuditOutlined, FileTextOutlined } from '@ant-design/icons';
// const setMenu = (item : any)=>{
//     localStorage.setItem('key_menu', item.key);
// }
export const items = [

    {
        label: (
            <Link to='/dashboard'>Dashboard</Link>
        ),
        key: "dashboard",
        icon: <HomeOutlined />,

    },
    {
        label: <div style={{ fontWeight: '600' }}>NHÂN VIÊN</div>,
        key: "staff",
        children: [
            {
                label: (
                    <Link to='/department' >Phòng Ban</Link>

                ),
                key: "department",
                icon: <UserOutlined />,

            },
            {
                label: (
                    <Link to='/mydepartment'>Phòng Ban Của Tôi</Link>
                ),
                key: "mydepartment",
                icon: <UserOutlined />,
            },
            {
                label: (
                    <Link to='/allstaff'>Toàn Bộ Nhân Viên</Link>
                ),
                key: "allstaff",
                icon: <UserOutlined />,
            },
            {
                label: (
                    <Link to='/createstaff'>Tạo Nhân Viên Mới</Link>
                ),
                key: "createstaff",
                icon: <UserAddOutlined />,
            },
        ]
    },
    {
        label: <div style={{ fontWeight: '600' }}>TĂNG CA</div>,
        key: "ot",
        children: [
            {
                label: (
                    <Link to='/staffot'>Đơn Tăng Ca Nhân Viên</Link>
                ),
                key: "staffot",
                icon: <ClockCircleOutlined />,
            },
            {
                label: (
                    <Link to='/myot'>Đơn Tăng Ca Của Tôi</Link>
                ),
                key: "myot",
                icon: <ClockCircleOutlined />,
            },

        ]
    },
    {
        label: <div style={{ fontWeight: '600' }}>NGHỈ PHÉP</div>,
        key: "dayoff",
        children: [{
            label: (
                <Link to='/leaveapplication'>Đơn Nghỉ Phép Nhân Viên</Link>
            ),
            key: "leaveapplication",
            icon: <FaBed />,
        },
        {
            label: (
                <Link to='/myleaveapplication'>Đơn Nghỉ Phép Của Tôi</Link>
            ),
            key: "myleaveapplication",
            icon: <FaBed />,
        },

        ]
    },
    {
        label: <div style={{ fontWeight: '600' }}>ĐƠN KHÁC</div>,
        key: "another_application",
        children: [
            {
                label: (
                    <Link to='/listapplication'>Danh Sách Đơn Khác</Link>
                ),
                key: "listapplication",
                icon: <FileTextOutlined />
            },
            {
                label: (
                    <Link to='/listmyapplication'>Đơn Khác Của Tôi</Link>
                ),
                key: "listmyapplication",
                icon: <FileTextOutlined />
            },

        ]
    },
    {
        label: <div style={{ fontWeight: '600' }}>QUẢN LÍ LƯƠNG</div>,
        key: "salary",
        children: [
            {
                label: (
                    <Link to='/salarystaff'>Lương Nhân Viên</Link>
                ),
                key: "salarystaff",
                icon: <DollarOutlined />,
            },
            {
                label: (
                    <Link to='/mysalary'>Lương Của Tôi</Link>
                ),
                key: "mysalary",
                icon: <DollarOutlined />,
            },

        ]
    },
    {
        label: <div style={{ fontWeight: '600' }}>HỢP ĐỒNG</div>,
        key: "contract",
        children: [
            {
                label: (
                    <Link to='/staffcontract'>Hợp Đồng Nhân Viên</Link>
                ),
                key: "staffcontract",
                icon: <AuditOutlined />
            },
            {
                label: (
                    <Link to='/mycontract'>Hợp Đồng Của Tôi</Link>
                ),
                key: "mycontract",
                icon: <AuditOutlined />
            },
        ]
    },
    {
        label: <div style={{ fontWeight: '600' }}>TUYỂN DỤNG</div>,
        key: "hiring",
        children: [
            {
                label: (
                    <Link to='/listcandidate'>Danh Sách Ứng Viên</Link>
                ),
                key: "listcandidate",
                icon: <UserOutlined />,
            }
        ]
    },
]