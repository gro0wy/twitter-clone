import React from 'react'
import  { ReplyIcon, ReTweetIcon, LikeIcon, ShareIcon } from '../icons/Icon'

const FeedItem = ({avatar, content, displayName, timestamp, username, image}) => {
    return (
        <article className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
            <img src={avatar} alt="Profile" className="w-11 h-11 rounded-full"></img>
            <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold">{displayName}</h4>
                    <span className="ml-2 text-gray-dark">{username}</span>
                    <div className="mx-2 bg-gray-dark h1- w-1 border rounded-full"></div>
                    <span className="text-gray-dark">
                        {timestamp?.toDate().toLocaleTimeString("tr-TR")}
                    </span>
                </div>
                <p className="mt-2 text-gray-900 text-sm">{content}</p>
                {image && <img src={image} className="my-2 rounded-xl" />}
                <ul className="flex justify-between max-w-md">
                    <li className="flex items-center space-x-3 group text-sm text-gray-dark">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                            <ReplyIcon />
                        </div>
                        <span className="group-hover:text-primary-base">2</span>
                    </li>
                    <li className="flex items-center space-x-3 group text-sm text-gray-dark">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                            <ReTweetIcon />
                        </div>
                        <span className="group-hover:text-primary-base">5</span>
                    </li>
                    <li className="flex items-center space-x-3 group text-sm text-gray-dark">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                            <LikeIcon />
                        </div>
                        <span className="group-hover:text-primary-base">14</span>
                    </li>
                    <li className="flex items-center space-x-3 group text-sm text-gray-dark">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light">
                            <ShareIcon />
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default FeedItem
