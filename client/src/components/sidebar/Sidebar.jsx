import { DarkModeContext } from '../../context/darkModeContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'

import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import StoreIcon from '@mui/icons-material/Store'
import InsertChartIcon from '@mui/icons-material/InsertChart'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Shines 관리자대시보드</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">메인</p>
          <li>
            <DashboardIcon className="icon" />
            <span>대시보드</span>
          </li>
          <p className="title">목차</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>사용자</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <StoreIcon className="icon" />
              <span>제품</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>구매자</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>배송</span>
          </li>
          <p className="title">사용 상태</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>상태</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>알림</span>
          </li>
          <p className="title">서비스</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>시스템 설정</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>로그</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>세팅</span>
          </li>
          <p className="title">사용자</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>프로필</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>로그아웃</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
      </div>
    </div>
  )
}

export default Sidebar
