import React from 'react'
import TopNews from './TopNews'

import LatestNews from './LatestNews'
import FrontNews from './FrontNews'

export default function MainContent() {
    return (
        <div className='bg-white dark:bg-gray-800'>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative dark:bg-gray-700">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
                    <TopNews />
                    <LatestNews />
                    <FrontNews />
                </div>
            </div>
        </div>
    )
}
