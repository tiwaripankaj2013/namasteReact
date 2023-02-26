import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
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
test('Shimmer should load on Homepage', async () => { 
   const LayoutTest =  render(
   <StaticRouter>
        <Provider store={store}>
            <Layout/>
        </Provider>
    </StaticRouter>
   );
   const shimmer = LayoutTest.getByTestId("res-list");
   expect(shimmer.children.length).toBe(12);
//    console.log(shimmer);
 });
test('Restaurants should load on Homepage', async () => { 
   const LayoutTest =  render(
   <StaticRouter>
        <Provider store={store}>
            <Layout/>
        </Provider>
    </StaticRouter>
   );
   await waitFor(() => expect(LayoutTest.getByTestId("search-btn")));
  // const resList = LayoutTest.getAllByTestId('res-card');
//    console.log(resList,"------------------");
//    expect(resList.children.length).toBe(15);
 });
test('Search for string(food) on Homepage', async () => { 
   const LayoutTest =  render(
   <StaticRouter>
        <Provider store={store}><Layout/></Provider>
    </StaticRouter>
   );
   await waitFor(()=> expect(LayoutTest.getByTestId("search-btn")))
   const input = LayoutTest.getByTestId("search-input");
   fireEvent.change(input,{
    target:{
    value:"food",
   },
});

const searchBtn = LayoutTest.getByTestId("search-btn");

fireEvent.click(searchBtn);

const resList = LayoutTest.getByTestId("res-list");

expect(resList.children.length).toBe(4);
 })