import React from 'react'

const Button = () => {
  return (
    <div>
        <Button onClick={()=> alert('Button clicked!')}>
            Click me
        </Button>
    </div>
  )
}

export default Button