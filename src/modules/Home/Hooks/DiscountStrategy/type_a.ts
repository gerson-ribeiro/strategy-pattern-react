import { TYPE_A } from "../Constants/disount_types"
import DiscountStrategyTypeB from "./type_b"

const next = DiscountStrategyTypeB;
const DiscountStrategyTypeA = (type: string, price: number): number => {
    if (type !== TYPE_A)
        return next(type, price);

    return price - (price * 0.1)
}

export default DiscountStrategyTypeA