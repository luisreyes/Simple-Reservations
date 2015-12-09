directives.directive('reservationForm', function(){
   return {
       restrict: 'E',
       templateUrl:'client/components/reservation-form/reservation-form.html',
       controller($scope){
           //$scope.addReservation = function(){
           //    $scope.newReservation._id = Meteor.uuid().split('-')[2];
           //    $scope.newReservation.type = 'active';
           //    $scope.reservations.push($scope.newReservation);
           //    $scope.newReservation = '';
           //};
       }
   }
});