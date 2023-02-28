import React from "react";

interface BreakdownBarProps {
    breakdownItems: { [key: string]: number };
    colorMap: { [key: string]: string };
    width: number;
    textColor?: string;
    lightColor?: string;
}

export const BreakdownBar: React.FC<BreakdownBarProps> = (props) => {
    if (!props.breakdownItems || typeof props.breakdownItems !== "object") {
        return <div>No data to display</div>;
    }

    return (
        <div className="flex flex-col">
            <div>
                <ul className="flex overflow-hidden list-none">
                    {Object.keys(props.breakdownItems).map((language, index) => {
                        return (
                            <li key={language}>
                                <div
                                    className={`
                    bg-${props.colorMap[language]}
                    w-${Math.max(
                                        (props.breakdownItems[language] / 100) * props.width,
                                        5
                                    )}
                    h-10
                    mr-2
                    rounded-${index === 0
                                            ? index === Object.keys(props.breakdownItems).length - 1
                                                ? "tl-md tl-lg"
                                                : "tl-md"
                                            : index === Object.keys(props.breakdownItems).length - 1
                                                ? "tr-md"
                                                : ""
                                        }
                  `}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={`w-${props.width}`}>
                <ul className="flex flex-wrap overflow-hidden list-none">
                    {Object.keys(props.breakdownItems).map((language) => {
                        // Remove if value is < 25%
                        if (props.breakdownItems[language] >= 20) {
                            return (
                                <li
                                    key={`${language}-name`}
                                    className="flex items-center justify-center m-2"
                                >
                                    <span
                                        className={`
                      h-10
                      w-10
                      bg-${props.colorMap[language]}
                      rounded-full
                      inline-block
                    `}
                                    />
                                    <span
                                        className={`
                      font-bold
                      text-${props.textColor || "black"}
                      mx-5
                    `}
                                    >
                                        {language}
                                    </span>
                                    <span className={`text-${props.lightColor || "gray-500"}`}>
                                        {(props.breakdownItems[language]).toFixed(1)}%
                                    </span>
                                </li>
                            );
                        }
                    })}
                </ul>
            </div>
        </div>
    );
};
