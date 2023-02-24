import img1 from "./images/imgMusic.png";
import img2 from "./images/imgFood.png";
import img3 from "./images/imgDigi.png";
import img4 from "./images/imgMul.png";

import {BsGithub ,BsLinkedin} from 'react-icons/bs'
import {AiOutlineMail ,AiFillFacebook} from 'react-icons/ai';
import {FiInstagram} from 'react-icons/fi'

export const projects = [

    {
        id: 1,
        name: "MERN-Stack Music App",
        imgSrc : img1 ,
        techs : "React Js,Node Js, MongoDb, Redux , Firebase , Tailwind CSS" ,
        github: "https://github.com/ANUPARNAGANGULY2000/mern_stack_music_repository",
        description: "This is a MERN Stack Musical App where you can upload your Songs ,new Artists and Albums  only when you log in as an Admin and you can listen Musics by login using Google Authentication"
    },

    {
        id: 2 ,
        name: "Resturant Booking and Food Delivery App ",
        imgSrc : img2 ,
        techs :"React Js, Redux, Bootstrap , Material UI",
        github: "https://github.com/ANUPARNAGANGULY2000/Food-Delivery-App",
        description: "This is a food delivery app where you can order some food and you can book your table for the Resturant ",
    },

    {
        id: 3,
        name: "Digital Clock",
        imgSrc: img3 ,
        techs: "HTML ,  CSS , JavaScript",
        github : "https://github.com/ANUPARNAGANGULY2000/Digital-Clock",
        description: " This a Digital Clock App",
    },

    {
        id: 4 ,
        name : "Random Generated Multiplication App",
        imgSrc: img4 ,
        techs: "HTML ,  CSS , javaScript",
        github :"https://github.com/ANUPARNAGANGULY2000/MultiplicationApp-",
        description: "This a app where random multiplication will generate over time if you can give the right answer then you will get +1 point otherwise your points will decrease by one"
    }
];

export const socialMedia = [

    {
        id: 1 ,
        iconSrc: (<BsGithub className=" text-slate-200 cursor-pointer text-3xl"/>),
        name:" Github",
        link:"https://github.com/ANUPARNAGANGULY2000",
    },

    {
        id: 2,
        iconSrc: (<BsLinkedin className="text-blue-800 text-3xl cursor-pointer"/>),
        name:"LinkedIn",
        link: "https://www.linkedin.com/in/anuparna-ganguly-49109b1a8",

    },

    {
        id: 3,
        iconSrc: (<AiFillFacebook className=" text-blue-600 text-3xl cursor-pointer"/>),
        name: "Facebook",
        link: "https://www.facebook.com/anuparna.gangopadhyay?mibextid=ZbWKwL",
    },

    {
        id: 4,
        iconSrc:(<FiInstagram className="text-3xl cursor-pointer text-pink-600"/>),
        name:"Instagram",
        link:"https://instagram.com/gangulyanuparna?igshid=ZDdkNTZiNTM=",
    },

    {
        id: 5,
        iconSrc:(<AiOutlineMail className="text-red-500 text-3xl cursor-pointer"/>),
        name:"Email",
        link:"anuparnaganguly5751@gmail.com",

    }


]