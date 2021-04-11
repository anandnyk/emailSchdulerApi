require("dotenv").config();
const axios = require('axios');

// ====== Fetch Email/Emails=========
var fetchEmail = async function (id) {
  var url = id ? `http://localhost:3000/email/id=${id}` : `http://localhost:3000/email/`;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const response = await axios.get(url, config)
    console.log(response.data.data);
    
  } catch (error) {
    return error;
  }
}

// ====== fetch email by status ===========
var fetchEmailByStatus = async function (status) {
  var url = `http://localhost:3000/email/status=${status}`;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const response = await axios.get(url, config)
    return response.data.data;
    
  } catch (error) {
    return error;
  }
}

// ====== Re-schedule Email =========
var reschedule = async function (id, body) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    var url = `http://localhost:3000/email/id=${id}`
    const response = await axios.put(url, body, config)
    return response;

  } catch (error) {
    return error;
  }
}

// ====== Delete Email =========
var deleteEmail = async function (id) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    var url = `http://localhost:3000/email/id=${id}`
    const response = await axios.delete(url, config)
    return response;

  } catch (error) {
    return error;
  }
}

// ====== Schedule Email =========
var createEmail = async function (body) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    var url = "http://localhost:3000/email"
    const response = await axios.post(url, body, config)
    return response;

  } catch (error) {
    return error;
  }
}


module.exports = {
  createEmail,
  deleteEmail,
  reschedule,
  fetchEmail,
  fetchEmailByStatus
}