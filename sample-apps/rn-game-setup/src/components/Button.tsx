import React from "react";
import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={
                [Styles.button,
                isBlue
                    ? Styles.btnBlue
                    : isGray
                        ? Styles.btn1
                        : theme === "light"
                            ? Styles.btnLight
                            : Styles.btn2
                ]
            }
            onPress={onPress}>
            <Text
                style={
                    [Styles.button,
                    isBlue || isGray
                        ? Styles.smTxtLight
                        : theme === "dark"
                            ? Styles.smTxtLight
                            : Styles.smTxtDark
                    ]
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}