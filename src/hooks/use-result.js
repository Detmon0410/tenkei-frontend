import { useContext } from "react";
import { ResultContext } from "../contexts/ResultContext";

export function useResult() {
  return useContext(ResultContext);
}