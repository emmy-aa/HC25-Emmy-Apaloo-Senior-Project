import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../components/Home";

test("renders all restaurants by default", () => {
    render(<Home />);
    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(9); // Expecting 9 items from Fooddata
});

test("filters restaurants by category", () => {
    render(<Home />);

    const indianFilterButton = screen.getByText("Indian");
    fireEvent.click(indianFilterButton);

    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(4); // 4 Indian restaurants in Fooddata
});

test("shows all restaurants when 'All' button is clicked", () => {
    render(<Home />);

    const allButton = screen.getByText("All");
    fireEvent.click(allButton);

    const cards = screen.getAllByRole("img");
    expect(cards.length).toBe(9);
});
