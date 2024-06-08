import React from 'react'

const FifthComponent = () => {

    const gridArray = [
        {
          heading: "Comprehensive Assessment:",
          listArray: [
            {
              heading: "Infrastructure Audit:",
              description: "Our experts conduct a thorough analysis of your existing infrastructure, identifying workloads suitable for the cloud and optimizing resources."
            },
            {
              heading: "Migration Strategy:",
              description: "We devise a customized migration strategy tailored to your business objectives, ensuring a smooth transition without disruption."
            },
          ]
        },
        {
          heading: "Data Migration and Security:",
          listArray: [
            {
              heading: "Data Transfer:",
              description: "We employ secure data migration techniques, ensuring your data is seamlessly transferred to AWS without compromise."
            },
            {
              heading: "Data Encryption:",
              description: "Your data's security is our priority. We implement robust encryption protocols to safeguard sensitive information during migration and beyond."
            },
          ]
        },
        {
          heading: "Application Refactoring and Optimization:",
          listArray: [
            {
              heading: "Application Assessment:",
              description: "We assess your applications, identifying areas for optimization and refactoring to leverage the full potential of AWS services."
            },
            {
              heading: "Performance Enhancement:",
              description: "By optimizing applications for the cloud environment, we enhance performance, responsiveness, and scalability."
            },
          ]
        },
        {
          heading: "Post-Migration Support:",
          listArray: [
            {
              heading: "Continuous Monitoring:",
              description: "We provide 24/7 monitoring post-migration, ensuring your AWS environment operates at peak efficiency and resolving any issues promptly."
            },
            {
              heading: "Ongoing Optimization:",
              description: "Our experts continuously optimize your AWS setup, maximizing cost-efficiency and performance as your business evolves."
            },
          ]
        },
        {
          heading: "Training and Knowledge Transfer:",
          listArray: [
            {
              heading: "Employee Training:",
              description: "We offer training sessions for your team, equipping them with the skills and knowledge to manage your AWS environment effectively."
            },
            {
              heading: "Knowledge Transfer:",
              description: "Our experts provide detailed documentation and knowledge transfer sessions, empowering your team to harness the power of AWS."
            },
          ]
        },
      ]

      return (
        <div
          className='w-full mx-auto py-[40px] bg-cover bg-no-repeat min-h-[90vh] max-h-fit bg-blend-normal'
          style={{
            // backgroundImage: `url('https://websiteimagessb.s3.us-west-2.amazonaws.com/c4.jfif')`
          }}>
    
          <div
            className='w-[90%] 1000px:w-[80%] flex flex-col items-center justify-center gap-[20px] mx-auto'>
    
            {/* <div
                className='text-[12px] font-bold text-primaryColor border border-primaryColor rounded-full px-[10px] py-[6px] w-fit'>
                    CLOUD MIGRATION
                </div> */}
    
            <p
              className='font-bold text-[26px] 700px:text-[32px] text-center'>
              Seamless AWS Cloud Migration
            </p>
    
            <p
              className='text-[18px] text-center'>
              We specialize in simplifying the complex journey to the cloud with our AWS Cloud Migration Services. Whether you're considering a full-scale migration or a hybrid cloud solution, we are your trusted partners in this transformative endeavor.
            </p>
    
            <div className='w-full grid grid-cols-1 800px:grid-cols-2 1200px:grid-cols-3 gap-8'>
    
              {
                gridArray.map((gridContent, index) => {
                  return (
                    <div 
                    className='w-full p-[20px] rounded-[8px] border-[2px] border-primaryColor cursor-pointer hover:shadow-bannerButton transition-all duration-500' 
                    key={index}>
    
                      <p className='text-[18px] font-bold'>
                        {gridContent.heading}
                      </p>
    
                      <ul className='text-[18px] list-disc pl-[20px]'>
    
                        {
                          gridContent.listArray.map((listContent) => {
                            return (
                              <li className='mt-[10px]' key={listContent}>
                                <span className='font-bold mr-[6px]'>
                                  {listContent.heading}
                                </span>
                                <span>
                                  {listContent.description}
                                </span>
                              </li>
                            )
                          })
                        }
    
                      </ul>
    
                    </div>
                  )
                })
              }
    
            </div>
    
          </div>
    
        </div>
      )
}

export default FifthComponent