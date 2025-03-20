"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export default function Main() {
    const allItems = [
        { icon: "🏠", label: "Home", description: "This is the main page" },
        { icon: "🥬", label: "About", description: "A leafy green used in salads and sandwiches." },
        { icon: "🧀", label: "Projects", description: "A dairy product made from curdled milk, delicious in many dishes!" },
        { icon: "🥕", label: "Contact", description: "A crunchy orange vegetable rich in vitamin A." },
        { icon: "🍌", label: "Daily Updates", description: "A sweet and potassium-rich fruit, great for energy." },
    ]

    // Show all tabs
    const tabs = allItems

    const [selectedTab, setSelectedTab] = useState(tabs[0])

    return (
        <div style={container}>
            <nav style={nav}>
                <ul style={tabsContainer}>
                    {tabs.map((item) => (
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
                        <h1 style={textStyle}>{selectedTab ? selectedTab.label : "😋"}</h1>
                        <p style={descriptionStyle}>{selectedTab ? selectedTab.description : ""}</p>
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    )
}

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
    overflowX: "auto", // Enables horizontal scrolling if there are too many tabs
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
    minWidth: "120px", // Ensures tabs are not too small
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
