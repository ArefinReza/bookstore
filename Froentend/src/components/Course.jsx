import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards';
import {Link} from "react-router-dom"
function Course() {
    const filterData = list.filter((data) => data.category == "Free");
    return (
        <>
            <div className=' dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 top-0 left-0 right-0 z-50'>
                <div className='mt-28 text-center item-center justify-center'>
                    <h1 className='text-2xl font-semibold md:text-4xl'> We're Delighted to have you <span className='text-pink-500'>Here !)</span></h1>
                    <p className='mt-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odit tempora laborum magnam. Obcaecati itaque esse, quidem doloremque ex error illo eius id dolor iusto distinctio at dolorem ut molestias.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis enim magnam velit ad fugiat quod, fuga dolorem quo vero non.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores in id quidem similique cumque.
                    </p>
                    <Link to="/">
                    <button className='bg-pink-500 text-white hover:bg-pink-700 px-4 py-2 mt-6 rounded-md'>Back</button>
                    </Link>
                </div>
                <div>
                    <div className='grid md:grid-cols-4 gap-5 sm:grid-cols-1'>
                        {filterData.map((item) => (
                            <div key={item.id}>
                                <Cards item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course