const express = require("express")
const router = express.Router();

router.get('/', (request, response) => {              
    response.render("../index.html")
});

router.get('/feedback', (request, response) => {              
    response.render("../feedback/")
});

router.get('/login', (request, response) => {              
    response.render("../login/")
});

router.get('/team', (request, response) => {              
    response.render("../team/")
});

router.get('/contact', (request, response) => {              
    response.render("../contact/")
});

module.exports = router