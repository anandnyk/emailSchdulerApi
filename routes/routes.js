require("dotenv").config();
const router = require('express').Router();
const Email = require('../model/table_model');


// list all Emails
router.get('/email', (req, res) => {
    Email.findAll().then(response => {
        res.status(200).json({
            status: 1,
            message: "Email data fetched.",
            data: response
        });
    }).catch(error => {
        res.status(500).json({
            status: 0,
            message: "Failed to fetch the emails.",
            data: error
        });
    });
});

// fetch email by id
router.get('/email/id=:id', (req, res) => {
    Email.findAll({
        where: {
            id: req.params.id
        }
    }).then(response => {
        res.status(200).json({
            status: 1,
            message: "Email data fetched.",
            data: response
        });
    }).catch(error => {
        res.status(500).json({
            status: 0,
            message: "Failed to fetch the emails.",
            data: error
        });
    });
});

// fetch email by status
router.get('/email/status=:status', (req, res) => {
    Email.findAll({
        where: {
            status: req.params.status
        }
    }).then(response => {
        res.status(200).json({
            status: 1,
            message: "Email data fetched.",
            data: response
        });
    }).catch(error => {
        res.status(500).json({
            status: 0,
            message: "Failed to fetch the emails.",
            data: error
        });
    });
});

// schedule a email.
router.post('/email', (req, res) => {
    Email.create(req.body).then( response => {
        res.status(200).json({
            status: 1,
            message: "Email got scheduled",
            data: response
        });
    }).catch(error => {
        res.status(500).json({
            status: 0,
            message: "Failed to schedule email.",
            data: error
        });
    });
});

// update email
router.put('/email/id=:id', (req, res) => {
    Email.findByPk(req.params.id).then(email => {
        email.update({
            id: req.params.id,
            sender: req.body.sender,
            receiver: req.body.receiver,
            subject: req.body.subject,
            body: req.body.body,
            status: req.body.status
            
        }).then(response => {
            res.status(200).json({
                status: 1,
                message: "Email updated successfully.",
                data: response
            });
        }).catch(error => {
            res.status(500).json({
                status: 0,
                message: "failed to update Email.",
                data: error
            });
        });
    });
    
});

// delete email
router.delete('/email/id=:id', (req, res) => {
    Email.findByPk(req.params.id).then(email => {
        email.destroy();
    }).then(response => {
        res.status(200).json({
            status: 1,
            message: "Email deleted successfully.",
            data: response
        });
    }).catch(error => {
        res.status(500).json({
            status: 0,
            message: "Failed to delete the email.",
            data: error
        });
    });
});

// welcome page
router.get('/', (req, res) => {
    res.status(200).json({
        status: 1,
        message: "Welcome to BigApp Email Scheduler Application!"
    });
});

module.exports = router