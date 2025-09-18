import ContactForm from "@/features/contactus/ContactForm";
import ContactInfo from "@/features/contactus/ContactInfo";
import ContactMap from "@/features/contactus/ContactMap";

function Contactus() {
    return (
        <div className="grid grid-cols-2 gap-4 my-8">
            <ContactForm />
            <ContactMap />
            <ContactInfo />
        </div>
    )
}

export default Contactus;