import React, { useEffect, useRef } from "react"
import { TimelineMax, Linear } from "gsap"
import { TweenMax } from "gsap/gsap-core"

import { Container } from "./styled"

const Background = () => {
  const rocket = useRef(null)
  const satelite = useRef(null)
  const star = useRef(null)
  const starContainer = useRef(null)
  const mainTimeLine = new TimelineMax({ repeat: -1 })
  const bubbles = []
  const speedLines = []
  const mainSpeedLinesTimeline = new TimelineMax({ repeat: -1, paused: false })
  mainTimeLine.timeScale(6).seek(100)

  function createJets() {
    TweenMax.set(bubbles, {
      attr: {
        r: "-=5",
      },
    })
    for (let i = 0; i < bubbles.length; i++) {
      const jb = bubbles[i]
      const tl = new TimelineMax({ repeat: -1 })
      tl.to(jb, 1, {
        attr: {
          r: "+=15",
        },
        ease: Linear.easeNone,
      }).to(jb, 1, {
        attr: {
          r: "-=15",
        },
        ease: Linear.easeNone,
      })
      mainTimeLine.add(tl, i / 4)
    }
    //SpeedLines
    for (let i = 0; i < speedLines.length; i++) {
      const tl = new TimelineMax({
        repeat: -1,
        repeatDelay: Math.random(),
      })
      const sl = speedLines[i]

      tl.set(sl, {
        strokeDasharray: 400,
        strokeDashoffset: 0,
      })
        .to(sl, 0.02, {
          strokeDashoffset: -1000,
        })
        .to(sl, 0.5, {
          strokeDasharray: "100%",
          strokeDashoffset: "100%",
        })

      mainSpeedLinesTimeline.add(sl, i / 23)
    }

    for (let i = 0; i < 7; i++) {
      const sc = star.current.cloneNode(true)
      starContainer.current.appendChild(sc)
      const calc = (i + 1) / 2

      TweenMax.fromTo(
        sc,
        calc,
        {
          x: Math.random() * 1920,
          y: -30,
          scale: 6 - calc,
        },
        {
          y: Math.random() * 100 + 2080,
          repeat: -1,
          repeatDelay: 2,
          ease: Linear.easeNone,
        }
      )
    }
  }

  function startRocketAndSatelite() {
    TweenMax.to(rocket.current, 0.05, {
      y: "+=4",
      repeat: -1,
      yoyo: true,
    })

    const satTimeLine = new TimelineMax({ repeat: -1 })

    satTimeLine.to(satelite.current, 46, {
      rotation: 360,
      transformOrigin: "center center",
      ease: Linear.easeNone,
    })

    createJets()
  }

  useEffect(() => {
    startRocketAndSatelite()
  }, [])

  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        width="100%"
        height="100%"
      >
        <defs>
          <clipPath id="clip-path">
            <path
              fill="none"
              d="M1520.38 344c-8.28.06-15-5.46-15.1-12.22l-.72-94.34c-.06-6.75 6.68-12.38 14.9-12.44 8.22-.06 15 5.41 15.09 12.21l.73 94.34c.06 6.8-6.62 12.37-14.9 12.45z"
            ></path>
          </clipPath>
        </defs>
        <path fill="#242424" d="M0 0H1920V1080H0z" data-name="Camada 5"></path>
        <g fill="none" stroke="#3e3e3e" strokeLinejoin="round" strokeWidth="2">
          <line
            x1="727.15"
            y1="504.97"
            x2="727.15"
            y2="966.73"
            strokeMiterlimit="10"
            name="speedLine0"
            ref={element => (speedLines[0] = element)}
          />
          <line
            x1="919.15"
            y1="840.8"
            x2="919.15"
            y2="1080"
            strokeMiterlimit="10"
            name="speedLine1"
            ref={element => (speedLines[1] = element)}
          />
          <line
            x1="1115.23"
            y1="504.97"
            x2="1115.23"
            y2="896.13"
            strokeMiterlimit="10"
            name="speedLine2"
            ref={element => (speedLines[2] = element)}
          />
          <line
            x1="21"
            y1="11.6"
            x2="21"
            y2="879.8"
            strokeMiterlimit="10"
            name="speedLine3"
            ref={element => (speedLines[3] = element)}
          />
          <line
            x1="1851"
            y1="1.07"
            x2="1851"
            y2="1041"
            strokeMiterlimit="10"
            name="speedLine4"
            ref={element => (speedLines[4] = element)}
          />
          <line
            x1="1393"
            y1="8"
            x2="1393"
            y2="832.31"
            strokeMiterlimit="10"
            name="speedLine5"
            ref={element => (speedLines[5] = element)}
          />
          <line
            x1="429"
            y1="161.69"
            x2="429"
            y2="986"
            strokeMiterlimit="10"
            name="speedLine6"
            ref={element => (speedLines[6] = element)}
          />
          <line
            x1="876.43"
            y1="52.22"
            x2="876.43"
            y2="513.99"
            strokeMiterlimit="10"
            name="speedLine7"
            ref={element => (speedLines[7] = element)}
          />
          <line
            x1="79.43"
            y1="75.22"
            x2="79.43"
            y2="536.99"
            strokeMiterlimit="10"
            name="speedLine8"
            ref={element => (speedLines[8] = element)}
          />
          <line
            x1="191.43"
            y1="521.22"
            x2="191.43"
            y2="982.99"
            strokeMiterlimit="10"
            name="speedLine9"
            ref={element => (speedLines[9] = element)}
          />
          <line
            x1="1691.51"
            y1="601.5"
            x2="1691.51"
            y2="1063.26"
            strokeMiterlimit="10"
            name="speedLine10"
            ref={element => (speedLines[10] = element)}
          />
        </g>
        <polygon
          style={{ isolation: "isolate" }}
          fill="#ecb447"
          points="1.2,0 1.6,0.8 2.4,0.9 1.8,1.5 1.9,2.3 1.2,1.9 0.5,2.3 0.6,1.5"
          opacity="0.5"
          ref={star}
        />
        <g className="starContainer" ref={starContainer}></g>
        <g id="satelite" ref={satelite}>
          <g
            fill="none"
            stroke="#bdbdbd"
            strokeLinejoin="round"
            strokeWidth="1.581"
          >
            <path d="M590.54 149.15a7 7 0 01-8.87-4.63M591.56 152.16a10.14 10.14 0 01-12.77-6.66M592.45 155.22a13.39 13.39 0 01-16.76-8.74"></path>
          </g>
          <path
            fill="#bdbdbd"
            d="M565.28 90.3L558 86.51l3.79-7.27 7.28 3.76zM578 87.7l-7.27-3.79-3.73 7.27 7.24 3.82zm8.87 4.63l-7.27-3.79-3.79 7.27 7.27 3.79zm9 4.67l-7.27-3.79-3.79 7.27 7.27 3.79zm-31.44-5l-7.28-3.79-3.79 7.27 7.27 3.79zm9 4.67l-7.27-3.79-3.79 7.27 7.27 3.79zm8.87 4.62l-7.3-3.8-3.79 7.27 7.27 3.79zm8.95 4.67l-7.27-3.79-3.79 7.27 7.27 3.79zm-31.44-5l-7.28-3.79-3.79 7.27 7.27 3.8zm9 4.67l-7.27-3.79-3.79 7.27 7.27 3.8zm8.87 4.63l-7.27-3.79-3.79 7.27 7.27 3.79zm9 4.67l-7.27-3.79-3.79 7.27 7.27 3.79zm42-.9l-7.27-3.79-3.79 7.27 7.27 3.79zm9 4.67l-7.27-3.79-3.79 7.27 7.27 3.79zm8.87 4.62l-7.55-3.81-3.8 7.27 7.27 3.8zm9 4.67l-7.55-3.81-3.79 7.27 7.27 3.8zm-31.45-5l-7.27-3.79-3.79 7.27 7.27 3.79zm9 4.67l-7.27-3.79-3.79 7.27 7.27 3.79zm8.87 4.62l-7.27-3.79-3.8 7.27 7.27 3.79zm9 4.67l-7.27-3.79-3.79 7.27 7.27 3.79zm-31.45-5l-7.27-3.79-3.79 7.27 7.27 3.79zm9 4.67l-7.27-3.79-4.25 7.24 7.27 3.79zm8.87 4.63l-7.27-3.8-3.8 7.28 7.28 3.79zm8.95 4.67l-7.27-3.8-3.79 7.27 7.27 3.8zm-41.86-10.78l14.84-28.46a4.7 4.7 0 00-2-6.34l-10.79-5.44a4.69 4.69 0 00-6.34 2l-14.84 28.46a4.69 4.69 0 002 6.34l10.37 5.41a4.68 4.68 0 006.34-2zM615.2 122l-25.45-13.3-1 1.86 25.45 13.27zm-21.74 12.91l-2-1-5.59 10.73 2 1z"
          ></path>
        </g>
        <g>
          <g clipPath="url(#clip-path)">
            <path
              fill="#cc583f"
              d="M1505.01 244.26H1511.01V349.15999999999997H1505.01z"
              transform="rotate(-.44 1515.904 298.813)"
            ></path>
          </g>
          <g clipPath="url(#clip-path)">
            <path
              fill="#ecb447"
              d="M1511.01 244.22H1517.01V349.12H1511.01z"
              transform="rotate(-.44 1522.414 298.838)"
            ></path>
          </g>
          <g clipPath="url(#clip-path)">
            <path
              fill="#75c095"
              d="M1517.01 244.17H1523.01V349.07H1517.01z"
              transform="rotate(-.44 1528.925 298.863)"
            ></path>
          </g>
          <g clipPath="url(#clip-path)">
            <path
              fill="#5991aa"
              d="M1523.01 244.12H1529.01V349.02H1523.01z"
              transform="rotate(-.44 1534.139 297.581)"
            ></path>
          </g>
          <g clipPath="url(#clip-path)">
            <path
              fill="#7d6aad"
              d="M1529.01 244.08H1535.01V348.98H1529.01z"
              transform="rotate(-.44 1540.65 297.606)"
            ></path>
          </g>
          <g fill="#2d2d2d">
            <circle
              ref={element => (bubbles[0] = element)}
              cx="1518.13"
              cy="353.58"
              r="16"
              transform="rotate(-.44 1526.1 356.149)"
            ></circle>
            <circle
              ref={element => (bubbles[1] = element)}
              cx="1505.25"
              cy="341.76"
              r="15"
              transform="rotate(-.44 1513.13 343.077)"
            ></circle>
            <circle
              ref={element => (bubbles[2] = element)}
              cx="1538.29"
              cy="349.66"
              r="14"
              transform="rotate(-.44 1546.956 351.02)"
            ></circle>
          </g>
          <g>
            <circle
              ref={element => (bubbles[3] = element)}
              cx="1533.42"
              cy="328.37"
              fill="#ecb447"
              r="5"
              transform="rotate(-.44 1541.827 330.165)"
            ></circle>
            <circle
              ref={element => (bubbles[4] = element)}
              cx="1538.95"
              cy="347.77"
              fill="#7d6aad"
              r="7"
              transform="rotate(-.44 1548.263 349.723)"
            ></circle>
            <circle
              ref={element => (bubbles[5] = element)}
              cx="1518.66"
              cy="335.38"
              fill="#7d6aad"
              r="7"
              transform="rotate(-.44 1527.478 336.621)"
            ></circle>
            <circle
              ref={element => (bubbles[6] = element)}
              cx="1544.88"
              cy="330.79"
              fill="#ecb447"
              r="8"
              transform="rotate(-.44 1553.536 332.815)"
            ></circle>
            <circle
              ref={element => (bubbles[7] = element)}
              cx="1515.99"
              cy="337.28"
              fill="#cc583f"
              r="5"
              transform="rotate(-.44 1524.864 339.216)"
            ></circle>
            <circle
              ref={element => (bubbles[8] = element)}
              cx="1518.04"
              cy="341.03"
              fill="#ecb447"
              r="16"
              transform="rotate(-.44 1526.15 343.127)"
            ></circle>
            <circle
              ref={element => (bubbles[9] = element)}
              cx="1498.43"
              cy="329.26"
              fill="#7d6aad"
              r="13"
              transform="rotate(-.44 1506.663 331.333)"
            ></circle>
            <circle
              ref={element => (bubbles[10] = element)}
              cx="1538.19"
              cy="337.11"
              fill="#5991aa"
              r="7"
              transform="rotate(-.44 1547 339.3)"
            ></circle>
            <circle
              ref={element => (bubbles[11] = element)}
              cx="1518.68"
              cy="337.26"
              fill="#cc583f"
              r="12"
              transform="rotate(-.44 1527.468 339.226)"
            ></circle>
            <circle
              ref={element => (bubbles[12] = element)}
              cx="1533.39"
              cy="324.6"
              fill="#75c095"
              r="14"
              transform="rotate(-.44 1541.842 326.259)"
            ></circle>
            <circle
              ref={element => (bubbles[13] = element)}
              cx="1508.49"
              cy="325.05"
              fill="#5991aa"
              r="8"
              transform="rotate(-.44 1517.096 327.466)"
            ></circle>
          </g>
        </g>
        <g id="rocket" ref={rocket}>
          <path
            fill="#f7f9f9"
            d="M1547.17 193.5c-7.63 71.68-12.58 82-12.58 82a68.34 68.34 0 01-16.09 2 60.51 60.51 0 01-14.09-2s-2 6-13.58-80c-8.72-64.86 27.39-85.51 27.67-85.51s36.21 12.59 28.67 83.51z"
          ></path>
          <path
            fill="#08fdd8"
            d="M1525 258.55a86.15 86.15 0 01-6 37.45 84.49 84.49 0 01-6-37.45c3-43.7 6-39.53 6-39.53s3-7.29 6 39.53zM1489.66 293.9s-3.6-20.47-3.25-33.7a13.93 13.93 0 0112.68-9.85l-5.3-34.51s-19 14.52-22.65 34.79c0 0 1.31 28.55 13.32 44.15 0 0 3.02 3.13 5.2-.88zM1549.8 294.62s3.22-20.59 2.7-33.88A13.74 13.74 0 001540 251l4.69-34.72s18.7 14.36 22.52 34.68c0 0-.9 28.7-12.37 44.5.03-.01-2.84 3.17-5.04-.84z"
          ></path>
          <path
            fill="#08fdd8"
            d="M1504 275v6s16 4 30 0l.5-5.5s-15 4-30.5-.5zM1496.83 140.2a70.2 70.2 0 0045.36 0 1.36 1.36 0 00.69-1.85c-4.4-11.44-12.83-23.42-23.12-30.2a1.21 1.21 0 00-1.36 0c-3 2.11-15.64 11.26-22.32 30.26a1.33 1.33 0 00.75 1.79z"
          ></path>
          <path
            fill="#1ae8c5"
            d="M1493 148s26 10 52 0l1.64 7.09s-19.64 9.44-55.14 0z"
          ></path>
          <circle cx="1519" cy="185" r="14" fill="#95ebec"></circle>
          <path
            fill="#bfefe9"
            stroke="#bfefe9"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M1527.85 173.47L1529.91 175.39 1506.62 194.25 1504.97 191.4 1527.85 173.47z"
            opacity="0.44"
          ></path>
          <path
            fill="#bfefe9"
            d="M1531.64 178.58L1533.78 180.25 1512.22 198.45 1510.41 195.9 1531.64 178.58z"
            opacity="0.44"
          ></path>
          <circle
            cx="1519"
            cy="185"
            r="15"
            fill="none"
            stroke="#08fdd8"
            strokeMiterlimit="10"
            strokeWidth="2"
          ></circle>
        </g>
      </svg>
    </Container>
  )
}

export default Background
