import React from 'react'

function Cards({item}) {
    console.log(item)
    return (
        <>
            <div className='mt-5 my-3'>
                <div className=" dark:bg-slate-800 dark:text-white  card w-92  p-3 bg-base-100 shadow-xl hover:scale-105 duration-300">
                    <figure><img src={item.image} alt="Book" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{item.price}</div>
                            <div className="cusros-pointer hover:text-white hover:p-2 hover:bg-pink-500 p-3 rounded-full ">Buy now</div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards