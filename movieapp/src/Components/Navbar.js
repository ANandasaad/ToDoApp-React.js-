import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex',background:"lightyellow",padding:'1rem',justifyContent:"center",alignItems:"center"}}>
        <h1>Movies App</h1>
        <h2 style={{marginLeft:"2rem",}}>Favorite</h2>
      </div>
    )
  }
}
