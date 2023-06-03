import React from "react";

interface BreakdownBarProps {
    breakdownItems: Record<string, number>;
    colorMap: Record<string, string>;
    width: number;
}

export function BreakdownBar(props: BreakdownBarProps) {
    return (
        <div className="flex-col">
            <div>
                <ul className="flex list-none m-0 p-0 overflow-hidden">
                    {Object.keys(props.breakdownItems).map((language, index) => {
                        return (
                            <li key={language}>
                                <div
                                    style={{
                                        backgroundColor: props.colorMap[language],
                                        width: Math.max(
                                            (props.breakdownItems[language] / 100) * props.width,
                                            5
                                        ),
                                        height: 10,
                                        marginRight: 2,
                                        borderRadius:
                                            index === 0
                                                ? index === Object.keys(props.breakdownItems).length - 1
                                                    ? "10px 10px 10px 10px"
                                                    : "10px 0 0 10px"
                                                : index === Object.keys(props.breakdownItems).length - 1
                                                ? "0 10px 10px 0"
                                                : "",
                                    }}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div style={{ width: props.width }}>
                <ul className="flex flex-wrap list-none m-0 p-0 overflow-hidden">
                    {Object.keys(props.breakdownItems).map((language) => {
                        // Remove if value is < 25% (languages less involved in the project)
                        if (props.breakdownItems[language] >= 20) {
                            return (
                                <li
                                    key={`${language}-name`}
                                    className="m-2 flex justify-items-center items-center"
                                >
                                    <span
                                        style={{
                                            height: 10,
                                            width: 10,
                                            borderRadius: "50%",
                                            display: "inline-block",
                                            backgroundColor: props.colorMap[language],
                                        }}
                                    />
                                    {language}
                                </li>
                            );
                        }
                        return null;
                    })}
                </ul>
            </div>
        </div>
    );
}
