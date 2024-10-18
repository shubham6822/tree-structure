import { MinusCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

interface CardProps {
    name: string;
    role: string;
    job: string;
    child?: CardProps[];
}

export default function Card({ node }: { node: CardProps }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li key={node.name}>
            <span className="flex flex-col items-center gap-1.5 py-1 ">
                <div className='flex items-center gap-5 p-4 shadow-lg'>
                    <img
                        src="https://images.nightcafe.studio/jobs/dXlZNoYpDFJqQhUzK9fF/dXlZNoYpDFJqQhUzK9fF--4--6skz9.jpg?tr=w-1600,c-at_max"
                        className='w-10 h-10 rounded-full'
                    />
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-bold text-lg'>{node.name}</h1>
                        <p className='text-xs font-semibold text-slate-600'>{node.job}</p>
                        <h2 className='font-semibold text-sm'>{node.role}</h2>
                    </div>
                </div>
                {node.child && node.child.length > 0 && (
                    <button onClick={() => setIsOpen(!isOpen)} className="p-1 -m-1">
                        {
                            isOpen ?
                                <>
                                    <MinusCircleIcon
                                        className={`size-4 text-gray-500  ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </>
                                :
                                <>
                                    <div className="bg-gray-500 text-white size-4 text-sm rounded-full">
                                        {node.child.length}
                                    </div>
                                </>
                        }
                    </button>
                )}
            </span>

            {isOpen && (
                <div>
                    <ul className="flex justify-center">
                        {node.child?.map((node) => (
                            <Card node={node} key={node.name} />
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
}
