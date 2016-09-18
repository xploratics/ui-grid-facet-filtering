angular
    .module('ui-grid-facet-filtering', [])
    .directive('ui-grid-facet-filtering', [function () {
        return {
            restrict: 'E',
            require: 'ui-grid',
            link: function (scope, element, attrs, ctrl) {
                console.log(ctrl);
            }
        };
    }]);