import "./comments.scss"

const Comments = () => {
    //temporary
    const comments = [
        {
            id:1,
            userId:1,
            name:"Amelia",
            desc: "Love lies in those unsent drafts in your mailbox. Sometimes you wonder whether things would have been different if you'd clicked 'Send'." ,
            profilePic:"https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=740&t=st=1704524592~exp=1704525192~hmac=108e55be736fc2c673eff99cc2c1b267cd2db731df5ffeb2ce5e07447273101d"
        },
        {
            id:2,
            userId:2,
            name:"Akash",
            desc:"When I was a kid, the high point of the day was to go to the mailbox and see if any mail came for me, and I'm still stuck in that mode."  ,
            profilePic:"https://img.freepik.com/premium-photo/man-cheerful-studio-portrait-concept_53876-45003.jpg"
        },
    ]
  return (
    <div className="comments">
    <div className="write">
        <img  src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt=""/>
        <input input="text" placeholder="Write some comment here"></input>
        <button>send</button>

    </div>
      {
        comments.map(comment=>(
            <div className="comment">
                <img  src={comment.profilePic} alt=""/>
                <div className="Info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hours ago</span>
            </div>
        ))
      }
    </div>
  )
}

export default Comments
