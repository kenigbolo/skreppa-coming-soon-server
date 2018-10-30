import moment from 'moment';
import uuidv4 from 'uuid/v4';
import db from '../db';

exports.createEmailEntry = async (req, res) => {
  const {email} = req.body;
  if (!email) return res.status(400).json({error: 'Email missing'});
  const date = moment(new Date());
  const text = `INSERT INTO
    emails(id, email, created_at, updated_at)
    VALUES($1, $2, $3, $4)
    returning *`;
  const values = [uuidv4(), email, date, date];
  try {
    const {rows} = await db.query(text, values);
    return res
      .status(201)
      .json({success: 'Email saved successfully', data: rows[0].email});
  } catch (error) {
    return res.status(400).json({error});
  }
};
