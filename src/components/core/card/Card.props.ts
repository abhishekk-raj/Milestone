import { ReactNode } from "react";
import { Varients } from "../enums/varients";

export interface ICardProps {
  varient: Varients;
  children: ReactNode;
}
