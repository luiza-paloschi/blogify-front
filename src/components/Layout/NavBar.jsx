import { useContext, useState } from 'react';
import logo from '../../assets/quill.svg'
import UserContext from '../../contexts/UserContext';

export default function NavBar(){
    const [navOpen, setNavOpen] = useState(false);
	const { userData } = useContext(UserContext);

    return (
       <>
        <nav className="relative px-5 py-4 flex justify-between items-center bg-white h-20">
		<a className="text-3xl font-bold leading-none" href="/">
			<img className='h-10' src={logo} alt="logo"></img>
		</a>
		<div className="lg:hidden">
			<button onClick={()=> setNavOpen(!navOpen)} className="navbar-burger flex items-center text-black p-3">
				<svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
		</div>
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
			<li><a className="text-base text-black hover:text-gray-500 font-open-sans" href="/">HOME</a></li>
			<li className="text-gray-300"></li>
			<li><a className="text-base text-black hover:text-gray-500 font-open-sans" href="#">ALL</a></li>
            <li className="text-gray-300"></li>
			<li><a className="text-base text-black hover:text-gray-500 font-open-sans" href="#">CATEGORIES</a></li>
		</ul>
		{userData?.user ? <p className='hidden lg:inline-block lg:ml-auto text-base text-black text-bold font-lora'>{userData.user.username}</p> : 
			<>
				<a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 hover:text-beige-600 hover:border-beige-600 text-sm text-beige-700 font-bold transition duration-200 border-solid border border-beige-700" href="/sign-in">SIGN IN</a>
		<a className="hidden lg:inline-block py-2 px-6 bg-beige-700 hover:bg-beige-600 text-sm text-white font-bold transition duration-200" href="/sign-up">SIGN-UP</a>
			</>
		}
		
	</nav>
	<div className={`navbar-menu relative z-50 ${navOpen ? '' : 'hidden'}`}>
		<div onClick={()=> setNavOpen(!navOpen)} className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav className={"fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"}>
			<div className="flex items-center mb-8">
				<a className="mr-auto text-3xl font-bold leading-none" href="#">
                    
				</a>
				<button onClick={()=> setNavOpen(!navOpen)} className="navbar-close">
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
					<a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
					<a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
				</div>
				<p className="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2023</span>
				</p>
			</div>
		</nav>
	</div>
       </>


    );
}