import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../components/Home";

test("renders all restaurants by default", () => {
    render(<Home />);
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(10); // Expecting 10 items from Fooddata
});

test("filters restaurants by category", () => {
    render(<Home />);

    const indianFilterButton = screen.getByText("Indian");
    fireEvent.click(indianFilterButton);

    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(5); // 5 Indian restaurants in Fooddata
});

test("shows all restaurants when 'All' button is clicked", () => {
    render(<Home />);

    const allButton = screen.getByText("All");
    fireEvent.click(allButton);

    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(10);
});
