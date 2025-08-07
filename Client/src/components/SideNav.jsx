import React from 'react'

const SideNav = () => {
    return (
        <div className='w-40 lg:w-70 shadow-xl px-2 lg:px-10 pt-8 pb-50 mt-18 flex-row justify-between bg-white' style={{ minHeight: '92vh', position: 'fixed', top: 0, left: 0 }}>
            <div>
                <div className='border-3 rounded-3xl overflow-hidden border-orange-500 '>
                    <img src="WhatsApp Image 2025-08-07 at 00.21.53_2ee06e89.jpg" alt="" />
                </div>
                <p className='mt-3 text-2xl'>Caroline Ajiboye</p>
                <p>Faith | Tech| Glow up</p>
            </div>
            <div className='mt-10'>
                <p>🏠  Home  </p>
                <p>📝  Journal </p>
                <p>✝️  Faith & God      </p>
                <p>💻  Dev Journey</p>
                <p>🌸  Glow Up  </p>
                <p>🙋🏽  About Me    </p>
            </div>
            <div className='mt-10'>
                <div className='bg-orange-500 p-5 mt-4'></div>
                <div className='bg-orange-500 p-5 mt-4'></div>
                <div className='bg-orange-500 p-5 mt-4'></div>
            </div>
        </div>
    )
}

export default SideNav