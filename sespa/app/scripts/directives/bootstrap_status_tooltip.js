'use strict';

/**
 * @ngdoc directive
 * @name sespaApp.directive:bootstrapStatusTooltip
 * @description
 * # bootstrapStatusTooltip
 */
angular.module('sespaApp')
  .directive('statusTooltip', function () {
    return {
      restrict: 'E',
      scope: {
        statusOutput: '=status'
      },
      link: function (scope, element, attrs) {
        $(element).hover(
          function () {
            // on mouseenter
            // TODO: must these element.context attributes be set *every* time?
            // FIXME: set these three attributes once, outside hover()
            element.context.title = scope.statusOutput.name;
            element.context.alt = scope.statusOutput.name;
            element.context.dataset.placement = 'bottom';
            $(element).tooltip('show');
          }, function () {
            // on mouseleave
            $(element).tooltip('hide');
          }
        );
      },
      templateUrl: 'views/status_image.html'
    };
  });
