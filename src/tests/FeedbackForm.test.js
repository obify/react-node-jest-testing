import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FeedbackForm from '../components/FeedbackForm'

describe('Tests related to Feedback Form', ()=>{
    test('On load condition of Form', ()=>{
        render(<FeedbackForm />)
        const textBox = screen.getByRole('textbox')
        expect(textBox).toBeInTheDocument()
    
        const checkBox = screen.getByLabelText('I accept the Terms and Conditions', {exact: false})
        expect(checkBox).toBeInTheDocument()
    
        const btn = screen.getByRole('button', {name: 'Add Feedback', exact: false})
        expect(btn).toBeInTheDocument()
        expect(btn).toBeDisabled()
    })
    test('Button enabled only if input and checkbox have values', async ()=>{
        render(<FeedbackForm />)
        const textBox = screen.getByPlaceholderText('Enter Your Feedback here', {exact: false})
        const checkBox = screen.getByLabelText('I accept the Terms and Conditions', {exact: false})
        
        const btn = screen.getByRole('button', {name: 'Add Feedback', exact: false})

        //fireEvent.change(textBox, {target: {value: "Food was too spicy"}})
        await userEvent.type(textBox, "Food was too spicy")
        //fireEvent.click(checkBox)//it will check the checkbox
        await userEvent.click(checkBox)
        expect(btn).toBeEnabled()

        //fireEvent.click(checkBox)//it will check the checkbox
        await userEvent.click(checkBox)
        expect(btn).toBeDisabled()

    })
})