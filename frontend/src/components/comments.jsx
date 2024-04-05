import React from 'react'
import Comment from '@/components/comment';
import { getComments } from '@/app/api/fetchComments';
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonComment from './skeletonComment';

const Comments = ({occasionId}) => {
    const {data, fetchNextPage, hasNextPage, isFetching, isLoading} = getComments(occasionId);
  
    const comments = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.data]
    }, [])

    return ( 
        <InfiniteScroll
            dataLength={comments ? comments.length : 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={<SkeletonComment cards={1}/>}
        >
            {isLoading && <SkeletonComment cards={1}/>}
            <>
                {comments && comments.map((comment, index) => (
                    <Comment 
                        key={comment.id}
                        commentId={comment.id}
                        content={comment.content}
                        createdAt={comment.createdAt}
                        userName={comment.user.name}
                        userId={comment.user.id}
                    />
                ))}
            </>
        </InfiniteScroll>
  )
}

export default Comments