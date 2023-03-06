import React from "react";
import useHomeHooks from "../Hooks";
import {
  BodyRow,
  Cell,
  HeaderRow,
  Section,
  Table,
  TableBody,
  TableHeader,
} from "./styles";

interface IHomePageProps {}
const HomePageComponent: React.FC<IHomePageProps> = (props) => {
  const { response, getPromotionPrice } = useHomeHooks();
  return (
    <Section>
      <Table>
        <TableHeader>
          <HeaderRow>
            <Cell>ID</Cell>
            <Cell>Titulo</Cell>
            <Cell>Preço</Cell>
            <Cell>Preço com Desconto</Cell>
          </HeaderRow>
        </TableHeader>
        <TableBody>
          {response &&
            response.map((x) => (
              <BodyRow id={`${x.id}`}>
                <Cell>{x.id}</Cell>
                <Cell>{x.title}</Cell>
                <Cell>{x.price}</Cell>
                <Cell style={{ color: "green" }}>
                  {getPromotionPrice(x.promotion_type, x.price)}
                </Cell>
              </BodyRow>
            ))}
        </TableBody>
      </Table>
    </Section>
  );
};

export default HomePageComponent;
