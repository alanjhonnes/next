
'use strict';

function directiveSettings(tooltipOrPopover) {

  if (typeof tooltipOrPopover === "undefined") {
    tooltipOrPopover = 'tooltip';
  }

  var directiveName = tooltipOrPopover;

  // events to handle show & hide of the tooltip or popover
  var showEvent = 'show-' + directiveName;
  var hideEvent = 'hide-' + directiveName;

  // set up custom triggers
  var directiveConfig = ['$tooltipProvider', function ($tooltipProvider) {
    var trigger = {};
    trigger[showEvent] = hideEvent;
    $tooltipProvider.setTriggers(trigger);
  }];

  var directiveFactory = function() {
    return ['$timeout', function($timeout) {
      var d = {
        name: directiveName,
        restrict: 'A',
        link: function(scope, element, attr) {
          if (angular.isUndefined(attr[directiveName + 'Toggle']))
            return;

          // set the trigger to the custom show trigger
          attr[directiveName + 'Trigger'] = showEvent;

          // redraw the popover when responsive UI moves its source
          var redrawPromise;
          $(window).on('resize', function() {
            if (redrawPromise) $timeout.cancel(redrawPromise);
            redrawPromise = $timeout(function() {
              if (!scope['tt_isOpen']) return;
              element.triggerHandler(hideEvent);
              element.triggerHandler(showEvent);

            }, 100);
          });

          scope.$watch(attr[directiveName + 'Toggle'], function(value) {
            if (value && !scope['tt_isOpen']) {
              // tooltip provider will call scope.$apply, so need to get out of this digest cycle first
              $timeout(function() {
                element.triggerHandler(showEvent);
              });
            }
            else if (!value && scope['tt_isOpen']) {
              $timeout(function() {
                element.triggerHandler(hideEvent);
              });
            }
          });
        }
      };
      return d;
    }];
  };

  var directive = directiveFactory();

  var directiveSettings = {
    directiveName: directiveName,
    directive: directive,
    directiveConfig: directiveConfig
  };

  return directiveSettings;
}

var tooltipToggle = directiveSettings();
var popoverToggle = directiveSettings('popover');


angular.module("nextgroup")
  .directive("popoverHtmlUnsafePopup", function () {
    return {
      restrict: "EA",
      replace: true,
      scope: { title: "@", content: "@", placement: "@", animation: "&", isOpen: "&" },
      templateUrl: "components/popover/popover-html-unsafe-popup.html"
    };
  })

  .directive("popoverHtmlUnsafe", [ "$tooltip", function ($tooltip) {
    return $tooltip("popoverHtmlUnsafe", "popover", "click");
  }])
  .directive(tooltipToggle.directiveName, tooltipToggle.directive)
  .config(tooltipToggle.directiveConfig)
  .directive(popoverToggle.directiveName, popoverToggle.directive)
  .config(popoverToggle.directiveConfig);

;
