import { ReactNode } from "react";
import { Variants } from "../../enums/variants";

export interface ICardProps {
  varient: Variants;
  children: ReactNode;
}
