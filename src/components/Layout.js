import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

export default function Layout({ children }) {
  const { searchValue, searchValueOnChange } = useContext(NotesContext);
  return (
    <>
      <nav className="flex flex-col items-center justify-center py-4 text-white bg-[#282829]">
        <h1 className="text-2xl font-bold">React Notes App</h1>
        <form className="my-1">
          <input
            onChange={(e) => searchValueOnChange(e)}
            type="text"
            value={searchValue}
            placeholder="Search..."
            className="p-1 text-center rounded focus:border-2 border-slate-400 text-black"
          />
        </form>
      </nav>
      <main className="flex flex-col items-center justify-center w-full h-[84vh] bg-[#f5f5f7]">
        {children}
      </main>
      <footer className="flex flex-col items-center justify-center py-3 bg-[#282829] text-white">
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/ishaan-tyagi-998228146/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin" />
          </a>
          <a
            href="https://www.github.com/IshaanTyagi"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github" />
          </a>
          <a
            href="mailto:tyagiishaan121@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-envelope-fill" />
          </a>
        </div>
      </footer>
    </>
  );
}
