'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchBox() {
    const [input, setInput] = useState ('');
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!input) return;

        router.push(`/search?term=${input}`);
    };

  return (
    <form 
        onSubmit={handleSearch}
        className="max-w-6xl mx-auto 
        justify-between items-center px-5">
        <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Keywords..." 
            className="w-full h-14 rounded-sm 
            placeholder-[#E5E6DC] text-[#D4D4C7]
            outline-none flex-1 bg-transparent
            dark:text-[#C7C7BA]" 
            />
        
        
        
        <button 
            type="submit" 
            disabled={!input}
            className='text-[#FED440] disabled:text-[#D4D4C7]'>Search</button>
    </form>
  )
}

export default SearchBox