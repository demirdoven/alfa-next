import React from 'react'

export default function LoginServ() {
    return (
          <form action="/api/login" method="post">
              
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required value=""><br/><br/>
  
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required><br/><br/>
  
              <input type="submit" value="Submit"></input>
          </form>
    )
  }