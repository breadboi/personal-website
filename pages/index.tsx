import Head from 'next/head'
import { Inter } from '@next/font/google'
import Profile from '@/components/Header'
import { Projects } from '@/components/Projects'
import MyNavbar from '@/components/MyNavbar'
import Highlights from '@/components/Highlights'

export default function Home() {
  return (
    <>
      <Head>
        <title>Brett Carney | Full Stack Software Engineer with a Passion for Docker and CICD</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MyNavbar></MyNavbar>
        <div className="m-10">
          <Profile name="Brett Carney"
            title="Software Engineer"
            picture="https://avatars.githubusercontent.com/u/32111055?v=4"
            resumeLink="Resume_BrettCarney_2022.pdf"
          ></Profile>
        </div>

        <div className="h-screen">

          <section className="bg-blue-500">
            <h1 className="text-3xl font-bold text-white justify-center text-center m-10 pt-10">Projects</h1>
            <Projects></Projects>
          </section>

          <section className="h-full bg-blue-400">
            <div className="text-white text-center">
              <h1 className="text-3xl font-bold text-white justify-center text-center pt-10">Highlights</h1>
              <Highlights></Highlights>
            </div>
          </section>

          <section className="h-full bg-blue-300">
            <div className="flex items-center justify-center h-full">
              <div className="text-white text-center">
                <h1 className="text-3xl font-bold text-white justify-center text-center">Section 3</h1>

              </div>
            </div>
          </section>

        </div>

      </main>
    </>
  )
}
