import React from 'react';
import { use } from 'react';
import SkillCards from '../SkillCard/SkillCards';


const skillPromise = fetch("/skills.json").
      then((res)=> res.json());

const PopularSkill = () => {
    const skillData = use(skillPromise);

    console.log(skillData);
    return (
        <div> 
           <div className='max-w-8xl mx-auto text-center'>
             <h2 className='text-3xl font-bold mb-7'>Learn Popular Skills</h2>
             <p className='text-[#90A1B9]'>Popular, high-demand skills to learn include digitalcoding, data analysis, digital marketing. These skills boost employability <br /> and career growth across industries by enhancing adaptability, problem-solving, and professional communication.</p>
           </div> 
          <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-2 max-w-7xl mx-auto space-y-5 mt-10'>

           {
            skillData.map(skill=><SkillCards key={skill.skillId} skill={skill}></SkillCards>)
           }
          </div>

            
        </div>
    );
};

export default PopularSkill;