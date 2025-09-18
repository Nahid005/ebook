import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhoneOutgoing } from "react-icons/hi";

function ContactInfo() {
    return (
        <div className="col-span-2">
            <div className="grid grid-cols-3 gap-4">
                <div className="grid grid-cols-6 items-center gap-3 bg-orange-100 px-4 py-8 rounded-md">
                    <HiOutlineLocationMarker className="text-5xl text-neutral-700 mt-1 col-span-1" />
                    <div className="col-span-5">
                        <h4 className="text-lg font-bold text-orange-400">Address</h4>
                        <address>
                            House 69/18, Palashpur, Titas Gas Road-5, P.O. Donia, Kadamtali, Dhaka, Bangladesh
                        </address>
                    </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 bg-orange-100 px-4 py-8 rounded-md">
                    <HiOutlinePhoneOutgoing className="text-5xl text-neutral-700 mt-1 col-span-1" />
                    <div className="col-span-5">
                        <h4 className="text-lg font-bold text-orange-400">Phone Number</h4>
                        <a href="tel:+8801732821824" className="text-neutral-700 font-medium hover:underline">
                        (+880) 173-2821824
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-6 items-center gap-3 bg-orange-100 px-4 py-8 rounded-md">
                    <HiOutlineMail className="text-5xl mt-1 text-neutral-700 col-span-1" />
                    <div className="col-span-5">
                        <h4 className="text-lg font-bold text-orange-400">Email Address</h4>
                        <a href="mailto:boiarobd@gmail.com" className="text-neutral-700 font-medium hover:underline">
                        boiarobd@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;