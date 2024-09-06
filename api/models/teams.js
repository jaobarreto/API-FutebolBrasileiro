import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: String,
  city: String,
  stadium: String,
  foundation: Date,
  colors: String,
  coach: String,
  titles: String,
  logoUrl: String,
  officialWebsite: String,
  history: String,
});

const Team = mongoose.model('Team', teamSchema)

export default Team