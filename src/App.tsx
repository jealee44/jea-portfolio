import StatusWindow from './components/StatusWindow/StatusWindow';
import Avatar from './components/StatusWindow/Avatar';
import NavBar from './components/Nav/NavBar';

export default function App() {
    return (
        <>
            <NavBar />
            
            <section 
                id="about"
                className="container-90 pt-48 lg:pt-60 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            >
                <div className="w-full lg:flex-1 flex items-center justify-center">
                    <div className="w-full max-w-[1280px]">
                        <StatusWindow />
                    </div>
                </div>

                <div className="flex items-center justify-center lg:flex-shrink-0">
                    <Avatar className="w-[260px] sm:w-[320px] lg:w-[380px] xl:w-[420px]" />
                </div>
            </section>

            <section id="projects" className="container-90 py-24 scroll-mt-20">
                <div className="bg-[var(--color-dark)]/80 h-[60vh] text-white rounded-lg p-8">
                    Projects Placeholder
                </div>
            </section>
        </>
    );
}