import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Link from 'next/link';

export default function Footer(){
    return(
        <div className=" w-full flex justify-between bg-[#323946] pt-[15px] pb-[15px] items-center pl-[80px] pr-[80px] max-[861px]:pl-[30px] max-[861px]:pr-[30px] max-[443px]:flex-col-reverse max-[443px]:items-end">
            <p className=' text-[20px] max-[637px]:text-[17px] max-[547px]:text-[15px] max-[499px]:text-[13px] max-[443px]:text-[15px] max-[443px]:text-center'>Copyright &copy; 2024 by Abdul Wasay | All Rights Reserved</p>
            <Link href="/#Home">
            <div className='bg-[#0ef]  shadow-[1px_1px_10px_#0ef] hover:shadow-none pt-[7px] pl-[10px] w-[40px] h-[40px] max-[443px]:mb-[15px]'>
            <ArrowUpwardIcon id='upButton' className='text-black text-[20px] '/>
            </div>
            </Link>
        </div>
    )
}