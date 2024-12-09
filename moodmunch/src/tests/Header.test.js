import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

test("renders Navbar with correct links", () => {
    render(<Header />);

    const homeLink = screen.getByText("Home");
    const featuresLink = screen.getByText("Features");
    const pricingLink = screen.getByText("Pricing");

    expect(homeLink).toBeInTheDocument();
    expect(featuresLink).toBeInTheDocument();
    expect(pricingLink).toBeInTheDocument();
});
