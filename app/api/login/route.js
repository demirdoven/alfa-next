export default function handler(req, res) {
    const body = req.body; // Extract the data from the request body
    
    // if (!body.name || !body.email ) { // Check if name or email is missing
    //   return res.status(400).json({ error: 'Oops! You missed some required fields.' }); // Send a 400 Bad Request response with an error message
    // }
    
    return res.status(200).json({ data: body });
  }