import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

test("Feedback should be displayed after submit", async ()=>{
    render(<App />)
    const textBox = screen.getByRole('textbox')
    const checkBox = screen.getByLabelText('I accept the Terms and Conditions', {exact: false})
    const btn = screen.getByRole('button', {name: 'Add Feedback', exact: false})

    await userEvent.type(textBox, "new feedback")
    await userEvent.click(checkBox)
    await userEvent.click(btn)

    const newFeedbackLi = await screen.findByText("new feedback",{exact: false})
    expect(newFeedbackLi).toBeInTheDocument()
})
test("2 Feedbacks should be displayed after submit", async ()=>{
    render(<App />)
    const textBox = screen.getByRole('textbox')
    const checkBox = screen.getByLabelText('I accept the Terms and Conditions', {exact: false})
    const btn = screen.getByRole('button', {name: 'Add Feedback', exact: false})

    await userEvent.type(textBox, "new feedback one")
    await userEvent.click(checkBox)
    await userEvent.click(btn)

    await userEvent.clear(textBox)

    await userEvent.type(textBox, "new feedback two")
    await userEvent.click(btn)

    const allList = await screen.findAllByRole("listitem")
    screen.debug()
    expect(allList.length).toBe(2)
})