import  {Link}  from "react-router-dom"
import "./navBar.scss";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const NavBar = () => {
  return (
    <div className="navBar">
       <div className="left">
        <Link to="/" style={{textDecoration:"none"}}>
        <span>iamsocial</span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>
        <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder="Search..." />

        </div>

       </div>
       <div className="right">
        <Person2OutlinedIcon/>
        <MailOutlinedIcon/>
        <NotificationsNoneOutlinedIcon/> 
        <div className="user">
            <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt=""></img>
            <span>Gore Aditya</span>
        </div>
       </div>
    </div>
  )
}

export default NavBar
