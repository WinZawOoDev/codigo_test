'use client';

import { useGetPlyersQuery } from '@/services/ballDontlieAPi';
import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import PlayerList from './PlayerList';
import { Loading, MoreLoader } from '../Utils'


export default function Players() {

    const [pageNumb, setPageNumb] = useState(1);
    const { data: players, isLoading } = useGetPlyersQuery({ per_page: 10, page: pageNumb })

    if (isLoading) return <Loading />

    return (
        <div id='scrollableDiv' className='relative w-full h-[46em] overflow-auto'>
            <InfiniteScroll
                dataLength={players?.data.length!}
                next={() => {
                    setPageNumb(prev => prev + 1)
                }}
                hasMore={true}
                loader={<MoreLoader />}
                scrollableTarget="scrollableDiv"
            >
                <PlayerList players={players?.data!} />
            </InfiniteScroll>
        </div>
    )
}







