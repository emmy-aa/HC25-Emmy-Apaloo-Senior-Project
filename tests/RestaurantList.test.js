import { render, screen } from "@testing-library/react";
import RestaurantList from "./RestaurantList";

test("renders a list of restaurants", () => {
    const mockRestaurants = [
        { id: "\n" +
                "CqAvGcUWQOPhaYyr51mc", name: "Mad Love Eat & Drink", ambiance: "happy", cuisine: "American" },
    ];

    render(<RestaurantList restaurants={mockRestaurants} />);
    expect(screen.getByText("Mad Love Eat & Drink")).toBeInTheDocument();
    expect(screen.getByText("happy")).toBeInTheDocument();
});
