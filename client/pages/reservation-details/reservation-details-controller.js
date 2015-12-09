app.controller('ReservationDetailsCtrl', function ($scope, $meteor, $stateParams) {

    $scope.reservation = $meteor.object(Reservations, $stateParams.id).subscribe('reservations');

});
