import "@testing-library/jest-dom";
import {render,waitFor,fireEvent} from "@testing-library/react"
import { Header } from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import RestaurantMenu from "../common/RestaurantMenu";
import { MENU_DATA } from "../../__mocks__/data";
global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MENU_DATA);
      },
    });
  });

  test("Add items to card", async ()=>{
    const body = render(
        <StaticRouter>
          <Provider store={store}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </StaticRouter>
      );
      await waitFor(() => expect(body.getByTestId("menu")));
      const addBtn = body.getAllByTestId('addBtn');
        fireEvent.click(addBtn[0]);
      fireEvent.click(addBtn[1]);
      const cart = body.getByTestId("cart");
      expect(cart.innerHTML).toBe("Cart- 2 items");


  })
