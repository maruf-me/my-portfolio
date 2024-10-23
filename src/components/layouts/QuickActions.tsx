'use client'
import { menuList, viewResume } from "@/data"
import { useWatcherSection } from "@/hooks/useWatcherSection"
import { CodeXml, Mail, Settings } from "lucide-react"
import Link from "next/link"
import Button from "../ui/Button"

const QuickActions = () => {
  const { activeSectionById } = useWatcherSection({
    sections: menuList,
    defaultSection: menuList[0].id,
  })

  return (
    <section
      className="
      w-[40px] bg-white/20 rounded-r-full text-secondary-100
      fixed top-1/3 md:top-1/2 transform -translate-y-1/2 left-0 xl:left-[29rem]  z-30 duration-300"
    >
      <div className="relative group py-space8 px-space4 cursor-pointer rounded-r-full">
        <Settings className="animate-rotate" />

        <div className="absolute hidden group-hover:block left-0 top-1/2 transform -translate-y-1/2 z-20 h-[14rem] w-[9rem] rounded-r-full"></div>

        {/* Contact  */}
        <div title="Contact" className="rotate-0 group-hover:rotate-[360deg] duration-500
        absolute top-1/2 transform -translate-y-1/2 group-hover:-translate-y-[170%] -left-[calc(150%+40px)] group-hover:left-4 z-20 cursor-pointer"
        >
          <Button className="h-[4rem] w-[4rem] shadow-none !rounded-full overflow-hidden" onClick={() => activeSectionById('contact')}>
            <Mail />
          </Button>
        </div>

        {/* Resume  */}
        <div title="Resume" className="rotate-0 group-hover:rotate-[360deg] duration-500
        absolute top-1/2 transform -translate-y-1/2 -left-[calc(150%+40px)] group-hover:left-[calc(100%+8px)] z-20 cursor-pointer"
        >
          <Link href={viewResume} target="_blank" >
            <Button className="h-[4rem] w-[4rem] shadow-none !rounded-full overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-user"><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M15 18a3 3 0 1 0-6 0" /><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><circle cx="12" cy="13" r="2" /></svg>
            </Button>
          </Link>
        </div>

        {/* Components  */}
        <div title="Components" className="rotate-0 group-hover:rotate-[360deg] duration-500
        absolute top-1/2 transform -translate-y-1/2 group-hover:translate-y-[70%] -left-[calc(150%+40px)] group-hover:left-4 z-20 cursor-pointer"
        >
          <Button className="h-[4rem] w-[4rem] shadow-none !rounded-full overflow-hidden" onClick={() => activeSectionById('components')}>
            <CodeXml />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default QuickActions
