const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
.then(() => {
    console.log(" connected to DB");
}) .catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
    await Listing.deleteMany({});
    //to reinitialize owner field
    initData.data = initData.data.map((obj) => ({
        ...obj, owner : "68efd88afdcc82fc906a8b29"
    }));
    //
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};
initDB();
