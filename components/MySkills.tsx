import { skills } from '@/data'
import React from 'react'

export const MySkills = () => {
  return (
    <div className="flex flex-col items-center" id='skills'>
      <h1 className="text-black text-5xl font-bold mb-4">My Skill Set</h1>
      <div className="flex flex-wrap items-center py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center gap-4 md:gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center md:max-w-60 max-w-32 text-center">
            <img
              src={skill.img}
              alt={skill.name}
              className="md:w-10 w-5 mb-2"
            />
            <span className="text-black text-lg md:text-2xl font-bold">{skill.name}</span>
            {/* Optionally include another image or element if needed */}
            {/* <img
              src={skill.nameImg}
              alt={skill.name}
              width={skill.id === 4 || skill.id === 5 ? 100 : 150}
              className="md:w-24 w-20"
            /> */}
          </div>
        ))}
      </div>
    </div>
  )
}
