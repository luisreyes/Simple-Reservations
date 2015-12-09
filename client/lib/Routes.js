app.config(function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('reservations', {
            url: '/',
            templateUrl: 'client/pages/reservations/reservations.html',
            controller: 'ReservationsCtrl'
        })
        .state('reservationDetails', {
            url: '/details/:id',
            templateUrl: 'client/pages/reservation-details/reservation-details.html',
            controller: 'ReservationDetailsCtrl'
        });

    $urlRouterProvider.otherwise("/");
});