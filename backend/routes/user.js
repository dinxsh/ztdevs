const express = require("express")
const router = express.Router();

// crud operations
router.get('/create', (request, response) => {                  
    response.send("Searched Name = " + request.params.name)
});

router.get('/update', (request, response) => {                  
    response.send("Searched Id = " + request.params.id)
});

router.get('/read', (request, response) => {                  
    response.send("Searched Id = " + request.params.id)
});

router.get('/delete', (request, response) => {                  
    response.send("Searched Id = " + request.params.id)
});
module.exports = router