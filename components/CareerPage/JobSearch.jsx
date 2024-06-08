import React, { useState } from 'react'
import jobprofiles from './jobprofiles.json'
import JobStaticFiles from './JobStaticFile.json'
import Link from 'next/link'
import styles from '@/styles/JobSearch.module.css'

const JobSearch = ({allJobs}) => {
  console.log(allJobs)
    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = jobprofiles.slice(firstIndex, lastIndex);
    const npage = Math.ceil(jobprofiles.length / recordsPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
  
    function prePage() {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
      }
  
    }
    function changeCpage(id) {
      setCurrentPage(id)
    }
  
    function nextPage() {
      if (currentPage !== npage) {
        setCurrentPage(currentPage + 1)
      }
  
    }
  
    return (
      <div className='w-full flex flex-col items-center justify-center mt-10'>
  
        <div className='w-[90%] 1000px:w-[80%] mx-auto rounded-md flex flex-col gap-[16px] text-white bg-gray-900 p-5'>
  
          <input type='text' placeholder='Explore Opportunities by Job Title' className='text-[18px] 900px:text-[20px] text-center rounded-md h-[40px] mt-10' />
  
          <div className='flex justify-center text-center align-center'><button type='submit' className={`${styles.btn}  w-[200px]  h-[50px] px-5 text-[20px] 900px:text-[26px]  font-[500] rounded-lg`}>Search</button></div>
  
  
          <div 
          className='grid grid-cols-1 500px:grid-cols-2 1000px:grid-cols-3 1400px:grid-cols-4 gap-8 text-black mx-auto 500px:mx-0 mt-20'>
            {
              allJobs.map((record, index) => {
                console.log(record)
                return (
                  <div
                    className={`${styles.job} w-[200px] 900px:w-[260px] h-[200px] 900px:h-[250px] rounded-[20px] flex flex-col items-center justify-evenly`} key={index}
                  >
  
                    <p className='w-[90%] font-[600] text-[18px] leading-[20px] text-center'>
                      {record.mainHeading}
                    </p>
                    <Link href={`/career/${record._id}`}><button className='bg-black w-fit text-white h-fit p-2 rounded-lg font-[600]'>Details</button></Link>
  
                  </div>
                )
              })
            }
  
          </div>
  
        </div>
  
      </div>
    )
}

export default JobSearch