import { RiDownload2Line, RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";

function Footer() {
    return (
        <div className="bg-orange-100 shadow">
            <div className="py-8 px-4 md:px-0 grid grid-cols md:grid-cols-4 gap-4 md:gap-8 max-w-[1300px] mx-auto">
                <div className="flex flex-col gap-4">
                    <div className="">
                        <Link to="/" className="font-bold">
                            #BOIARO
                        </Link>
                    </div>
                    <h4 className="font-bold text-md text-neutral-600">Download Our Apps</h4>
                    <ul className="flex items-center gap-3">
                        <li className="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded shadow cursor-pointer">
                            <RiDownload2Line className="text-xl" />
                            <div className="flex flex-col">
                                <p className="text-base text-neutral-700">Get it on</p>
                                <h5 className="text-sm font-bold text-neutral-800">Google play</h5>
                            </div>
                        </li>
                        <li className="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded shadow cursor-pointer">
                            <RiDownload2Line  className="text-xl"/>
                            <div className="flex flex-col">
                                <p className="text-base text-neutral-700">Get it on</p>
                                <h5 className="text-sm font-bold text-neutral-800">App Store</h5>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-md text-neutral-600">Quick Links</h4>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link className="text-neutral-700 hover:text-neutral-900">Recharge Balance</Link>
                        </li>
                        <li>
                            <Link className="text-neutral-700 hover:text-neutral-900">Help & Support</Link>
                        </li>
                        <li>
                            <Link className="text-neutral-700 hover:text-neutral-900">Publish on Boiaro</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-md text-neutral-600">Our Policy</h4>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link className="text-neutral-700 hover:text-neutral-900">Trams and Conditions</Link>
                        </li>
                        <li>
                            <Link className="text-neutral-700 hover:text-neutral-900">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link className="text-neutral-700 hover:text-neutral-900">Return and Refund Policy</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-md text-neutral-600">Contact Us</h4>
                    <form action="#">
                        <div className="flex w-full max-w-sm items-center gap-2">
                            <Input type="email" placeholder="Email" />
                            <Button type="submit" variant="outline" className="bg-orange-300 border-0 outline-0 cursor-pointer hover:bg-orange-400 transition-all ease-in-out duration-300 rounded ">
                                Subscribe
                            </Button>
                        </div>
                    </form>

                    <ul className="flex justify-start gap-3">
                        <li className="bg-orange-200 p-2 rounded hover:text-neutral-700">
                            <Link><RiFacebookFill className="text-neutral-600 hover:text-neutral-700" /></Link>
                        </li>
                        <li className="bg-orange-200 p-2 rounded hover:text-neutral-700">
                            <Link><RiInstagramLine className="text-neutral-600 hover:text-neutral-700" /></Link>
                        </li>
                        <li className="bg-orange-200 p-2 rounded hover:text-neutral-700">
                            <Link><RiTwitterXFill className="text-neutral-600 hover:text-neutral-700" /></Link>
                        </li>
                        <li className="bg-orange-200 p-2 rounded hover:text-neutral-700">
                            <Link><RiLinkedinFill className="text-neutral-600 hover:text-neutral-700" /></Link>
                        </li>
                    </ul>
                </div>
            </div>

            <Copyright />
        </div>
    )
}

export default Footer;