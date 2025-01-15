import { useContext } from "react";
import { CostContext } from "../contexts/CostContext";

export function useCost() {
  return useContext(CostContext);
}