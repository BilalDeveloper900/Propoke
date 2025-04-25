import React from 'react'
import team1 from '../../assets/team/team1.svg'
import team2 from '../../assets/team/team2.svg'
import team3 from '../../assets/team/team3.svg'
import team4 from '../../assets/team/team4.svg'
import Image from 'next/image'


const AgentList = () => {
    const teamData = [
        {
            image: team1,
            name: 'Shoo Phar Dhie',
            position: 'CEO'
        },
        {
            image: team2,
            name: 'Shoo Thar Mhie',
            position: 'Project Manager'
        },
        {
            image: team3,
            name: 'Shoo Khir Mhan',
            position: 'Marketing Manager'
        },
        {
            image: team4,
            name: 'Shoo Han Tho',
            position: 'Sales Manager'
        },
    ]
    return (
        <div>
            <div>
                <div  className="max-w-[1136px] flex justify-center flex-col mx-auto items-center my-20">
                    <h2 className="text-[32px] md:text-[40px] font-bold text-[#333333] mb-4 max-w-[528px]">
                        Our Agent List
                    </h2>

                    <p className=" text-[#666666] text-base leading-[32px]">
                        Meet Our Expert and Experienced Agents.
                    </p>
                </div>
            </div>

            <div className='max-w-[1136px] mx-auto px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>

                {teamData.map((team) => (
                    <div className='mx-auto'>
                        <Image
                            src={team.image}
                            alt="Modern House"
                            className="rounded-[16px] w-[272px] h-[240px] object-cover"
                            priority
                        />

                        <h3 className='text-[32px] text-[#333333] mt-4 mb-2 leading-[48px]'>{team.name}</h3>
                        <p className='leading-[32px] text-[#666666]'>{team.position}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default AgentList