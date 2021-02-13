import React from 'react'

function Result( { result }) {
  return (
    <div className = "result">
        <h3>{result.Title}</h3>
        <img src={result.Poster} alt ="description of images" />
    </div>
  )
}

export default Result
