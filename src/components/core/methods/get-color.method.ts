import { Variants } from "../enums/variants";
import colorVarients from "../../../styles/color-varients.module.scss";

export const getColor = (varient: Variants) => {
  switch (varient) {
    case Variants.Primary:
      return colorVarients.msColorPrimary;

    case Variants.Secondary:
      return colorVarients.msColoreScondary;

    case Variants.Success:
      return colorVarients.msColorSuccess;

    case Variants.Danger:
      return colorVarients.msColorDanger;

    case Variants.Warning:
      return colorVarients.msColorWarning;

    case Variants.Info:
      return colorVarients.msColorInfo;

    case Variants.Light:
      return colorVarients.msColorLight;

    case Variants.Dark:
      return colorVarients.msColorDark;

    default:
      return colorVarients.msColorLight;
  }
};
