app.controller('ReservationsCtrl', function ($scope, $meteor) {

    $scope.addReservation = function(){
        $scope.newReservation._id = Meteor.uuid().split('-')[2];
        $scope.newReservation.status = 'active';
        $meteor.call('addReservation', $scope.newReservation);
        $scope.newReservation = '';
    };

    $('.nav.nav-tabs li').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

});
