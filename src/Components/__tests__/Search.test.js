import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "../Layout";
import store from "../../utils/store";
import { StaticRouter} from "react-router-dom/server";
import {RESTAURANT_DATA} from "../../__mocks__/data";
import { Provider } from "react-redux";
//writing dummy test case fetching data
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(RESTAURANT_DATA); 
        },
    })
})
test('Search Results on Homepage', async () => { 
   const LayoutTest =  render(
   <StaticRouter>
        <Provider store={store}><Layout/></Provider>
    </StaticRouter>
   );
   await waitFor(() => expect(LayoutTest.getByTestId("search-btn")));
   const shimmer = LayoutTest.getByTestId("shimmer");
   const resList = LayoutTest.getAllByTestId('res-list'); 
   expect(shimmer.children.length).toBe(12);
   const searchBtn = LayoutTest.getByTestId("search-btn");
   console.log(searchBtn);
 })
test('Search for food string', async () => { 
   const LayoutTest =  render(
   <StaticRouter>
        <Provider store={store}><Layout/></Provider>
    </StaticRouter>
   );
   await waitFor(()=> expect(LayoutTest.getByTestId("search-btn")))
   const input = LayoutTest.getByTestId("shimmer");
   fireEvent.change(input,{
    target:{
    value:"food",
   },
});

    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);
 })