import React from "react"
import axios from "axios"


class MakeModelSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      make: [],
      models: [],
      types: [],
      brand: "",
      accessToModel: true,
      showTypes: false,
    }

    // Call our API to collect brands at construction

    axios
      .get(`https://catalogue-service.preprod.carforyou.ch:443/api/makes`)
      .then((res) => {
        const make = res.data
        this.setState({ make })
      })
  }


  // Function to collect models from the API once brand is chosen
  // For each model selection you want first to hide the type selection / Also update 'Brand' in our state, as we will need this information for the next step / Finally turn access model to false in order to be able to access the model input.

  makeSelected = (event) => {
    document.getElementById("model-input").value = "";
    this.setState({ showTypes: false })
    this.setState({ brand: event.target.value })
    this.setState({ accessToModel: false })
    axios
      .get(
        `https://catalogue-service.preprod.carforyou.ch:443/api/makes/key/${event.target.value}/models`
      )
      .then((res) => {
        const models = res.data
        this.setState({ models })
      })
  }

  // Function to collect types from the API once model is chosen // display Types input only if the array it not empty. 

  modelSelected = (event) => {
    document.getElementById("type-input").value = "";
    this.setState({ showTypes: false })
    axios
      .get(
        `https://catalogue-service.preprod.carforyou.ch:443/api/types?makeKey=${this.state.brand}&modelKey=${event.target.value}`
      )
      .then((res) => {
        const types = res.data.content
        this.setState({ types })
        if (this.state.types.length > 0) {
          this.setState({ showTypes: true })
        }
      })
  }

  // Function to reset the type input, depending on the model we want to show or hide this input (because some models does not have a type list) => don't need it actually.

  
  

  render() {
    const { make, models, types } = this.state

    return (
      <>
        <h1>Make your selection</h1>

        <div id="inputs-container">
          <div className="input">
            <label htmlFor="make">Choose a brand:</label>
            <select onChange={this.makeSelected}>
              <option value="" disabled selected>
                Brands' list
              </option>
              {make.map((brand, i) => (
                <option key={i} value={brand.key}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input">
            <label htmlFor="model">Choose a model:</label>
            <select
              disabled={this.state.accessToModel}
              onChange={this.modelSelected}
              id="model-input"
            >
              <option value="" disabled selected>
                Models' List
              </option>
              {models.map((model, i) => (
                <option key={i} value={model.key}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>

          <div className={"input " + (this.state.showTypes ? "" : "hide")}>
            <label htmlFor="type">Type list:</label>
            <select id="type-input">
              <option value="" disabled selected>
                Types' list
              </option>
              {types.map((type, i) => (
                <option key={i} value={type.id}>
                  {type.fullName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </>
    )
  }
}

export default MakeModelSelect
