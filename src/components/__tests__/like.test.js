import Like from "../like";
import { render, screen, fireEvent } from "@testing-library/react"

test("Defaults to 0 likes", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})

test("Increment likes when Like button clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Like"))
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
})

test("Decrement likes when Dislike button clicked", () => {
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"))
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
})