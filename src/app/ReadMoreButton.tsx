'use client'

import { useRouter } from "next/navigation";

type Props = {
    article: Article;
};

function ReadMoreButton({article}: Props) {
    const router = useRouter();
    const handleClick = () => {
        const queryString = Object.entries(article)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");
    }


  return (
    <button 
        onClick={handleClick}
        className="bg-[#FED440] h-10 rounded-b-lg dark:text-gray-900 hover:bg-[#FED440]">

    </button>
  )
}

export default ReadMoreButton;