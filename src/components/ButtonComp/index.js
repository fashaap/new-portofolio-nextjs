"use client"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { UserRound ,ArrowUpRight } from 'lucide-react';

export const ButtonComp = () => {

  const buttonData = [
    {
      name: 'Instagram',
      link: '#',
      icon: "/icons/instagram.svg"
    },
    {
      name: 'Twitter',
      link: '#',
      icon: "/icons/twitter.svg"
    },
    {
      name: 'Discord',
      link: '#',
      icon: "/icons/discord.svg"
    },
    {
      name: 'Email',
      link: '#',
      icon: "/icons/email.svg"
    }
  ]

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="bg-[#12122e] hover:border-white  font-semibold hover:text-white py-2 px-4 border border-[#555d7a] hover:border-transparent rounded-full">
          <span className="flex justify-center items-center">
            <UserRound className="h-5 w-5" />
            <span className="ml-2">Contact Me</span>
          </span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Contact Me</AlertDialogTitle>
          <AlertDialogDescription>
            {buttonData.map((item, index) => {
              return (
                <button key={index} href={item.link} type="button" class="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-300  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  <span className="flex justify-between items-center ">
                    <span className="h-5 w-5 ">
                    {item.icon}
                    </span>
                    <span className="ml-2">{item.name}</span>
                    <ArrowUpRight />
                  </span>
                </button>

              )
            })}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="hover:bg-gray-300 ">Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
