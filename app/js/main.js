require.config({
    paths: {
        angular: "/starts/bower_components/angular/angular",
        ngRoute: "/starts/bower_components/angular-route/angular-route",
        ngAnimate: "/starts/bower_components/angular-animate/angular-animate",
        ngAria: "/starts/bower_components/angular-aria/angular-aria",
        ngMaterial: "/starts/bower_components/angular-material/angular-material"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        ngRoute: {
            deps: ["angular"]
        },
        ngAnimate: {
            deps: ["angular"],
            exports: "angularAnimate"   
        },
        ngAria: {
            exports: "angularAria",
            deps: [ "angular" ]
        },
        ngMaterial: {
            exports: "angularMaterial",
            deps: ["angular"]
        },
        angularMaterial: {
            deps: ['angular', 'angularAnimate', 'angularAria']
        }
    },
    //packages: ["starter"]
});

require(["angular", "app"], function(angular) {
    angular.bootstrap(document.documentElement, ["app"]);
});