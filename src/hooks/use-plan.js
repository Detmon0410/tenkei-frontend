import { useContext } from "react";
import { PlanContext } from "../contexts/PlanContext";

export function usePlan() {
  return useContext(PlanContext);
}