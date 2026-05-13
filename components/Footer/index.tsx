
import Navigation from "@/components/Navigation";
function Footer(){

    return (
        <footer className="bg-black text-white px-6 py-6 mt-10">
            <div className="flex flex-col items-center gap-4">
                
                <p className="text-sm">© 2026 MySite</p>
                <Navigation />
            </div>
        </footer>
    )

}

export default Footer;