import { render, screen, logRoles } from '@testing-library/react';
import App from './App';

// *.test.js OR *.spec.js OR *.js(__tests__) Folder
//it("example test one", ()=>{})

test.skip("example test one", ()=>{
    render(<App />);
    //logRoles(screen.getByTestId("parent-container"))
    //test whether button exist or not, so 1st get the button
    const btnElement = screen.getByRole("button", {name: 'Click here', exact: false});
    const btnElement2 = screen.queryByRole("button", {name: 'Click now', exact: false});
    //perform assertion
    expect(btnElement).toBeInTheDocument();
    expect(btnElement2).not.toBeInTheDocument();
    expect(btnElement2).toBeNull();
})