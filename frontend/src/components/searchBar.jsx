import { Button, Input } from '@nextui-org/react'
import { SearchIcon } from '@/icons/searchIcon';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    
    const onSubmit = () => {
        router.push(`/szukaj/${search}/okazje`)
        console.log(search)
    }

    return (
        <form className='sm:w-[350px] w-[270px] md:mr-[2rem] lg:mr-[1rem] xl:mr-0'>
            <Input
                classNames={{
                    base: "max-w-full sm:max-w-[17rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small text-black",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Szukaj..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                endContent={
                    <Button isDisabled={search == ""} onClick={onSubmit} className='bg-custom-green-100 hover:bg-[#55cf9e] transition-colors mr-[-0.8rem] sm:mr-[-4.6rem] sm:w-[50px] disabled:bg-slate-400 disabled:opacity-100'>Szukaj</Button>
                }
            />

        </form>
    )
}

export default SearchBar