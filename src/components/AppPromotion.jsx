import ExploreApps from "./ExploreApps";

function AppPromotion() {
    return (
        <div className="mb-10 relative">
            <img className="w-full max-w-full rounded-xl backdrop-blur-sm shadow" src="/assets/appspromotion.png" alt="" />

            <div className="bg-orange-100/50 absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center gap-5">
                <h4 className="text-3xl font-bold text-neutral-600 text-center hidden md:block">Get Our Apps for the Best E-Book <br /> Reading Experience</h4>
                <ExploreApps />
            </div>
        
        </div>
    )
}

export default AppPromotion;