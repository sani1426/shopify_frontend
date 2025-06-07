import Link from 'next/link'
import '../UI/component.css'


const VideoSlider = () => {
  return (
    <section className='home'>

    <video src="/videos/1.mp4" autoPlay ></video>




        <div className="content_video">
            <h1 className="">wonderfull</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, tempora!</p>
            <Link href="/">
                read more
            </Link>
        </div>

        <div className="media_icons">
            <a href="">insta</a>
            <a href="">facebook</a>
            <a href="">telegram</a>
        </div>
    </section>
  )
}

export default VideoSlider