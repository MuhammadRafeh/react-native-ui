import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const Indicator = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={37}
        height={9}
        fill="none"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37 0H0a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4ZM16.826 7.337c.516.962 2.832.962 3.348 0C21.116 5.58 22.494 4 24.403 4H12.598c1.908 0 3.285 1.58 4.228 3.337Z"
            fill="url(#a)"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={18.5}
                y1={0}
                x2={18.5}
                y2={8.058}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#7541ED" />
                <Stop offset={1} stopColor="#D13AF7" />
            </LinearGradient>
        </Defs>
    </Svg>
)

export default Indicator
