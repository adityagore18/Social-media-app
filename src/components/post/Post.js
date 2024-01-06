import  {Link}  from "react-router-dom"
import "./post.scss";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CommentBankOutlinedIcon from '@mui/icons-material/CommentBankOutlined';
import ShareIcon from '@mui/icons-material/Share';
import Comments from "../../components/comments/Comments";
import  { useState } from 'react';
 
const Post = ({post}) => {
    const [comment ,setComment] = useState(false)

    //temporary
    const liked=false;
  return (
    <div className="post">
        <div className='container'>
         <div className='user'>
            <div className='userInfo'>
                <img src={post.profilePic} alt=''></img>
                <div className='details'>
                <Link to={'/profile/${post.userId}'} style={{textDecoration:'none', color:'inherit'}}>
                <span className='name'>{post.name}</span></Link>
                <p className='date'> 1 hours ago</p>
                </div>
                
            </div>
            <MoreHorizOutlinedIcon/>
         </div>
         <div className='contents'>
            <span>{post.desc}</span>
            <img src={post.img} alt=""/>
         </div>
         <div className='info'>
            <div className="items">
            {liked ? <FavoriteOutlinedIcon/> :<FavoriteBorderOutlinedIcon/>
            } 
            12 Likes                   
            </div>
            <div className="items" onClick={()=>setComment(!comment)}>
            <CommentBankOutlinedIcon/>
            12 Comments
            </div>
            <div className="items">
            <ShareIcon/>
            Share
            </div>
            
         </div>
         {comment && <Comments/>}  
        </div>
        
    </div>
    
  )
}

export default Post
