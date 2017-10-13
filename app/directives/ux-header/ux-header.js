(function () {
    'use strict'
    angular.module('app')
        .controller('headerCtrl', function ($rootScope, adalAuthenticationService, azureAD, $state) {
            var vm = this;
            console.log(vm);
            vm.userInfo = $rootScope.userInfo;
            vm.login = function () {
                console.log(adalAuthenticationService.login());
            };

            $rootScope.$on('adal:loginSuccess', function (data) {
                console.log(data);
                $state.go('azure');
            })
            vm.logout = function () {
                adalAuthenticationService.logOut();
            };
        })
        .directive('uxHeader', function () {

            return {
                restrict: 'E',
               // templateUrl: 'app/directives/ux-header/ux-header.html',
                template: `<nav class="navbar navbar-default">
                                <div class="container-fluid">
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                            aria-expanded="false">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        </button>
                                        <a class="navbar-brand" href="#">Azure AD Graph API</a>
                                    </div>
                            
                                    
                                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <ul class="nav navbar-nav navbar-right">
                                        {{userInfo | json}}
                                            <li><a href="" ng-click="uxHeader.login()" ng-if="!uxHeader.userInfo.isAuthenticated">Log In</a></li>
                                            <li  ng-if="uxHeader.userInfo.isAuthenticated">
                                                 <a>   {{uxHeader.userInfo.profile.name}}</a>
                                                </li>
                                            <li><a href="" ng-click="uxHeader.logout()" ng-if="uxHeader.userInfo.isAuthenticated">Log out</a></li>
                                        
                                        </ul>
                                    </div>
                                </div>
                            </nav>`,
                controller: 'headerCtrl',
                controllerAs: 'uxHeader',
                bindToController: true,
                scope: {
                }
            }
        });

})();