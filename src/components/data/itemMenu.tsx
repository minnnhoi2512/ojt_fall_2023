import { FaBed } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserOutlined, UserAddOutlined, MailOutlined, ClockCircleOutlined, HomeOutlined } from '@ant-design/icons';
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
                key: "my_department",
                icon: <UserOutlined />,
            },
            {
                label: (
                    <Link to='/allstaff'>Toàn Bộ Nhân Viên</Link>
                ),
                key: "all_staff",
                icon: <UserOutlined />,
            },
            {
                label: (
                    <Link to='/createstaff'>Tạo Nhân Viên Mới</Link>
                ),
                key: "create_staff",
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
                key: "staff_ot",
                icon: <ClockCircleOutlined />,
            },
            {
                label: (
                    <Link to='/myot'>Đơn Tăng Ca Của Tôi</Link>
                ),
                key: "my_ot",
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
            key: "list_dayoff",
            icon: <FaBed />,
        },
        {
            label: (
                <Link to='/myleaveapplication'>Đơn Nghỉ Phép Của Tôi</Link>
            ),
            key: "my_dayoff",
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
                key: "list_application",
                icon: <MailOutlined />,
            },
            {
                label: (
                    <Link to='/listmyapplication'>Đơn Khác Của Tôi</Link>
                ),
                key: "my_application",
                icon: <MailOutlined />,
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
                key: "staff_salary",
                icon: <UserOutlined />,
            },
            {
                label: (
                    <Link to='/mysalary'>Lương Của Tôi</Link>
                ),
                key: "my_salary",
                icon: <UserOutlined />,
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
                key: "all_contract",
                icon: <MailOutlined />,
            },
            {
                label: (
                    <Link to='/mycontract'>Hợp Đồng Của Tôi</Link>
                ),
                key: "my_contract",
                icon: <MailOutlined />,
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
                key: "list_hiring",
                icon: <UserOutlined />,
            }
        ]
    },
]