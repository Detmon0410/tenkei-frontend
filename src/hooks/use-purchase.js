import { useContext } from "react";
import { PurchaseContext } from "../contexts/PurchaseContext";

export function usePurchase() {
  return useContext(PurchaseContext);
}