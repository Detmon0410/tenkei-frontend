import { useContext } from "react";
import { PlanListContext } from "../contexts/PlanListContext";

export function usePlanList() {
  return useContext(PlanListContext);
}