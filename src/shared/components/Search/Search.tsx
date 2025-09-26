import clsx from 'clsx';

import SearchIcon from 'public/icons/search.svg';

interface SearchProps {
    className?: string;
}

export const Search: React.FC<SearchProps> = ({ className }) => {
    return (
        <div className={clsx('relative', className)}>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <SearchIcon className="w-5 h-5 text-gray-400" />
            </div>

            <input
                type="text"
                placeholder="Search the post, people ..."
                className="w-full h-11 text-[12px] border border-[#CCCCCC] rounded-[14px] px-10 py-2 focus:outline-none placeholder:text-[#666666]"
            />
        </div>
    );
};
