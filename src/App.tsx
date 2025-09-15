import StatusWindow from './components/StatusWindow/StatusWindow';
import Avatar from './components/StatusWindow/Avatar';
import NavBar from './components/Nav/NavBar';


export default function App() {
 return (
  <>
      <NavBar />
 
      <section id="about" className="container-90 pt-24 scroll-mt-24">
        <div className="grid items-start gap-10 xl:grid-cols-2">
          <div>
            <StatusWindow />
          </div>
        <div className="justify-self-center">
          <Avatar className="w-[260px] sm:w-[320px] lg:w-[420px]" />
        </div>
        </div>
      </section>

            <section id="projects" className="container-90 py-16 scroll-mt-24">
        <div className="bg-dark/80 h-[60vh] text-white">Projects Placeholder</div>
      </section>
  </>
  );
}

