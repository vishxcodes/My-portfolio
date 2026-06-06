const Contact = require('../models/Contact');

// POST /api/contact
const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }
    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

module.exports = { submitContact };
