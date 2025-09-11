import StatusWindow from './components/StatusWindow/StatusWindow';
import Avatar from './components/StatusWindow/Avatar';
import NavBar from './components/Nav/NavBar';


export default function App() {
 return (
    <main className="relative z-10 mx-auto max-w-[1980px] px-4 py-12">
      <div>
        <NavBar />
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
        <div>
          <StatusWindow />
        </div>
        <div className="justify-self-center">
          <Avatar className="w-[260px] sm:w-[320px] lg:w-[420px]" />
        </div>
      </div>
      <div className="bg-(--color-dark) h-screen text-white" >
        Projects Placeholder
      </div>
    </main>
  );
}

