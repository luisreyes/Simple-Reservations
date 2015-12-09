Meteor.startup(function () {

    Meteor.publish("reservations", function () {
        return Reservations.find();
    });


});
