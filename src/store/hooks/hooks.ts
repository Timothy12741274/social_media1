import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from "../store";

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector
export const useAppDispatch = () => useDispatch<DispatchType>()