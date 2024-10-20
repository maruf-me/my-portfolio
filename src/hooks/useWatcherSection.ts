"use client";
import { useEffect, useState } from "react";

interface Section {
  id: string;
  name: string;
  icon?: string;
}

export const useWatcherSection = ({
  sections,
  defaultSection,
}: {
  sections: Section[];
  defaultSection: string;
}) => {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  // Scroll handler to update active section based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (
          scrollPosition >= offsetTop - 50 &&
          scrollPosition < offsetBottom - 50
        ) {
          setActiveSection(section.id);
        }
      }
    });
  };

  // Effect to listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle click to smooth scroll to section and set the active link
  const activeSectionById = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop, //- 50 // Adjust scroll position with some offset
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return { activeSection, activeSectionById };
};
