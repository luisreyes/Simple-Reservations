app = angular.module('reservations', ['angular-meteor','ui.router', 'directives']);
directives = angular.module('directives', []);

app.filter('capitalize', function() {
    return function(input, scope) {
        if (input !== null) {
            return input.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
    }
});