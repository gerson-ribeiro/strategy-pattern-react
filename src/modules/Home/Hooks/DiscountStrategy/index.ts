import DiscountStrategyTypeA from "./type_a";

const DiscountStrategy = (type: string, price: number) => {
    return DiscountStrategyTypeA(type, price);
}
export default DiscountStrategy;