import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Create',
    path: '/create',
    icon: <IoIcons.IoMdCreate />,
    cName: 'nav-text'
  },
  {
    title: 'share',
    path: '/share',
    icon: <AiIcons.AiOutlineShareAlt />,
    cName: 'nav-text'
  }
]