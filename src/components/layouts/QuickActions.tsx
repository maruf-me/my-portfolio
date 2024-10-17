'use client'
import { CircleUserRound, Download, FolderOpenDot, Waypoints } from "lucide-react"
import Button from "../ui/Button"

const QuickActions = () => {
  return (
    <section
      className="
      w-[40px] bg-white/20 rounded-r-full text-secondary-100
      fixed top-1/2 transform -translate-y-1/2 left-0 xl:left-[29rem]  z-30 duration-300"
    >
      <div className="relative group py-space8 px-space4 cursor-pointer">
        <Waypoints className="anim-rotate" />

        <div className="absolute hidden group-hover:block left-0 top-1/2 transform -translate-y-1/2 z-20 h-[14rem] w-[9rem] rounded-r-full"></div>

        <div title="Resume" className="rotate-0 group-hover:rotate-[360deg] duration-500
        absolute top-1/2 transform -translate-y-1/2 -left-[calc(150%+40px)] group-hover:left-[calc(100%+8px)] z-20 cursor-pointer"
        >
          <Button className="h-[4rem] w-[4rem] shadow-none !rounded-full overflow-hidden">
            <Download />
          </Button>
        </div>

        {/* Top button  */}
        <div title="Contact" className="rotate-0 group-hover:rotate-[360deg] duration-500
        absolute top-1/2 transform -translate-y-1/2 group-hover:-translate-y-[170%] -left-[calc(150%+40px)] group-hover:left-4 z-20 cursor-pointer"
        >
          <Button className="h-[4rem] w-[4rem] shadow-none !rounded-full overflow-hidden">
            <CircleUserRound />
          </Button>
        </div>

        {/* Bottom button  */}
        <div title="Projects" className="rotate-0 group-hover:rotate-[360deg] duration-500
        absolute top-1/2 transform -translate-y-1/2 group-hover:translate-y-[70%] -left-[calc(150%+40px)] group-hover:left-4 z-20 cursor-pointer"
        >
          <Button className="h-[4rem] w-[4rem] shadow-none !rounded-full overflow-hidden">
            <FolderOpenDot />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default QuickActions
