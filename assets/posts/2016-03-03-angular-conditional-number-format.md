---
layout : post
title : Angular Conditional Number Format
topic: angular
categories : blog
permalink : /blog/Angular-Conditional-Number-Format/
comments : true
excerpt: Solution to a little number formatting issue I worked out
seo__desc : directive to format a number depending on type
seo__key : Angular, AngularJS, directives, formatting, Denver CO
---

This is just a bit of code demonstrating the ability to use Angular's inline filtering capability to format numbers depending on another piece of data. I had a scenario where the numbers passed to the view could represent numeric units or monetary units. In order to keep the code lean and reusable I chose the following method. 

The three lines below reside in the directive template file. 

`liability-list.template.html`

```HTML
Available: {{ (t.UnitType == "Dollars") ? (t.UnitsAvailable | currency:'$') : (t.UnitsAvailable | number:0) }}
Used: {{ (t.UnitType == "Dollars") ? (t.UnitsUsed | currency:"$") : (t.UnitsUsed | number:0) }}
Max: {{ (t.UnitType == "Dollars") ? (t.UnitValue | currency:"$") : (t.UnitValue | number:0) }}
```

This is the directive that handles it all. 


`liabilityItem.directive.js`
```JavaScript
(function () {
  'use strict';

  angular
    .module('starter')
    .directive('liabilityItem', liabilityItem);

  function liabilityItem() {
    var directive = {
      scope: {
        t: '=itemData',
      },
      templateUrl: './liability-list.template.html',
      link: link,
      restrict: 'E'
    };
    return directive;
  }
})();
```


Lastly, this is the snippet of code from within the index file of the view.  The 'tier' is an array of objects provided via controller.

`index.html`
```HTML
<liability-Item
  ng-repeat="t in tier"
  item-data="t">
</liability-Item>
```
