import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

const FifthComponent = () => {
    const expertiseArray = [
        "Migration Consulting Competency",
        "Premier Tier Services",
        "DevOps Consulting Competency",
        "AWS Managed Service Provider",
        "Microsoft Workloads Consulting Competency",
        "AWS Public Sector Partner",
        "Data & Analytics Consulting Competency",
        "AWS Solution Provider Program",
        "APN Immersion Days",
        "AWS Well-Architected Partner Program",
        "Amazon Redshift Delivery",
        "Amazon EC2 for Windows Server Delivery",
        "Amazon EMR Delivery",
        "Amazon OpenSearch Delivery",
        "Amazon API Gateway Delivery",
        "AWS Control Tower Delivery",
        "AWS Lambda Delivery",
        "AWS Glue Delivery",
    ]

    return (
        <div className='w-full py-[40px] flex items-center justify-center gap-[20px] flex-col 500px:flex-row bg-gray-200 px-[20px]'>

            <div>

                <p
                    className='text-primaryColor border border-primaryColor font-bold rounded-full px-[10px] bg-red-100 w-fit'>
                    AWS COMPETENCIES & PROGRAMS
                </p>

                <p
                    className='text-[20px] 700px:text-[40px] font-[600]'>
                    Our Expertise Validated by AWS
                </p>

                <div className='grid grid-cols-1 700px:grid-cols-2 gap-2'>

                    {
                        expertiseArray.map((expertise, index) => {
                            return (
                                <div
                                    className='flex items-center gap-[10px]'
                                    key={index}>
                                    <CheckIcon
                                        className='text-primaryColor'
                                        style={{
                                            accentColor: '#ec1b24'
                                        }} />
                                    <p className='text-[18px]'>
                                        {expertise}
                                    </p>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

            <div>

                <div 
                className='w-[260px] h-[260px] bg-primaryColor flex items-center justify-center'
                style={{
                    borderRadius: '63% 37% 67% 33% / 43% 62% 38% 57% '
                }}>


                <img
                    src="https://websiteimagessb.s3.us-west-2.amazonaws.com/aws_batch.jpg"
                    alt=""
                    className={`w-[100px] 500px:w-[120px]`} />

                    </div>
            </div>

        </div>
    )
}

export default FifthComponent