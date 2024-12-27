import { useContext } from "react";
import { SorderContext } from "../contexts/SorderContext";

export function useSorder() {
  return useContext(SorderContext);
}