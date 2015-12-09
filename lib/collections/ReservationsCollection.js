Reservations = new Mongo.Collection("reservations");

if (Meteor.isServer) {
    Reservations.allow({
        insert() { return true; },
        update() { return true; },
        remove() { return true; }
    });

    Reservations.deny({
        insert() { return false; },
        update() { return false; },
        remove() { return false; }
    });
}