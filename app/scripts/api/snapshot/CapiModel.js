define(function(require){

  var _ = require('underscore');

  var CapiModel = function(attrs, methods){
      _.extend(this, methods);
      this.attributes = _.clone(attrs || {});

      /*
        key: change:prop
        value: Array of functions
      */
      this._eventsMap = {};

      /*Converts all attribute to getters and setters*/
      this._setupAttributes = function () {
      
        _.each(this.attributes, function(value, prop){

          var getter = function () {
            return this.attributes[prop];
          };
          
          var setter = _.bind(function (val) {
            if(this.attributes[prop] !== val){
              this.attributes[prop] = val;
              this.trigger('change:' + prop);
            }
              
          }, this);


            Object.defineProperty(this, prop, {
              get: getter,
              set: setter,
              enumerable: true,
              configurable: true
            });
          
        }, this);
      };
      this._setupAttributes();


      this.set = function(attrName, value){
        this[attrName] = value;
      };

      this.get = function(attrName){
        return this[attrName];
      };

      this.has = function (attrName){
        return this.attributes[attrName] !== undefined;
      };

      this.on = function(eventName, funct){
        var array = this._eventsMap[eventName];

        if(array){
          array.push(funct);
        }
        else{
          this._eventsMap[eventName] = [funct];
        }
      };

      this.trigger = function(eventName){
        if(this._eventsMap[eventName]){
          _.each(this._eventsMap[eventName], function(funct){
            funct.call(this, this.attributes, this);
          }, this);
        }
      };
    };

    return CapiModel;
});