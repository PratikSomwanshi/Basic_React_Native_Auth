import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const wp = (widthPercent: number): number => {
    const elemWidth =
        typeof widthPercent === "number"
            ? widthPercent
            : parseFloat(widthPercent);
    return (width * elemWidth) / 100;
};

export const hp = (heightPercent: number): number => {
    const elemHeight =
        typeof heightPercent === "number"
            ? heightPercent
            : parseFloat(heightPercent);
    return (height * elemHeight) / 100;
};
