import Tasklist from "./components/Tasklist";
import Taskform from "./components/Taskform";

export function App() {
    return (
        <main className="bg-zinc-900 h-screen">
            <div className="container mx-auto p-10">
            <Taskform />
            <Tasklist />
            </div>
        </main>
    );
}
