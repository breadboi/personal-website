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
        <div style={{ display: "flex-col" }}>
            <div>
                <ul style={{ display: "flex", listStyleType: "none", margin: 0, padding: 0, overflow: 'hidden' }}>
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
                                                    : ""
                                    }}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div style={{ width: props.width }}>
                <ul style={{ display: "flex", flexWrap: "wrap", listStyleType: "none", margin: 0, padding: 0, overflow: 'hidden' }}>
                    {Object.keys(props.breakdownItems).map((language) => {
                        // Remove if value is < 25%
                        if (props.breakdownItems[language] >= 20) {
                            return (
                                <li
                                    key={`${language}-name`}
                                    style={{
                                        margin: 2,
                                        display: "flex",
                                        justifyItems: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <span
                                        style={{
                                            height: 10,
                                            width: 10,
                                            backgroundColor: props.colorMap[language],
                                            borderRadius: "50%",
                                            display: "inline-block"
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontWeight: 700,
                                            marginLeft: 5,
                                            marginRight: 5,
                                            color: props.textColor || "black"
                                        }}
                                    >
                                        {language}
                                    </span>
                                    <span style={{ color: props.lightColor || "gray" }}>
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
