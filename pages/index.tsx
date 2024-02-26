import Head from 'next/head'
import Profile from '@/components/Profile'
import { Projects } from '@/components/Projects'
import MyNavbar from '@/components/MyNavbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Brett Carney | Full Stack Software Engineer with a Passion for Docker, .NET, and CICD</title>
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
            resumeLink="Resume_BrettCarney_2024.pdf"
          ></Profile>
        </div>

        <div className="h-screen">

          <section className="min-h-screen overflow-y-auto bg-blue-500">
            <h1 className="text-3xl font-bold text-white justify-center text-center m-10">Recent Commits</h1>
            <Projects></Projects>
          </section>

          {/* <section className="h-full bg-blue-400">
            <div className="flex items-center justify-center h-full">
              <div className="text-white text-center">
                <h1 className="text-3xl font-bold">Section 2</h1>
                  <Skills></Skills>
              </div>
            </div>
          </section>

          <section className="h-full bg-blue-300">
            <div className="flex items-center justify-center h-full">
              <div className="text-white text-center">
                <h1 className="text-3xl font-bold">Section 3</h1>
                <p className="text-lg">Some text about section 3</p>
              </div>
            </div>
          </section> */}

        </div>

      </main>
    </>
  )
}
