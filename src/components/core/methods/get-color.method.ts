import { Varients } from "../enums/varients";
import colorVarients from "../../../styles/color-varients.module.scss";

export const getColor = (varient: Varients) => {
  switch (varient) {
    case Varients.Primary:
      return colorVarients.msColorPrimary;

    case Varients.Secondary:
      return colorVarients.msColoreScondary;

    case Varients.Success:
      return colorVarients.msColorSuccess;

    case Varients.Danger:
      return colorVarients.msColorDanger;

    case Varients.Warning:
      return colorVarients.msColorWarning;

    case Varients.Info:
      return colorVarients.msColorInfo;

    case Varients.Light:
      return colorVarients.msColorLight;

    case Varients.Dark:
      return colorVarients.msColorDark;

    default:
      return colorVarients.msColorLight;
  }
};
