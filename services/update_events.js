const db = require("../config");
const updateEvents = async () => {
    try {
        const collectionRef = await db.collection('events').where("isRanking", "==", true).where("dateMaxRanking", "<", Date.now()).get();
        collectionRef.docs.map((event) => {
            db.collection('/events').doc(event.id).update({
                "isRanking": false
            })
        })
        console.log(`events updated on ${new Date().toLocaleDateString()}`);
    } catch (e) {
        console.log(e);
    }

}

module.exports = updateEvents;
