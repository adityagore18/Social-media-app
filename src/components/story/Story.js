import "./story.scss"

const Story = () => {
    //temporary dummy data
    const stories =[
    {
        id:1,
        name:"Jhon Doe",
        img:"https://as1.ftcdn.net/v2/jpg/04/63/73/24/1000_F_463732492_ZAEdep8Gb8qpKNmg0IYPp1Tv2nAjeouB.jpg"
    },
    {
        id:2,
        name:"Jhon Doe",
        img:"https://as1.ftcdn.net/v2/jpg/04/63/73/24/1000_F_463732492_ZAEdep8Gb8qpKNmg0IYPp1Tv2nAjeouB.jpg"
    },
    {
        id:3,
        name:"Jhon Doe",
        img:"https://as1.ftcdn.net/v2/jpg/04/63/73/24/1000_F_463732492_ZAEdep8Gb8qpKNmg0IYPp1Tv2nAjeouB.jpg"
    },
    {
        id:4,
        name:"Jhon Doe",
        img:"https://as1.ftcdn.net/v2/jpg/04/63/73/24/1000_F_463732492_ZAEdep8Gb8qpKNmg0IYPp1Tv2nAjeouB.jpg"
    },
    ];
  return (
    <div className='stories'>
        <div className='story'>
                <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt='' />
                <span>Gore Aditya</span>
                <button>+</button>
 
        </div>
       
       {stories.map(story=>(
            <div className='story' key={story.id}>
                <img src={story.img} alt='' />
                <span>{story.name}</span>
 
            </div>
       ))}
    </div>
  )
}

export default Story
