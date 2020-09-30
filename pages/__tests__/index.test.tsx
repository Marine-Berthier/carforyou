import { render } from "@testing-library/react"

import IndexPage from "../index"

describe("<IndexPage>", () => {
  it("has a header", () => {
    const { getByText } = render(<IndexPage />)

    expect(getByText("Welcome to the challenge"))
  })
})
