import { useContext } from "react";
import { OrderContext } from "../contexts/orderContext";

export function useOrder() {
  return useContext(OrderContext);
}