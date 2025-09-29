"use client"

import type React from "react"

import { useRef, useEffect, useState, useMemo, useCallback } from "react"

interface Favicon {
  readonly name: string
  readonly url: string
}

interface ColorMapping {
  readonly word: string
  readonly color: string
}

interface LineSegment {
  readonly color: string
  readonly left: number
  readonly width: number
  readonly height: number
}

const FAVICON_DATA: readonly Favicon[] = [
  { name: "Google", url: "https://www.google.com/favicon.ico" },
  { name: "GitHub", url: "https://github.com/favicon.ico" },
  { name: "Twitter", url: "https://twitter.com/favicon.ico" },
  { name: "Facebook", url: "https://facebook.com/favicon.ico" },
  { name: "YouTube", url: "https://youtube.com/favicon.ico" },
  { name: "LinkedIn", url: "https://linkedin.com/favicon.ico" },
  { name: "Instagram", url: "https://instagram.com/favicon.ico" },
  { name: "Reddit", url: "https://reddit.com/favicon.ico" },
  { name: "Amazon", url: "https://amazon.com/favicon.ico" },
  { name: "Netflix", url: "https://netflix.com/favicon.ico" },
  { name: "Spotify", url: "https://spotify.com/favicon.ico" },
  { name: "Apple", url: "https://apple.com/favicon.ico" },
  { name: "Microsoft", url: "https://microsoft.com/favicon.ico" },
  { name: "Stack Overflow", url: "https://stackoverflow.com/favicon.ico" },
  { name: "Medium", url: "https://medium.com/favicon.ico" },
  { name: "Vercel", url: "https://vercel.com/favicon.ico" },
  { name: "Discord", url: "https://discord.com/favicon.ico" },
  { name: "Slack", url: "https://slack.com/favicon.ico" },
  { name: "Zoom", url: "https://zoom.us/favicon.ico" },
  { name: "Dropbox", url: "https://dropbox.com/favicon.ico" },
  { name: "Notion", url: "https://notion.so/favicon.ico" },
  { name: "Figma", url: "https://figma.com/favicon.ico" },
  { name: "Adobe", url: "https://adobe.com/favicon.ico" },
  { name: "Canva", url: "https://canva.com/favicon.ico" },
  { name: "Trello", url: "https://trello.com/favicon.ico" },
  { name: "Asana", url: "https://asana.com/favicon.ico" },
  { name: "Shopify", url: "https://shopify.com/favicon.ico" },
  { name: "Stripe", url: "https://stripe.com/favicon.ico" },
  { name: "PayPal", url: "https://paypal.com/favicon.ico" },
  { name: "Airbnb", url: "https://airbnb.com/favicon.ico" },
  { name: "Uber", url: "https://uber.com/favicon.ico" },
  { name: "Lyft", url: "https://lyft.com/favicon.ico" },
  { name: "Pinterest", url: "https://pinterest.com/favicon.ico" },
  { name: "TikTok", url: "https://tiktok.com/favicon.ico" },
  { name: "Snapchat", url: "https://snapchat.com/favicon.ico" },
  { name: "WhatsApp", url: "https://whatsapp.com/favicon.ico" },
  { name: "Telegram", url: "https://telegram.org/favicon.ico" },
  { name: "Signal", url: "https://signal.org/favicon.ico" },
  { name: "Twitch", url: "https://twitch.tv/favicon.ico" },
  { name: "Steam", url: "https://store.steampowered.com/favicon.ico" },
  { name: "Epic Games", url: "https://epicgames.com/favicon.ico" },
  { name: "PlayStation", url: "https://playstation.com/favicon.ico" },
  { name: "Xbox", url: "https://xbox.com/favicon.ico" },
  { name: "Nintendo", url: "https://nintendo.com/favicon.ico" },
  { name: "Wikipedia", url: "https://wikipedia.org/favicon.ico" },
  { name: "BBC", url: "https://bbc.com/favicon.ico" },
  { name: "CNN", url: "https://cnn.com/favicon.ico" },
  { name: "The New York Times", url: "https://nytimes.com/favicon.ico" },
  { name: "ESPN", url: "https://espn.com/favicon.ico" },
  { name: "IMDb", url: "https://imdb.com/favicon.ico" },
] as const

const COLORS = ["bg-red-400", "bg-blue-400", "bg-green-400"] as const
const HEIGHT_OFFSETS = [0, 8, 16] as const
const ICON_SPACING = 56
const TIME_SCROLL_RATIO = 100
const LINE_EXTENSION = 20

const WORD_MAPPINGS: Record<number, ColorMapping> = {
  0: { word: "work", color: "text-red-400" },
  1: { word: "play", color: "text-blue-400" },
  2: { word: "rest", color: "text-green-400" },
} as const

const COLOR_GRADIENTS: Record<string, string> = {
  "bg-red-400": "from-transparent via-red-400 to-transparent",
  "bg-blue-400": "from-transparent via-blue-400 to-transparent",
  "bg-green-400": "from-transparent via-green-400 to-transparent",
} as const

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState<string>("")
  const [displayTime, setDisplayTime] = useState<string>("")
  const [currentWord, setCurrentWord] = useState<string>("work")
  const [wordColor, setWordColor] = useState<string>("text-white")
  const [baseTime, setBaseTime] = useState<Date>(new Date())
  const [cursorX, setCursorX] = useState<number | null>(null)
  const [isMouseInBottomSection, setIsMouseInBottomSection] = useState<boolean>(false)

  const iconContainerRef = useRef<HTMLDivElement>(null)
  const lineContainerRef = useRef<HTMLDivElement>(null)
  const bottomSectionRef = useRef<HTMLDivElement>(null)

  const formatTime = useCallback((date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }, [])

  const lineSegments = useMemo((): LineSegment[] => {
    const lines: LineSegment[] = []
    let currentGroup = { color: -1, start: 0, end: 0 }

    FAVICON_DATA.forEach((_, index) => {
      const colorGroupIndex = Math.floor(index / 3) % COLORS.length

      if (currentGroup.color === colorGroupIndex) {
        currentGroup.end = index
      } else {
        if (currentGroup.color !== -1) {
          lines.push({
            color: COLORS[currentGroup.color],
            left: currentGroup.start * ICON_SPACING - LINE_EXTENSION,
            width: (currentGroup.end - currentGroup.start + 1) * ICON_SPACING - 24 + LINE_EXTENSION * 2,
            height: HEIGHT_OFFSETS[currentGroup.color],
          })
        }
        currentGroup = { color: colorGroupIndex, start: index, end: index }
      }
    })

    // Handle final group
    if (currentGroup.color !== -1) {
      lines.push({
        color: COLORS[currentGroup.color],
        left: currentGroup.start * ICON_SPACING - LINE_EXTENSION,
        width: (currentGroup.end - currentGroup.start + 1) * ICON_SPACING - 24 + LINE_EXTENSION * 2,
        height: HEIGHT_OFFSETS[currentGroup.color],
      })
    }

    return lines
  }, [])

  const createScrollSyncHandler = useCallback(
    (source: HTMLDivElement, target: HTMLDivElement) => {
      let isScrolling = false

      return () => {
        if (isScrolling) return
        isScrolling = true

        // Sync scroll position
        target.scrollLeft = source.scrollLeft

        const scrollLeft = source.scrollLeft
        const containerWidth = source.clientWidth

        // Use line position: cursor position when hovering, center when not
        let referencePosition: number
        if (isMouseInBottomSection && cursorX !== null) {
          // Line is at cursor position - convert to scroll-relative coordinate
          referencePosition = scrollLeft + cursorX
        } else {
          // Line is at center - use center position
          referencePosition = scrollLeft + containerWidth / 2
        }

        // Time manipulation based on line position
        const timeOffsetMinutes = Math.floor(referencePosition / TIME_SCROLL_RATIO)
        const adjustedTime = new Date(baseTime.getTime() - timeOffsetMinutes * 60000)
        setDisplayTime(formatTime(adjustedTime))

        // Word/color detection based on line position
        const iconIndex = Math.floor(referencePosition / ICON_SPACING)
        const colorGroupIndex = Math.floor(iconIndex / 3) % COLORS.length
        const mapping = WORD_MAPPINGS[colorGroupIndex] || WORD_MAPPINGS[0]

        setCurrentWord(mapping.word)
        setWordColor(mapping.color)

        // Reset scrolling flag
        requestAnimationFrame(() => {
          isScrolling = false
        })
      }
    },
    [baseTime, formatTime, isMouseInBottomSection, cursorX], // Added dependencies for line position
  )

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = formatTime(now)
      setCurrentTime(timeString)
      setBaseTime(now)
      setDisplayTime(timeString)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [formatTime])

  useEffect(() => {
    const iconContainer = iconContainerRef.current
    const lineContainer = lineContainerRef.current

    if (!iconContainer || !lineContainer) return

    const handleIconScroll = createScrollSyncHandler(iconContainer, lineContainer)
    const handleLineScroll = createScrollSyncHandler(lineContainer, iconContainer)

    iconContainer.addEventListener("scroll", handleIconScroll, { passive: true })
    lineContainer.addEventListener("scroll", handleLineScroll, { passive: true })

    return () => {
      iconContainer.removeEventListener("scroll", handleIconScroll)
      lineContainer.removeEventListener("scroll", handleLineScroll)
    }
  }, [createScrollSyncHandler])

  const handleFaviconError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/generic-website-icon.png"
  }, [])

  const containerStyles = useMemo(
    () => ({
      minWidth: "max-content",
      width: `${FAVICON_DATA.length * ICON_SPACING - 24}px`,
    }),
    [],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      setCursorX(e.clientX - rect.left)

      if (iconContainerRef.current) {
        const scrollLeft = iconContainerRef.current.scrollLeft
        const referencePosition = scrollLeft + (e.clientX - rect.left)

        // Update time based on line position
        const timeOffsetMinutes = Math.floor(referencePosition / TIME_SCROLL_RATIO)
        const adjustedTime = new Date(baseTime.getTime() - timeOffsetMinutes * 60000)
        setDisplayTime(formatTime(adjustedTime))

        // Update word/color based on line position
        const iconIndex = Math.floor(referencePosition / ICON_SPACING)
        const colorGroupIndex = Math.floor(iconIndex / 3) % COLORS.length
        const mapping = WORD_MAPPINGS[colorGroupIndex] || WORD_MAPPINGS[0]

        setCurrentWord(mapping.word)
        setWordColor(mapping.color)
      }
    },
    [baseTime, formatTime],
  )

  const handleMouseEnter = useCallback(() => {
    setIsMouseInBottomSection(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsMouseInBottomSection(false)
    setCursorX(null)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 flex items-center justify-center p-8 pb-32">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Our Simple Site</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            This is a clean and minimal website with a collection of popular site favicons displayed at the bottom. The
            design focuses on simplicity and elegance.
          </p>
        </div>
      </main>

      <div className="flex justify-center mb-4">
        <div className="bg-gray-50 text-black px-4 py-2 rounded-full text-sm font-medium">
          {displayTime} <span className={wordColor}>{currentWord}</span>
        </div>
      </div>

      <div
        ref={bottomSectionRef}
        className="shadow-2xl bg-gray-50"
        style={{ cursor: "radial-gradient(circle, black 2px, transparent 2px), auto" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex justify-center">
          <div
            className="w-0.5 h-[15px] bg-black transition-transform duration-75 ease-out"
            style={{
              transform:
                isMouseInBottomSection && cursorX !== null
                  ? `translateX(${cursorX - (bottomSectionRef.current?.offsetWidth || 0) / 2}px)`
                  : "translateX(0px)",
            }}
          ></div>
        </div>
        <div className="max-w-6xl mx-auto py-2.5 px-0">
          <div ref={iconContainerRef} className="overflow-x-auto overflow-y-hidden scrollbar-hide">
            <div className="flex items-start gap-6 pb-12 relative" style={{ minWidth: "max-content" }}>
              {FAVICON_DATA.map((site) => (
                <div key={site.name} className="flex-shrink-0 flex flex-col items-center relative">
                  <img
                    src={site.url || "/placeholder.svg"}
                    alt={`${site.name} favicon`}
                    className="w-8 h-8 mb-2"
                    onError={handleFaviconError}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            ref={lineContainerRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide relative"
            style={{ marginTop: "-20px" }}
          >
            <div className="h-12" style={containerStyles}>
              {lineSegments.map((line, index) => (
                <div
                  key={index}
                  className={`absolute h-0.5 bg-gradient-to-r ${COLOR_GRADIENTS[line.color]}`}
                  style={{
                    left: `${line.left}px`,
                    width: `${line.width}px`,
                    top: `${line.height}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
