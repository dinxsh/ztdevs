const express = require("express")
const router = express.Router();

router.get('/:id', (request, response) => {                  
    response.send("Searched Id = " + request.params.id)
});

module.exports = router