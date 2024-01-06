import "./profile.scss"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import Posts from "../../components/posts/Posts"
const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://img.freepik.com/free-photo/dock-pier-sea-twilight-long-exposure_1150-10769.jpg?t=st=1704542096~exp=1704542696~hmac=c1826998a4bc8cd44953ab5f2661e5e287b4ec4465c8dc4a03b7fd8e592103ed" alt="" className="cover" />
        <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/"><FacebookOutlinedIcon fontSize="large" /></a>
            <a href="https://twiiter.com/"><TwitterIcon fontSize="large" /></a>
            <a href="https://www.instagram.com/">< InstagramIcon fontSize="large" /></a>
            <a href="https://www.linkedin.com/"><  LinkedInIcon fontSize="large" /></a>
            <a href="https://in.pinterest.com/">< PinterestIcon fontSize="large" /></a>
          </div>
          <div className="center">
            <span>Gore Aditya</span>
              <div className="info">
              
                  <div className="item">
                      <LocationOnOutlinedIcon fontSize="small" />
                      <span>India</span>
                  </div>
                  <div className="item">
                      <LanguageRoundedIcon fontSize="small" />
                      <span>iamsocial</span>
                  </div>
                
              </div>
              <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon fontSize="large" />
            <MoreVertIcon fontSize="large" />
          </div>
        </div>
        {<Posts/>}
      </div>
     
    </div>
  )
}

export default Profile
