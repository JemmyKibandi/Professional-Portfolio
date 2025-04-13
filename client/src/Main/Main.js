"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

// Import your extra content components
import HomeContent from "./Components/Home/Home"
import AboutContent from "./Components/About/About"
import ProjectsContent from "./Components/Projects/Projects"
import ContactContent from "./Components/Contact/Contact"
import UpdatesContent from "./Components/Updates/Updates"

export default function Main() {
    const allItems = [
        { icon: "🏠", label: "Home", key: "home" },
        { icon: "🤔", label: "About", key: "about" },
        { icon: "⚒️", label: "Projects", key: "projects" },
        { icon: "🤳", label: "Contact", key: "contact" },
        { icon: "📰", label: "Daily Updates", key: "updates" },
    ]

    const contentMap = {
        home: {
            title: "Home",
            description: "Welcome to the main page!",
            extraContent: <HomeContent />,
        },
        about: {
            title: "About",
            description: "A leafy green used in salads and sandwiches.",
            extraContent: <AboutContent />,
        },
        projects: {
            title: "Projects",
            description: "A dairy product made from curdled milk.",
            extraContent: <ProjectsContent />,
        },
        contact: {
            title: "Contact",
            description: "A crunchy orange vegetable rich in vitamin A.",
            extraContent: <ContactContent />,
        },
        updates: {
            title: "Daily Updates",
            description: "A sweet and potassium-rich fruit, great for energy.",
            extraContent: <UpdatesContent />,
        },
    }

    const [selectedTab, setSelectedTab] = useState(allItems[0])

    return (
        <div style={container}>
            <nav style={nav}>
                <ul style={tabsContainer}>
                    {allItems.map((item) => (
                        <motion.li
                            key={item.label}
                            initial={false}
                            animate={{
                                backgroundColor: item === selectedTab ? "#eee" : "#eee0",
                            }}
                            style={tab}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div
                                    style={underline}
                                    layoutId="underline"
                                    id="underline"
                                />
                            ) : null}
                        </motion.li>
                    ))}
                </ul>
            </nav>
            <main style={contentContainer}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={textContainer}
                    >
                        {selectedTab && (
                            <>
                                <h1 style={textStyle}>{contentMap[selectedTab.key]?.title}</h1>
                                <p style={descriptionStyle}>{contentMap[selectedTab.key]?.description}</p>
                                {contentMap[selectedTab.key]?.extraContent}
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}

// --- Styles ---
const container = {
    width: "100vw",
    height: "100vh",
    background: "white",
    display: "flex",
    flexDirection: "column",
}

const nav = {
    background: "#fdfdfd",
    padding: "5px 5px 0",
    borderBottom: "1px solid #eeeeee",
    height: "auto",
    overflowX: "auto",
    whiteSpace: "nowrap",
}

const tabsStyles = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontWeight: 500,
    fontSize: 16,
}

const tabsContainer = {
    ...tabsStyles,
    display: "flex",
    width: "100%",
    overflowX: "auto",
    paddingBottom: "5px",
}

const tab = {
    ...tabsStyles,
    borderRadius: 5,
    padding: "15px 20px",
    position: "relative",
    background: "white",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minWidth: "120px",
    userSelect: "none",
    color: "#0f1115",
    margin: "0 5px",
}

const underline = {
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    height: 3,
    background: "var(--accent)",
}

const contentContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    textAlign: "center",
    padding: "20px",
}

const textContainer = {
    maxWidth: "600px",
}

const textStyle = {
    fontSize: "3rem",
    margin: "0",
}

const descriptionStyle = {
    fontSize: "1.5rem",
    color: "#555",
    marginTop: "10px",
}
