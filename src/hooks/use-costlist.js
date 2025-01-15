import { useContext } from "react";
import { CostListContext } from "../contexts/CostListContext";

export function useCostList() {
  return useContext(CostListContext);
}