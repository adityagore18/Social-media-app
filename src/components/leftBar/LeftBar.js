import "./leftBar.scss";
import Friends from "../../assets/friends.png";
import Watch from "../../assets/watch.png";
import Time from "../../assets/time.png";
import Group from "../../assets/group.png";
import Market from "../../assets/market.png";
import Event from "../../assets/event.png";
import Gallery from "../../assets/gallery.png";
import Game from "../../assets/game.png";
import Message from "../../assets/message.png";
import Video from "../../assets/video.png";
import Courses from "../../assets/courses.png";
import Tutorial from "../../assets/tutorial.png";
import Fund from "../../assets/fund.png";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
          <div className="menu">
            <div className="user">
              <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt=""></img>
              <span>Gore Aditya</span>
            </div>

            <div className="items">
              <img src={Friends} alt=""></img>
              <span>Friends</span>
            </div>
            <div className="items">
              <img src={Group} alt=""></img>
              <span>Groups</span>
            </div>
            <div className="items">
              <img src={Market} alt=""></img>
              <span>Marketplace</span>
            </div>
            <div className="items">
              <img src={Watch} alt=""></img>
              <span>Watch</span>
            </div>
            <div className="items">
              <img src={Time} alt=""></img>
              <span>Memories</span>
            </div>


          </div>
          <hr/>
          <div className="menu">
            <span>Your Shortcuts</span>
            
            <div className="items">
              <img src={Event} alt=""></img>
              <span>Events</span>
            </div>
            <div className="items">
              <img src={Gallery} alt=""></img>
              <span>Gallery</span>
            </div>
            <div className="items">
              <img src={Game} alt=""></img>
              <span>Gaming</span>
            </div>
            <div className="items">
              <img src={Video} alt=""></img>
              <span>Video</span>
            </div>
            <div className="items">
              <img src={Message} alt=""></img>
              <span>Messages</span>
            </div>
          </div>
          <hr/>
          <div className="menu">
              <spn>Others</spn>
              <div className="items">
                <img src={Fund} alt=""></img>
                <span>Fundraiser</span>
              </div>
              <div className="items">
                <img src={Tutorial} alt=""></img>
                <span>Tutorials</span>
              </div>
              <div className="items">
                <img src={Courses} alt=""></img>
                <span>Courses</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default LeftBar
