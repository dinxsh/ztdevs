const express = require("express")
const router = express.Router();

router.get('/', (request, response) => {              
    response.render("../frontend/index.html")
});

router.get('/feedback', (request, response) => {              
    response.render("../frontend/feedback/")
});

router.get('/login', (request, response) => {              
    response.render("../frontend/login/")
});

router.get('/team', (request, response) => {              
    response.render("../frontend/team/")
});

router.get('/contact', (request, response) => {              
    response.render("../frontend/contact/")
});

module.exports = router