import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

test("Should load contact us Component", () => {
    //render the page
    render (<Contact />);

    //get the all heading element from the component
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
})