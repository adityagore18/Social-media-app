import Post from "../../components/post/Post"
const Posts = () => {
//temporary /dummy data
const posts=[
    {
        id:1,
        name:"Jhon Doe",
        profilePic:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.124479187.1690858295&semt=ais",
        userId : 1,
        img:"https://images.unsplash.com/photo-1521575107034-e0fa0b594529?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"A postbox is a metal box in a public place, where you put letters and packets to be collected."

    },
    {
        id:2,
        name:"Jhon Doe",
        profilePic:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.124479187.1690858295&semt=ais",
        desc:"A postbox is a metal box in a public place, where you put letters and packets to be collected.They are then sorted and delivered. Compare letterbox. Try to get to a postbox during that period in particular."
    }
];
  return (
    <div className='posts'>
        {posts.map(post=>(
            <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts
