import StatusWindow from './components/StatusWindow/StatusWindow'
import Avatar from './components/StatusWindow/Avatar'
import NavBar from './components/Nav/NavBar'
import QuestLog from './components/Projects/QuestLog'

export default function App() {
  return (
    <>
      <NavBar />

      <section
        id="about"
        className="container-90 flex flex-col items-center gap-8 pt-48 lg:flex-row lg:gap-12 lg:pt-60"
      >
        <div className="flex w-full items-center justify-center lg:flex-1">
          <div className="w-full max-w-[1280px]">
            <StatusWindow />
          </div>
        </div>

        <div className="flex items-center justify-center lg:flex-shrink-0">
          <Avatar className="w-[260px] sm:w-[320px] lg:w-[380px] xl:w-[420px]" />
        </div>
      </section>
      <QuestLog />
    </>
  )
}
