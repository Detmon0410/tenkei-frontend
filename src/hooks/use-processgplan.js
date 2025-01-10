import { useContext } from "react";
import { ProcessGPlanContext } from "../contexts/ProcessGPlanContext";

export function useProcessGPlan() {
  return useContext(ProcessGPlanContext);
}