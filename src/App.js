import React, { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaUniversity ,FaGraduationCap ,FaUserGraduate , FaGithub} from 'react-icons/fa'
import {motion} from 'framer-motion'
import anuImage from './images/anuImage.jpg';
import SkillBar from 'react-skillbars';
import { CircularProgressbar , buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {projects ,socialMedia } from "./data.js";



const App = () => {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('cv.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'AnuparnaGangulyCv.pdf';
            alink.click();
        })
    })
}
    
    const skills = [
        { type: 'HTML', level: 100, 
             color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          } },

        { type: 'CSS', level: 100 , 
             color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          }},

        { type: 'React Js', level: 90 , 
            color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          } },


        { type: 'Node Js', level: 80 , 
          color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          } },
        { type: 'Javascript', level: 70 ,  
          color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          }},
        { type: 'TailWindCSS', level: 60 ,  
          color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          }},
        { type: 'MongoDb', level: 50 , 
           color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          }},
        { type: 'BootStarp', level: 40  , 
           color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          }},
        { type: 'Express Js', level: 20 , 
          color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          }
         },
        { type: 'JAVA', level: 10 , 
           color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          } },
        { type: 'NoSQL', level: 0 ,  
            color: {
            bar: "#e5b60c",
            title: { background: '#727272' }
          } }
      ];

    const [isMenu ,setIsMenu ] = useState(false);
   
    
  return (
    <div className=' flex w-screen h-[6800px] items-center justify-center relative flex-col min-h-[3500px] pb-20 bg-slate-900'>


        {/** navbar */}
        <nav className=' w-full z-50 fixed top-2 inset-x-0 px-6 flex justify-center items-center'>
            <div className=' flex items-center p-4 md:w-[880px] rounded-2xl bg-slate-700 w-full  gap-14'>
                <p className=' text-4xl text-white font-bold hover:shadow-md'><span>Port</span><span className='text-yellow-400'>folio</span></p>

                <div className='hidden md:flex items-center flex-1 gap-7 ml-6'>
                    <a href='#home' className=' text-2xl font-semibold text-slate-300 hover:text-slate-50 cursor-pointer duration-100 ease-in-out'>Home</a>

                    <a href='#about' className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out'>About</a>

                    <a href='#projects' className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out'>Projects</a>

                    <a href='#contact' className=' text-2xl text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out'>Contact</a>
                </div>

                <div className=' block md:hidden ml-auto cursor-pointer'>
                    <AiOutlineMenu className=' text-3xl text-slate-200' onClick={() => setIsMenu(!isMenu)}/>
                </div>
                {isMenu &&  (
                    <motion.div
                    initial={{opacity:0 , translateX:-50}}
                    animate={{opacity:1 ,translateX:50}}
                    exit={{opacity:0,translateX:-50}}

                     className=' flex flex-col w-72  fixed top-24 right-16  bg-slate-700 gap-7 justify-evenly items-center rounded-lg p-5 '>
                        
                        <a href='#home' className=' text-2xl font-semibold text-slate-300 hover:text-slate-50 cursor-pointer duration-100 ease-in-out' onClick={()=> setIsMenu(false)} >Home</a>

                         <a href='#about' className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out' onClick={()=> setIsMenu(false)}>About</a>

                         <a href='#projects' className=' text-2xl  text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out' onClick={()=> setIsMenu(false)}>Projects</a>

                        <a href='#contact' className=' text-2xl text-slate-300 hover:text-slate-50 cursor-pointer font-medium duration-100 ease-in-out' onClick={()=> setIsMenu(false)}>Contact</a>

                    </motion.div>

                )}
            </div>
        </nav>
        <div className=' relative'></div>
        <main className=' w-[80%] mt-4 absolute top-2 md:top-7'>
            <section className=' w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-28 py-14' id='home'>
                
                 <div className=' flex flex-col  items-center justify-center w-auto h-[420px] gap-4'>
                    <p className='text:xl md:text-3xl text-slate-50 p-3'>Hello ,I'm  </p>
                    <p className='text-xl sm:text-4xl  md:text-4xl lg:text-5xl xl:text-6xl text-yellow-400 p-3 ' >Anuparna Ganguly </p>
                    <p className='text-xl md:text-3xl text-slate-50 p-3'>MERN Stack Developer </p>
                    <div className=' flex items-center justify-center gap-4'>

                    <button className='w-auto md:w-auto relative mt-6 inline-flex items-center
                    justify-center p-1 mb-2 mr-2 overflow-hidden text-sm md:text-lg md:font-semibold text-slate-300 rounded-lg group bg-gradient-to-br
                    from-yellow-400 to-red-600 group-hover:from-red-600 group-hover:to-yellow-400 dark:focus:ring-yellow-800 
                    hover:shadow-lg hover:shadow-orange-500' ><span className='w-full md:w-auto relative  px-3 md:px-4 py-3 transition-all ease-in duration-75
                    bg-gray-600 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 inline-block' onClick={onButtonClick}>Download Cv</span></button>

                    <button className='w-auto md:w-auto relative mt-6 inline-flex items-center
                    justify-center p-1 mb-2 mr-2 overflow-hidden text-sm md:text-lg md:font-semibold text-slate-300 rounded-lg group bg-gradient-to-br
                    from-yellow-400 to-red-600 group-hover:from-red-600 group-hover:to-yellow-400 dark:focus:ring-yellow-800 
                    hover:shadow-lg hover:shadow-orange-500' ><span className='w-full md:w-auto relative px-4 md:px-7  py-3 transition-all ease-in duration-75
                    bg-gray-600 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>About Me</span></button>
                    </div>
                    
                </div>

                <div className=' w-full h-[420px] flex items-center justify-center'>
                    <div className=' w-[275px] h-[340px] relative '>
                    <motion.img 
                    initial={{ opacity : 0 , translateX:-50 }}
                    animate={{ opacity : 1 , translateX:50 }}
                    exit={{ opacity : 0 ,translateX:-50 }}
                    
                    src={anuImage} alt='' className='rounded-full w-64 h-72 object-cover shadow-lg '></motion.img>
                    </div>
                </div>

                
                
            </section>

            <section className='w-full   my-2 py- 4  md:py-20 grid grid-cols-1 md:grid-cols-2 ' id='about'>
                <div className=' flex flex-col w-full'>
                    <p><span className='text-5xl  text-yellow-400'>About</span><span className='text-5xl text-slate-50'> Me</span></p>
                    <p className='w-48 md:w-96 py-6  text-slate-50 text-lg'>
                        Full Stack Web developer with background knowledge of MERN Stacks with redux , firebase  along with a knack of building applications with  utmost efficiency . Strong professional with a MSC willing to be an asset for an organization
                    </p>
                    <div className='w-48 md:w-96 py-6 flex flex-col gap-5'>
                        <p className='text-slate-50 text-2xl font-semibold'> Here are a Few Highlights</p>
                        <ul className='list-outside list-disc marker:text-yellow-400 text-lg'>
                            <li className=' text-slate-50'>Full Stack  Web development</li>
                            <li className=' text-slate-50'>Interactive Front End as per the design</li>
                            <li className=' text-slate-50'>React and React Native</li>
                            <li className=' text-slate-50'>Redux for State Management</li>
                            <li className=' text-slate-50'>Building REST API</li>
                            <li className=' text-slate-50'>Managing databse</li>
                        </ul>
                    </div>
                </div>

                <div className=' w-full flex flex-col'>
                    <div className=' w-48 md:w-96 py-6 flex flex-col gap-5'>
                        <p className='text-slate-50 text-2xl font-semibold'>Technical Skills </p>
                        <SkillBar skills={skills} height={25}/>
                    </div>

                    <div className=' w-full py-6 flex flex-col gap-5'>
                        <p className='text-slate-50 text-2xl font-semibold'>Programming Language </p>
                        <div className=' flex flex-row '>

                        <div style={{ width: 150, height: 110 }} className='flex flex-col justify-center items-center gap-3'>
                            <CircularProgressbar value={80} text={`${80}%`} styles={buildStyles({
                                
                                pathColor:"#e5b60c",
                                textSize: '30px',
                                trailColor: '#727272',
                                textColor: "#eaefef",
                                
                                
                            })}/>
                            <p className='text-slate-50 text-xl'>C language</p>

                           </div>

                           <div style={{ width: 150, height: 110  }} className='flex flex-col justify-center items-center gap-3'>
                            <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
                                
                                pathColor:"#e5b60c",
                                textSize: '30px',
                                trailColor: '#727272',
                                textColor: "#eaefef"
                            })}/>
                            <p className='text-slate-50 text-xl'>C++ language</p>

                           </div>

                           
                        </div>
                       


                        
                    </div>
                </div>
            
            </section>

            <section className=' w-full flex items-center justify-center'>
            <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
               contentStyle={{ background: '#b48d00', color: '#ffffff' }}
               contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2020 - 2022"
              iconStyle={{ background: '#727272', color: '#fff' }}
               icon={<FaUniversity/>}
              >
           <h3 className="vertical-timeline-element-title text-2xl font-semibold"> Visva -Bharati University</h3>
           <h4 className="vertical-timeline-element-subtitle">Santiniketan, West Bengal</h4>
           <p> M.Sc in  Computer and System Science</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
               className="vertical-timeline-element--work"
               contentStyle={{ background: '#b48d00', color: '#ffffff' }}
               date="2017 - 2020"
                iconStyle={{ background: '#727272', color: '#fff' }}
                 icon={<FaUserGraduate/>}
                  >
                <h3 className="vertical-timeline-element-title text-2xl font-semibold">Gour Mahavidyalaya</h3>
                <h4 className="vertical-timeline-element-subtitle">Mangalbari, Malda.</h4>
                 <p>
                 B.Sc in Computer Science
                  </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
               className="vertical-timeline-element--work"
               contentStyle={{ background: '#b48d00', color: '#ffffff' }}
               date="2015 - 2017"
               iconStyle={{ background: '#727272', color: '#fff' }}
               icon={<FaGraduationCap/>}
                >
              <h3 className="vertical-timeline-element-title">Higher Secondary</h3>
               <h4 className="vertical-timeline-element-subtitle">Malda Girls High School</h4>
                <p>
                WBCHSC
               </p>
             </VerticalTimelineElement>
            </VerticalTimeline>
            </section>


            {/** project section */}
            <section className='w-full flex flex-col my-2 py-14 gap-5' id='projects'>

              <div className='py-6'>
                <p><span className='text-5xl text-slate-50 shadow-lg'>Pro</span><span className='text-5xl text-yellow-400 shadow-lg'>jects</span></p>

              </div>
              <div   className=' flex flex-wrap items-center justify-evenly my-24 gap-4'>
              {projects && projects.map((data , index)=> (

                <div>

                <motion.div   key={data.id} 
                whileTap={{scale: 0.75}}
                className=' border  border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out'>
                     <p className=' text-lg uppercase font-medium text-slate-300' >{data.name}</p>
                     <img src={data.imgSrc} alt='' className='w-full h-full object-cover rounded-md my-4'></img>
                     <div className=' flex flex-1 items-center justify-between'>
                      <div className=' flex flex-col p-4 my-4 py-4'>
                      <p className=' text-lg text-gray-300'>Technologies :</p>
                      <span className=' text-gray-300 text-lg '>{data.techs}</span>
                      </div>
                         

                          <a href={data.github}>
                            <div>
                              <FaGithub className=' text-3xl text-slate-300 cursor-pointer'/>
                           </div>
                          </a>

                    </div>

                    

              </motion.div>

              </div>

              ))}

      </div>

  </section>

  <section className=' flex flex-col items-center justify-evenly w-full  py-14' id='contact' >
    <p className='text-2xl text-gray-400 capitalize'>Contact Me on</p>
    <div className=' w-full flex flex-wrap gap-4 items-center justify-evenly my-5'>
      {socialMedia && socialMedia.map((data)=>(
        <motion.a whileTap={{scale: 0.8}} href={data.link} key={data.id} className='w-full md:w-auto px:3 md:px-4 border border-zinc-800
        py-5 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
          {data.iconSrc}
          <p className=' text-lg text-slate-200 '>{data.name}</p>
        </motion.a>
      ))}
    </div>
  </section>
            
            
        </main>
       
       
    
    </div>
  )
}


export default App;
