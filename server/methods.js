Meteor.methods({
    'addReservation'(reservation){
        Reservations.insert(reservation);
    },
    'getCounts'(){
        console.log('called');
        return '234';//Reservations.find().count();
    },
    'toggleReservationStatus'(id, status){
        console.log(status);
        var status = (status === 'active') ? 'fulfilled' : 'active';

        Reservations.update(id, {$set:{status: status}} );

    }

});