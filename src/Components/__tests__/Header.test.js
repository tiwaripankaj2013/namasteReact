import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from '../Header/index';
import store from '../../utils/store';
import { StaticRouter } from "react-router-dom/server";
import dummyLogo from '../../__mocks__/dummyLogo';

test("Logo should load on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    
    const logo = header.getAllByTestId("logo");
    console.log(logo);
    expect(logo[0].src).toBe(dummyLogo.png);
})
test("online status should green", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );

    const onlineStatus = header.getByTestId("online-status");
    expect(onlineStatus.classList.contains('rounded-full bg-green-700')).toBe(true);
})