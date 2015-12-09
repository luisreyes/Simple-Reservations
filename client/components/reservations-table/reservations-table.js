directives.directive('reservationsTable', [
    function(){
        return {
            restrict: 'E',
            scope:{
                status: '@'
            },
            controller($scope, $meteor){
                $scope.reservations = $meteor.collection(()=> {
                    return Reservations.find({status: $scope.status});
                }).subscribe('reservations');

                $scope.removeReservation = function(reservation){
                    $scope.reservations.remove(reservation);
                };

                $scope.toggleReservationStatus = function(reservation){
                    $meteor.call('toggleReservationStatus', reservation._id, reservation.status );
                };
            },
            templateUrl:'client/components/reservations-table/reservations-table.html'
        }
    }]);