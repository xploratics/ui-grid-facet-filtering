angular
    .module('uiGridFacetFiltering', ['ngMaterial'])
    .directive('uiGridKeyDropdown', [function () {
        return {
            restrict: 'E',
            template: '<md-autocomplete' +
                ' md-items="col in uiGridFacetFiltering.columnDefs"'+
                ' md-item-text="col.displayName"' +
                ' md-selected-item="key"' +
                ' md-selected-item-change="keyChanged(key)"' +
                ' md-min-length="0">' +
                '</md-autocomplete>',
            link: function (scope, element, attrs) {

        //         ng-disabled="ctrl.isDisabled"
        //   md-no-cache="ctrl.noCache"
        //   md-selected-item="ctrl.selectedItem"
        //   md-search-text-change="ctrl.searchTextChange(ctrl.searchText)"
        //   md-search-text="ctrl.searchText"
        //   md-selected-item-change="ctrl.selectedItemChange(item)"
        //   md-items="item in ctrl.querySearch(ctrl.searchText)"
        //   md-item-text="item.display"
        //   md-min-length="0"
        //   placeholder="{{SelectField}}"
            }
        };
    }])
    .directive('uiGridValue', [function () {
        return {
            restrict: 'E',
            template: '<input/>',
            link: function () {

            }
        };
    }])
    .directive('uiGridFacetFilter', [function () {
        return {
            restrict: 'E',
            template: '<div><ui-grid-key-dropdown/><ui-grid-value/></div>',
            link: function (scope, element, attrs) {
                scope.keyChanged = function (key) {
                    if (key)
                        element.find('ui-grid-value input').focus();
                };
            }
        };
    }])
    .directive('uiGridFacetFiltering', [function () {
        return {
            restrict: 'A',
            scope: {
                uiGridFacetFiltering: '=?'
            },
            template: '<div><ui-grid-facet-filter/></div>',
            link: function (scope, element, attrs) {
                scope.$watch('uiGridFacetFiltering', function (newValue) {
                    console.log(newValue);
                });
            }
        };
    }]);