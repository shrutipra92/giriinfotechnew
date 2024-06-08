import React from 'react'

const ThirdComponent = () => {

  const gridArray = [
    {
      heading: "Infrastructure Optimization:",
      listArray: [
        {
          heading: "Scalability:",
          description: "We ensure your AWS infrastructure scales seamlessly to meet growing demands, optimizing resources without unnecessary costs."
        },
        {
          heading: "Cost Efficiency:",
          description: "Our experts analyze your usage patterns, implementing cost-effective solutions to maximize ROI and minimize expenditure."
        },
      ]
    },
    {
      heading: "Security and Compliance:",
      listArray: [
        {
          heading: "Data Security:",
          description: "We implement robust security measures, including encryption, access control, and threat detection, to safeguard your sensitive data."
        },
        {
          heading: "Compliance Management:",
          description: "Stay compliant with industry regulations and standards. We ensure your AWS environment meets all necessary compliance requirements."
        },
      ]
    },
    {
      heading: "Performance Optimization:",
      listArray: [
        {
          heading: "Application Performance:",
          description: "We optimize your applications for AWS, enhancing their performance, responsiveness, and user experience."
        },
        {
          heading: "Resource Fine-Tuning:",
          description: "Through constant analysis, we fine-tune your AWS resources, ensuring optimal performance without wastage."
        },
      ]
    },
    {
      heading: "Backup and Disaster Recovery:",
      listArray: [
        {
          heading: "Data Backup:",
          description: "We set up automated, reliable backup solutions to protect your data, ensuring quick recovery in case of unexpected incidents."
        },
        {
          heading: "Disaster Recovery:",
          description: "Our disaster recovery plans guarantee minimal downtime, keeping your business operational even in the face of disasters."
        },
      ]
    },
  ]

  return (
    <div
      className='w-full mx-auto py-[40px] bg-cover bg-no-repeat min-h-[90vh] max-h-fit bg-blend-normal'
      style={{
        // backgroundImage: `url('https://websiteimagessb.s3.us-west-2.amazonaws.com/c2.jfif')`
      }}>

      <div
        className='w-[90%] 1000px:w-[80%] flex flex-col items-center justify-center gap-[20px] mx-auto'>

        {/* <div
            className='text-[12px] font-bold text-primaryColor border border-primaryColor rounded-full px-[10px] py-[6px] w-fit'>
                CLOUD MIGRATION
            </div> */}

        <p
          className='font-bold text-[26px] 700px:text-[32px] text-center'>
          AWS Cloud Managed Services Partner
        </p>

        <p
          className='text-[18px] text-center'>
          We understand that managing AWS Cloud infrastructure requires expertise, dedication, and a proactive approach. As your trusted partner, we offer comprehensive AWS Cloud Managed Services designed to optimize your cloud environment, enhance security, and maximize efficiency.
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

export default ThirdComponent