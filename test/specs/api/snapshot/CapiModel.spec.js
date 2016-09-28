/**
 * @license
 * Adaptive E-Learning Sim Control API (CAPI).
 *
 * Copyright 2011 Smart Sparrow Pty. Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(function(require) {

    var CapiModel = require('api/snapshot/CapiModel');

    describe('CapiModel', function() {

        var model = null;
        var sandbox = null;

        beforeEach(function() {

            model = new CapiModel({
                test1: 'testValue1',
                test2: 'testValue2'
            }, {
                testFunction1: function() {}
            });
        });

        it('should create model', function() {
            expect(model.attributes.test1).to.equal('testValue1');
            expect(model.attributes.test2).to.equal('testValue2');

            expect(model.testFunction1).to.be.ok();
        });

        it('should get and set values', function() {
            expect(model.get('test1')).to.equal('testValue1');

            model.set('test1', 'newTestValue1');
            expect(model.get('test1')).to.equal('newTestValue1');
        });

        it('should call event hooks', function() {
            var failed1 = true;
            var failed2 = true;

            model.on('change:test1', function() {
                failed1 = false;
            });

            model.on('change:test1', function() {
                failed2 = false;
            });

            var failed3 = false;
            model.on('change:test2', function() {
                failed3 = true;
            });

            model.set('test1', 'test');

            expect(failed1 || failed2).to.equal(false);
            expect(failed3).to.equal(false);

        });

        it('should not call event hooks when removed', function() {
            var count = 0;

            var funct = function() {
                count++;
            };

            model.on('change:test1', funct);
            model.set('test1', 'value1');
            expect(count).to.equal(1);

            model.off('change:test1', funct);
            model.set('test1', 'value2');

            expect(count).to.equal(1);
        });
    });

});
