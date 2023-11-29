"use client"
import { Parallax } from "react-parallax";
import './banner.scss'

const Banner = ({ img, alt, title, strength }) => {
  return (
    <Parallax
        bgImage={img}
        strength={strength}
        bgImageAlt={alt}
    >
        <div className="banner">
            <div className="banner-text">
                {title}
            </div>
        </div>
    </Parallax>
  )
}

export default Banner