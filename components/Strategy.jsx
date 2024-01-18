import React from 'react';



const data = [
  { title: 'Our Vission', content: ' To be the Centre of Excellence to ensure our students are successful and that they achieve their   aspirations within a timeframe.' },
  { title: 'Our Mission', content: ' To Empower aspirants of civil services to excel by imparting to them right and relevant   information and perspective.   Our aim is to develop and nurture competitive attitude amongst student help them to acquire   appropriate analytical skills to be on their own.' },
  { title: ' Our Strategy', content: 'To assist the aspirant s to frame an accurate and separate strategy and plan at every level of   the examination i.e. Preliminary , Mains and Interview.' },
  { title: 'Classroom Programme', content: ' Classroom programme by the experts of their respective field in order to assist aspirants to develop the clear and basic fundamentals of the subjectsTo be the Centre of Excellence to ensure our students are successful and that they achieve their aspirations within a timeframe.' },
  { title: 'Society', content: ' To focus the aspirants belongs to the weaker sections of the society and help them to be the   part of the mainstream of the society. ' },
  { title: ' Exam Preparation Strategy', content: 'The centre has been very successful in making potential aspirants to realise their dreams which   is evident from the success stories of the previous years.'
,para1:'1. Counselling.',para2:'2. Class Training Programme',para3:'3. Test Evaluation Programme' },
  
];

const Strategy = () => (
 

      
  //   <div className='flex flex-col gap-4 p-4  md:pl-56  lg:pl-0 lg:flex-row xl:flex-row lg:gap-0 xl:gap-0 xl:pl-32'>
  //   {data.map((item, index) => (
  //     <div key={index}  className='  sm:justify-center w-full lg:pl-4 xl:pl-0  lg:w-1/3 xl:w-[31.333%] lg:flex-row xl:flex-row'>
  //       <div
  //       className='   
  //       sm:w-[320px] sm:h-[270px]   gap-y-4   xl:w-[400px]   xl:h-[240px]
  //     font-rubik font-feature-settings border-2 border-[#45BC41]
  //       '
  //         style={{
  //           // border: '1px solid #e0e0e0',
  //           borderRadius: '16px',
  //           padding: '16px',
  //           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  //           paddingLeft:'26px',
  //           paddingTop:'20px',
  //         }}
          
  //       >
  //         <h3 className='text-lg font-semibold '>{item.title}</h3>
  //         <p className='text-md font-feature-settings'>{item.content}</p>
  //       </div>
  //     </div>
  //   ))}
  // </div>


    <div className='w-full flex flex-wrap  justify-evenly 
    font-rubik font-feature-settings  p-4 gap-y-4 xl:px-20'>
      
      {data.map((item, index) => (

     
      <div key={index}
       className='xl:w-[400px]   xl:h-[240px] 
       sm:w-[320px] sm:h-[270px] 
      w-auto h-auto border-2 border-[#45BC41]
      gap-y-4'
           style={{
             // border: '1px solid #e0e0e0',
             borderRadius: '16px',
             padding: '16px',
             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
             paddingLeft:'26px',
             paddingTop:'20px',
           }}
          
         >
           <h3 className='text-lg font-semibold '>{item.title}</h3>

           <p className='text-md  font-feature-settings'>{item.content}</p>
           <p className='text-md font-feature-settings'>{item.para1}</p>
           <p className='text-md font-feature-settings'>{item.para2}</p>
           <p className='text-md font-feature-settings'>{item.para3}</p>
         </div>
      ))}
      
    </div>


);

export default Strategy;




