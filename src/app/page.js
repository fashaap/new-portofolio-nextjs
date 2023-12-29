"use client"

import { ButtonComp } from "@/components/ButtonComp"
import { ButtonComp2 } from "@/components/ButtonComp2"

export default function Home() {

  const dataSkill = [
    {
      name: "React js",
      icon: "/reactJs.svg",
      desc: 'React.js adalah perpustakaan JavaScript untuk membangun antarmuka pengguna interaktif dan dinamis'
    },
    {
      name: 'Vite + React js',
      icon: "/vite.svg",
      desc: 'Vite.js adalah sebuah bundler (paket pembuat bundel) yang dikembangkan oleh Evan You, pencipta framework JavaScript populer, Vue.js.'
    },
    {
      name: 'Next Js',
      icon: "/next.svg",
      desc: 'Next.js adalah sebuah framework React yang digunakan untuk membangun aplikasi web modern. '
    },
    {
      name: 'Tailwind',
      icon: "/tailwind.svg",
      desc: 'Tailwind CSS adalah sebuah kerangka kerja (framework) CSS yang memungkinkan pengembang untuk merancang antarmuka pengguna dengan cepat dan konsisten. '
    },

    {
      name: 'Figma',
      icon: "/figma.svg",
      desc: 'Figma adalah sebuah platform desain berbasis web yang memungkinkan tim pengembangan untuk berkolaborasi dalam proses perancangan dan prototyping aplikasi. '
    }
  ]

  return (
    <>
      <section className=" pt-[50px] mb-[130px] mt-9 text-white" >
        <main className="container max-w-3xl">
          <span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black  sm:mb-3">Hi, im Fasha </h1>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold mb-5 bg-gradient-to-r from-orange-400 to-rose-800 bg-clip-text text-transparent">Front end developer</h2>
            <p className="text-sm sm:text-xl w-full font-medium">I'm a web artisan who loves the art of designing layouts and ensuring that users can engage optimally through a responsive interface.</p>
          </span>
          <br />
          <br />
          <main className="flex gap-5 justify-center items-center ">
            <ButtonComp2 />
            <ButtonComp />
          </main>
        </main>
      </section>
      <section className=" text-white  backdrop-blur-lg pt-8 pb-8 border-t border-b mb-[100px]">

        <main className="text-center mb-3 ">
          <h1 className="text-3xl sm:text-6xl font-extrabold mb-2">Skill</h1>
          <p className="text-sm sm:text-xl">List of the technologies & tools that I've use</p>
        </main>

        <article className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
          {dataSkill.map((item, index) => {
            return (
              <main key={index} class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow  ">

                <img className="w-7 h-7 md:w-10 md:h-10" src={item.icon} alt={item.name}>
                </img>
                <h1 class="mb-2 text-xl md:text-1xl  font-bold tracking-tight text-gray-900 ">{item.name}</h1>
                <p class="font-normal text-gray-700 text-between  line-clamp-3 ">{item.desc}</p>
              </main>
            )
          })}
        </article>
      </section>
      <section className="mb-10 text-white">
        <main className="text-center mb-3 ">
          <h1 className="text-3xl sm:text-6xl font-extrabold mb-2">Project</h1>
          <p className="text-sm sm:text-xl">What i build</p>
        </main>

        <article className="container mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  ">
          <main>
            <div>

              <img className="w-full h-full rounded-xl" src="/web-osis.png" alt="web osis">
              </img>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2 mt-2">Osis sma pgri cicalengka</h1>
              <p className="text-gray-200 text-[14px]">build a school organization website using Vite JS application directory</p>
            </div>
          </main>
        </article>
      </section>
    </>
  )
}


